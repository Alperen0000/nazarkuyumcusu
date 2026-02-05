'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface Product {
  id: string;
  name: string;
  category: string;
  material: string;
  stone: string;
  tag: string;
  price: number;
  image: string;
  alt: string;
}

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
}

export default function ProductGrid({ products, viewMode }: ProductGridProps) {
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
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">🔍</span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Ürün Bulunamadı</h3>
        <p className="text-stone-600">Lütfen farklı filtreler deneyin.</p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :'flex flex-col gap-6'
      }
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          ref={(el) => {
            if (el) productRefs.current.set(product.id, el);
          }}
          data-id={product.id}
          className={`group ${
            visibleProducts.has(product.id) ? 'reveal active' : 'reveal'
          } ${viewMode === 'list' ? 'flex gap-6' : ''}`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          <div className={`relative overflow-hidden rounded-organic-md ${viewMode === 'list' ? 'w-64 flex-shrink-0' : 'mb-4'}`}>
            <AppImage
              src={product.image}
              alt={product.alt}
              className={`w-full object-cover grayscale-hover group-hover:scale-105 transition-all duration-700 ${
                viewMode === 'list' ? 'aspect-square' : 'aspect-square'
              }`}
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full">
              {product.tag}
            </span>
          </div>
          <div className={`flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
            <div className={viewMode === 'list' ? 'mb-4' : 'mb-4'}>
              <span className="text-xs text-stone-500 uppercase tracking-wider">
                {product.category}
              </span>
              <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                {product.name}
              </h3>
              {viewMode === 'list' && (
                <p className="text-sm text-stone-600 mt-2">
                  {product.material} • {product.stone}
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <Link
                href={`/collection-detail?id=${product.id}`}
                className="flex-1 px-4 py-2 border border-stone-300 text-primary rounded-full text-sm font-medium hover:border-secondary hover:text-secondary transition-all text-center"
              >
                Detayı Gör
              </Link>
              <a
                href="tel:+904543112233"
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-secondary hover:text-primary transition-all text-center"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}