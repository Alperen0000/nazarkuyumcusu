import { Metadata } from 'next';
import Header from '@/components/common/Header';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Footer from '@/components/common/Footer';

import HeroSection from './components/HeroSection';
import CategoryCards from './components/CategoryCards';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerReviews from './components/CustomerReviews';
import StoreInfo from './components/StoreInfo';

export const metadata: Metadata = {
  title: "Nazar Kuyumculuk - Görele'de Işıltı ve Zarafet | Güvenilir Kuyumcu",
  description:
    "Görele'de güvenilir kuyumculuk hizmeti. Alyans, yüzük, kolye, bileklik ve küpe çeşitleri. Kaliteli işçilik, şeffaf hizmet. Nazar Kuyumculuk Görele, Giresun.",
  keywords:
    'Görele kuyumcu, Giresun kuyumcu, Nazar Kuyumculuk, alyans, yüzük, kolye, bileklik, küpe, altın, pırlanta, düğün yüzüğü, nişan yüzüğü',
  openGraph: {
    title: 'Nazar Kuyumculuk - Görele Güvenilir Kuyumcu',
    description:
      'Kaliteli mücevher ve altın ürünleri. Görele merkezde hizmetinizdeyiz.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function Homepage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <HeroSection />

        {/* KOLEKSİYONLAR (Hero’daki buton buraya scroll eder) */}
        <section
          id="koleksiyonlar"
          className="scroll-mt-28 md:scroll-mt-32"
        >
          <CategoryCards />
        </section>

        {/* NEDEN BİZ */}
        <WhyChooseUs />

        {/* SOSYAL KANIT */}
        <CustomerReviews />

        {/* MAĞAZA / HARİTA / İLETİŞİM */}
        <StoreInfo />
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
