import type { MenuItem, User, Order, InventoryItem, Announcement, Table, FeedbackEntry, DailySpecial } from '@/types';

export const mockUsers: User[] = [
  { id: '1', name: 'Rafid Rahman', email: 'rafid@northsouth.edu', studentId: '212-1234', role: 'student', mealPlanBalance: 4500, avatar: 'RR' },
  { id: '2', name: 'Sadman Sakib', email: 'sadman@northsouth.edu', studentId: '213-5678', role: 'student', mealPlanBalance: 2300, avatar: 'SS' },
  { id: '3', name: 'Tasmia Hossain', email: 'tasmia@northsouth.edu', studentId: '214-9012', role: 'student', mealPlanBalance: 6700, avatar: 'TH' },
  { id: '4', name: 'Chef Karim', email: 'karim@nsu.edu', role: 'kitchen', mealPlanBalance: 0, avatar: 'CK' },
  { id: '5', name: 'Admin User', email: 'admin@nsu.edu', role: 'admin', mealPlanBalance: 0, avatar: 'AU' },
];

export const mockMenuItems: MenuItem[] = [
  {
    id: '1', name: 'Chicken Biryani', description: 'Aromatic basmati rice with tender chicken, saffron, and spices', price: 280,
    category: 'lunch', isHalal: true, isVegetarian: false, allergens: ['gluten', 'dairy'], calories: 650,
    available: true, preparationTime: 15, rating: 4.5, reviewCount: 142, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
  },
  {
    id: '2', name: 'Beef Bhuna', description: 'Slow-cooked spicy beef curry with potatoes', price: 320,
    category: 'lunch', isHalal: true, isVegetarian: false, allergens: ['gluten'], calories: 580,
    available: true, preparationTime: 20, rating: 4.7, reviewCount: 89, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
  },
  {
    id: '3', name: 'Vegetable Khichuri', description: 'Comforting rice and lentil dish with mixed vegetables', price: 120,
    category: 'lunch', isHalal: true, isVegetarian: true, allergens: [], calories: 380,
    available: true, preparationTime: 10, rating: 4.2, reviewCount: 56, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
  },
  {
    id: '4', name: 'Chicken Curry', description: 'Traditional Bangladeshi chicken curry with gravy', price: 250,
    category: 'lunch', isHalal: true, isVegetarian: false, allergens: ['gluten'], calories: 520,
    available: true, preparationTime: 15, rating: 4.3, reviewCount: 201, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
  },
  {
    id: '5', name: 'Fish Curry', description: 'Hilsa fish cooked in traditional mustard-turmeric gravy', price: 350,
    category: 'lunch', isHalal: true, isVegetarian: false, allergens: ['fish'], calories: 450,
    available: true, preparationTime: 18, rating: 4.8, reviewCount: 178, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
  },
  {
    id: '6', name: 'Paratha with Egg', description: 'Flaky paratha served with perfectly fried eggs', price: 100,
    category: 'breakfast', isHalal: true, isVegetarian: false, allergens: ['gluten', 'eggs'], calories: 420,
    available: true, preparationTime: 8, rating: 4.6, reviewCount: 312, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
  },
  {
    id: '7', name: 'Plain Rice & Dal', description: 'Steamed basmati rice with comforting yellow lentil soup', price: 80,
    category: 'lunch', isHalal: true, isVegetarian: true, allergens: [], calories: 520,
    available: true, preparationTime: 5, rating: 4.1, reviewCount: 445, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
  },
  {
    id: '8', name: 'Chicken Shawarma', description: 'Seasoned chicken wrapped in fresh pita with sauce', price: 180,
    category: 'snacks', isHalal: true, isVegetarian: false, allergens: ['gluten', 'dairy'], calories: 480,
    available: true, preparationTime: 5, rating: 4.4, reviewCount: 267, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
  },
  {
    id: '9', name: 'Cold Coffee', description: 'Chilled creamy coffee with ice', price: 120,
    category: 'beverages', isHalal: true, isVegetarian: true, allergens: ['dairy'], calories: 180,
    available: true, preparationTime: 3, rating: 4.3, reviewCount: 198, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
  },
  {
    id: '10', name: 'Falooda', description: 'Rose-flavored vermicelli milk drink with ice cream', price: 90,
    category: 'beverages', isHalal: true, isVegetarian: true, allergens: ['dairy', 'gluten'], calories: 250,
    available: true, preparationTime: 5, rating: 4.7, reviewCount: 334, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
  },
  {
    id: '11', name: 'Grilled Chicken', description: 'Tandoori-style marinated chicken with mint chutney', price: 350,
    category: 'dinner', isHalal: true, isVegetarian: false, allergens: ['dairy'], calories: 420,
    available: true, preparationTime: 25, rating: 4.6, reviewCount: 156, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
  },
  {
    id: '12', name: 'Mixed Salad', description: 'Fresh greens with cucumber, tomato, and lemon dressing', price: 150,
    category: 'snacks', isHalal: true, isVegetarian: true, allergens: [], calories: 80,
    available: true, preparationTime: 5, rating: 4.0, reviewCount: 87, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
  },
  {
    id: '13', name: 'Prawn Pasta', description: 'Creamy pasta with succulent prawns and garlic', price: 380,
    category: 'dinner', isHalal: false, isVegetarian: false, allergens: ['gluten', 'shellfish', 'dairy'], calories: 620,
    available: false, preparationTime: 20, rating: 4.4, reviewCount: 45, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
  },
  {
    id: '14', name: 'Misti Doi', description: 'Traditional Bengali sweet yogurt', price: 60,
    category: 'snacks', isHalal: true, isVegetarian: true, allergens: ['dairy'], calories: 150,
    available: true, preparationTime: 2, rating: 4.8, reviewCount: 289, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
  },
  {
    id: '15', name: 'Porota with Beef', description: 'Flaky porota served with spiced beef curry', price: 220,
    category: 'breakfast', isHalal: true, isVegetarian: false, allergens: ['gluten'], calories: 580,
    available: true, preparationTime: 12, rating: 4.5, reviewCount: 198, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001', userId: '1', items: [
      { menuItem: mockMenuItems[0]!, quantity: 2 },
      { menuItem: mockMenuItems[8]!, quantity: 1 },
    ],
    total: 680, status: 'ready', orderType: 'pickup', pickupTime: '12:30 PM',
    createdAt: '2026-07-17T11:30:00Z', estimatedTime: 15, paymentMethod: 'meal-plan', paymentStatus: 'paid',
  },
  {
    id: 'ORD-002', userId: '2', items: [
      { menuItem: mockMenuItems[3]!, quantity: 1 },
      { menuItem: mockMenuItems[6]!, quantity: 1 },
    ],
    total: 330, status: 'preparing', orderType: 'pickup', pickupTime: '1:00 PM',
    createdAt: '2026-07-17T11:45:00Z', estimatedTime: 20, paymentMethod: 'bKash', paymentStatus: 'paid',
  },
];

