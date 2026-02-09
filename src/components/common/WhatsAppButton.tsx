'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappMessage = encodeURIComponent(
    'Merhaba, Nazar Kuyumculuk hakkında bilgi almak istiyorum.'
  );

  // +90 530 605 28 00
  const whatsappUrl = `https://wa.me/905306052800?text=${whatsappMessage}`;

  return (
    <div
      className="fixed z-50 right-4 md:right-6"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2
          whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
          bg-white text-stone-700 shadow-lg border border-stone-200
          transition-all duration-300
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}
        `}
      >
        WhatsApp’tan yazın
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="
          relative w-14 h-14 rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-xl
          transition-transform duration-300
          hover:scale-110
          focus:outline-none focus:ring-4 focus:ring-[#25D366]/40
          before:absolute before:inset-0 before:rounded-full
          before:bg-white/20 before:blur-md before:opacity-0 hover:before:opacity-100
          animate-[pulse_3s_ease-in-out_infinite]
        "
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7 relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
        </svg>
      </a>
    </div>
  );
}
