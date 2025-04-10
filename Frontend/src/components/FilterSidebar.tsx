import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

interface FilterSidebarProps {
  filters: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, optionId: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
  priceRange,
  onPriceRangeChange,
  minPrice,
  maxPrice
}) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    filters.reduce((acc, filter) => ({ ...acc, [filter.id]: true }), {})
  );

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  return (
    <div className="bg-medium-gray rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6 text-cream">Filters</h2>
      
      {/* Price Range */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-cream">Price Range</h3>
          <button 
            onClick={() => toggleGroup('price')}
            className="text-cream/70 hover:text-cream"
          >
            {expandedGroups['price'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
        
        {expandedGroups['price'] && (
          <div className="mt-3">
            <div className="flex justify-between mb-2">
              <span className="text-cream/70">${priceRange[0]}</span>
              <span className="text-cream/70">${priceRange[1]}</span>
            </div>
            <div className="flex space-x-4">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Filter Groups */}
      {filters.map((group) => (
        <div key={group.id} className="mb-6 border-t border-light-gray pt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-cream">{group.name}</h3>
            <button 
              onClick={() => toggleGroup(group.id)}
              className="text-cream/70 hover:text-cream"
            >
              {expandedGroups[group.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
          
          {expandedGroups[group.id] && (
            <div className="mt-2 space-y-2">
              {group.options.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${group.id}-${option.id}`}
                    checked={selectedFilters[group.id]?.includes(option.id) || false}
                    onChange={() => onFilterChange(group.id, option.id)}
                    className="h-4 w-4 rounded border-cream/30 text-accent focus:ring-accent"
                  />
                  <label
                    htmlFor={`${group.id}-${option.id}`}
                    className="ml-2 text-cream/80 hover:text-cream cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      
      <button className="w-full py-2 px-4 bg-cream text-dark-gray font-medium rounded-md hover:bg-cream-dark transition-colors mt-4">
        Apply Filters
      </button>
      <button className="w-full py-2 px-4 bg-transparent text-cream/70 font-medium rounded-md hover:text-cream border border-cream/30 transition-colors mt-2">
        Clear All
      </button>
    </div>
  );
};

export default FilterSidebar;