export const mockInventory: InventoryItem[] = [
  { id: '1', name: 'Basmati Rice', quantity: 50, unit: 'kg', minThreshold: 20, category: 'grains', lastRestocked: '2026-07-15' },
  { id: '2', name: 'Chicken Breast', quantity: 15, unit: 'kg', minThreshold: 25, category: 'protein', lastRestocked: '2026-07-16' },
  { id: '3', name: 'Fresh Milk', quantity: 30, unit: 'liters', minThreshold: 15, category: 'dairy', lastRestocked: '2026-07-17' },
  { id: '4', name: 'Tomatoes', quantity: 8, unit: 'kg', minThreshold: 10, category: 'produce', lastRestocked: '2026-07-16' },
  { id: '5', name: 'Onions', quantity: 20, unit: 'kg', minThreshold: 10, category: 'produce', lastRestocked: '2026-07-15' },
  { id: '6', name: 'Beef', quantity: 12, unit: 'kg', minThreshold: 15, category: 'protein', lastRestocked: '2026-07-14' },
  { id: '7', name: 'Eggs', quantity: 100, unit: 'pieces', minThreshold: 50, category: 'protein', lastRestocked: '2026-07-17' },
  { id: '8', name: 'Cooking Oil', quantity: 25, unit: 'liters', minThreshold: 10, category: 'supplies', lastRestocked: '2026-07-10' },
];

export const mockAnnouncements: Announcement[] = [
  { id: '1', title: 'Eid Holiday Closure', content: 'Cafeteria will remain closed from June 28 to July 5 for Eid holidays. Normal service resumes July 6.', priority: 'high', createdAt: '2026-06-20T10:00:00Z', expiresAt: '2026-07-06T00:00:00Z', isActive: true },
  { id: '2', title: 'New Menu Items Available', content: 'Check out our new fusion menu items now available at the South Canteen!', priority: 'low', createdAt: '2026-07-10T09:00:00Z', isActive: true },
  { id: '3', title: 'Pre-Order Discount', content: 'Pre-order your meals before 10 AM and get 10% off on all items!', priority: 'medium', createdAt: '2026-07-15T08:00:00Z', expiresAt: '2026-07-31T23:59:00Z', isActive: true },
];

export const mockTables: Table[] = [
  { id: '1', number: 1, capacity: 4, status: 'available' },
  { id: '2', number: 2, capacity: 4, status: 'occupied' },
  { id: '3', number: 3, capacity: 6, status: 'available' },
  { id: '4', number: 4, capacity: 2, status: 'available' },
  { id: '5', number: 5, capacity: 4, status: 'reserved' },
  { id: '6', number: 6, capacity: 8, status: 'available' },
];

export const mockFeedback: FeedbackEntry[] = [
  { id: '1', orderId: 'ORD-001', rating: 5, comment: 'Amazing biryani! Fresh and flavorful as always.', createdAt: '2026-07-16T14:30:00Z' },
  { id: '2', orderId: 'ORD-XXX', rating: 4, comment: 'Good portion size, but could be a bit spicier.', createdAt: '2026-07-15T13:15:00Z', response: 'Thank you for your feedback! We will adjust the spice level.' },
];

export const mockDailySpecials: DailySpecial[] = [
  { id: '1', menuItem: mockMenuItems[1]!, dayOfWeek: 1, discount: 15 },
  { id: '2', menuItem: mockMenuItems[4]!, dayOfWeek: 2, discount: 10 },
  { id: '3', menuItem: mockMenuItems[10]!, dayOfWeek: 3, discount: 20 },
  { id: '4', menuItem: mockMenuItems[0]!, dayOfWeek: 4, discount: 10 },
  { id: '5', menuItem: mockMenuItems[3]!, dayOfWeek: 5, discount: 15 },
];