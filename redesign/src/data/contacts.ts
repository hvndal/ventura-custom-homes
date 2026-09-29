// Contact details as published on venturacustomhomes.com (contact + about pages).
// Only one email is published for the founders. If Loy has his own inbox, set it below.

export const SHARED_EMAIL = 'slowary@gmail.com';

export interface FounderContact {
  key: 'loy' | 'shideh';
  name: string;
  role: string;
  phone: string;
  tel: string;
  email: string;
  photo: string;
}

export const FOUNDER_CONTACTS: FounderContact[] = [
  {
    key: 'loy',
    name: 'Loy Lowary',
    role: 'Founder · Builder',
    phone: '+1 (214) 728-3933',
    tel: '+12147283933',
    email: SHARED_EMAIL,
    photo: '/founders/loy-lowary.jpg',
  },
  {
    key: 'shideh',
    name: 'Shideh Lowary',
    role: 'Founder · Finance & Client Experience',
    phone: '+1 (214) 577-1959',
    tel: '+12145771959',
    email: SHARED_EMAIL,
    photo: '/founders/shideh-lowary.jpg',
  },
];

export const OFFICES = [
  { name: 'Dallas Office', lines: ['4311 Beverly Drive', 'Dallas, TX 75205'] },
  { name: 'Construction Office', lines: ['17814 Davenport Road, Suite 113', 'Dallas, TX 75252'] },
  { name: 'Frisco Office', lines: ['5 Cowboys Way, STE 300', 'Frisco, TX 75034'] },
];
