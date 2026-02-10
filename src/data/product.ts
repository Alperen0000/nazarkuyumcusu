// src/data/product.ts (veya sende neredeyse)

export type ProductCategory = 'yuzuk' | 'kolye' | 'bileklik';
export type ProductTag = '14_ayar' | '22_ayar';

export type Product = {
  id: string;
  category: ProductCategory;
  tag: ProductTag;
  image: string;
};

export const PRODUCTS: Product[] = [
  { id: 'bileklik-001', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-001.webp' },
  { id: 'bileklik-002', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-002.webp' },
  { id: 'bileklik-003', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-003.webp' },
  { id: 'bileklik-004', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-004.webp' },
  { id: 'bileklik-005', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-005.webp' },
  { id: 'bileklik-006', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-006.webp' },
  { id: 'bileklik-007', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-007.webp' },
  { id: 'bileklik-008', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-008.webp' },
  { id: 'bileklik-009', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-009.webp' },
  { id: 'bileklik-010', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-010.webp' },
  { id: 'bileklik-011', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-011.webp' },
  { id: 'bileklik-012', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-012.webp' },
  { id: 'bileklik-013', category: 'bileklik', tag: '22_ayar', image: '/products/bileklik/bileklik-013.webp' },
  { id: 'bileklik-014', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-014.webp' },
  { id: 'bileklik-015', category: 'bileklik', tag: '22_ayar', image: '/products/bileklik/bileklik-015.webp' },
  { id: 'bileklik-016', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-016.webp' },
  { id: 'bileklik-017', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-017.webp' },
  { id: 'bileklik-018', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-018.webp' },
  { id: 'bileklik-019', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-019.webp' },
  { id: 'bileklik-020', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-020.webp' },
  { id: 'bileklik-021', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-021.webp' },
  { id: 'bileklik-022', category: 'bileklik', tag: '14_ayar', image: '/products/bileklik/bileklik-022.webp' },

  { id: 'kolye-001', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-001.webp' },
  { id: 'kolye-002', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-002.webp' },
  { id: 'kolye-003', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-003.webp' },
  { id: 'kolye-004', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-004.webp' },
  { id: 'kolye-005', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-005.webp' },
  { id: 'kolye-006', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-006.webp' },
  { id: 'kolye-008', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-008.webp' },
  { id: 'kolye-007', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-007.webp' },
  { id: 'kolye-009', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-009.webp' },
  { id: 'kolye-010', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-010.webp' },
  { id: 'kolye-011', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-011.webp' },
  { id: 'kolye-012', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-012.webp' },
  { id: 'kolye-013', category: 'kolye', tag: '22_ayar', image: '/products/kolye/kolye-013.webp' },
  { id: 'kolye-014', category: 'kolye', tag: '14_ayar', image: '/products/kolye/kolye-014.webp' },

  { id: 'yuzuk-001', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-001.webp' },
  { id: 'yuzuk-002', category: 'yuzuk', tag: '22_ayar', image: '/products/yuzuk/yuzuk-002.webp' },
  { id: 'yuzuk-003', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-003.webp' },
  { id: 'yuzuk-004', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-004.webp' },
  { id: 'yuzuk-005', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-005.webp' },
  { id: 'yuzuk-006', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-006.webp' },
  { id: 'yuzuk-007', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-007.webp' },
  { id: 'yuzuk-008', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-008.webp' },
  { id: 'yuzuk-009', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-009.webp' },
  { id: 'yuzuk-010', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-010.webp' },
  { id: 'yuzuk-011', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-011.webp' },
  { id: 'yuzuk-012', category: 'yuzuk', tag: '14_ayar', image: '/products/yuzuk/yuzuk-012.webp' },
];
