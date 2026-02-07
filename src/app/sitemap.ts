import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nazarkuyumcusu.com',
      lastModified: new Date(),
    },
    {
      url: 'https://nazarkuyumcusu.com/homepage',
      lastModified: new Date(),
    },
    {
      url: 'https://nazarkuyumcusu.com/policies',
      lastModified: new Date(),
    },
  ];
}
