import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ContactForm from './components/ContactForm';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'İletişim - Nazar Kuyumculuk Görele | Bize Ulaşın',
  description: 'Nazar Kuyumculuk ile iletişime geçin. Telefon: +90 (454) 311 22 33. Adres: Cumhuriyet Mahallesi, Atatürk Caddesi, Görele, Giresun. İletişim formu ve yol tarifi.',
  keywords: 'Nazar Kuyumculuk iletişim, Görele kuyumcu telefon, Görele kuyumcu adres, kuyumcu iletişim, Giresun kuyumcu',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-12 bg-stone-50 border-b border-stone-200">
          <div className="max-w-container mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-4">
              <a href="/homepage" className="hover:text-secondary transition-colors">Ana Sayfa</a>
              <Icon name="ChevronRightIcon" size={16} />
              <span className="text-primary">İletişim</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Bize Ulaşın
            </h1>
            <p className="text-lg text-stone-600">
              Sorularınız için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="max-w-container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="reveal">
                <h2 className="text-2xl font-playfair font-bold text-primary mb-6">
                  İletişim Formu
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-6 reveal delay-200">
                <h2 className="text-2xl font-playfair font-bold text-primary mb-6">
                  İletişim Bilgileri
                </h2>

                {/* Phone */}
                <div className="p-6 bg-stone-50 rounded-organic-md border border-stone-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="PhoneIcon" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Telefon</h3>
                      <p className="text-stone-600 mb-2">
                        Bizi arayarak ürünlerimiz hakkında bilgi alabilirsiniz.
                      </p>
                      <a
                        href="tel:+904543112233"
                        className="text-secondary hover:text-accent transition-colors font-medium"
                      >
                        +90 (454) 311 22 33
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 bg-stone-50 rounded-organic-md border border-stone-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="EnvelopeIcon" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">E-posta</h3>
                      <p className="text-stone-600 mb-2">
                        E-posta yoluyla da bize ulaşabilirsiniz.
                      </p>
                      <a
                        href="mailto:info@nazarkuyumculuk.com"
                        className="text-secondary hover:text-accent transition-colors font-medium"
                      >
                        info@nazarkuyumculuk.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-6 bg-stone-50 rounded-organic-md border border-stone-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPinIcon" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Adres</h3>
                      <p className="text-stone-600 leading-relaxed">
                        Cumhuriyet Mahallesi<br />
                        Atatürk Caddesi No: 45<br />
                        28600 Görele / Giresun
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-6 bg-stone-50 rounded-organic-md border border-stone-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="ClockIcon" size={24} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary mb-3">Çalışma Saatleri</h3>
                      <div className="space-y-2 text-sm text-stone-600">
                        <div className="flex justify-between">
                          <span>Pazartesi - Cumartesi:</span>
                          <span className="font-medium text-primary">08:30 - 18:30</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pazar:</span>
                          <span className="font-medium text-primary">Kapalı</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-organic-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">WhatsApp</h3>
                      <p className="text-stone-600 mb-3">
                        Hızlı yanıt için WhatsApp üzerinden yazın.
                      </p>
                      <a
                        href="https://wa.me/905301234567?text=Merhaba,%20Nazar%20Kuyumculuk%20hakkında%20bilgi%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full text-sm font-medium hover:bg-[#20BA5A] transition-all"
                      >
                        WhatsApp ile İletişime Geç
                        <Icon name="ArrowRightIcon" size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="p-6 bg-secondary/10 border border-secondary/20 rounded-organic-md">
                  <p className="text-sm text-primary mb-3">
                    Sık sorulan sorularımıza göz atarak hızlıca cevap bulabilirsiniz.
                  </p>
                  <Link
                    href="/contact#faq"
                    className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors font-medium text-sm"
                  >
                    Sık Sorulan Sorular
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-white">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Mağazamızın Konumu
              </h2>
              <p className="text-lg text-stone-600">
                Görele merkezde, kolayca ulaşabileceğiniz konumdayız
              </p>
            </div>

            <div className="reveal delay-200">
              <div className="relative w-full h-[500px] bg-stone-200 rounded-organic-lg overflow-hidden border border-stone-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.123456789!2d38.5!3d40.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzAwLjAiTiAzOMKwMzAnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nazar Kuyumculuk Konum"
                />
              </div>

              <div className="text-center mt-8">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-all"
                >
                  <Icon name="MapIcon" size={20} />
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
                SSS
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Sık Sorulan Sorular
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 'faq_1',
                  question: 'Mücevher bakımı nasıl yapılır?',
                  answer: 'Mücevherlerinizi yumuşak bir bezle düzenli olarak silin. Kimyasallardan uzak tutun, spor ve banyo sırasında çıkarın. Ayrı kutularda saklayın ve yılda bir kez profesyonel temizlik yaptırın.',
                },
                {
                  id: 'faq_2',
                  question: 'Yüzük ölçüsü nasıl alınır?',
                  answer: 'Yüzük ölçüsü almak için mağazamıza gelebilirsiniz. Evde ölçüm için ince bir ip veya kağıt şerit kullanarak parmağınızı rahatça sarın, işaretleyin ve cm cinsinden ölçün.',
                },
                {
                  id: 'faq_3',
                  question: 'Özel tasarım yaptırabilir miyim?',
                  answer: 'Evet, özel tasarım hizmeti sunuyoruz. Hayalinizdeki mücevheri birlikte tasarlayabilir, malzeme ve taş seçimini yapabilirsiniz. Detaylar için mağazamızı ziyaret edin veya bizi arayın.',
                },
                {
                  id: 'faq_4',
                  question: 'Ürünlerinizin fiyatları nasıl belirleniyor?',
                  answer: 'Fiyatlar, altın gramaj değeri, ayar, taş kalitesi ve işçilik maliyetlerine göre belirlenir. Güncel altın fiyatları için mağazamızı arayabilir veya ziyaret edebilirsiniz.',
                },
                {
                  id: 'faq_5',
                  question: 'Mağazaya gelmeden önce ürün hakkında bilgi alabilir miyim?',
                  answer: 'Evet, telefon, e-posta veya WhatsApp üzerinden ürünlerimiz hakkında detaylı bilgi alabilirsiniz. Fotoğraf paylaşımı ve video görüşme de yapabiliriz.',
                },
                {
                  id: 'faq_6',
                  question: 'Tamir hizmeti veriyor musunuz?',
                  answer: 'Evet, mücevher tamir ve bakım hizmeti veriyoruz. Kırık zincir, kopan küpe, taş değişimi gibi tüm tamir işlemlerini gerçekleştiriyoruz.',
                },
                {
                  id: 'faq_7',
                  question: 'Ürün değişimi yapabiliyor musunuz?',
                  answer: 'Satın aldığınız ürünlerde ölçü veya model değişikliği için mağazamızla iletişime geçin. Ürün durumuna ve satın alma tarihine göre değişim yapılabilir.',
                },
                {
                  id: 'faq_8',
                  question: 'Altın alım-satımı yapıyor musunuz?',
                  answer: 'Evet, altın alım-satımı yapıyoruz. Güncel altın fiyatları üzerinden şeffaf işlem gerçekleştiriyoruz.',
                },
                {
                  id: 'faq_9',
                  question: 'Çeyrek altın ve gram altın satışı var mı?',
                  answer: 'Evet, yatırım amaçlı çeyrek altın, gram altın ve külçe altın satışı yapıyoruz. Güncel fiyatlar için bizi arayın.',
                },
                {
                  id: 'faq_10',
                  question: 'Sertifikalı ürün satıyor musunuz?',
                  answer: 'Evet, taşlı ürünlerimiz sertifikalıdır. Altın ürünlerimizde ayar garantisi ve fatura sunuyoruz.',
                },
              ].map((faq, index) => (
                <details
                  key={faq.id}
                  className="group p-6 bg-white rounded-organic-sm border border-stone-200 reveal"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-bold text-primary pr-4">{faq.question}</span>
                    <Icon
                      name="ChevronDownIcon"
                      size={20}
                      className="text-stone-600 group-open:rotate-180 transition-transform flex-shrink-0"
                    />
                  </summary>
                  <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}