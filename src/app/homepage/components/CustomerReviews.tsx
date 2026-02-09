'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  tag?: string; // opsiyonel mini etiket
}

const reviews: Review[] = [
  {
    id: 'review_1',
    name: 'Ayşe K.',
    rating: 5,
    comment:
      'Alyanslarımızı buradan aldık. Hem kaliteli hem de uygun fiyatlı. Çok memnun kaldık.',
    date: 'Ocak 2026',
    tag: 'Alyans',
  },
  {
    id: 'review_2',
    name: 'Mehmet Y.',
    rating: 5,
    comment: "Görele'de güvenilir bir kuyumcu. İşçilik çok özenli, tavsiye ederim.",
    date: 'Aralık 2025',
    tag: 'İşçilik',
  },
  {
    id: 'review_3',
    name: 'Zeynep A.',
    rating: 5,
    comment: 'Özel tasarım kolyemi yaptırdım. Hayal ettiğimden daha güzel oldu. Teşekkürler.',
    date: 'Kasım 2025',
    tag: 'Özel Tasarım',
  },
  {
    id: 'review_4',
    name: 'Ali D.',
    rating: 5,
    comment: 'Satış sonrası hizmetleri de çok iyi. Yüzüğümün tamirini hızlıca yaptılar.',
    date: 'Ekim 2025',
    tag: 'Destek',
  },
  {
    id: 'review_5',
    name: 'Fatma S.',
    rating: 5,
    comment: 'Güler yüzlü ve samimi hizmet. Ürün çeşitliliği de oldukça fazla.',
    date: 'Eylül 2025',
    tag: 'Hizmet',
  },
  {
    id: 'review_6',
    name: 'Hasan B.',
    rating: 5,
    comment: 'Altın alım-satımında şeffaf ve dürüst. Yıllardır buradan alışveriş yapıyorum.',
    date: 'Ağustos 2025',
    tag: 'Güven',
  },
];

export default function CustomerReviews() {
  const [visibleReviews, setVisibleReviews] = useState<Set<string>>(new Set());
  const reviewRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / reviews.length) * 10) / 10;
  }, []);

  useEffect(() => {
    if (reviewRefs.current.size === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute('data-id');
          if (!id) return;

          setVisibleReviews((prev) => {
            if (prev.has(id)) return prev;
            const next = new Set(prev);
            next.add(id);
            return next;
          });

          observer.unobserve(entry.target); // performans
        });
      },
      { threshold: 0.15 },
    );

    reviewRefs.current.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-24 bg-stone-50">
      <div className="max-w-container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Müşteri Yorumları
          </span>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>

          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Nazar Kuyumculuk’ta alışveriş yapan müşterilerimizin paylaştığı deneyimlerden seçmeler.
          </p>

          {/* Mini rating özeti */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-stone-600">
            <div className="inline-flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={`avg_star_${i}`}
                  name="StarIcon"
                  size={16}
                  className={`${
                    i < Math.round(avgRating) ? 'text-secondary fill-secondary' : 'text-stone-300'
                  }`}
                />
              ))}
            </div>

            <span className="font-medium text-stone-700">{avgRating.toFixed(1)} / 5.0</span>
            <span className="text-stone-400">•</span>
            <span>{reviews.length} yorum</span>

            {/* Opsiyonel: “tamamı” aksiyonu (şimdilik #store-info’ya da bağlayabiliriz) */}
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="hidden sm:inline text-stone-500">
              (Yorumlar örnek amaçlıdır)
            </span>
          </div>
        </div>

        {/* Mobile: snap slider | Desktop: grid */}
        <div className="-mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [scrollbar-width:none] [-ms-overflow-style:none] md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible">
          {reviews.map((review, index) => {
            const revealed = visibleReviews.has(review.id);

            return (
              <div
                key={review.id}
                ref={(el) => {
                  if (el) reviewRefs.current.set(review.id, el);
                  else reviewRefs.current.delete(review.id);
                }}
                data-id={review.id}
                role="article"
                aria-label={`${review.name} yorumu`}
                tabIndex={0}
                className={`
                  group relative
                  min-w-[85%] sm:min-w-[60%] md:min-w-0
                  snap-start
                  p-7
                  bg-white
                  rounded-organic-md
                  border border-stone-200
                  transition-all duration-500
                  md:hover:shadow-lg md:hover:-translate-y-1
                  focus:outline-none focus:ring-2 focus:ring-secondary/40
                  ${revealed ? 'reveal active' : 'reveal'}
                `}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* accent line */}
                <div
                  className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />

                {/* top row */}
                <div className="flex items-start justify-between gap-3">
                  {/* Stars: full 5 */}
                  <div className="inline-flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={`star_${review.id}_${i}`}
                        name="StarIcon"
                        size={16}
                        className={`${
                          i < review.rating ? 'text-secondary fill-secondary' : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="ChatBubbleLeftRightIcon" size={18} className="text-secondary" />
                  </div>
                </div>

                {/* Optional tag */}
                {review.tag && (
                  <div className="mt-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-stone-200 bg-stone-50 text-stone-700">
                      {review.tag}
                    </span>
                  </div>
                )}

                <p className="mt-4 text-stone-700 leading-relaxed text-sm">
                  “{review.comment}”
                </p>

                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="font-bold text-primary">{review.name}</span>
                  <span className="text-stone-500">{review.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile hint */}
        <div className="mt-4 text-center text-sm text-stone-500 md:hidden">
          Kaydırarak diğer yorumları görebilirsiniz.
        </div>
      </div>

      {/* webkit scrollbar hide */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
