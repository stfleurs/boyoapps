export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  website?: string;
  googlePlay?: string;
  iconColor: string;
  capabilities: string[];
  featured: boolean;
  heroImage?: string;
};

export const products: Product[] = [
  {
    slug: "vendrex-pos",
    name: "Vendrex",
    category: "POS & Business Management",
    shortDescription:
      "Complete POS and inventory management software with offline support, multi-currency operations and business management tools.",
    longDescription:
      "Boyo Apps developed Vendrex to help businesses manage sales, inventory, customers, employees and reporting from a modern mobile and web platform.",
    website: "https://vendrex.store/",
    iconColor: "#2563eb",
    capabilities: [
      "POS",
      "Inventory",
      "Multi-currency",
      "Offline functionality",
      "Barcode scanning",
      "Purchase orders",
      "Employee management",
      "Reporting",
      "Android",
      "Web",
    ],
    featured: true,
  },
  {
    slug: "tally-cart",
    name: "Tally Cart",
    category: "Shopping & Budget Application",
    shortDescription:
      "Shared grocery lists and budget tracking with real-time collaboration, shelf-price scanning and shopping totals.",
    longDescription:
      "Tally Cart makes grocery shopping collaborative and budget-aware with real-time list sharing, price tracking, and expense management.",
    website: "https://tallycart-prod.web.app/",
    googlePlay:
      "https://play.google.com/store/apps/details?hl=en_IN&id=tally.cart",
    iconColor: "#059669",
    capabilities: [
      "Real-time collaboration",
      "Price tracking",
      "Barcode scanning",
      "Offline functionality",
      "Budget tracking",
      "Shopping lists",
      "Internationalization",
      "Android",
    ],
    featured: true,
  },
  {
    slug: "solar-align",
    name: "Solar Align Pro",
    category: "Solar Optimization",
    shortDescription:
      "Solar panel alignment and ROI tools using device sensors, location data and specialized calculations.",
    longDescription:
      "Solar Align Pro helps solar energy professionals and enthusiasts optimize panel positioning using device sensors and location-based calculations.",
    iconColor: "#0f172a",
    capabilities: [
      "Device sensors",
      "Location-based calculations",
      "ROI analysis",
      "Solar panel positioning",
      "Android",
      "Offline functionality",
    ],
    featured: true,
  },
  {
    slug: "receet-pro",
    name: "Receet Pro",
    category: "Personal Finance",
    shortDescription:
      "Personal finance management with receipt scanning, multi-currency tracking, budgets and financial insights.",
    longDescription:
      "Receet Pro simplifies personal finance by combining receipt scanning, multi-currency expense tracking, and budgeting in one application.",
    iconColor: "#0d9488",
    capabilities: [
      "Receipt scanning",
      "Multi-currency tracking",
      "Budget management",
      "Financial insights",
      "Expense categorization",
      "Android",
    ],
    featured: true,
  },
  {
    slug: "gqrly",
    name: "GQRLY",
    category: "QR Code Analytics",
    shortDescription:
      "QR code generation and analytics platform with real-time tracking and campaign management.",
    longDescription:
      "GQRLY provides QR code generation with detailed analytics, scan tracking, and campaign management for businesses.",
    iconColor: "#7c3aed",
    capabilities: [
      "QR code generation",
      "Scan analytics",
      "Campaign management",
      "Real-time tracking",
      "Web",
    ],
    featured: false,
  },
  {
    slug: "next-up",
    name: "NeXT Up",
    category: "Productivity",
    shortDescription:
      "Cross-device reminder and productivity application with cloud synchronization.",
    longDescription:
      "NeXT Up keeps you organized across devices with smart reminders, task management, and seamless cloud sync.",
    googlePlay: "https://play.google.com/store/apps/details?hl=en&id=com.next.up",
    iconColor: "#1e3a5f",
    capabilities: [
      "Task management",
      "Smart reminders",
      "Cloud synchronization",
      "Cross-device",
      "Android",
    ],
    featured: false,
  },
  {
    slug: "boyomart",
    name: "BoyoMart",
    category: "Marketplace",
    shortDescription:
      "Local buy-and-sell marketplace with listings, location-based discovery, messaging and search.",
    longDescription:
      "BoyoMart is a local marketplace platform connecting buyers and sellers with location-based discovery, in-app messaging, and powerful search.",
    googlePlay: "https://play.google.com/store/apps/details?id=com.boyomart.app",
    iconColor: "#e11d48",
    capabilities: [
      "Listings",
      "Location-based discovery",
      "In-app messaging",
      "Search & filtering",
      "Seller profiles",
      "Android",
    ],
    featured: false,
  },
  {
    slug: "solar-merge",
    name: "Solar Merge",
    category: "Mobile Game",
    shortDescription:
      "An engaging solar-themed merge game for mobile devices.",
    longDescription:
      "Solar Merge is a casual mobile game with solar energy themes, combining puzzle mechanics with educational elements.",
    iconColor: "#d97706",
    capabilities: [
      "Mobile gaming",
      "Merge mechanics",
      "Solar themes",
      "Offline gameplay",
      "Android",
    ],
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
