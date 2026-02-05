export interface ExternalLink {
  id: number;
  title: string;
  url: string;
  description: string;
  icon: string;
  category: 'social' | 'documentation' | 'resources' | 'tools';
  openInNewTab: boolean;
}

export const EXTERNAL_LINKS: ExternalLink[] = [
  {
    id: 1,
    title: 'Nike',
    url: 'https://www.nike.com',
    description: 'Zapatería deportiva líder mundial',
    icon: 'sports_tennis',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 2,
    title: 'Adidas',
    url: 'https://www.adidas.com',
    description: 'Calzado deportivo y moda urbana',
    icon: 'directions_run',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 3,
    title: 'Puma',
    url: 'https://www.puma.com',
    description: 'Calzado deportivo y lifestyle',
    icon: 'sports_score',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 4,
    title: 'Converse',
    url: 'https://www.converse.com',
    description: 'Zapatillas icónicas desde 1908',
    icon: 'star',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 5,
    title: 'Zara',
    url: 'https://www.zara.com',
    description: 'Moda y calzado contemporáneo',
    icon: 'shopping_bag',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 6,
    title: 'Steve Madden',
    url: 'https://www.stevemadden.com',
    description: 'Calzado de moda y tendencias',
    icon: 'trending_up',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 7,
    title: 'Gucci',
    url: 'https://www.gucci.com',
    description: 'Calzado de lujo y alta costura',
    icon: 'diamond',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 8,
    title: 'Clarks',
    url: 'https://www.clarks.com',
    description: 'Zapatos de calidad desde 1825',
    icon: 'history_edu',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 9,
    title: 'Vans',
    url: 'https://www.vans.com',
    description: 'Calzado para skate y estilo urbano',
    icon: 'sports',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 10,
    title: 'Dr. Martens',
    url: 'https://www.drmartens.com',
    description: 'Botas icónicas desde 1960',
    icon: 'security',
    category: 'resources',
    openInNewTab: true
  },
  {
    id: 11,
    title: 'Instagram Moda',
    url: 'https://www.instagram.com/explore/tags/zapateria/',
    description: 'Tendencias de calzado en redes sociales',
    icon: 'photo_camera',
    category: 'social',
    openInNewTab: true
  },
  {
    id: 12,
    title: 'Guía de Tallas',
    url: 'https://www.sizechart.com',
    description: 'Documentación sobre tallas de calzado',
    icon: 'straighten',
    category: 'documentation',
    openInNewTab: true
  },
  {
    id: 13,
    title: 'Comparador de Precios',
    url: 'https://www.shoeprices.com',
    description: 'Herramienta para comparar precios de calzado',
    icon: 'compare',
    category: 'tools',
    openInNewTab: true
  }
];