'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterSidebarProps {
  selectedCategory: string;
  selectedMaterial: string;
  selectedStone: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onMaterialChange: (material: string) => void;
  onStoneChange: (stone: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onReset: () => void;
}

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'alyans', label: 'Alyans' },
  { id: 'yuzuk', label: 'Yüzük' },
  { id: 'kolye', label: 'Kolye' },
  { id: 'bileklik', label: 'Bileklik' },
  { id: 'kupe', label: 'Küpe' },
  { id: 'altin', label: 'Çeyrek/Gram Altın' },
  { id: 'ozel-tasarim', label: 'Özel Tasarım' },
];

const materials = [
  { id: 'all', label: 'Tümü' },
  { id: '14-ayar', label: '14 Ayar' },
  { id: '18-ayar', label: '18 Ayar' },
  { id: '22-ayar', label: '22 Ayar' },
  { id: 'gumus', label: 'Gümüş' },
];

const stones = [
  { id: 'all', label: 'Tümü' },
  { id: 'elmas', label: 'Elmas' },
  { id: 'pirlanta', label: 'Pırlanta' },
  { id: 'zumrut', label: 'Zümrüt' },
  { id: 'yakut', label: 'Yakut' },
  { id: 'safir', label: 'Safir' },
  { id: 'inci', label: 'İnci' },
];

export default function FilterSidebar({
  selectedCategory,
  selectedMaterial,
  selectedStone,
  priceRange,
  onCategoryChange,
  onMaterialChange,
  onStoneChange,
  onPriceRangeChange,
  onReset,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-20 left-6 z-40 flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-lg"
      >
        <Icon name="FunnelIcon" size={20} />
        Filtrele
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen md:h-auto w-80 bg-white border-r border-stone-200 p-6 z-50 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full"
        >
          <Icon name="XMarkIcon" size={24} className="text-stone-600" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-playfair font-bold text-primary">Filtrele</h2>
            <button
              onClick={onReset}
              className="text-sm text-secondary hover:text-accent transition-colors"
            >
              Temizle
            </button>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-bold text-primary mb-3">Kategori</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat.id}
                    checked={selectedCategory === cat.id}
                    onChange={() => onCategoryChange(cat.id)}
                    className="w-4 h-4 text-secondary focus:ring-secondary"
                  />
                  <span className="text-sm text-stone-600 group-hover:text-primary transition-colors">
                    {cat.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div>
            <h3 className="text-sm font-bold text-primary mb-3">Malzeme</h3>
            <div className="space-y-2">
              {materials.map((mat) => (
                <label
                  key={mat.id}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="material"
                    value={mat.id}
                    checked={selectedMaterial === mat.id}
                    onChange={() => onMaterialChange(mat.id)}
                    className="w-4 h-4 text-secondary focus:ring-secondary"
                  />
                  <span className="text-sm text-stone-600 group-hover:text-primary transition-colors">
                    {mat.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Stone Filter */}
          <div>
            <h3 className="text-sm font-bold text-primary mb-3">Taş</h3>
            <div className="space-y-2">
              {stones.map((stone) => (
                <label
                  key={stone.id}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="stone"
                    value={stone.id}
                    checked={selectedStone === stone.id}
                    onChange={() => onStoneChange(stone.id)}
                    className="w-4 h-4 text-secondary focus:ring-secondary"
                  />
                  <span className="text-sm text-stone-600 group-hover:text-primary transition-colors">
                    {stone.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="text-sm font-bold text-primary mb-3">Fiyat Aralığı</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([0, parseInt(e.target.value)])}
                className="w-full accent-secondary"
              />
              <div className="flex items-center justify-between text-sm text-stone-600">
                <span>0 ₺</span>
                <span>{priceRange[1].toLocaleString('tr-TR')} ₺</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
}