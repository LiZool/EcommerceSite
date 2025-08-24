import React from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


// ---------------------------------------------
// Demo data — replace with your API data later
// ---------------------------------------------
const CATEGORIES = [
"All",
"Booklights",
"Bookmarks",
"Book Holders",
"Tech",
"Stationery",
];


type Product = {
id: string;
name: string;
price: number;
rating?: number;
category: string;
badge?: string;
image: string; // primary
hoverImage?: string; // secondary (optional)
};


const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Clip-On Reading Light",
    price: 19.99,
    rating: 4.7,
    category: "Booklights",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "Magnetic Bookmark — Galaxy",
    price: 6.99,
    rating: 4.5,
    category: "Bookmarks",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Bookchair® Stand (Foldable)",
    price: 34.0,
    rating: 4.9,
    category: "Book Holders",
    badge: "New",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "Cable Tidy — Pastel Pack",
    price: 9.99,
    rating: 4.2,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1513617336814-4d7cfbfde3c8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "Desk Planner — Minimal",
    price: 12.99,
    rating: 4.4,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "Phone Page Holder Clip",
    price: 7.5,
    rating: 4.1,
    category: "Tech",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p7",
    name: "Elastic Bookmark — Citrus",
    price: 5.99,
    rating: 4.0,
    category: "Bookmarks",
    image: "https://images.unsplash.com/photo-1520975657283-cd874c7c7b97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p8",
    name: "Rechargeable Book Light",
    price: 24.99,
    rating: 4.8,
    category: "Booklights",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop",
  },
];