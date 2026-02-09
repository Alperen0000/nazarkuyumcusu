'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, ProductTag } from '@/data/product';
import Icon from '@/components/ui/AppIcon';

type FilterTag = 'all' | ProductTag;

function tagLabel(tag: FilterTag) {
  if (tag === 'all') return 'Hepsi';
  return tag === '14_ayar' ? '14 Ayar' : '22 Ayar';
}

function formatCount(n: number) {
  return `${n} ürün`;
}

function prettyId(id: string) {
  const [cat, num] = id.split('-');
  if (!cat || !num) return id;

  const map: Record<string, string> = {
    yuzuk: 'Yüzük',
    kolye: 'Kolye',
    bileklik: 'Bileklik',
  };

  const label = map[cat] ?? cat;
  const safeNum = String(num).padStart(3, '0');

  return `${label} • ${safeNum}`;
}

export default function KolyePage() {
  const allItems = useMemo(() => PRODUCTS.filter((p) => p.category === 'kolye'), []);

  const [filterTag, setFilterTag] = useState<FilterTag>('all');
  const [selected, setSelected] = useState<string | null>(null);

  const items = useMemo(() => {
    if (filterTag === 'all') return allItems;
    return allItems.filter((p) => p.tag === filterTag);
  }, [allItems, filterTag]);

  const selectedItem = useMemo(
    () => (selected ? allItems.find((p) => p.id === selected) : undefined),
    [allItems, selected],
  );

  const selectedIndex = useMemo(() => {
    if (!selectedItem) return -1;
    return items.findIndex((p) => p.id === selectedItem.id);
  }, [items, selectedItem]);

  const prevItem = selectedIndex > 0 ? items[selectedIndex - 1] : undefined;
  const nextItem =
    selectedIndex >= 0 && selectedIndex < items.length - 1 ? items[selectedIndex + 1] : undefined;

  const goPrev = () => {
    if (prevItem) setSelected(prevItem.id);
  };
  const goNext = () => {
    if (nextItem) setSelected(nextItem.id);
  };

  const chips: { key: FilterTag; label: string }[] = [
    { key: 'all', label: 'Hepsi' },
    { key: '14_ayar', label: '14 Ayar' },
    { key: '22_ayar', label: '22 Ayar' },
  ];

  const closeModal = () => setSelected(null);

  useEffect(() => {
    if (!selectedItem) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem, selectedIndex]);

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
        </div>

        <div className="max-w-container mx-auto px-6 py-10 relative">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                <Link href="/homepage" className="hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
                <span>›</span>
                <span className="text-stone-600">Koleksiyonlar</span>
                <span>›</span>
                <span className="text-primary font-medium">Kolye</span>
              </div>

              <h1 className="mt-3 text-3xl md:text-4xl font-playfair font-bold text-primary tracking-tight">
                Kolye Koleksiyonu
              </h1>

              <p className="mt-2 text-stone-600 leading-relaxed">
                Zarif detaylardan günlük kullanıma… Nazar Kuyumculuk’un seçili kolyelerini burada
                inceleyebilirsiniz.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white text-sm text-stone-700">
                  <Icon name="SparklesIcon" size={16} className="text-stone-500" />
                  {formatCount(items.length)}
                </span>
              </div>
            </div>

            <div className="hidden lg:block w-[320px] shrink-0">
              <div className="rounded-3xl border border-stone-200 bg-white shadow-sm overflow-hidden">
                <div className="p-5">
                  <div className="text-sm text-stone-500">İpucu</div>
                  <div className="mt-1 text-sm text-stone-700 leading-relaxed">
                    Filtrelerden ayar seçerek koleksiyonu hızlıca daraltabilirsiniz.
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-stone-600">
                    <Icon name="ShieldCheckIcon" size={18} className="text-stone-500" />
                    Güvenli alışveriş deneyimi
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-stone-600">
                    <Icon name="MapPinIcon" size={18} className="text-stone-500" />
                    Görele / Giresun
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-sm text-stone-500 mr-2">Filtre:</span>

            {chips.map((c) => {
              const active = filterTag === c.key;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setFilterTag(c.key)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    active
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                  aria-pressed={active}
                >
                  {c.label}
                </button>
              );
            })}

            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-stone-500">Göster:</span>
              <span className="text-sm font-medium text-stone-700">
                {tagLabel(filterTag)} • {formatCount(items.length)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 py-10">
        {items.length === 0 ? (
          <div className="rounded-3xl border border-stone-200 bg-white p-10 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
              <Icon name="MagnifyingGlassIcon" size={22} className="text-stone-500" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-stone-800">Ürün bulunamadı</h2>
            <p className="mt-1 text-stone-600">Farklı bir filtre seçmeyi deneyin.</p>
            <button
              type="button"
              onClick={() => setFilterTag('all')}
              className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-full bg-secondary text-primary font-medium hover:bg-accent transition-colors"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelected(p.id)}
                className="text-left rounded-3xl overflow-hidden border border-stone-200 bg-white hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-secondary/40"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.id}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-stone-200 bg-white/90 backdrop-blur text-stone-700">
                      {p.tag === '14_ayar' ? '14 Ayar' : '22 Ayar'}
                    </span>
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-stone-800">{prettyId(p.id)}</div>
                    <span className="text-xs text-stone-500">Detay</span>
                  </div>
                  <div className="mt-1 text-xs text-stone-500">Görseli büyütmek için tıklayın</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Ürün Detayı"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          <div
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
              <div>
                <div className="text-sm text-stone-500">Kolye</div>
                <div className="text-lg font-semibold text-primary">{prettyId(selectedItem.id)}</div>
                <div className="mt-0.5 text-xs text-stone-500">
                  {selectedIndex >= 0 ? `${selectedIndex + 1} / ${items.length}` : ''}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={!prevItem}
                  className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 ${
                    prevItem
                      ? 'hover:bg-stone-100 text-stone-600'
                      : 'text-stone-300 cursor-not-allowed'
                  }`}
                  aria-label="Önceki"
                  title="Önceki (←)"
                >
                  <Icon name="ChevronLeftIcon" size={22} />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={!nextItem}
                  className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 ${
                    nextItem
                      ? 'hover:bg-stone-100 text-stone-600'
                      : 'text-stone-300 cursor-not-allowed'
                  }`}
                  aria-label="Sonraki"
                  title="Sonraki (→)"
                >
                  <Icon name="ChevronRightIcon" size={22} />
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  aria-label="Kapat"
                  title="Kapat (Esc)"
                >
                  <Icon name="XMarkIcon" size={22} className="text-stone-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square bg-stone-50">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.id}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm border border-stone-200 bg-white text-stone-700">
                    {selectedItem.tag === '14_ayar' ? '14 Ayar' : '22 Ayar'}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm border border-stone-200 bg-white text-stone-700">
                    Koleksiyon: Kolye
                  </span>
                </div>

                <p className="mt-4 text-stone-600 leading-relaxed">
                  Bu ürün görseli bilgilendirme amaçlıdır. Stok ve detaylar için mağazamızla iletişime
                  geçebilirsiniz.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href="tel:+904545131577"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-secondary text-primary font-medium hover:bg-accent transition-colors"
                  >
                    <Icon name="PhoneIcon" size={18} />
                    Hemen Ara
                  </a>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Nazar+Kuyumculuk+Görele"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-stone-200 bg-white text-stone-700 font-medium hover:bg-stone-50 transition-colors"
                  >
                    <Icon name="MapPinIcon" size={18} />
                    Yol Tarifi Al
                  </a>
                </div>

                <div className="mt-6 text-xs text-stone-500">
                  Not: Ürün özellikleri ve fiyat bilgisi mağazadan teyit edilir.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}