'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface SimilarProduct {
  id: string;
  name: string;
  category: string;
  tag: string;
  image: string;
  alt: string;
}

interface SimilarProductsProps {
  products: SimilarProduct[];
}

export default function SimilarProducts({ products }: SimilarProductsProps) {
  const [visibleProducts, setVisibleProducts] = useState<Set<string>>(new Set());
  const productRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleProducts((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    productRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-12 text-center">
          Benzer Ürünler
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/collection-detail?id=${product.id}`}
              ref={(el) => {
                if (el) productRefs.current.set(product.id, el);
              }}
              data-id={product.id}
              className={`group ${
                visibleProducts.has(product.id) ? 'reveal active' : 'reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-organic-md mb-4">
                <AppImage
                  src={product.image}
                  alt={product.alt}
                  className="w-full aspect-square object-cover grayscale-hover group-hover:scale-105 transition-all duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full">
                  {product.tag}
                </span>
              </div>
              <div>
                <span className="text-xs text-stone-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}