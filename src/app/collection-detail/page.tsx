import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ImageGallery from './components/ImageGallery';
import ProductInfo from './components/ProductInfo';
import SimilarProducts from './components/SimilarProducts';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ürün Detayı - Nazar Kuyumculuk Görele',
  description:
    "Nazar Kuyumculuk Görele'de ürün detaylarını inceleyin. Kaliteli işçilik ve güvenilir hizmet.",
};

type ImageItem = { id: string; url: string; alt: string };
type AttributeItem = { label: string; value: string };

type ProductDetail = {
  id: string;
  name: string;
  category: string;
  tag: string;
  description: string;
  images: ImageItem[];
  attributes: AttributeItem[];
  cardImage: string;
  cardAlt: string;
};

// ✅ Ürün datası (id’ye göre)
const PRODUCTS: Record<string, ProductDetail> = {
  prod_1: {
    id: 'prod_1',
    name: 'Pırlanta Tektaş Yüzük',
    category: 'Yüzük',
    tag: '14 ayar',
    description:
      'Zarif ve klasik tasarımıyla öne çıkan beyaz altın tektaş yüzük. Özenli işçilik ile özel anlarınıza değer katar.',
    cardImage:
      'https://img.rocket.new/generatedImages/rocket_gen_img_188eb08c6-1765769440426.png',
    cardAlt: 'Pırlanta tektaş yüzük, beyaz altın, yakın çekim',
    images: [
      {
        id: 'img_1',
        url: 'https://img.rocket.new/generatedImages/rocket_gen_img_188eb08c6-1765769440426.png',
        alt: 'Pırlanta tektaş yüzük, beyaz altın, yakın çekim ön görünüm',
      },
      {
        id: 'img_2',
        url: 'https://img.rocket.new/generatedImages/rocket_gen_img_188eb08c6-1765769440426.png',
        alt: 'Pırlanta tektaş yüzük, yan görünüm, taş detayı',
      },
      {
        id: 'img_3',
        url: 'https://img.rocket.new/generatedImages/rocket_gen_img_188eb08c6-1765769440426.png',
        alt: 'Pırlanta tektaş yüzük, el üzerinde görünüm',
      },
      {
        id: 'img_4',
        url: 'https://images.unsplash.com/photo-1735301689635-1345a8091bea',
        alt: 'Pırlanta tektaş yüzük, ışık altında parlaklık detayı',
      },
    ],
    attributes: [
      { label: 'Malzeme', value: 'Beyaz Altın' },
      { label: 'Taş', value: 'Pırlanta' },
      { label: 'İşçilik', value: 'El İşçiliği' },
      { label: 'Kasa Tipi', value: 'Tektaş' },
      { label: 'Renk', value: 'Beyaz' },
    ],
  },

  // Diğer ürünler (Detayı Gör boşa düşmesin diye minimum bilgiler)
  prod_2: {
    id: 'prod_2',
    name: 'Klasik Alyans Seti',
    category: 'Alyans',
    tag: '14 ayar',
    description: 'Klasik tasarım, şık ve zamansız alyans seti.',
    cardImage:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1415c37fb-1767080163702.png',
    cardAlt: 'Klasik düz alyans seti, sarı altın, ikili görünüm',
    images: [
      {
        id: 'img_1',
        url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1415c37fb-1767080163702.png',
        alt: 'Klasik alyans seti, yakın çekim',
      },
    ],
    attributes: [
      { label: 'Malzeme', value: 'Altın' },
      { label: 'Kategori', value: 'Alyans' },
      { label: 'Stil', value: 'Klasik' },
    ],
  },

  prod_3: {
    id: 'prod_3',
    name: 'Zümrüt Kolye',
    category: 'Kolye',
    tag: 'taşlı',
    description: 'Zümrüt taş detaylı şık kolye.',
    cardImage: 'https://images.unsplash.com/photo-1708220040835-a4410d163dda',
    cardAlt: 'Zümrüt taşlı kolye, beyaz altın zincir, detay çekim',
    images: [
      {
        id: 'img_1',
        url: 'https://images.unsplash.com/photo-1708220040835-a4410d163dda',
        alt: 'Zümrüt kolye, detay',
      },
    ],
    attributes: [
      { label: 'Taş', value: 'Zümrüt' },
      { label: 'Kategori', value: 'Kolye' },
    ],
  },

  prod_4: {
    id: 'prod_4',
    name: 'İnci Küpe',
    category: 'Küpe',
    tag: 'minimal',
    description: 'Minimal tasarım inci küpe.',
    cardImage: 'https://images.unsplash.com/photo-1704637397679-f37e5e0dc429',
    cardAlt: 'İnci küpe, beyaz altın, minimal tasarım',
    images: [
      {
        id: 'img_1',
        url: 'https://images.unsplash.com/photo-1704637397679-f37e5e0dc429',
        alt: 'İnci küpe, detay',
      },
    ],
    attributes: [
      { label: 'Taş', value: 'İnci' },
      { label: 'Kategori', value: 'Küpe' },
    ],
  },

  prod_5: {
    id: 'prod_5',
    name: 'Zincir Bileklik',
    category: 'Bileklik',
    tag: '22 ayar',
    description: 'Klasik zincir bileklik.',
    cardImage: 'https://images.unsplash.com/photo-1708389828570-b4e3b0c4a680',
    cardAlt: 'Altın zincir bileklik, sarı altın, el üzerinde',
    images: [
      {
        id: 'img_1',
        url: 'https://images.unsplash.com/photo-1708389828570-b4e3b0c4a680',
        alt: 'Zincir bileklik, detay',
      },
    ],
    attributes: [
      { label: 'Ayar', value: '22 ayar' },
      { label: 'Kategori', value: 'Bileklik' },
    ],
  },

  prod_6: {
    id: 'prod_6',
    name: 'Yakut Yüzük',
    category: 'Yüzük',
    tag: 'özel tasarım',
    description: 'Yakut taş detaylı özel tasarım yüzük.',
    cardImage: 'https://images.unsplash.com/photo-1689775703915-d1dce4e4fc80',
    cardAlt: 'Yakut taşlı yüzük, beyaz altın, klasik dizayn',
    images: [
      {
        id: 'img_1',
        url: 'https://images.unsplash.com/photo-1689775703915-d1dce4e4fc80',
        alt: 'Yakut yüzük, detay',
      },
    ],
    attributes: [
      { label: 'Taş', value: 'Yakut' },
      { label: 'Kategori', value: 'Yüzük' },
    ],
  },

  prod_8: {
    id: 'prod_8',
    name: 'Elmas Kolye',
    category: 'Kolye',
    tag: '14 ayar',
    description: 'Elmas detaylı kolye ucu.',
    cardImage: 'https://images.unsplash.com/photo-1503044394987-0a39beaf2aa9',
    cardAlt: 'Elmas kolye ucu, beyaz altın, ışık yansıması',
    images: [
      {
        id: 'img_1',
        url: 'https://images.unsplash.com/photo-1503044394987-0a39beaf2aa9',
        alt: 'Elmas kolye, detay',
      },
    ],
    attributes: [
      { label: 'Taş', value: 'Elmas' },
      { label: 'Kategori', value: 'Kolye' },
    ],
  },

  prod_9: {
    id: 'prod_9',
    name: 'Taşlı Alyans',
    category: 'Alyans',
    tag: 'taşlı',
    description: 'Taş detaylı alyans.',
    cardImage: 'https://images.unsplash.com/photo-1689775703915-d1dce4e4fc80',
    cardAlt: 'Taşlı alyans, pırlanta dizili, beyaz altın',
    images: [
      {
        id: 'img_1',
        url: 'https://images.unsplash.com/photo-1689775703915-d1dce4e4fc80',
        alt: 'Taşlı alyans, detay',
      },
    ],
    attributes: [
      { label: 'Kategori', value: 'Alyans' },
      { label: 'Stil', value: 'Taşlı' },
    ],
  },

  prod_10: {
    id: 'prod_10',
    name: 'Halka Küpe',
    category: 'Küpe',
    tag: '14 ayar',
    description: 'Klasik halka küpe.',
    cardImage:
      'https://img.rocket.new/generatedImages/rocket_gen_img_15e65c529-1767543673816.png',
    cardAlt: 'Altın halka küpe, klasik model, sarı altın',
    images: [
      {
        id: 'img_1',
        url: 'https://img.rocket.new/generatedImages/rocket_gen_img_15e65c529-1767543673816.png',
        alt: 'Halka küpe, detay',
      },
    ],
    attributes: [
      { label: 'Kategori', value: 'Küpe' },
      { label: 'Stil', value: 'Klasik' },
    ],
  },

  prod_12: {
    id: 'prod_12',
    name: 'Gram Altın',
    category: 'Altın',
    tag: 'yatırım',
    description: 'Yatırım amaçlı gram altın.',
    cardImage: 'https://images.unsplash.com/photo-1488196487283-bd29c2303832',
    cardAlt: 'Gram altın külçe, parlak yüzey, yatırım amaçlı',
    images: [
      {
        id: 'img_1',
        url: 'https://images.unsplash.com/photo-1488196487283-bd29c2303832',
        alt: 'Gram altın, detay',
      },
    ],
    attributes: [
      { label: 'Kategori', value: 'Altın' },
      { label: 'Kullanım', value: 'Yatırım' },
    ],
  },
};

