// Auto-generated production dataset for Ventura Custom Homes Redesign
export interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  category: string;
  sqft: string;
  description: string;
  heroImage: string;
  images: string[];
  totalImages: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  quote: string;
  rating: number;
  project: string;
  year: string;
}

export interface PreserveVilla {
  id: string;
  name: string;
  style: string;
  sqft: string;
  beds: number;
  baths: number;
  status: string;
  highlight: string;
  image: string;
}

export interface Award {
  title: string;
  org: string;
  project: string;
  badge: string;
}

export interface Office {
  name: string;
  address: string;
  city: string;
  area: string;
  phone: string;
}

export const PROJECTS: Project[] = [
  {
    "id": "harrods-court",
    "name": "Harrods Court",
    "slug": "harrods-court",
    "location": "Dallas, TX",
    "category": "Award-Winning Showcase Estate",
    "sqft": "8,900 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Dallas, TX, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/harrods_01.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/harrods_01.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/harrods_02.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/sky_lake_01.jpg"
    ],
    "totalImages": 3
  },
  {
    "id": "sky-lake-drive",
    "name": "Sky Lake Drive",
    "slug": "sky-lake-drive",
    "location": "Dallas / Fort Worth, TX",
    "category": "Custom Estate",
    "sqft": "7,500 \u2013 11,500 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Dallas / Fort Worth, TX, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_01.jpg",
    "images": [
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_01.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/harrods_01.jpg"
    ],
    "totalImages": 2
  },
  {
    "id": "mcfarland-drive",
    "name": "McFarland Drive",
    "slug": "mcfarland-drive",
    "location": "Dallas / Fort Worth, TX",
    "category": "Custom Estate",
    "sqft": "7,500 \u2013 11,500 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Dallas / Fort Worth, TX, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_01.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_01.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_05.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_04.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_03.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_02.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/north_forty_01.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/sky_lake_01.jpg"
    ],
    "totalImages": 7
  },
  {
    "id": "north-forty-place",
    "name": "North Forty Place",
    "slug": "north-forty-place",
    "location": "Dallas / Fort Worth, TX",
    "category": "Custom Estate",
    "sqft": "7,500 \u2013 11,500 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Dallas / Fort Worth, TX, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/north_forty_04.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/north_forty_04.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/north_forty_05.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/north_forty_06.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/north_forty_03.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/north_forty_02.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0641-2020_01_30-19_04_26-UTC.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/mcfarland_01.jpg"
    ],
    "totalImages": 7
  },
  {
    "id": "north-dallas",
    "name": "North Dallas",
    "slug": "north-dallas",
    "location": "Dallas / Fort Worth, TX",
    "category": "Custom Estate",
    "sqft": "7,500 \u2013 11,500 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Dallas / Fort Worth, TX, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0641-2020_01_30-19_04_26-UTC.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0641-2020_01_30-19_04_26-UTC.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0343-2020_01_30-19_04_26-UTC.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0315-2020_01_30-19_04_26-UTC.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0289-2020_01_30-19_04_26-UTC.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0275-2020_01_30-19_04_26-UTC.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0265-2020_01_30-19_04_26-UTC.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0729-2020_01_30-19_04_26-UTC.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_01.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/north_forty_01.jpg"
    ],
    "totalImages": 9
  },
  {
    "id": "silver-lake-drive",
    "name": "Silver Lake Drive",
    "slug": "silver-lake-drive",
    "location": "Dallas, TX",
    "category": "Award-Winning Showcase Estate",
    "sqft": "8,900 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Dallas, TX, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_01.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_01.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_10.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_13.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_12.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_11.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_09.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_05.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_04.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_02.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_01.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/DLP_0641-2020_01_30-19_04_26-UTC.jpg"
    ],
    "totalImages": 11
  },
  {
    "id": "forest-glen-drive",
    "name": "Forest Glen Drive",
    "slug": "forest-glen-drive",
    "location": "Dallas, TX",
    "category": "Award-Winning Showcase Estate",
    "sqft": "8,900 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Dallas, TX, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_01.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_01.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_12.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_15.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_14.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_11.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_07.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_04.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_03.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/forest_glen_02.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8691.jpg",
      "https://venturacustomhomes.com/wp-content/uploads/2024/02/silver_lake_01.jpg"
    ],
    "totalImages": 11
  },
  {
    "id": "preston-hollow",
    "name": "Preston Hollow",
    "slug": "preston-hollow",
    "location": "Old Preston Hollow, Dallas",
    "category": "Modern Transitional",
    "sqft": "9,800 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Old Preston Hollow, Dallas, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8691.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8691.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8404.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8701.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8767.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8778.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8375.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8675.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8660.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8484.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8503.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8511.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/DLP_8535.jpg"
    ],
    "totalImages": 30
  },
  {
    "id": "beverly-two",
    "name": "Beverly Two",
    "slug": "beverly-two",
    "location": "Highland Park, Dallas",
    "category": "Spanish & Mediterranean Estate",
    "sqft": "11,274 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Highland Park, Dallas, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-23.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-22.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-21.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-20.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-19.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-18.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-17.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-16.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-15.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-14.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2021/11/beverly-drive2-13.jpg"
    ],
    "totalImages": 25
  },
  {
    "id": "touraine-drive",
    "name": "Touraine Drive",
    "slug": "touraine-drive",
    "location": "Lakes on Legacy, Frisco",
    "category": "Contemporary Waterfront",
    "sqft": "8,400 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Lakes on Legacy, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-1.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-1.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-2-1.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-33.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-34.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-3.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-4.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-7.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-10.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-11.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-12.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-26.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3932-Touraine-Dr-27.jpg"
    ],
    "totalImages": 16
  },
  {
    "id": "hidalgo-lane",
    "name": "Hidalgo Lane",
    "slug": "hidalgo-lane",
    "location": "Lakes on Legacy, Frisco",
    "category": "Contemporary Waterfront",
    "sqft": "8,400 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Lakes on Legacy, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-1.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-1.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-25-1.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-5.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-6.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-4.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-7.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-9.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-10.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-11-1.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-12-1.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-22.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1520-Hidalgo-Ln-13.jpg"
    ],
    "totalImages": 17
  },
  {
    "id": "beverlyone",
    "name": "Beverly One",
    "slug": "beverlyone",
    "location": "Highland Park, Dallas",
    "category": "Spanish & Mediterranean Estate",
    "sqft": "11,274 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Highland Park, Dallas, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1Front-Elevation-1.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/1Front-Elevation-1.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/2Den.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/4Living-Room.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/3Powder.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/14Open-to-patio.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/5Living-Room-closed-windows.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/6Living-Room-open-windows-1.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/7Dining-Room.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/8Wine-Room.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/9Kitchen.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/10Kitchen.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/02/17Rear-Elevation-1.jpg"
    ],
    "totalImages": 17
  },
  {
    "id": "belclaire-avenue",
    "name": "Belclaire Avenue",
    "slug": "belclaire-avenue",
    "location": "Highland Park, Dallas",
    "category": "Spanish & Mediterranean Estate",
    "sqft": "11,274 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Highland Park, Dallas, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-002.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-002.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-046.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-047.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-003.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-019.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-004.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-006.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-007.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-008.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-010.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-014.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/ja2photo-4436_belclaire-016.jpg"
    ],
    "totalImages": 35
  },
  {
    "id": "santa-bella",
    "name": "Santa Bella",
    "slug": "santa-bella",
    "location": "Hills of Kingswood, Frisco",
    "category": "Contemporary Hillside Estate",
    "sqft": "8,005 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in Hills of Kingswood, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Edited-Twilight_high-res.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Edited-Twilight_high-res.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-8.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-7.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-5.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-3.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-28.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-24.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-9.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-13.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-23.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-27.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/12/Shoot-2-37.jpg"
    ],
    "totalImages": 19
  },
  {
    "id": "aspen",
    "name": "Aspen",
    "slug": "aspen",
    "location": "The Preserve at Fields, Frisco",
    "category": "Parkside Villa Prototype (SHM Architects)",
    "sqft": "6,500 \u2013 9,200 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in The Preserve at Fields, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-1-1.png",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-1-1.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-2-1.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-3-1.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-4-1.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-5-1.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-6.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-7.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-8.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-9.png",
      "https://venturacustomhomes.com/wp-content/uploads/2024/03/D5_E-1_20240229_052749-2.jpg"
    ],
    "totalImages": 10
  },
  {
    "id": "santabarbaramodern",
    "name": "Santa Barbara Modern",
    "slug": "santabarbaramodern",
    "location": "The Preserve at Fields, Frisco",
    "category": "Parkside Villa Prototype (SHM Architects)",
    "sqft": "6,500 \u2013 9,200 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in The Preserve at Fields, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_A-1_20240229_053640-2.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_A-1_20240229_053640-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_A-2_20240229_053212-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/A-Exteriors-4.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/A-Exteriors-11.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_A_Scene-219_20240306_162958-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_A_Scene-220_20240306_163223-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20240405-Santa-Barbara-A2-copy.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20240405-Santa-Barbara-A8.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/A-Exteriors-3.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20240405-Santa-Barbara-A2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/A-Kitchen.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/A-Interiors-17.png"
    ],
    "totalImages": 28
  },
  {
    "id": "manhattanpenthouse",
    "name": "Manhattan Penthouse",
    "slug": "manhattanpenthouse",
    "location": "The Preserve at Fields, Frisco",
    "category": "Parkside Villa Prototype (SHM Architects)",
    "sqft": "6,500 \u2013 9,200 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in The Preserve at Fields, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_B_Scene-59_20240305_195153-2.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_B_Scene-59_20240305_195153-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_B_Scene-212_20240306_161545-3.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_B_Scene-115-1_20240305_200025-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_B_Scene-172-1_20240305_200229-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_B_Scene-213_20240306_161753-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_B_Scene-211_20240306_161325-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Manhattan-Penthouse-watermarked-12.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/B-Exteriors-31.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Manhattan-Penthouse-4-watermarked-6.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/B-Exteriors-1.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Manhattan-Penthouse-2-watermarked-4.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Manhattan-Penthouse-3-watermarked-5.jpg"
    ],
    "totalImages": 41
  },
  {
    "id": "miamicontemporary",
    "name": "Miami Contemporary",
    "slug": "miamicontemporary",
    "location": "The Preserve at Fields, Frisco",
    "category": "Parkside Villa Prototype (SHM Architects)",
    "sqft": "6,500 \u2013 9,200 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in The Preserve at Fields, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C-1_20240229_055715-2.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C-1_20240229_055715-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C-2_20240229_054927-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C_Scene-160_20240229_044020-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C_Scene-216_20240306_162230-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C_Scene-217_20240306_162447-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C_Scene-159_20240229_044340-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C_Scene-157_20240229_044658-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_C_Scene-171_20240229_122601-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/C-Exterior-7.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/02_C-Kitchen-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/04_C-Bar-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/03_C-Bar-Hall-2.jpg"
    ],
    "totalImages": 21
  },
  {
    "id": "dubaichic",
    "name": "Dubai Chic",
    "slug": "dubaichic",
    "location": "The Preserve at Fields, Frisco",
    "category": "Parkside Villa Prototype (SHM Architects)",
    "sqft": "6,500 \u2013 9,200 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in The Preserve at Fields, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_E-1_20240229_052749-2.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_E-1_20240229_052749-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Picture2.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Picture1.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_E_Scene-174_20240229_162825-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_E_Scene-224_20240306_170035-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_E-2_20240229_052327-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Picture3.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Picture10.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Picture7.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Picture4.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Picture5.png",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/Picture8.png"
    ],
    "totalImages": 24
  },
  {
    "id": "newportcoastal",
    "name": "Newport Coastal",
    "slug": "newportcoastal",
    "location": "The Preserve at Fields, Frisco",
    "category": "Parkside Villa Prototype (SHM Architects)",
    "sqft": "6,500 \u2013 9,200 SF",
    "description": "An impeccably engineered luxury custom estate by Ventura Custom Homes in The Preserve at Fields, Frisco, blending organic natural finishes, advanced walk-out basement engineering, and bespoke interior architecture.",
    "heroImage": "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_D-1_20240229_054513-2.jpg",
    "images": [
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_D-1_20240229_054513-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_D-2_20240229_054113-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/D5_D_Scene-227_20240306_170800-2.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-8.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-9.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-10.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-11.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-12.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-13.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-3.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-4.jpg",
      "https://i0.wp.com/venturacustomhomes.com/wp-content/uploads/2024/03/20260707_NEWPORT-COASTAL_SITE-PLAN-RENDERINGS-5.jpg"
    ],
    "totalImages": 37
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    "id": "1",
    "clientName": "Dr. Marcus & Elena Vance",
    "location": "Highland Park Estate (Beverly Dr.)",
    "quote": "Ventura Custom Homes accomplished what other builders deemed impossible on our sloping lot. Loy's commercial foundation expertise delivered an extraordinary walk-out level, while Shideh's design aesthetic transformed our vision into an architectural sanctuary that won Home of the Year.",
    "rating": 5,
    "project": "Beverly Drive Showcase",
    "year": "2023"
  },
  {
    "id": "2",
    "clientName": "Julian & Sarah Sterling",
    "location": "Old Preston Hollow, Dallas",
    "quote": "Building with Shideh and Loy was an entirely transparent, seamless experience. Their 70 years of combined mastery shows in every stone joint, custom steel glass pivot door, and acoustics. They don't just build luxury homes\u2014they sculpt works of art.",
    "rating": 5,
    "project": "Preston Hollow Residence",
    "year": "2024"
  },
  {
    "id": "3",
    "clientName": "David K. Reynolds",
    "location": "The Preserve at Fields, Frisco",
    "quote": "Securing a Boulevard lot in The Preserve with Ventura's Santa Barbara Modern prototype was the best investment we ever made. The collaboration with SHM Architects and Ventura's flawless project management made our dream home a breathtaking reality.",
    "rating": 5,
    "project": "Parkside Villa, The Preserve",
    "year": "2025"
  },
  {
    "id": "4",
    "clientName": "Hills of Kingswood Homeowner",
    "location": "Frisco Gated Enclave",
    "quote": "From the multi-level wine cellar to the dual catering kitchens and infinity edge pool overlooking the greenbelt, Ventura exceeded our highest expectations. Their team's integrity and craftsmanship are unmatched in North Texas.",
    "rating": 5,
    "project": "Santa Bella Estate",
    "year": "2024"
  }
];

