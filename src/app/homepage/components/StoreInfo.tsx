'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function StoreInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const info = useMemo(() => {
    const addressLine1 = 'Hasan Ali Yücel Caddesi Belediye İşhanı Altı No: 3';
    const addressLine2 = '28800 Görele / Giresun';
    const fullAddress = `${addressLine1}, ${addressLine2}`;

    const phoneDisplay = '+90 (454) 513 15 77';
    const phoneHref = 'tel:+904545131577';

    const email = 'nazarkuyum@gmail.com';
    const emailHref = `mailto:${email}`;

    const directionsHref =
      'https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele';

    const mapsQueryEmbed =
      'https://www.google.com/maps?q=Nazar%20Kuyumculuk%20G%C3%B6rele&output=embed';

    const mapsOpenHref =
      'https://www.google.com/maps/search/?api=1&query=Nazar%20Kuyumculuk%20G%C3%B6rele';

    return {
      addressLine1,
      addressLine2,
      fullAddress,
      phoneDisplay,
      phoneHref,
      email,
      emailHref,
      directionsHref,
      mapsQueryEmbed,
      mapsOpenHref,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(info.fullAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard izni yoksa sessiz geç (istersen burada fallback yaparız)
      setCopied(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16 reveal">
          <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
            Mağaza Bilgileri
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Bizi Ziyaret Edin
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Görele merkezde, kolayca ulaşabileceğiniz konumdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Info */}
          <div className={`space-y-5 ${isVisible ? 'reveal active delay-200' : 'reveal'}`}>
            {/* Adres */}
            <div className="group relative p-6 bg-stone-50 rounded-organic-md border border-stone-200 transition-all duration-500 md:hover:shadow-lg md:hover:-translate-y-1">
              <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Icon name="MapPinIcon" size={24} className="text-secondary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-primary mb-2">Adres</h3>

                    <button
                      type="button"
                      onClick={copyAddress}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition-colors"
                      aria-label="Adresi kopyala"
                    >
                      <Icon name={copied ? 'CheckIcon' : 'ClipboardIcon'} size={14} />
                      {copied ? 'Kopyalandı' : 'Kopyala'}
                    </button>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {info.addressLine1}
                    <br />
                    {info.addressLine2}
                  </p>

                  <a
                    href={info.mapsOpenHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-primary transition-colors"
                  >
                    Haritada aç
                    <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="group relative p-6 bg-stone-50 rounded-organic-md border border-stone-200 transition-all duration-500 md:hover:shadow-lg md:hover:-translate-y-1">
              <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Icon name="ClockIcon" size={24} className="text-secondary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-2">Çalışma Saatleri</h3>
                  <div className="space-y-1 text-sm text-stone-600">
                    <p className="flex justify-between gap-4">
                      <span>Pazartesi - Cumartesi</span>
                      <span className="font-medium">08:00 - 18:00</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Pazar</span>
                      <span className="font-medium">Kapalı</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* İletişim */}
            <div className="group relative p-6 bg-stone-50 rounded-organic-md border border-stone-200 transition-all duration-500 md:hover:shadow-lg md:hover:-translate-y-1">
              <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Icon name="PhoneIcon" size={24} className="text-secondary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-2">İletişim</h3>

                  <div className="space-y-2 text-sm">
                    <a
                      href={info.phoneHref}
                      className="flex items-center gap-2 text-stone-600 hover:text-secondary transition-colors"
                    >
                      <Icon name="PhoneIcon" size={16} className="text-stone-400" />
                      {info.phoneDisplay}
                    </a>

                    <a
                      href={info.emailHref}
                      className="flex items-center gap-2 text-stone-600 hover:text-secondary transition-colors"
                    >
                      <Icon name="EnvelopeIcon" size={16} className="text-stone-400" />
                      {info.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA band */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={info.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-all focus:outline-none focus:ring-2 focus:ring-secondary/40"
              >
                <Icon name="MapPinIcon" size={20} />
                Yol Tarifi Al
              </a>

              <a
                href={info.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white border border-stone-200 text-stone-700 rounded-full font-medium hover:bg-stone-50 transition-all focus:outline-none focus:ring-2 focus:ring-secondary/40"
              >
                <Icon name="PhoneIcon" size={20} />
                Hemen Ara
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className={`${isVisible ? 'reveal active delay-500' : 'reveal'}`}>
            <div className="relative w-full h-[520px] bg-stone-200 rounded-organic-lg overflow-hidden border border-stone-300">
              <iframe
                src={info.mapsQueryEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nazar Kuyumculuk Konum"
              />

              {/* Map overlay button */}
              <div className="absolute top-4 right-4">
                <a
                  href={info.mapsOpenHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 backdrop-blur border border-stone-200 text-sm text-stone-700 hover:bg-white transition-colors"
                >
                  Haritada Aç
                  <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                </a>
              </div>
            </div>

            <div className="mt-4 text-sm text-stone-500">
              İpucu: Navigasyon için “Yol Tarifi Al” butonunu kullanabilirsiniz.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
