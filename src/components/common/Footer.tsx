import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import NazarBeadIcon from '@/components/ui/NazarBeadIcon';

export default function Footer() {
  const infoLinks = [
    { id: 'info_policies', label: 'Gizlilik Politikası', href: '/policies' },
    { id: 'info_kvkk', label: 'KVKK', href: '/policies#kvkk' },
  ];

  const instagramUrl = 'https://www.instagram.com/nazar_kuyumculuk_gorele/';
  const phoneHref = 'tel:+904545131577';
  const phoneDisplay = '+90 (454) 513 15 77';
  const email = 'nazarkuyum@gmail.com';
  const emailHref = `mailto:${email}`;

  const directionsHref =
    'https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele';

  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />

      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-6">
            <Link href="/homepage" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <NazarBeadIcon className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-playfair font-bold">Nazar</span>
                <span className="text-xs text-stone-300 -mt-1">Kuyumculuk</span>
              </div>
            </Link>

            <p className="mt-4 text-sm text-stone-300 leading-relaxed max-w-md">
              Görele&apos;de güvenilir kuyumculuk hizmeti. Seçili koleksiyonlar, özenli işçilik ve
              güler yüzlü hizmet.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={16} className="text-secondary mt-0.5" />
                <span className="text-stone-300">
                  Hasan Ali Yücel Caddesi Belediye İşhanı Altı No: 3<br />
                  28800 Görele / Giresun
                </span>
              </p>

              <p className="flex items-center gap-2">
                <Icon name="PhoneIcon" size={16} className="text-secondary" />
                <a
                  href={phoneHref}
                  className="text-stone-300 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded"
                >
                  {phoneDisplay}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={16} className="text-secondary" />
                <a
                  href={emailHref}
                  className="text-stone-300 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded"
                >
                  {email}
                </a>
              </p>
            </div>

            {/* Mini CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-primary text-sm font-medium hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
              >
                <Icon name="MapPinIcon" size={16} />
                Yol Tarifi Al
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-700 bg-transparent text-stone-200 text-sm font-medium hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
              >
                <Icon name="PhoneIcon" size={16} />
                Hemen Ara
              </a>
            </div>
          </div>

          {/* Column 2: Links + Social */}
          <div className="col-span-1 md:col-span-6 md:flex md:justify-end">
            <div className="w-full md:max-w-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Bilgi</h4>

              <ul className="space-y-2 text-sm mb-8">
                {infoLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-stone-300 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Sosyal</h4>

              <div className="flex gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 border border-stone-700 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  {/* Eğer Icon setinde Instagram yoksa: CameraIcon iyi durur */}
                  <Icon name="CameraIcon" size={20} />
                </a>
              </div>

              <p className="mt-6 text-xs text-stone-400 leading-relaxed">
                Not: Ürün stok ve fiyat bilgisi mağazada teyit edilir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between text-sm text-stone-400">
            <p>© {year} Nazar Kuyumculuk. Tüm hakları saklıdır.</p>

            <div className="flex items-center gap-2">
              <span className="text-stone-500">Görele / Giresun</span>
              <span className="text-stone-600">•</span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
