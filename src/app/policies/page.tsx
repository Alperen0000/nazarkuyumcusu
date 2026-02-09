import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import ScrollSpyToc from './ScrollSpyToc';

export const metadata: Metadata = {
  title: 'Gizlilik ve Politikalar - Nazar Kuyumculuk | KVKK & Çerez Politikası',
  description:
    'Nazar Kuyumculuk gizlilik politikası, KVKK aydınlatma metni ve çerez politikası. Kişisel verilerinizin korunması hakkında bilgi.',
  keywords:
    'gizlilik politikası, KVKK, çerez politikası, kişisel verilerin korunması, Nazar Kuyumculuk',
};

export default function PoliciesPage() {
  const phoneDisplay = '+90 (454) 513 15 77';
  const phoneHref = 'tel:+904545131577';

  const emailDisplay = 'nazarkuyum@gmail.com';
  const emailHref = 'mailto:nazarkuyum@gmail.com';

  const addressDisplay =
    'Hasan Ali Yücel Caddesi Belediye İşhanı Altı No: 3 28800 Görele / Giresun';

  // İçindekiler
  const toc = [
    { id: 'privacy', label: 'Gizlilik Politikası' },
    { id: 'kvkk', label: 'KVKK Aydınlatma Metni' },
    { id: 'cookies', label: 'Çerez Politikası' },
    { id: 'contact-policy', label: 'İletişim' },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="relative py-12 bg-stone-50 border-b border-stone-200 overflow-hidden">
          {/* soft blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="max-w-container mx-auto px-6 relative">
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-4">
              <Link href="/homepage" className="hover:text-secondary transition-colors">
                Ana Sayfa
              </Link>
              <Icon name="ChevronRightIcon" size={16} />
              <span className="text-primary">Gizlilik ve Politikalar</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-3">
              Gizlilik ve Politikalar
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200">
                <Icon name="CalendarDaysIcon" size={16} className="text-stone-500" />
                Son Güncelleme: 4 Şubat 2026
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200">
                <Icon name="ShieldCheckIcon" size={16} className="text-stone-500" />
                Kişisel verilerin korunması
              </span>
            </div>

            {/* Mobile TOC */}
            <div className="mt-6 lg:hidden">
              <details className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
                <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between text-sm font-medium text-stone-700">
                  <span className="flex items-center gap-2">
                    <Icon name="Bars3Icon" size={18} className="text-stone-500" />
                    İçindekiler
                  </span>
                  <Icon name="ChevronDownIcon" size={18} className="text-stone-500" />
                </summary>
                
                <div className="px-4 pb-4 pt-1">
                  <ScrollSpyToc items={toc} />
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-container mx-auto py-12 px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start">
              <div className="rounded-2xl border border-stone-200 bg-white p-4">
                <div className="text-xs font-mono uppercase tracking-wider text-secondary mb-3">
                  İçindekiler
                </div>

                <ScrollSpyToc items={toc} />

                <div className="mt-4 pt-4 border-t border-stone-200">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-secondary text-primary text-sm font-medium hover:bg-accent transition-colors"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Bizi Arayın
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Privacy Policy */}
              <section id="privacy" className="scroll-mt-28 mb-14">
                <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                    Gizlilik Politikası
                  </h2>

                  <div className="space-y-6 text-stone-600 leading-relaxed">
                    <p>
                      Nazar Kuyumculuk olarak, müşterilerimizin gizliliğine önem veriyor ve kişisel
                      verilerinizi korumak için gerekli tüm önlemleri alıyoruz. Bu gizlilik politikası,
                      web sitemizi ziyaret ettiğinizde veya mağazamızla iletişime geçtiğinizde hangi
                      bilgilerin toplandığını ve nasıl kullanıldığını açıklamaktadır.
                    </p>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Toplanan Bilgiler</h3>
                      <p className="mb-2">Web sitemiz üzerinden aşağıdaki bilgiler toplanabilir:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Ad, soyad</li>
                        <li>Telefon numarası</li>
                        <li>E-posta adresi (opsiyonel)</li>
                        <li>İletişim formunda paylaştığınız mesaj içeriği</li>
                        <li>Teknik bilgiler (IP adresi, tarayıcı türü, ziyaret saati)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Bilgilerin Kullanımı</h3>
                      <p className="mb-2">Topladığımız bilgiler şu amaçlarla kullanılır:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Sizinle iletişime geçmek ve sorularınızı yanıtlamak</li>
                        <li>Ürün ve hizmetlerimiz hakkında bilgi vermek</li>
                        <li>Web sitesi deneyiminizi iyileştirmek</li>
                        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Bilgi Güvenliği</h3>
                      <p>
                        Kişisel bilgileriniz, yetkisiz erişim, kayıp, kötüye kullanım veya
                        değiştirilmeye karşı korunmaktadır. Verileriniz güvenli sunucularda saklanır
                        ve yalnızca yetkili personel tarafından erişilebilir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Üçüncü Taraflarla Paylaşım</h3>
                      <p>
                        Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz,
                        satılmaz veya kiralanmaz.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* KVKK */}
              <section id="kvkk" className="scroll-mt-28 mb-14">
                <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                    KVKK Aydınlatma Metni
                  </h2>

                  <div className="space-y-6 text-stone-600 leading-relaxed">
                    <p>
                      6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında, veri
                      sorumlusu sıfatıyla Nazar Kuyumculuk olarak, kişisel verilerinizin işlenmesine
                      ilişkin sizi bilgilendirmek istiyoruz.
                    </p>

                    <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">
                      <h3 className="text-lg font-bold text-primary mb-2">Veri Sorumlusu</h3>
                      <p className="text-sm leading-relaxed">
                        <strong>Nazar Kuyumculuk</strong>
                        <br />
                        {addressDisplay}
                        <br />
                        Telefon: {phoneDisplay}
                        <br />
                        E-posta: {emailDisplay}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">İşlenen Kişisel Veriler</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Kimlik bilgileri (ad, soyad)</li>
                        <li>İletişim bilgileri (telefon, e-posta)</li>
                        <li>Müşteri işlem bilgileri</li>
                        <li>İşlem güvenliği bilgileri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Kişisel Verilerin İşlenme Amacı</h3>
                      <p className="mb-2">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Müşteri ilişkileri yönetimi</li>
                        <li>Ürün ve hizmet satış süreçlerinin yürütülmesi</li>
                        <li>İletişim faaliyetlerinin gerçekleştirilmesi</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        <li>Güvenlik ve denetim faaliyetleri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Kişisel Veri Sahibinin Hakları</h3>
                      <p className="mb-2">KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                        <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini isteme</li>
                        <li>
                          Yapılan işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme
                        </li>
                        <li>
                          Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonuç doğmasına
                          itiraz etme
                        </li>
                        <li>
                          Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Başvuru Yöntemi</h3>
                      <p>
                        Yukarıda belirtilen haklarınızı kullanmak için talebinizi mağazamıza şahsen başvurarak,
                        <a href={emailHref} className="text-secondary hover:text-accent transition-colors">
                          {' '}
                          {emailDisplay}
                        </a>{' '}
                        adresine e-posta göndererek veya{' '}
                        <a href={phoneHref} className="text-secondary hover:text-accent transition-colors">
                          {phoneDisplay}
                        </a>{' '}
                        numaralı telefondan bizi arayarak iletebilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="scroll-mt-28 mb-14">
                <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                    Çerez Politikası
                  </h2>

                  <div className="space-y-6 text-stone-600 leading-relaxed">
                    <p>
                      Web sitemiz, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek amacıyla
                      çerezler kullanmaktadır. Bu politika, çerezlerin nasıl kullanıldığını açıklamaktadır.
                    </p>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Çerez Nedir?</h3>
                      <p>
                        Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır.
                        Çerezler, web sitesinin daha verimli çalışmasını sağlar ve site sahiplerine bilgi sağlar.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Kullanılan Çerez Türleri</h3>

                      <div className="space-y-3">
                        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">
                          <h4 className="font-bold text-primary mb-1">Zorunlu Çerezler</h4>
                          <p>Web sitesinin düzgün çalışması için gereklidir.</p>
                        </div>

                        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">
                          <h4 className="font-bold text-primary mb-1">Performans Çerezleri</h4>
                          <p>Ziyaretçilerin siteyi nasıl kullandığı hakkında bilgi toplar.</p>
                        </div>

                        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">
                          <h4 className="font-bold text-primary mb-1">İşlevsellik Çerezleri</h4>
                          <p>Tercihlerinizi hatırlayarak daha kişiselleştirilmiş bir deneyim sunar.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Çerezlerin Yönetimi</h3>
                      <p>
                        Tarayıcınızın ayarlarından çerezleri kabul etmeme veya mevcut çerezleri silme seçeneğini
                        kullanabilirsiniz. Ancak bu durumda web sitesinin bazı özellikleri düzgün çalışmayabilir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Üçüncü Taraf Çerezler</h3>
                      <p>Web sitemizde Google Analytics gibi üçüncü taraf hizmetler kullanılabilir.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact-policy" className="scroll-mt-28 mb-14">
                <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                    Sorularınız İçin İletişim
                  </h2>

                  <div className="p-6 bg-stone-50 rounded-organic-md border border-stone-200">
                    <p className="text-stone-600 mb-4">
                      Gizlilik politikamız, KVKK aydınlatma metni veya çerez politikası hakkında sorularınız varsa
                      bizimle iletişime geçebilirsiniz.
                    </p>

                    <div className="space-y-3 text-sm">
                      <p className="flex items-center gap-2">
                        <Icon name="BuildingStorefrontIcon" size={18} className="text-secondary" />
                        <strong className="text-primary">Nazar Kuyumculuk</strong>
                      </p>

                      <p className="flex items-start gap-2">
                        <Icon name="MapPinIcon" size={18} className="text-secondary mt-0.5" />
                        <span className="text-stone-700">{addressDisplay}</span>
                      </p>

                      <p className="flex items-center gap-2">
                        <Icon name="PhoneIcon" size={18} className="text-secondary" />
                        <a href={phoneHref} className="text-secondary hover:text-accent transition-colors">
                          {phoneDisplay}
                        </a>
                      </p>

                      <p className="flex items-center gap-2">
                        <Icon name="EnvelopeIcon" size={18} className="text-secondary" />
                        <a href={emailHref} className="text-secondary hover:text-accent transition-colors">
                          {emailDisplay}
                        </a>
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={phoneHref}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-colors text-sm"
                      >
                        Bizi Arayın
                        <Icon name="PhoneIcon" size={16} />
                      </a>

                      <a
                        href={emailHref}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-stone-200 text-stone-700 rounded-full font-medium hover:bg-stone-50 transition-colors text-sm"
                      >
                        E-posta Gönder
                        <Icon name="EnvelopeIcon" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* bottom helper */}
              <div className="text-center">
                <a
                  href="#privacy"
                  className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-secondary transition-colors"
                >
                  <Icon name="ArrowUpIcon" size={16} />
                  Yukarı çık
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
