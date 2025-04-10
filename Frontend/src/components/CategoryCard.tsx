import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image }) => {
  return (
    <Link to={`/category/${id}`} className="block relative overflow-hidden rounded-lg group">
      <div className="absolute inset-0 bg-dark-gray/50 z-10"></div>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cream mb-2">{name}</h3>
          <span className="inline-block px-4 py-2 border border-cream text-cream text-sm font-medium rounded-md group-hover:bg-cream group-hover:text-dark-gray transition-colors duration-300">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;