export const PRESERVE_VILLAS: PreserveVilla[] = [
  {
    "id": "santa-barbara-modern",
    "name": "Santa Barbara Modern",
    "style": "Spanish Revival meets Contemporary Clean Lines",
    "sqft": "7,850 SF",
    "beds": 5,
    "baths": 6.5,
    "status": "Available For Construction",
    "highlight": "Expansive courtyard living, limestone finishes, custom temperature-controlled wine room, primary retreat with private spa garden.",
    "image": "https://venturacustomhomes.com/wp-content/uploads/2024/03/D5_A-1_20240229_053640-2.jpg"
  },
  {
    "id": "manhattan-penthouse",
    "name": "Manhattan Penthouse",
    "style": "Metropolitan Industrial Glamour & Steel Accents",
    "sqft": "8,400 SF",
    "beds": 5,
    "baths": 7,
    "status": "Available For Construction",
    "highlight": "3-story architectural glass elevator, private 3rd-floor athletic gym & wellness lounge, rooftop entertainment terrace overlooking Fields.",
    "image": "https://venturacustomhomes.com/wp-content/uploads/2024/03/D5_B_Scene-59_20240305_195153-2.jpg"
  },
  {
    "id": "miami-contemporary",
    "name": "Miami Contemporary",
    "style": "Organic Modern Minimalist & Seamless Indoor-Outdoor Flow",
    "sqft": "7,600 SF",
    "beds": 5,
    "baths": 5.5,
    "status": "Available For Construction",
    "highlight": "Double-height walls of glass, floating cantilevered walnut staircase, illuminated onyx cocktail bar, expansive covered outdoor kitchen.",
    "image": "https://venturacustomhomes.com/wp-content/uploads/2024/03/D5_C-1_20240229_055715-2.jpg"
  },
  {
    "id": "newport-coastal",
    "name": "Newport Coastal",
    "style": "Hamptons Sophistication with Texas Scale",
    "sqft": "8,100 SF",
    "beds": 6,
    "baths": 6.5,
    "status": "Available For Construction",
    "highlight": "Interiors curated with Monica Wilcox, expansive multi-slide Fleetwood pocket doors, upper entertainment loft, dual scullery/chef's pantry.",
    "image": "https://venturacustomhomes.com/wp-content/uploads/2024/03/D5_D-1_20240229_054513-2.jpg"
  },
  {
    "id": "dubai-chic",
    "name": "Dubai Chic",
    "style": "Ultra-Luxury Opulence & Avant-Garde Glamour",
    "sqft": "9,200 SF",
    "beds": 6,
    "baths": 7.5,
    "status": "Available For Construction",
    "highlight": "Gold leaf accents, cascading indoor water features, state-of-the-art golf simulator lounge, Turkish hammam private spa.",
    "image": "https://venturacustomhomes.com/wp-content/uploads/2024/03/D5_E-1_20240229_052749-2.jpg"
  },
  {
    "id": "aspen",
    "name": "The Aspen",
    "style": "Mountain Modern Timber & Organic Texas Stone",
    "sqft": "8,650 SF",
    "beds": 5,
    "baths": 6,
    "status": "Available For Construction",
    "highlight": "Massive hand-hewn cedar beams, double-sided floor-to-ceiling stone hearth, heated outdoor veranda, ski-lodge inspired private bourbon lounge.",
    "image": "https://venturacustomhomes.com/wp-content/uploads/2025/03/Aspen-1-1.png"
  }
];

