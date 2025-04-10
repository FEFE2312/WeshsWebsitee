import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "FC Barcelona Home Jersey 2023/24",
    description: "The official FC Barcelona home jersey for the 2023/24 season. Features the iconic blue and garnet stripes with modern design elements. Made with lightweight, breathable fabric for maximum comfort.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1577212017308-55f90828eae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    images: [
      "https://images.unsplash.com/photo-1577212017308-55f90828eae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1571145551427-0a92cf98de8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
    ],
    category: "club",
    brand: "Nike",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    stock: 50,
    tags: ["barcelona", "la liga", "spain"]
  },
  {
    id: 2,
    name: "Manchester United Away Jersey 2023/24",
    description: "The official Manchester United away jersey for the 2023/24 season. Features a sleek design with club colors and crest. Made with advanced moisture-wicking technology.",
    price: 94.99,
    salePrice: 79.99,
    image: "https://images.unsplash.com/photo-1571145551427-0a92cf98de8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    images: [
      "https://images.unsplash.com/photo-1571145551427-0a92cf98de8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1577212017308-55f90828eae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
    ],
    category: "club",
    brand: "Adidas",
    sizes: ["S", "M", "L", "XL"],
    isBestSeller: true,
    stock: 35,
    tags: ["manchester united", "premier league", "england"]
  },
  {
    id: 3,
    name: "Brazil Home Jersey 2022 World Cup",
    description: "The official Brazil national team home jersey from the 2022 World Cup. Features the iconic yellow color with green accents. Made with lightweight, breathable fabric.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "hhttps://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    category: "international",
    brand: "Nike",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isBestSeller: true,
    stock: 25,
    tags: ["brazil", "world cup", "international"]
  },
  {
    id: 4,
    name: "Argentina Home Jersey 2022 World Cup",
    description: "The official Argentina national team home jersey from the 2022 World Cup. Features the classic white and sky blue stripes. Made with advanced moisture-wicking technology.",
    price: 99.99,
    salePrice: 84.99,
    image: "https://images.unsplash.com/photo-1571145551427-0a92cf98de8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    images: [
      "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1577212017308-55f90828eae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1571145551427-0a92cf98de8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
    ],
    category: "international",
    brand: "Nike",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isBestSeller: true,
    stock: 25,
    tags: ["brazil", "world cup", "international"]  
  }
]
  export const newArrivals = [
    {
      id: 1,
      name: "Retro Soccer Jersey",
      image: "https://example.com/retro-jersey.jpg",
      price: 79.99,
    },
    {
      id: 2,
      name: "Club Soccer Jersey",
      image: "https://example.com/club-jersey.jpg",
      price: 99.99,
    },
  ];
  
  export const bestSellers = [
    {
      id: 3,
      name: "International Team Jersey",
      image: "https://example.com/international-jersey.jpg",
      price: 89.99,
    },
    {
      id: 4,
      name: "Limited Edition Jersey",
      image: "https://example.com/limited-edition-jersey.jpg",
      price: 129.99,
    },
  ];
  