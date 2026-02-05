'use client';

import { useState, useMemo } from 'react';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import Icon from '@/components/ui/AppIcon';

// Mock product data
const allProducts = [
{
  id: 'prod_1',
  name: 'Pırlanta Tektaş Yüzük',
  category: 'yuzuk',
  material: '18-ayar',
  stone: 'pirlanta',
  tag: '18 ayar',
  price: 15000,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_188eb08c6-1765769440426.png",
  alt: 'Pırlanta tektaş yüzük, beyaz altın, yakın çekim'
},
{
  id: 'prod_2',
  name: 'Klasik Alyans Seti',
  category: 'alyans',
  material: '14-ayar',
  stone: 'all',
  tag: '14 ayar',
  price: 8000,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1415c37fb-1767080163702.png",
  alt: 'Klasik düz alyans seti, sarı altın, ikili görünüm'
},
{
  id: 'prod_3',
  name: 'Zümrüt Kolye',
  category: 'kolye',
  material: '18-ayar',
  stone: 'zumrut',
  tag: 'taşlı',
  price: 12000,
  image: "https://images.unsplash.com/photo-1708220040835-a4410d163dda",
  alt: 'Zümrüt taşlı kolye, beyaz altın zincir, detay çekim'
},
{
  id: 'prod_4',
  name: 'İnci Küpe',
  category: 'kupe',
  material: '14-ayar',
  stone: 'inci',
  tag: 'minimal',
  price: 5000,
  image: "https://images.unsplash.com/photo-1704637397679-f37e5e0dc429",
  alt: 'İnci küpe, beyaz altın, minimal tasarım'
},
{
  id: 'prod_5',
  name: 'Zincir Bileklik',
  category: 'bileklik',
  material: '22-ayar',
  stone: 'all',
  tag: '22 ayar',
  price: 18000,
  image: "https://images.unsplash.com/photo-1708389828570-b4e3b0c4a680",
  alt: 'Altın zincir bileklik, sarı altın, el üzerinde'
},
{
  id: 'prod_6',
  name: 'Yakut Yüzük',
  category: 'yuzuk',
  material: '18-ayar',
  stone: 'yakut',
  tag: 'özel tasarım',
  price: 20000,
  image: "https://images.unsplash.com/photo-1689775703915-d1dce4e4fc80",
  alt: 'Yakut taşlı yüzük, beyaz altın, klasik dizayn'
},
{
  id: 'prod_7',
  name: 'Çeyrek Altın',
  category: 'altin',
  material: '22-ayar',
  stone: 'all',
  tag: 'yatırım',
  price: 7500,
  image: "https://images.unsplash.com/photo-1644924735973-0ba06d83268e",
  alt: 'Çeyrek altın sikke, parlak yüzey, yakın plan'
},
{
  id: 'prod_8',
  name: 'Elmas Kolye',
  category: 'kolye',
  material: '18-ayar',
  stone: 'elmas',
  tag: '18 ayar',
  price: 25000,
  image: "https://images.unsplash.com/photo-1503044394987-0a39beaf2aa9",
  alt: 'Elmas kolye ucu, beyaz altın, ışık yansıması'
},
{
  id: 'prod_9',
  name: 'Taşlı Alyans',
  category: 'alyans',
  material: '18-ayar',
  stone: 'pirlanta',
  tag: 'taşlı',
  price: 14000,
  image: "https://images.unsplash.com/photo-1689775703915-d1dce4e4fc80",
  alt: 'Taşlı alyans, pırlanta dizili, beyaz altın'
},
{
  id: 'prod_10',
  name: 'Halka Küpe',
  category: 'kupe',
  material: '14-ayar',
  stone: 'all',
  tag: '14 ayar',
  price: 6000,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15e65c529-1767543673816.png",
  alt: 'Altın halka küpe, klasik model, sarı altın'
},
{
  id: 'prod_11',
  name: 'Safir Yüzük',
  category: 'yuzuk',
  material: '18-ayar',
  stone: 'safir',
  tag: 'taşlı',
  price: 18000,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0f3322f-1764724833738.png",
  alt: 'Safir taşlı yüzük, mavi taş, beyaz altın kasa'
},
{
  id: 'prod_12',
  name: 'Gram Altın',
  category: 'altin',
  material: '22-ayar',
  stone: 'all',
  tag: 'yatırım',
  price: 1500,
  image: "https://images.unsplash.com/photo-1488196487283-bd29c2303832",
  alt: 'Gram altın külçe, parlak yüzey, yatırım amaçlı'
}];


export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedStone, setSelectedStone] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    let filtered = allProducts?.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product?.category === selectedCategory;
      const materialMatch = selectedMaterial === 'all' || product?.material === selectedMaterial;
      const stoneMatch = selectedStone === 'all' || product?.stone === selectedStone || product?.stone === 'all';
      const priceMatch = product?.price >= priceRange?.[0] && product?.price <= priceRange?.[1];
      const searchMatch = product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase());

      return categoryMatch && materialMatch && stoneMatch && priceMatch && searchMatch;
    });

    // Sort
    if (sortBy === 'price-asc') {
      filtered = filtered?.sort((a, b) => a?.price - b?.price);
    } else if (sortBy === 'price-desc') {
      filtered = filtered?.sort((a, b) => b?.price - a?.price);
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, selectedStone, priceRange, searchQuery, sortBy]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSelectedStone('all');
    setPriceRange([0, 100000]);
    setSearchQuery('');
    setSortBy('newest');
  };

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
              <span className="text-primary">Koleksiyonlar</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Koleksiyonlarımız
            </h1>
            <p className="text-lg text-stone-600">
              {filteredProducts?.length} ürün bulundu
            </p>
          </div>
        </section>

        {/* Search and Controls */}
        <section className="py-6 bg-white border-b border-stone-200 sticky top-[73px] z-30">
          <div className="max-w-container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full px-4 py-2 pl-10 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary" />

                <Icon name="MagnifyingGlassIcon" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              </div>

              {/* Sort and View */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e?.target?.value)}
                  className="px-4 py-2 border border-stone-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary">

                  <option value="newest">Yeniden Eskiye</option>
                  <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                  <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                </select>

                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-full transition-colors ${
                    viewMode === 'grid' ? 'bg-secondary text-primary' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`
                    }>

                    <Icon name="Squares2X2Icon" size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-full transition-colors ${
                    viewMode === 'list' ? 'bg-secondary text-primary' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`
                    }>

                    <Icon name="Bars3Icon" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-container mx-auto flex">
          <FilterSidebar
            selectedCategory={selectedCategory}
            selectedMaterial={selectedMaterial}
            selectedStone={selectedStone}
            priceRange={priceRange}
            onCategoryChange={setSelectedCategory}
            onMaterialChange={setSelectedMaterial}
            onStoneChange={setSelectedStone}
            onPriceRangeChange={setPriceRange}
            onReset={handleReset} />


          <div className="flex-1 p-6 md:p-12">
            <ProductGrid products={filteredProducts} viewMode={viewMode} />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>);

}