export const AWARDS: Award[] = [
  {
    "title": "McSam Awards Luxury Home of the Year",
    "org": "Dallas Builders Association",
    "project": "Beverly Drive Estate",
    "badge": "Winner"
  },
  {
    "title": "Best of Show - First Place",
    "org": "Parade of Homes\u00ae",
    "project": "McFarland & Silver Lake",
    "badge": "1st Place"
  },
  {
    "title": "People's Choice Honors (2 Consecutive Years)",
    "org": "Parade of Homes\u00ae",
    "project": "Silver Lake Drive",
    "badge": "Double Winner"
  },
  {
    "title": "House of the Day",
    "org": "The Wall Street Journal",
    "project": "Beverly Drive Residence",
    "badge": "WSJ Featured"
  },
  {
    "title": "Best Builder in Dallas",
    "org": "D Home Magazine",
    "project": "Ventura Custom Homes",
    "badge": "Hall of Fame"
  },
  {
    "title": "Dallas 100 Fastest Growing Companies",
    "org": "SMU Cox School of Business",
    "project": "Ranked #88 in North Texas",
    "badge": "SMU Cox Award"
  },
  {
    "title": "Featured Cover Home",
    "org": "Traditional Home Magazine",
    "project": "Tropical Safari Luxury Suite",
    "badge": "National Cover"
  },
  {
    "title": "Best Architectural & Interior Design",
    "org": "HAB Awards",
    "project": "McFarland Drive",
    "badge": "Best Overall"
  }
];

export const OFFICES: Office[] = [
  {
    "name": "Dallas Executive Office",
    "address": "4311 Beverly Drive",
    "city": "Dallas, TX 75205",
    "area": "Highland Park / Park Cities",
    "phone": "+1 (214) 577-1959"
  },
  {
    "name": "Frisco Development Studio",
    "address": "5 Cowboys Way, Suite 300",
    "city": "Frisco, TX 75034",
    "area": "The Star in Frisco / Fields HQ",
    "phone": "+1 (214) 728-3933"
  },
  {
    "name": "Construction & Field Operations",
    "address": "17814 Davenport Road, Suite 113",
    "city": "Dallas, TX 75252",
    "area": "Engineering & Site Supervision",
    "phone": "+1 (214) 577-1959"
  }
];

export const BRAND_STATS = [
  { label: "Combined Experience", value: "70+ Yrs" },
  { label: "Luxury Industry Awards", value: "20+" },
  { label: "Master-Planned Acres", value: "2,500" },
  { label: "Client Satisfaction", value: "100%" }
];
