'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { PRODUCTS } from '@/data/product';

interface Category {
  id: 'yuzuk' | 'kolye' | 'bileklik';
  name: string;
  icon: string;
  href: string;
  description: string;
  badge?: string;
}

const categories: Category[] = [
  {
    id: 'yuzuk',
    name: 'Yüzük',
    icon: 'SparklesIcon',
    href: '/collections/yuzuk',
    description: 'Taşlı ve sade yüzükler',
    badge: 'Popüler',
  },
  {
    id: 'kolye',
    name: 'Kolye',
    icon: 'StarIcon',
    href: '/collections/kolye',
    description: 'Zarif kolye modelleri',
    badge: 'Zarif',
  },
  {
    id: 'bileklik',
    name: 'Bileklik',
    icon: 'LinkIcon',
    href: '/collections/bileklik',
    description: 'Şık bileklik çeşitleri',
    badge: 'Klasik',
  },
];

export default function CategoryCards() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  // Link ref’i: Next Link (App Router) anchor’a forwardRef yapar
  const cardRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Ürün sayıları otomatik
  const counts = useMemo(() => {
    const c = { yuzuk: 0, kolye: 0, bileklik: 0 };
    for (const p of PRODUCTS) {
      if (p.category === 'yuzuk') c.yuzuk += 1;
      if (p.category === 'kolye') c.kolye += 1;
      if (p.category === 'bileklik') c.bileklik += 1;
    }
    return c;
  }, []);

  useEffect(() => {
    if (cardRefs.current.size === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('data-id');
          if (!id) return;

          setVisibleCards((prev) => {
            if (prev.has(id)) return prev;
            const next = new Set(prev);
            next.add(id);
            return next;
          });

          // bir kere görünce gözlemlemeyi bırak -> daha az iş
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    cardRefs.current.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);
  return (
    <section id="koleksiyonlar" className="py-20 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-container mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-10 md:mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Kategoriler
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Koleksiyonlarımız
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Seçili yüzük, kolye ve bileklik modellerini keşfedin.
          </p>
        </div>

        {/* Mobil: yatay snap / Desktop: grid */}
        <div
          className={`
            -mx-6 px-6
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3
            [scrollbar-width:none] [-ms-overflow-style:none]
            md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible
          `}
        >
          {categories.map((category, index) => {
            const count =
              category.id === 'yuzuk'
                ? counts.yuzuk
                : category.id === 'kolye'
                  ? counts.kolye
                  : counts.bileklik;

            const revealed = visibleCards.has(category.id);

            return (
              <Link
                key={category.id}
                href={category.href}
                ref={(el) => {
                  if (el) cardRefs.current.set(category.id, el);
                  else cardRefs.current.delete(category.id);
                }}
                data-id={category.id}
                className={`
                  group relative block
                  min-w-[85%] sm:min-w-[60%] md:min-w-0
                  snap-start
                  p-7 md:p-8
                  bg-stone-50
                  rounded-organic-md
                  border border-stone-200
                  hover:border-secondary hover:bg-white
                  transition-all duration-500
                  md:hover:shadow-lg md:hover:-translate-y-1
                  focus:outline-none focus:ring-2 focus:ring-secondary/40
                  ${revealed ? 'reveal active' : 'reveal'}
                `}
                style={{ transitionDelay: `${index * 90}ms` }}
                aria-label={`${category.name} koleksiyonunu görüntüle`}
              >
                {/* Üst çizgi (premium detay) */}
                <div
                  className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary
                             opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />

                {/* Badge */}
                {category.badge && (
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-stone-200 bg-white/80 backdrop-blur text-stone-700">
                      {category.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon name={category.icon as any} size={24} className="text-secondary" />
                </div>

                {/* Title + Count */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-playfair font-bold text-primary group-hover:text-secondary transition-colors">
                    {category.name}
                  </h3>

                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-stone-200 bg-white text-stone-700">
                    {count} ürün
                  </span>
                </div>

                <p className="text-sm text-stone-600 mt-2">{category.description}</p>

                {/* CTA hint */}
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-stone-600 group-hover:text-primary transition-colors">
                  Koleksiyona git
                  <Icon
                    name="ArrowRightIcon"
                    size={16}
                    className="text-stone-500 group-hover:text-primary"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobil ipucu */}
        <div className="mt-4 text-center text-sm text-stone-500 md:hidden">
          Kaydırarak diğer koleksiyonları görebilirsiniz.
        </div>
      </div>

      {/* scrollbar gizleme (webkit) */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}