import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <h1 className="text-3xl font-semibold mb-2">Sayfa bulunamadı</h1>
      <p className="text-muted-foreground mb-6 text-center max-w-md">
        Aradığınız sayfa taşınmış olabilir veya yanlış bir adres girdiniz.
      </p>

      <Link
        href="/homepage"
        className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
      >
        Ana sayfaya dön
      </Link>
    </main>
  );
}
