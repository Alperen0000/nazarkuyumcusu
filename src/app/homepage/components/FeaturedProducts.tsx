'use client';

import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Product {
  id: string;
  name: string;
  category: string;
  tag: string;
  image: string;
  alt: string;
}

const featuredProducts: Product[] = [
  {
    id: 'prod_1',
    name: 'Pırlanta Tektaş Yüzük',
    category: 'Yüzük',
    tag: '14 ayar',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_188eb08c6-1765769440426.png',
    alt: 'Pırlanta tektaş yüzük, beyaz altın, yakın çekim',
  },
  {
    id: 'prod_2',
    name: 'Klasik Alyans Seti',
    category: 'Alyans',
    tag: '14 ayar',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1415c37fb-1767080163702.png',
    alt: 'Klasik düz alyans seti, sarı altın, ikili görünüm',
  },
  {
    id: 'prod_3',
    name: 'Zümrüt Kolye',
    category: 'Kolye',
    tag: 'taşlı',
    image: 'https://images.unsplash.com/photo-1708220040835-a4410d163dda',
    alt: 'Zümrüt taşlı kolye, beyaz altın zincir, detay çekim',
  },
  {
    id: 'prod_4',
    name: 'İnci Küpe',
    category: 'Küpe',
    tag: 'minimal',
    image: 'https://images.unsplash.com/photo-1704637397679-f37e5e0dc429',
    alt: 'İnci küpe, beyaz altın, minimal tasarım',
  },
  {
    id: 'prod_5',
    name: 'Zincir Bileklik',
    category: 'Bileklik',
    tag: '22 ayar',
    image: 'https://images.unsplash.com/photo-1708389828570-b4e3b0c4a680',
    alt: 'Altın zincir bileklik, sarı altın, el üzerinde',
  },
  {
    id: 'prod_6',
    name: 'Yakut Yüzük',
    category: 'Yüzük',
    tag: 'özel tasarım',
    image: 'https://images.unsplash.com/photo-1689775703915-d1dce4e4fc80',
    alt: 'Yakut taşlı yüzük, beyaz altın, klasik dizayn',
  },
  {
    id: 'prod_8',
    name: 'Elmas Kolye',
    category: 'Kolye',
    tag: '14 ayar',
    image: 'https://images.unsplash.com/photo-1503044394987-0a39beaf2aa9',
    alt: 'Elmas kolye ucu, beyaz altın, ışık yansıması',
  },
  {
    id: 'prod_9',
    name: 'Taşlı Alyans',
    category: 'Alyans',
    tag: 'taşlı',
    image: 'https://images.unsplash.com/photo-1689775703915-d1dce4e4fc80',
    alt: 'Taşlı alyans, pırlanta dizili, beyaz altın',
  },
  {
    id: 'prod_10',
    name: 'Halka Küpe',
    category: 'Küpe',
    tag: '14 ayar',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_15e65c529-1767543673816.png',
    alt: 'Altın halka küpe, klasik model, sarı altın',
  },

  // ❌ Safir Yüzük (prod_11) kaldırıldı

  {
    id: 'prod_12',
    name: 'Gram Altın',
    category: 'Altın',
    tag: 'yatırım',
    image: 'https://images.unsplash.com/photo-1488196487283-bd29c2303832',
    alt: 'Gram altın külçe, parlak yüzey, yatırım amaçlı',
  },
];

export default function FeaturedProducts() {
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
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Öne Çıkanlar
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Seçkin Ürünler
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            En çok beğenilen ve tercih edilen ürünlerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                if (el) productRefs.current.set(product.id, el);
              }}
              data-id={product.id}
              className={`group ${
                visibleProducts.has(product.id) ? 'reveal active' : 'reveal'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
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

              <div className="mb-4">
                <span className="text-xs text-stone-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
              </div>

              {/* ✅ "Detayı Gör" link/buton kaldırıldı; artık tıklayınca yönlendirme yok */}
            </div>
          ))}
        </div>

        {/* ❌ "Tüm Koleksiyonu Gör" kaldırıldı */}
      </div>
    </section>
  );
}
