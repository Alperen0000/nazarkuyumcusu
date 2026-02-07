import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nazarkuyumcusu.com';

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/homepage`, lastModified: new Date() },
    { url: `${baseUrl}/policies`, lastModified: new Date() },
  ];
}