function buildSimilarProducts(currentId: string) {
  const candidates = Object.values(PRODUCTS)
    .filter((p) => p.id !== currentId)
    .slice(0, 4);

  // SimilarProducts componentinin beklediği format:
  return candidates.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.category,
    tag: p.tag,
    image: p.cardImage,
    alt: p.cardAlt,
  }));
}

export default function CollectionDetailPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  const id = searchParams?.id ?? 'prod_1'; // id yoksa prod_1’e düşsün
  const product = PRODUCTS[id];

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <section className="py-20">
            <div className="max-w-container mx-auto px-6">
              <h1 className="text-2xl font-bold text-primary">Ürün bulunamadı</h1>
              <p className="text-stone-600 mt-2">
                Bu id’ye ait ürün yok: <span className="font-mono">{id}</span>
              </p>
              <Link
                href="/homepage"
                className="inline-flex mt-6 px-6 py-3 rounded-full border border-stone-300 text-primary hover:border-secondary hover:text-secondary transition"
              >
                Ana Sayfa
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const similarProducts = buildSimilarProducts(product.id);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb (Collections linkleri kaldırıldı) */}
        <section className="py-6 bg-white border-b border-stone-200">
          <div className="max-w-container mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-stone-500">
              <a href="/homepage" className="hover:text-secondary transition-colors">
                Ana Sayfa
              </a>
              <Icon name="ChevronRightIcon" size={16} />
              <span className="text-primary">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-12 md:py-24">
          <div className="max-w-container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image Gallery */}
              <div className="reveal">
                <ImageGallery images={product.images} />
              </div>

              {/* Product Info */}
              <div className="reveal delay-200">
                <ProductInfo
                  name={product.name}
                  category={product.category}
                  description={product.description}
                  attributes={product.attributes}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products (Safir Yüzük otomatik yok çünkü PRODUCTS’ta yok) */}
        <SimilarProducts products={similarProducts} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
