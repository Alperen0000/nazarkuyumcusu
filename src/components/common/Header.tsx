'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import NazarBeadIcon from '@/components/ui/NazarBeadIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ayrı state'ler (kritik)
  const [isDesktopCollectionsOpen, setIsDesktopCollectionsOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Refs
  const collectionsRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Telefon
  const phoneDisplay = '+90 (454) 513 15 77';
  const phoneHref = 'tel:+904545131577';

  // Yol tarifi
  const directionsHref =
    'https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele';

  // Koleksiyonlar
  const collectionItems = useMemo(
    () => [
      { id: 'col_yuzuk', label: 'Yüzük', href: '/collections/yuzuk' },
      { id: 'col_kolye', label: 'Kolye', href: '/collections/kolye' },
      { id: 'col_bileklik', label: 'Bileklik', href: '/collections/bileklik' },
    ],
    [],
  );

  const isActive = (href: string) => pathname === href;
  const isAnyCollectionActive = useMemo(
    () => collectionItems.some((i) => isActive(i.href)),
    [collectionItems, pathname],
  );

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsDesktopCollectionsOpen(false);
    setIsMobileCollectionsOpen(false);
  };

  // Scroll state (header blur/shadow)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açılınca: body scroll kilidi + ESC ile kapatma + desktop dropdown'u kapat
  useEffect(() => {
    if (!isMenuOpen) return;

    // Mobil açılınca desktop dropdown kesin kapansın
    setIsDesktopCollectionsOpen(false);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);

  // Desktop dropdown dışına tıklayınca kapat
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (collectionsRef.current && !collectionsRef.current.contains(target)) {
        setIsDesktopCollectionsOpen(false);
      }
    };

    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

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
          <Link
            href="/homepage"
            className="flex items-center gap-2 group"
            onClick={() => {
              // logo tıklanınca menü açık kalmasın
              closeAll();
            }}
          >
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
                isActive('/homepage') ? 'text-primary' : 'text-stone-600 hover:text-primary'
              }`}
            >
              Ana Sayfa
              {isActive('/homepage') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary" />
              )}
            </Link>

            {/* Koleksiyonlarımız Dropdown (desktop) */}
            <div className="relative" ref={collectionsRef}>
              <button
                type="button"
                onClick={() => setIsDesktopCollectionsOpen((v) => !v)}
                className={`text-sm font-medium transition-colors relative flex items-center gap-2 rounded-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-secondary/40 ${
                  isDesktopCollectionsOpen || isAnyCollectionActive
                    ? 'text-primary'
                    : 'text-stone-600 hover:text-primary'
                }`}
                aria-haspopup="menu"
                aria-expanded={isDesktopCollectionsOpen}
              >
                Koleksiyonlarımız
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`transition-transform ${
                    isDesktopCollectionsOpen ? 'rotate-180' : 'rotate-0'
                  } text-stone-600`}
                />
                {(isAnyCollectionActive || isDesktopCollectionsOpen) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary" />
                )}
              </button>

              {isDesktopCollectionsOpen && (
                <div
                  className="absolute left-0 top-[calc(100%+10px)] w-56 rounded-2xl border border-stone-200 bg-white/95 backdrop-blur shadow-xl overflow-hidden
                             origin-top-left animate-in fade-in zoom-in-95 duration-150"
                  role="menu"
                >
                  <div className="px-3 pt-3 pb-2">
                    <div className="text-xs text-stone-500">Kategoriler</div>
                  </div>

                  <div className="pb-2">
                    {collectionItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`mx-2 block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                          isActive(item.href)
                            ? 'bg-stone-100 text-primary'
                            : 'text-stone-700 hover:bg-stone-50 hover:text-primary'
                        }`}
                        role="menuitem"
                        onClick={() => {
                          setIsDesktopCollectionsOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Bizi Arayın */}
            <a
              href={phoneHref}
              className="hidden md:flex p-2 hover:bg-stone-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
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
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium hover:bg-accent transition-colors
                         focus:outline-none focus:ring-2 focus:ring-secondary/40"
            >
              <Icon name="MapPinIcon" size={16} />
              Yol Tarifi
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMenuOpen((v) => !v);
                // Mobil menü aç-kap yaparken mobil accordion’u temiz tut
                if (isMenuOpen) setIsMobileCollectionsOpen(false);
              }}
              className="md:hidden p-2 hover:bg-stone-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
              aria-label="Menü"
              aria-expanded={isMenuOpen}
            >
              <Icon
                name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                className="text-stone-600"
              />
            </button>
          </div>
        </div>

        {/* Mobile: Overlay + Drawer */}
        {isMenuOpen && (
          <div className="md:hidden">
            {/* Overlay: tıkla kapat */}
            <button
              type="button"
              aria-label="Menüyü Kapat"
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px]"
              onClick={closeAll}
            />

            {/* Drawer */}
            <div
              ref={mobileMenuRef}
              className="fixed z-50 left-0 right-0 top-[calc(1rem+52px)] mx-3 rounded-2xl border border-stone-200 bg-white shadow-xl overflow-hidden
                         animate-in fade-in slide-in-from-top-2 duration-150"
            >
              <nav className="p-4 relative z-50">
                <div className="flex flex-col gap-3">
                  {/* Ana Sayfa */}
                  <Link
                    href="/homepage"
                    onClick={closeAll}
                    className={`text-base font-medium transition-colors rounded-xl px-3 py-2 ${
                      isActive('/homepage')
                        ? 'text-primary bg-stone-50'
                        : 'text-stone-700 hover:text-primary hover:bg-stone-50'
                    }`}
                  >
                    Ana Sayfa
                  </Link>

                  {/* Koleksiyonlarımız (accordion - mobile) */}
                  <button
                    type="button"
                    onClick={() => setIsMobileCollectionsOpen((v) => !v)}
                    className={`flex items-center justify-between text-base font-medium transition-colors rounded-xl px-3 py-2 ${
                      isMobileCollectionsOpen || isAnyCollectionActive
                        ? 'text-primary bg-stone-50'
                        : 'text-stone-700 hover:text-primary hover:bg-stone-50'
                    }`}
                    aria-expanded={isMobileCollectionsOpen}
                  >
                    <span>Koleksiyonlarımız</span>
                    <Icon
                      name="ChevronDownIcon"
                      size={20}
                      className={`transition-transform ${
                        isMobileCollectionsOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {isMobileCollectionsOpen && (
                    <div className="ml-3 pl-3 border-l border-stone-200 flex flex-col gap-1">
                      {collectionItems.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={closeAll}
                          className={`text-base transition-colors rounded-xl px-3 py-2 ${
                            isActive(item.href)
                              ? 'text-primary bg-stone-50'
                              : 'text-stone-700 hover:text-primary hover:bg-stone-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="h-px bg-stone-200 my-1" />

                  {/* Bizi Arayın */}
                  <a
                    href={phoneHref}
                    className="flex items-center gap-2 text-base font-medium text-stone-700 hover:text-primary hover:bg-stone-50 transition-colors rounded-xl px-3 py-2"
                    onClick={closeAll}
                  >
                    <Icon name="PhoneIcon" size={20} />
                    Bizi Arayın
                  </a>

                  {/* Yol Tarifi Al */}
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base font-medium text-stone-700 hover:text-primary hover:bg-stone-50 transition-colors rounded-xl px-3 py-2"
                    onClick={closeAll}
                  >
                    <Icon name="MapPinIcon" size={20} />
                    Yol Tarifi Al
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
