import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const infoLinks = [
    { id: 'info_policies', label: 'Gizlilik Politikası', href: '/policies' },
    { id: 'info_kvkk', label: 'KVKK', href: '/policies#kvkk' },
  ];

  const instagramUrl = 'https://www.instagram.com/nazar_kuyumculuk_gorele/';
  const phoneHref = 'tel:+904545131577';
  const phoneDisplay = '+90 (454) 513 15 77';

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Column 1: Brand & Contact */}
          <div className="col-span-1 md:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="SparklesIcon" size={20} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-playfair font-bold">Nazar</span>
                <span className="text-xs text-stone-300 -mt-1">Kuyumculuk</span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed mb-4">
              Görele&apos;de güvenilir kuyumculuk hizmeti. Kaliteli ürünler ve güler yüzlü hizmet.
            </p>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Icon name="MapPinIcon" size={16} className="text-secondary" />
                <span className="text-stone-300">Görele, Giresun</span>
              </p>

              <p className="flex items-center gap-2">
                <Icon name="PhoneIcon" size={16} className="text-secondary" />
                <a
                  href={phoneHref}
                  className="text-stone-300 hover:text-secondary transition-colors"
                >
                  {phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Bilgi + Instagram */}
          <div className="col-span-1 md:col-span-6 md:flex md:justify-end">
            <div className="w-full md:max-w-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Bilgi</h4>

              <ul className="space-y-2 text-sm mb-6">
                {infoLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-stone-300 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <span className="text-lg">📷</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (sadece telif) */}
      <div className="border-t border-stone-800">
        <div className="max-w-container mx-auto px-6 py-6">
          <div className="flex justify-center items-center text-sm text-stone-400">
            <p>© 2026 Nazar Kuyumculuk. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
