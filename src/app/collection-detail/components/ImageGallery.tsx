'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ImageGalleryProps {
  images: Array<{ id: string; url: string; alt: string }>;
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div
          className="relative aspect-square overflow-hidden rounded-organic-lg cursor-zoom-in group"
          onClick={() => setIsLightboxOpen(true)}
        >
          <AppImage
            src={images[selectedImage].url}
            alt={images[selectedImage].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <Icon name="MagnifyingGlassPlusIcon" size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all ${
                selectedImage === index
                  ? 'ring-2 ring-secondary' :'opacity-60 hover:opacity-100'
              }`}
            >
              <AppImage
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <Icon name="XMarkIcon" size={24} className="text-white" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <Icon name="ChevronLeftIcon" size={32} className="text-white" />
          </button>

          <div className="max-w-4xl max-h-[90vh]">
            <AppImage
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <Icon name="ChevronRightIcon" size={32} className="text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}