import type { Metadata } from 'next';
import '@/styles/index.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nazar Kuyumculuk',
  description: 'Görele/Giresun - Nazar Kuyumculuk',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-foreground antialiased font-inter">
        {children}
      </body>
    </html>
  );
}
