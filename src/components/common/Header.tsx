'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sadece Ana Sayfa kalsın
  const navLinks = [{ id: 'nav_home', label: 'Ana Sayfa', href: '/homepage' }];

  const isActive = (href: string) => pathname === href;

  // Telefon
  const phoneDisplay = '+90 (454) 513 15 77';
  const phoneHref = 'tel:+904545131577';

  // Yol tarifi
  const directionsHref =
    'https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />

      <div className="max-w-container mx-auto px-3 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="SparklesIcon" size={20} className="text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-playfair font-bold text-primary tracking-tight">
                Nazar
              </span>
              <span className="text-xs text-stone-500 -mt-1">Kuyumculuk</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-stone-600 hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Bizi Arayın */}
            <a
              href={phoneHref}
              className="hidden md:flex p-2 hover:bg-stone-100 rounded-full transition-colors"
              aria-label={`Bizi Arayın: ${phoneDisplay}`}
              title={phoneDisplay}
            >
              <Icon name="PhoneIcon" size={20} className="text-stone-600" />
            </a>

            {/* Yol Tarifi */}
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              <Icon name="MapPinIcon" size={16} />
              Yol Tarifi
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Menü"
            >
              <Icon
                name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                className="text-stone-600"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              {/* Sadece Ana Sayfa */}
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-stone-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Bizi Arayın */}
              <a
                href={phoneHref}
                className="flex items-center gap-2 text-base font-medium text-stone-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon name="PhoneIcon" size={20} />
                Bizi Arayın
              </a>

              {/* Yol Tarifi Al */}
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-medium text-stone-600 hover:text-primary transition-colors"
              >
                <Icon name="MapPinIcon" size={20} />
                Yol Tarifi Al
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
