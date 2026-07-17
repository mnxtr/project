export type UserRole = 'student' | 'staff' | 'admin' | 'kitchen';

export interface User {
  id: string;
  name: string;
  email: string;
  studentId?: string;
  role: UserRole;
  mealPlanBalance: number;
  avatar?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'beverages';
  image?: string;
  isHalal: boolean;
  isVegetarian: boolean;
  allergens: string[];
  calories: number;
  available: boolean;
  preparationTime: number;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  orderType: 'pickup' | 'dine-in';
  pickupTime?: string;
  createdAt: string;
  estimatedTime: number;
  paymentMethod: 'meal-plan' | 'bKash' | 'Nagad' | 'cash';
  paymentStatus: 'pending' | 'paid' | 'failed';
  notes?: string;
  rating?: number;
  feedback?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  minThreshold: number;
  category: 'produce' | 'protein' | 'dairy' | 'grains' | 'supplies';
  lastRestocked: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  expiresAt?: string;
  isActive: boolean;
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: 'available' | 'occupied' | 'reserved';
}

export interface FeedbackEntry {
  id: string;
  orderId: string;
  rating: number;
  comment: string;
  createdAt: string;
  response?: string;
}

export interface DailySpecial {
  id: string;
  menuItem: MenuItem;
  dayOfWeek: number;
  discount?: number;
}