import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/FilterSidebar';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    brand: [],
    size: []
  });
  
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  
  const handleFilterChange = (groupId: string, optionId: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[groupId]?.includes(optionId)) {
        newFilters[groupId] = newFilters[groupId].filter(id => id !== optionId);
      } else {
        newFilters[groupId] = [...(newFilters[groupId] || []), optionId];
      }
      return newFilters;
    });
  };
  
  const filters = [
    {
      id: 'brand',
      name: 'Brand',
      options: [
        { id: 'nike', label: 'Nike' },
        { id: 'adidas', label: 'Adidas' },
        { id: 'puma', label: 'Puma' }
      ]
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { id: 's', label: 'Small' },
        { id: 'm', label: 'Medium' },
        { id: 'l', label: 'Large' },
        { id: 'xl', label: 'X-Large' },
        { id: 'xxl', label: 'XX-Large' }
      ]
    }
  ];
  
  // Filter products by category
  const categoryProducts = products.filter(product => product.category === categoryId);
  
  // Sort products based on selected option
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case 'price-high':
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      case 'newest':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      case 'bestselling':
        return a.isBestSeller ? -1 : b.isBestSeller ? 1 : 0;
      default:
        return 0;
    }
  });

  // Find category name
  const category = categories.find(cat => cat.id === categoryId);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-cream mb-8">{category?.name || 'Category'}</h1>
      
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-6">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="w-full py-2 px-4 bg-medium-gray text-cream font-medium rounded-md border border-cream/20 flex items-center justify-center"
        >
          <Filter className="h-5 w-5 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <FilterSidebar 
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            minPrice={0}
            maxPrice={200}
          />
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4">
          {/* Sort and Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center">
              <SlidersHorizontal className="h-5 w-5 text-cream mr-2" />
              <span className="text-cream">Sort by:</span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="ml-2 bg-medium-gray text-cream border border-cream/20 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-cream/30"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
                <option value="bestselling">Best Selling</option>
              </select>
            </div>
            
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search jerseys..."
                className="pl-10 pr-4 py-2 bg-medium-gray text-cream border border-cream/20 rounded-md w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-cream/30"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-cream/50" />
            </div>
          </div>
          
          {/* Results Count */}
          <p className="text-cream/70 mb-6">Showing {sortedProducts.length} results</p>
          
          {/* Products */}
          {sortedProducts.length > 0 ? (
            <ProductGrid products={sortedProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-cream text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;