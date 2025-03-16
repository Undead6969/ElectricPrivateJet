
// Define profile type
export interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
}

// Define aircraft type
export interface Aircraft {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  year: number | null;
  capacity: number;
  range_km: number;
  cruising_speed_kmh: number;
  image_url: string | null;
  aircraft_type: 'jet' | 'helicopter' | 'sustainable';
  status: 'available' | 'maintenance' | 'booked' | 'unavailable';
  description: string;
  price_per_hour: number;
  created_at: string;
  updated_at: string;
}

// Define booking type
export interface Booking {
  id: string;
  user_id: string;
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string | null;
  passengers: number;
  aircraft_type: string | null;
  status: 'pending' | 'confirmed' | 'cancelled';
  special_requests: string | null;
  created_at: string;
  updated_at: string;
}

// Define membership type
export interface Membership {
  id: string;
  name: string;
  price_monthly: number;
  price_yearly: number;
  description: string;
  benefits: string[];
  is_popular: boolean;
  created_at: string;
  updated_at: string;
}

// Define user membership type
export interface UserMembership {
  id: string;
  user_id: string;
  membership_id: string;
  start_date: string;
  end_date: string;
  payment_status: 'pending' | 'completed' | 'failed' | 'cancelled';
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Define news article type
export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  author: string | null;
  published_at: string;
  is_featured: boolean;
  category: 'company' | 'industry' | 'technology' | 'sustainability';
  created_at: string;
  updated_at: string;
}
