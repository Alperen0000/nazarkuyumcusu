'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 'review_1',
    name: 'Ayşe K.',
    rating: 5,
    comment: 'Alyanslarımızı buradan aldık. Hem kaliteli hem de uygun fiyatlı. Çok memnun kaldık.',
    date: 'Ocak 2026',
  },
  {
    id: 'review_2',
    name: 'Mehmet Y.',
    rating: 5,
    comment: 'Görele\'de güvenilir bir kuyumcu. İşçilik çok özenli, tavsiye ederim.',
    date: 'Aralık 2025',
  },
  {
    id: 'review_3',
    name: 'Zeynep A.',
    rating: 5,
    comment: 'Özel tasarım kolyemi yaptırdım. Hayal ettiğimden daha güzel oldu. Teşekkürler.',
    date: 'Kasım 2025',
  },
  {
    id: 'review_4',
    name: 'Ali D.',
    rating: 5,
    comment: 'Satış sonrası hizmetleri de çok iyi. Yüzüğümün tamirini hızlıca yaptılar.',
    date: 'Ekim 2025',
  },
  {
    id: 'review_5',
    name: 'Fatma S.',
    rating: 5,
    comment: 'Güler yüzlü ve samimi hizmet. Ürün çeşitliliği de oldukça fazla.',
    date: 'Eylül 2025',
  },
  {
    id: 'review_6',
    name: 'Hasan B.',
    rating: 5,
    comment: 'Altın alım-satımında şeffaf ve dürüst. Yıllardır buradan alışveriş yapıyorum.',
    date: 'Ağustos 2025',
  },
];

export default function CustomerReviews() {
  const [visibleReviews, setVisibleReviews] = useState<Set<string>>(new Set());
  const reviewRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleReviews((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    reviewRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Müşteri Yorumları
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Binlerce mutlu müşterimizin deneyimleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              ref={(el) => {
                if (el) reviewRefs.current.set(review.id, el);
              }}
              data-id={review.id}
              className={`p-6 bg-white rounded-organic-sm border border-stone-200 ${
                visibleReviews.has(review.id) ? 'reveal active' : 'reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={`star_${review.id}_${i}`} name="StarIcon" size={16} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed mb-4 text-sm">
                "{review.comment}"
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-primary">{review.name}</span>
                <span className="text-stone-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}