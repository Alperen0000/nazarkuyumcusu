'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  // Tek kaynak: telefon + maps
  const phoneDisplay = '+90 (454) 513 15 77';
  const phoneHref = 'tel:+904545131577';
  const directionsHref =
    'https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele';

  // Kendi ürün görsellerin (public içinde olmalı)
  const heroImages = [
    { src: '/products/yuzuk/yuzuk-001.webp', alt: '14 ayar yüzük modeli' },
    { src: '/products/kolye/kolye-001.webp', alt: 'Zarif kolye modeli' },
    { src: '/products/bileklik/bileklik-001.webp', alt: 'Şık bileklik modeli' },
  ];

  useEffect(() => {
    const t = window.setTimeout(() => setIsRevealed(true), 250);
    return () => window.clearTimeout(t);
  }, []);

  const scrollToCollections = () => {
    const el = document.getElementById('koleksiyonlar');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90svh] bg-stone-100 overflow-hidden rounded-bl-[80px] md:rounded-bl-[150px]">
      {/* Background (soft gradient + blur blobs) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/30 to-stone-950/70" />
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[560px] h-[560px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      {/* Product collage (right side) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="hidden md:block absolute right-6 top-24 w-[460px] h-[520px]">
          {/* big card */}
          <div className="absolute right-0 top-0 w-[360px] h-[360px] rounded-3xl overflow-hidden border border-white/25 bg-white/10 backdrop-blur shadow-2xl">
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              fill
              className="object-contain p-6"
              sizes="360px"
              priority
            />
          </div>

          {/* medium card */}
          <div className="absolute left-0 top-24 w-[260px] h-[260px] rounded-3xl overflow-hidden border border-white/25 bg-white/10 backdrop-blur shadow-2xl">
            <Image
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              fill
              className="object-contain p-5"
              sizes="260px"
            />
          </div>

          {/* small card */}
          <div className="absolute right-10 bottom-0 w-[220px] h-[220px] rounded-3xl overflow-hidden border border-white/25 bg-white/10 backdrop-blur shadow-2xl">
            <Image
              src={heroImages[2].src}
              alt={heroImages[2].alt}
              fill
              className="object-contain p-5"
              sizes="220px"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-3 py-24 md:py-32 flex flex-col justify-end min-h-[90svh]">
        <div className={`${isRevealed ? 'reveal-active' : ''}`}>
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-[0.95] mb-6">
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-200">Görele’nin</span>
            </span>
            <br />
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-350">Güvenilir</span>
            </span>
            <br />
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-500">Kuyumcusu</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-6 reveal delay-650">
            14 ve 22 ayar seçkin koleksiyonlar • Özenli işçilik • Güvenli alışveriş deneyimi
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 mb-8 reveal delay-700">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm">
              <Icon name="SparklesIcon" size={16} />
              14 / 22 Ayar
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm">
              <Icon name="ShieldCheckIcon" size={16} />
              Güvenli alışveriş
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm">
              <Icon name="MapPinIcon" size={16} />
              Görele / Giresun
            </span>
          </div>

          {/* CTA (2 adet) */}
          <div className="flex flex-wrap gap-4 reveal delay-750">
            <button
              type="button"
              onClick={scrollToCollections}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-all hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-secondary/40"
            >
              Koleksiyonları Gör
              <Icon name="ArrowDownIcon" size={20} />
            </button>

            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Icon name="MapPinIcon" size={20} />
              Yol Tarifi Al
            </a>
          </div>

          {/* Mobile quick call */}
          <div className="mt-6 reveal delay-800">
            <a
              href={phoneHref}
              className="inline-flex md:hidden items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Icon name="PhoneIcon" size={18} />
              Hemen Ara: {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
