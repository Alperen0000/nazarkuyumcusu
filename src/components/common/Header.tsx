'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import NazarBeadIcon from '@/components/ui/NazarBeadIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Koleksiyonlarımız (desktop dropdown + mobil accordion)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const collectionsRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown dışına tıklayınca kapat (desktop)
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!collectionsRef.current) return;
      if (!collectionsRef.current.contains(e.target as Node)) {
        setIsCollectionsOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const isActive = (href: string) => pathname === href;

  // Telefon
  const phoneDisplay = '+90 (454) 513 15 77';
  const phoneHref = 'tel:+904545131577';

  // Yol tarifi
  const directionsHref =
    'https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele';

  // Nav: Ana Sayfa + Koleksiyonlarımız (dropdown)
  const collectionItems = [
    { id: 'col_yuzuk', label: 'Yüzük', href: '/collections/yuzuk' },
    { id: 'col_kolye', label: 'Kolye', href: '/collections/kolye' },
    { id: 'col_bileklik', label: 'Bileklik', href: '/collections/bileklik' },
  ];

  const isAnyCollectionActive = collectionItems.some((i) => isActive(i.href));

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
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <NazarBeadIcon className="w-10 h-10" />
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
            {/* Ana Sayfa */}
            <Link
              href="/homepage"
              className={`text-sm font-medium transition-colors relative ${
                isActive('/homepage')
                  ? 'text-primary'
                  : 'text-stone-600 hover:text-primary'
              }`}
            >
              Ana Sayfa
              {isActive('/homepage') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary" />
              )}
            </Link>

            {/* Koleksiyonlarımız Dropdown */}
            <div className="relative" ref={collectionsRef}>
              <button
                type="button"
                onClick={() => setIsCollectionsOpen((v) => !v)}
                className={`text-sm font-medium transition-colors relative flex items-center gap-2 ${
                  isCollectionsOpen || isAnyCollectionActive
                    ? 'text-primary'
                    : 'text-stone-600 hover:text-primary'
                }`}
                aria-haspopup="menu"
                aria-expanded={isCollectionsOpen}
              >
                Koleksiyonlarımız
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`transition-transform ${
                    isCollectionsOpen ? 'rotate-180' : 'rotate-0'
                  } text-stone-600`}
                />
                {(isAnyCollectionActive || isCollectionsOpen) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary" />
                )}
              </button>

              {isCollectionsOpen && (
                <div
                  className="absolute left-0 top-[calc(100%+10px)] w-56 rounded-2xl border border-stone-200 bg-white shadow-lg overflow-hidden"
                  role="menu"
                >
                  {collectionItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActive(item.href)
                          ? 'bg-stone-50 text-primary'
                          : 'text-stone-700 hover:bg-stone-50 hover:text-primary'
                      }`}
                      role="menuitem"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsCollectionsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
              {/* Ana Sayfa */}
              <Link
                href="/homepage"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsCollectionsOpen(false);
                }}
                className={`text-base font-medium transition-colors ${
                  isActive('/homepage')
                    ? 'text-primary'
                    : 'text-stone-600 hover:text-primary'
                }`}
              >
                Ana Sayfa
              </Link>

              {/* Mobilde Ana Sayfa altına: Koleksiyonlarımız */}
              <button
                type="button"
                onClick={() => setIsCollectionsOpen((v) => !v)}
                className={`flex items-center justify-between text-base font-medium transition-colors ${
                  isCollectionsOpen || isAnyCollectionActive
                    ? 'text-primary'
                    : 'text-stone-600 hover:text-primary'
                }`}
                aria-expanded={isCollectionsOpen}
              >
                <span>Koleksiyonlarımız</span>
                <Icon
                  name="ChevronDownIcon"
                  size={20}
                  className={`transition-transform ${
                    isCollectionsOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {isCollectionsOpen && (
                <div className="ml-3 pl-3 border-l border-stone-200 flex flex-col gap-2">
                  {collectionItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsCollectionsOpen(false);
                      }}
                      className={`text-base transition-colors ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-stone-600 hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

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
