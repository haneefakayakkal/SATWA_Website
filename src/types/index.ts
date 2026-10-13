export interface Room {
  id: string;
  name: string;
  tag: string;
  category: 'villa' | 'suite' | 'residence';
  shortDescription: string;
  fullDescription: string;
  capacity: string;
  size: string;
  bedType: string;
  priceSample: string;
  image: string;
  gallery: string[];
  amenities: string[];
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  duration: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'architecture' | 'nature' | 'wellness' | 'dining';
  categoryLabel: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomPreference: string;
  message: string;
}
