export interface Product {
  id: string
  name: string
  category: 'hoodies' | 'tracksuits' | 'tshirts' | 'caps'
  price: number
  currency: 'AZN' | 'USD'
  colors: { name: string; hex: string; image: string }[]
  sizes: string[]
  description: string
  material: string
  modelFile?: string
  images: string[]
  lookNumber?: string
}

export const products: Product[] = [
  {
    id: 'buta-hoodie-001',
    name: 'BUTA HOODIE',
    category: 'hoodies',
    price: 245,
    currency: 'AZN',
    colors: [
      { name: 'BLACK', hex: '#1a1a1a', image: '/images/Gemini_Generated_Image_g67fh8g67fh8g67f.webp' },
      { name: 'CREAM', hex: '#F5F0E8', image: '/images/Gemini_Generated_Image_nbbu8fnbbu8fnbbu.webp' },
      { name: 'DARK OLIVE', hex: '#4a4a35', image: '/images/Gemini_Generated_Image_g67fh8g67fh8g67f.webp' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Crafted from 500GSM heavy French Terry. Featuring our signature Phoenix geometric embroidery inspired by ancient Azerbaijani "Buta" motifs.',
    material: '500GSM Cotton Fleece',
    modelFile: '/models/hoodie.glb',
    images: [
      '/images/Gemini_Generated_Image_g67fh8g67fh8g67f.webp',
      '/images/Gemini_Generated_Image_nbbu8fnbbu8fnbbu.webp',
    ],
    lookNumber: 'LOOK 01 / OBSIDIAN',
  },
  {
    id: 'buta-tracksuit-001',
    name: 'BUTA TRACKSUIT',
    category: 'tracksuits',
    price: 385,
    currency: 'AZN',
    colors: [
      { name: 'CREAM', hex: '#F5F0E8', image: '/images/Gemini_Generated_Image_nbbu8fnbbu8fnbbu.webp' },
      { name: 'BLACK', hex: '#1a1a1a', image: '/images/Gemini_Generated_Image_g67fh8g67fh8g67f.webp' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Full matching set. 500GSM hoodie + heavyweight joggers with embroidered Buta flame on chest and left thigh.',
    material: '500GSM Cotton Fleece Set',
    images: ['/images/Gemini_Generated_Image_nbbu8fnbbu8fnbbu.webp'],
    lookNumber: 'LOOK 02 / HERITAGE',
  },
  {
    id: 'buta-cap-beige',
    name: 'BUTA CAP — BEIGE',
    category: 'caps',
    price: 85,
    currency: 'AZN',
    colors: [
      { name: 'BEIGE', hex: '#C8B48A', image: '/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp' },
    ],
    sizes: ['ONE SIZE'],
    description: 'Premium twill dad cap with embroidered Buta flame logo. Adjustable brass buckle closure.',
    material: 'Premium Twill',
    images: ['/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp'],
  },
  {
    id: 'buta-cap-white',
    name: 'BUTA CAP — WHITE',
    category: 'caps',
    price: 85,
    currency: 'AZN',
    colors: [
      { name: 'WHITE', hex: '#F5F0E8', image: '/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp' },
    ],
    sizes: ['ONE SIZE'],
    description: 'Brushed cotton dad cap with contrast Buta flame embroidery. Adjustable strap.',
    material: 'Brushed Cotton',
    images: ['/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp'],
  },
  {
    id: 'buta-cap-green',
    name: 'BUTA CAP — GREEN',
    category: 'caps',
    price: 95,
    currency: 'AZN',
    colors: [
      { name: 'GREEN', hex: '#2D5A3D', image: '/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp' },
    ],
    sizes: ['ONE SIZE'],
    description: 'Tech nylon structured cap with woven Buta flame logo. Water-resistant finish.',
    material: 'Tech Nylon',
    images: ['/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp'],
  },
  {
    id: 'buta-cap-black',
    name: 'BUTA CAP — BLACK',
    category: 'caps',
    price: 95,
    currency: 'AZN',
    colors: [
      { name: 'BLACK', hex: '#1a1a1a', image: '/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp' },
    ],
    sizes: ['ONE SIZE'],
    description: 'Stealth black structured cap. Tonal Buta flame embroidery. Adjustable closure.',
    material: 'Tech Nylon',
    images: ['/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp'],
  },
]

export const categories = [
  { slug: 'hoodies', name: 'HOODIES', image: '/images/Gemini_Generated_Image_g67fh8g67fh8g67f.webp' },
  { slug: 'tracksuits', name: 'TRACKSUITS', image: '/images/Gemini_Generated_Image_nbbu8fnbbu8fnbbu.webp' },
  { slug: 'tshirts', name: 'T-SHIRTS', image: '/images/Gemini_Generated_Image_g67fh8g67fh8g67f.webp' },
  { slug: 'caps', name: 'CAPS', image: '/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp' },
] as const
