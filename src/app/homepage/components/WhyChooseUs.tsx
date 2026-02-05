'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 'feat_secure',
    icon: 'ShieldCheckIcon',
    title: 'Güvenli Alışveriş',
    description: 'Sertifikalı ürünler ve güvenli ödeme seçenekleri',
  },
  {
    id: 'feat_transparent',
    icon: 'EyeIcon',
    title: 'Şeffaf Bilgilendirme',
    description: 'Tüm ürünlerde detaylı ayar bilgisi',
  },
  {
    id: 'feat_service',
    icon: 'FaceSmileIcon',
    title: 'Güler Yüzlü Hizmet',
    description: 'Samimi ve profesyonel müşteri deneyimi',
  },
  {
    id: 'feat_support',
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Satış Sonrası Destek',
    description: 'Tamir, temizlik ve bakım hizmetleri',
  },
];

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Neden Biz?
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Güvenilir Kuyumcu
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Yıllardır Görele'de hizmet veren deneyimimizle yanınızdayız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                if (el) itemRefs.current.set(feature.id, el);
              }}
              data-id={feature.id}
              className={`group p-6 bg-white rounded-organic-sm border border-stone-200 hover:border-secondary transition-all duration-500 hover:shadow-md ${
                visibleItems.has(feature.id) ? 'reveal active' : 'reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Icon name={feature.icon as any} size={28} className="text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}