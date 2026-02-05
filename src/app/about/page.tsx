import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Hakkımızda - Nazar Kuyumculuk Görele | Hikayemiz',
  description: 'Görele\'de yıllardır güvenilir kuyumculuk hizmeti. Yerel bir işletme olarak kaliteli ürünler ve samimi hizmet sunuyoruz. Nazar Kuyumculuk hikayesi.',
  keywords: 'Görele kuyumcu, Nazar Kuyumculuk hakkında, yerel kuyumcu, Giresun kuyumcu, güvenilir kuyumcu'
};

const values = [
{
  id: 'val_trust',
  icon: 'ShieldCheckIcon',
  title: 'Güven',
  description: 'Müşterilerimizle kurduğumuz güven ilişkisi, en değerli sermayemiz.'
},
{
  id: 'val_quality',
  icon: 'SparklesIcon',
  title: 'Kalite',
  description: 'Her üründe özenli işçilik ve sertifikalı malzeme garantisi.'
},
{
  id: 'val_experience',
  icon: 'AcademicCapIcon',
  title: 'Deneyim',
  description: 'Yıllara dayanan tecrübemizle en iyi hizmeti sunuyoruz.'
},
{
  id: 'val_satisfaction',
  icon: 'FaceSmileIcon',
  title: 'Müşteri Memnuniyeti',
  description: 'Mutlu müşteriler, bizim için en büyük başarı.'
},
{
  id: 'val_local',
  icon: 'MapPinIcon',
  title: 'Yerel Hizmet',
  description: 'Görele halkına yakın, ulaşılabilir ve samimi hizmet.'
},
{
  id: 'val_transparency',
  icon: 'EyeIcon',
  title: 'Şeffaflık',
  description: 'Tüm ürünlerimizde açık ve net bilgilendirme.'
}];


const milestones = [
{
  id: 'mile_1',
  year: '1985',
  title: 'Kuruluş',
  description: 'Görele merkezde ilk mağazamızı açtık.'
},
{
  id: 'mile_2',
  year: '1995',
  title: 'Genişleme',
  description: 'Ürün çeşitliliğimizi artırdık ve atölyemizi kurduk.'
},
{
  id: 'mile_3',
  year: '2005',
  title: 'Yenilenme',
  description: 'Modern mağaza konsepti ve özel tasarım hizmeti başladı.'
},
{
  id: 'mile_4',
  year: '2015',
  title: '30. Yıl',
  description: 'Üç kuşaktır süren güven ve kalite geleneği.'
},
{
  id: 'mile_5',
  year: '2026',
  title: 'Dijital Dönüşüm',
  description: 'Online vitrin ile daha geniş kitlelere ulaşıyoruz.'
}];


export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-stone-50 overflow-hidden">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center reveal">
              <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-4 block">
                Hakkımızda
              </span>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6 leading-tight">
                Görele'nin Güvenilir Kuyumcusu
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                Yılların deneyimi ve yerel hizmet anlayışıyla, özel anlarınıza değer katıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="max-w-container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="reveal">
                <div className="relative overflow-hidden rounded-organic-lg">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1d735a769-1770198691597.png"
                    alt="Nazar Kuyumculuk mağaza dış görünüm, Görele merkez"
                    className="w-full aspect-[4/5] object-cover" />

                </div>
              </div>

              {/* Content */}
              <div className="reveal delay-200">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                  Hikayemiz
                </h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Nazar Kuyumculuk, 1985 yılından bu yana Görele'de güvenilir kuyumculuk hizmeti vermektedir. 
                    Üç kuşaktır sürdürdüğümüz aile geleneğimiz, kaliteli ürünler ve samimi hizmet anlayışı üzerine kuruludur.
                  </p>
                  <p>
                    Yerel bir işletme olarak, Görele halkının özel günlerine tanıklık etmekten ve onlara en güzel mücevherleri 
                    sunmaktan gurur duyuyoruz. Her müşterimizle kurduğumuz güven ilişkisi, bizim için en değerli sermaye.
                  </p>
                  <p>
                    Mağazamızda alyans, yüzük, kolye, bileklik ve küpe gibi geniş bir ürün yelpazesi bulunmaktadır. 
                    Ayrıca özel tasarım hizmeti ile hayalinizdeki mücevheri birlikte tasarlayabilir, tamir ve bakım 
                    hizmetlerimizden faydalanabilirsiniz.
                  </p>
                  <p>
                    Kaliteli işçilik, şeffaf bilgilendirme ve müşteri memnuniyeti odaklı hizmet anlayışımızla, 
                    yıllardır Görele'nin tercih edilen kuyumcusuyuz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
                Değerlerimiz
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Bizi Biz Yapan Değerler
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) =>
              <div
                key={value.id}
                className="p-6 bg-stone-50 rounded-organic-sm border border-stone-200 reveal"
                style={{ transitionDelay: `${index * 100}ms` }}>

                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={value.icon as any} size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{value.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
                Tarihçemiz
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Yıllar İçinde Nazar Kuyumculuk
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-12">
              {milestones.map((milestone, index) =>
              <div
                key={milestone.id}
                className="flex gap-8 reveal"
                style={{ transitionDelay: `${index * 100}ms` }}>

                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-playfair font-bold text-secondary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="relative flex-1 pb-12 border-l-2 border-stone-300 pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full -translate-x-[9px]" />
                    <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-stone-600">{milestone.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-24 bg-white">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-sm font-mono uppercase tracking-wider text-secondary mb-2 block">
                İşçilik
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Özenli El İşçiliği
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center reveal">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="PencilIcon" size={32} className="text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Tasarım</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Her ürün, deneyimli ustalarımız tarafından özenle tasarlanır.
                </p>
              </div>

              <div className="text-center reveal delay-100">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="WrenchIcon" size={32} className="text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Üretim</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Geleneksel teknikler ve modern araçlarla kusursuz işçilik.
                </p>
              </div>

              <div className="text-center reveal delay-200">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckBadgeIcon" size={32} className="text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Kalite Kontrol</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Her ürün detaylı kontrolden geçer ve sertifikalandırılır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-container mx-auto px-6 text-center reveal">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Mağazamızı Ziyaret Edin
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Görele merkezde, kolayca ulaşabileceğiniz konumdayız. Ürünlerimizi yakından görmek ve 
              özel tasarım hakkında bilgi almak için bizi ziyaret edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-all">

                <Icon name="MapIcon" size={20} />
                Yol Tarifi Al
              </a>
              <a
                href="tel:+904543112233"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all">

                <Icon name="PhoneIcon" size={20} />
                Bizi Arayın
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>);

}