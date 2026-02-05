'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRevealed(true), 300);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-stone-100 overflow-hidden rounded-bl-[80px] md:rounded-bl-[150px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1607063719477-330ed95c9688"
          alt="Altın yüzük ve mücevher koleksiyonu, yakın çekim detay"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Floating Info Card (Desktop) */}
      <div className="hidden md:block absolute top-24 right-2 bg-white p-8 rounded-organic-md w-80 shadow-2xl z-20 animate-slide-in-right">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-lg font-playfair font-bold text-primary leading-tight">
            Mağaza Bilgileri
          </h3>
          <Icon name="SparklesIcon" size={24} className="text-secondary" />
        </div>
        <div className="space-y-4 text-sm text-stone-600">
          <div>
            <span className="block font-bold text-primary mb-1">Çalışma Saatleri</span>
            <p>Pazartesi - Cumartesi: 08:00 - 18:00</p>
          </div>
          <div>
            <span className="block font-bold text-primary mb-1">İletişim</span>
            <p className="flex items-center gap-2">
              <Icon name="PhoneIcon" size={16} className="text-secondary" />
              <a href="tel:+904543112233" className="hover:text-secondary transition-colors">
                +90 (454) 513 15 77
              </a>
            </p>
          </div>
          <div className="pt-2 italic text-stone-500 text-xs">
            "Güven ve kalite, her zaman önceliğimiz."
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-container mx-auto px-3 py-24 md:py-32 flex flex-col justify-end min-h-[90vh]">
        <div className={`${isRevealed ? 'reveal-active' : ''}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-none mb-6">
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-200">Görele'de</span>
            </span>
            <br />
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-300">Işıltı ve</span>
            </span>
            <br />
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-500">Zarafet</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8 reveal delay-700">
            Kaliteli işçilik ve güvenilir hizmetle, özel anlarınıza değer katıyoruz.
          </p>

          <div className="flex flex-wrap gap-4 reveal delay-700">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-all hover:scale-105">

              Koleksiyonları Gör
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <a
              href="tel:+904543112233"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all">

              <Icon name="PhoneIcon" size={20} />
              Bizi Arayın
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all">

              <Icon name="MapPinIcon" size={20} />
              Yol Tarifi Al
            </a>
          </div>
        </div>
      </div>
    </section>);

}