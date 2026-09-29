import type { Project } from './siteData';

// DEMO ONLY: prices, beds/baths and availability are derived from square footage
// and location so the listing UI looks real. None of this is real market data.

export type ListingStatus = 'Available' | 'Coming Soon' | 'Under Contract' | 'Sold';

export interface ListingMeta {
  price: string;
  beds: number;
  baths: number;
  garage: number;
  status: ListingStatus;
}

const avgSqft = (sqft: string): number => {
  const nums = (sqft.match(/\d[\d,]*/g) || []).map((n) => parseInt(n.replace(/,/g, ''), 10));
  if (!nums.length) return 8000;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};

const pricePerSqft = (location: string): number => {
  if (location.includes('Highland Park')) return 1150;
  if (location.includes('Preston Hollow')) return 950;
  if (location.includes('Legacy') || location.includes('Kingswood')) return 700;
  if (location.includes('Preserve')) return 600;
  return 750;
};

const formatPrice = (value: number): string => {
  const rounded = Math.round(value / 50000) * 50000;
  return `$${(rounded / 1_000_000).toFixed(2).replace(/0$/, '')}M`;
};

const STATUSES: ListingStatus[] = [
  'Coming Soon',
  'Available',
  'Available',
  'Available',
  'Under Contract',
  'Sold',
];

export const getListingMeta = (project: Project): ListingMeta => {
  const sqft = avgSqft(project.sqft);
  const beds = Math.min(8, Math.max(4, Math.round(sqft / 1500)));
  const hash = [...project.slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);

  return {
    price: formatPrice(sqft * pricePerSqft(project.location)),
    beds,
    baths: beds + 1,
    garage: beds >= 6 ? 4 : 3,
    status: STATUSES[hash % STATUSES.length],
  };
};
