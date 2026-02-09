'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  proof?: string; // mini güven satırı
  featured?: boolean;
}

export default function WhyChooseUs() {
  const features: Feature[] = useMemo(
    () => [
      {
        id: 'feat_trust',
        icon: 'ShieldCheckIcon',
        title: 'Güvenilir Hizmet',
        description: 'Ürün ayar bilgisi ve süreç hakkında net, anlaşılır bilgilendirme.',
        proof: 'Şeffaf iletişim',
      },
      {
        id: 'feat_craft',
        icon: 'SparklesIcon',
        title: 'Özenli İşçilik',
        description: 'Seçili modeller, temiz işçilik ve titiz sunumla hazırlanır.',
        proof: 'Seçili koleksiyon',
        featured: true, // ortadaki kartı biraz öne çıkarıyoruz
      },
      {
        id: 'feat_support',
        icon: 'ChatBubbleLeftRightIcon',
        title: 'Her Zaman Yanınızdayız',
        description: 'Sorularınız için hızlı dönüş; bakım/temizlik gibi konularda destek.',
        proof: 'Kolay iletişim',
      },
    ],
    [],
  );

  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Tek kaynak iletişim (Header ile aynı tutalım)
  const phoneDisplay = '+90 (454) 513 15 77';
  const phoneHref = 'tel:+904545131577';
  const directionsHref =
    'https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele';

  useEffect(() => {
    if (itemRefs.current.size === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute('data-id');
          if (!id) return;

          setVisibleItems((prev) => {
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

    itemRefs.current.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-24 bg-stone-50">
      <div className="max-w-container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Neden Biz?
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Güvenilir Kuyumcu Deneyimi
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Görele’de uzun yıllardır, güven ve özenle hizmet veriyoruz.
          </p>
        </div>

        {/* Mobile: snap slider | Desktop: grid */}
        <div
          className={`
            -mx-6 px-6
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3
            [scrollbar-width:none] [-ms-overflow-style:none]
            md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
          `}
        >
          {features.map((feature, index) => {
            const revealed = visibleItems.has(feature.id);

            return (
              <div
                key={feature.id}
                ref={(el) => {
                  if (el) itemRefs.current.set(feature.id, el);
                  else itemRefs.current.delete(feature.id);
                }}
                data-id={feature.id}
                role="article"
                aria-label={feature.title}
                tabIndex={0}
                className={`
                  group relative
                  min-w-[85%] sm:min-w-[60%] md:min-w-0
                  snap-start
                  p-7 md:p-8
                  bg-white
                  rounded-organic-md
                  border border-stone-200
                  transition-all duration-500
                  hover:border-secondary
                  md:hover:shadow-lg md:hover:-translate-y-1
                  focus:outline-none focus:ring-2 focus:ring-secondary/40
                  ${feature.featured ? 'md:shadow-sm md:border-secondary/40' : ''}
                  ${revealed ? 'reveal active' : 'reveal'}
                `}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                {/* top accent */}
                <div
                  className={`
                    absolute left-0 top-0 w-full h-1
                    bg-gradient-to-r from-secondary via-accent to-secondary
                    opacity-0 group-hover:opacity-100 transition-opacity
                  `}
                  aria-hidden="true"
                />

                {/* featured glow (desktop) */}
                {feature.featured && (
                  <div
                    className="hidden md:block pointer-events-none absolute -inset-1 rounded-organic-md bg-secondary/10 blur-xl"
                    aria-hidden="true"
                  />
                )}

                {/* icon */}
                <div className="relative w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon name={feature.icon as any} size={28} className="text-secondary" />
                </div>

                <h3 className="relative text-lg md:text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>

                <p className="relative text-sm text-stone-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* mini proof line */}
                {feature.proof && (
                  <div className="relative mt-5 inline-flex items-center gap-2 text-sm text-stone-600 group-hover:text-primary transition-colors">
                    <Icon
                      name="CheckCircleIcon"
                      size={16}
                      className="text-stone-500 group-hover:text-primary"
                    />
                    {feature.proof}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile hint */}
        <div className="mt-4 text-center text-sm text-stone-500 md:hidden">
          Kaydırarak diğer başlıkları görebilirsiniz.
        </div>

        {/* Bottom CTA (çok iyi dönüşüm verir) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-stone-200 text-stone-700 font-medium hover:bg-stone-50 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
          >
            <Icon name="PhoneIcon" size={18} />
            Ara: {phoneDisplay}
          </a>

          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-primary font-medium hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
          >
            <Icon name="MapPinIcon" size={18} />
            Yol Tarifi Al
          </a>
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
