import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';

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

  const addressDisplay = 'Hasan Ali Yücel Caddesi Belediye İşhanı Altı No: 3 Görele/Giresun';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-12 bg-stone-50 border-b border-stone-200">
          <div className="max-w-container mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-4">
              <a href="/homepage" className="hover:text-secondary transition-colors">
                Ana Sayfa
              </a>
              <Icon name="ChevronRightIcon" size={16} />
              <span className="text-primary">Gizlilik ve Politikalar</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Gizlilik ve Politikalar
            </h1>

            <p className="text-sm text-stone-500">Son Güncelleme: 4 Şubat 2026</p>
          </div>
        </section>

        <div className="max-w-container mx-auto py-12 px-6 flex gap-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start">
            <nav className="space-y-2">
              <a
                href="#privacy"
                className="block px-4 py-2 text-sm font-medium text-stone-600 hover:text-secondary hover:bg-stone-50 rounded-lg transition-colors"
              >
                Gizlilik Politikası
              </a>
              <a
                href="#kvkk"
                className="block px-4 py-2 text-sm font-medium text-stone-600 hover:text-secondary hover:bg-stone-50 rounded-lg transition-colors"
              >
                KVKK Aydınlatma Metni
              </a>
              <a
                href="#cookies"
                className="block px-4 py-2 text-sm font-medium text-stone-600 hover:text-secondary hover:bg-stone-50 rounded-lg transition-colors"
              >
                Çerez Politikası
              </a>
              <a
                href="#contact-policy"
                className="block px-4 py-2 text-sm font-medium text-stone-600 hover:text-secondary hover:bg-stone-50 rounded-lg transition-colors"
              >
                İletişim
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* Privacy Policy */}
            <section id="privacy" className="mb-16">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-6 border-b-2 border-secondary pb-2 inline-block">
                Gizlilik Politikası
              </h2>

              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Nazar Kuyumculuk olarak, müşterilerimizin gizliliğine önem veriyor ve kişisel verilerinizi
                  korumak için gerekli tüm önlemleri alıyoruz. Bu gizlilik politikası, web sitemizi ziyaret
                  ettiğinizde veya mağazamızla iletişime geçtiğinizde hangi bilgilerin toplandığını ve nasıl
                  kullanıldığını açıklamaktadır.
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
                    Kişisel bilgileriniz, yetkisiz erişim, kayıp, kötüye kullanım veya değiştirilmeye karşı
                    korunmaktadır. Verileriniz güvenli sunucularda saklanır ve yalnızca yetkili personel
                    tarafından erişilebilir.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Üçüncü Taraflarla Paylaşım</h3>
                  <p>
                    Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz, satılmaz
                    veya kiralanmaz.
                  </p>
                </div>
              </div>
            </section>

            {/* KVKK */}
            <section id="kvkk" className="mb-16">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-6 border-b-2 border-secondary pb-2 inline-block">
                KVKK Aydınlatma Metni
              </h2>

              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında, veri sorumlusu
                  sıfatıyla Nazar Kuyumculuk olarak, kişisel verilerinizin işlenmesine ilişkin sizi
                  bilgilendirmek istiyoruz.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Veri Sorumlusu</h3>
                  <p>
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
                    <li>Yapılan işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
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
            </section>

            {/* Cookies */}
            <section id="cookies" className="mb-16">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-6 border-b-2 border-secondary pb-2 inline-block">
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
                    Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet, telefon)
                    kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını sağlar
                    ve site sahiplerine bilgi sağlar.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Kullanılan Çerez Türleri</h3>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-primary mb-1">Zorunlu Çerezler</h4>
                      <p>Web sitesinin düzgün çalışması için gereklidir.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary mb-1">Performans Çerezleri</h4>
                      <p>Ziyaretçilerin siteyi nasıl kullandığı hakkında bilgi toplar.</p>
                    </div>

                    <div>
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
            </section>

            {/* Contact Section */}
            <section id="contact-policy" className="mb-16">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-6 border-b-2 border-secondary pb-2 inline-block">
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

                  <p className="flex items-center gap-2">
                    <Icon name="MapPinIcon" size={18} className="text-secondary" />
                    {addressDisplay}
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

                <div className="mt-6">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-all text-sm"
                  >
                    Bizi Arayın
                    <Icon name="PhoneIcon" size={16} />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
