'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function StoreInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Mağaza Bilgileri
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Bizi Ziyaret Edin
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Görele merkezde, kolayca ulaşabileceğiniz konumdayız
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? 'reveal active delay-200' : 'reveal'}`}>
            <div className="p-6 bg-stone-50 rounded-organic-md border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Adres</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Hasan Ali Yücel Caddesi Belediye İşhanı Altı No: 3<br />
                    28800 Görele / Giresun
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-stone-50 rounded-organic-md border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="ClockIcon" size={24} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-2">Çalışma Saatleri</h3>
                  <div className="space-y-1 text-sm text-stone-600">
                    <p className="flex justify-between">
                      <span>Pazartesi - Cumartesi:</span>
                      <span className="font-medium">08:00 - 18:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Pazar:</span>
                      <span className="font-medium">Kapalı</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-stone-50 rounded-organic-md border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="PhoneIcon" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">İletişim</h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <a href="tel:+904545131577" className="text-stone-600 hover:text-secondary transition-colors">
                        +90 (454) 513 15 77
                      </a>
                    </p>
                    <p>
                      <a href="mailto:nazarkuyum@gmail.com" className="text-stone-600 hover:text-secondary transition-colors">
                        nazarkuyum@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-all"
            >
              <Icon name="MapIcon" size={20} />
              Yol Tarifi Al
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className={`${isVisible ? 'reveal active delay-500' : 'reveal'}`}>
            <div className="relative w-full h-[500px] bg-stone-200 rounded-organic-lg overflow-hidden border border-stone-300">
              <iframe
                src="https://www.google.com/maps?q=Nazar%20Kuyumculuk%20G%C3%B6rele&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nazar Kuyumculuk Konum"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}