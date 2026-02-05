'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ProductAttribute {
  label: string;
  value: string;
}

interface ProductInfoProps {
  name: string;
  category: string;
  description: string;
  attributes: ProductAttribute[];
}

export default function ProductInfo({
  name,
  category,
  description,
  attributes,
}: ProductInfoProps) {
  const [isCareOpen, setIsCareOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${name} - Nazar Kuyumculuk`;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Product Header */}
      <div>
        <span className="text-sm text-stone-500 uppercase tracking-wider">{category}</span>
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mt-2 mb-4">
          {name}
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed">{description}</p>
      </div>

      {/* Attributes Table */}
      <div className="border border-stone-200 rounded-organic-sm overflow-hidden">
        <table className="w-full">
          <tbody>
            {attributes.map((attr, index) => (
              <tr
                key={`attr_${index}`}
                className={index % 2 === 0 ? 'bg-stone-50' : 'bg-white'}
              >
                <td className="px-6 py-3 text-sm font-bold text-primary">{attr.label}</td>
                <td className="px-6 py-3 text-sm text-stone-600">{attr.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notice */}
      <div className="p-6 bg-secondary/10 border border-secondary/20 rounded-organic-sm">
        <p className="text-sm text-primary flex items-start gap-3">
          <Icon name="InformationCircleIcon" size={20} className="flex-shrink-0 mt-0.5" />
          <span>
            Bu ürünü mağazamızda görmek ve detaylı bilgi almak için bizimle iletişime geçin.
          </span>
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="tel:+904543112233"
          className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-accent transition-all"
        >
          <Icon name="PhoneIcon" size={20} />
          Bizi Arayın
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Icon name="EnvelopeIcon" size={20} />
          İletişim Formu
        </Link>
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        {/* Care Instructions */}
        <div className="border border-stone-200 rounded-organic-sm overflow-hidden">
          <button
            onClick={() => setIsCareOpen(!isCareOpen)}
            className="w-full flex items-center justify-between p-6 bg-white hover:bg-stone-50 transition-colors"
          >
            <span className="font-bold text-primary">Bakım Talimatları</span>
            <Icon
              name="ChevronDownIcon"
              size={20}
              className={`text-stone-600 transition-transform ${isCareOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {isCareOpen && (
            <div className="p-6 pt-0 text-sm text-stone-600 leading-relaxed space-y-2">
              <p>• Mücevherinizi yumuşak bir bezle düzenli olarak silin.</p>
              <p>• Kimyasallardan (parfüm, temizlik ürünleri) uzak tutun.</p>
              <p>• Spor, banyo ve uyku sırasında çıkarın.</p>
              <p>• Ayrı bir kutuda veya kılıfta saklayın.</p>
              <p>• Yılda bir kez profesyonel temizlik yaptırın.</p>
            </div>
          )}
        </div>

        {/* Sizing Guide */}
        <div className="border border-stone-200 rounded-organic-sm overflow-hidden">
          <button
            onClick={() => setIsSizingOpen(!isSizingOpen)}
            className="w-full flex items-center justify-between p-6 bg-white hover:bg-stone-50 transition-colors"
          >
            <span className="font-bold text-primary">Ölçü Rehberi</span>
            <Icon
              name="ChevronDownIcon"
              size={20}
              className={`text-stone-600 transition-transform ${isSizingOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {isSizingOpen && (
            <div className="p-6 pt-0 text-sm text-stone-600 leading-relaxed space-y-2">
              <p>• Yüzük ölçüsü almak için mağazamıza gelebilirsiniz.</p>
              <p>• Evde ölçüm için: İnce bir ip veya kağıt şerit kullanın.</p>
              <p>• Parmağınızı rahatça sarın ve işaretleyin.</p>
              <p>• Uzunluğu cm cinsinden ölçün ve bize bildirin.</p>
              <p>• Yüzük ölçüsü gün içinde değişebilir, akşam ölçün.</p>
            </div>
          )}
        </div>
      </div>

      {/* Social Share */}
      <div>
        <h3 className="text-sm font-bold text-primary mb-3">Paylaş</h3>
        <div className="flex gap-3">
          <button
            onClick={() => handleShare('whatsapp')}
            className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="WhatsApp'ta Paylaş"
          >
            <span className="text-white text-lg">💬</span>
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Facebook'ta Paylaş"
          >
            <span className="text-white text-lg">👥</span>
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Twitter'da Paylaş"
          >
            <span className="text-white text-lg">🐦</span>
          </button>
        </div>
      </div>
    </div>
  );
}