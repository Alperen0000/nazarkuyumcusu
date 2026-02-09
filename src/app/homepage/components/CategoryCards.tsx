'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Category {
  id: string;
  name: string;
  icon: string;
  href: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 'yuzuk',
    name: 'Yüzük',
    icon: 'SparklesIcon',
    href: '/collections/yuzuk',
    description: 'Taşlı ve sade yüzükler',
  },
  {
    id: 'kolye',
    name: 'Kolye',
    icon: 'StarIcon',
    href: '/collections/kolye',
    description: 'Zarif kolye modelleri',
  },
  {
    id: 'bileklik',
    name: 'Bileklik',
    icon: 'LinkIcon',
    href: '/collections/bileklik',
    description: 'Şık bileklik çeşitleri',
  },
];

export default function CategoryCards() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleCards((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Kategoriler
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Koleksiyonlarımız
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Her zevke ve bütçeye uygun geniş ürün yelpazesi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              ref={(el) => {
                if (el) cardRefs.current.set(category.id, el);
              }}
              data-id={category.id}
              className={`group block p-8 bg-stone-50 rounded-organic-md border border-stone-200 hover:border-secondary hover:bg-white transition-all duration-500 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary/40 ${
                visibleCards.has(category.id) ? 'reveal active' : 'reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              aria-label={`${category.name} koleksiyonunu görüntüle`}
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Icon name={category.icon as any} size={24} className="text-secondary" />
              </div>

              <h3 className="text-xl font-playfair font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {category.name}
              </h3>

              <p className="text-sm text-stone-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
