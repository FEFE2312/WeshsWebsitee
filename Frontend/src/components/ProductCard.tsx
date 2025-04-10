import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  image, 
  price, 
  salePrice, 
  isNew, 
  isBestSeller 
}) => {
  return (
    <div className="product-card group">
        {/* Badge */}
        {isNew && (
          <span className="absolute top-2 left-2 bg-accent text-dark-gray text-xs font-bold px-2 py-1 rounded z-10">
            NEW
          </span>
        )}
        {isBestSeller && !isNew && (
          <span className="absolute top-2 left-2 bg-cream text-dark-gray text-xs font-bold px-2 py-1 rounded z-10">
            BEST SELLER
          </span>
        )}
        {salePrice && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
            SALE
          </span>
        )}
        
        {/* Wishlist button */}
        <button className="absolute top-2 right-2 h-8 w-8 rounded-full bg-dark-gray/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <Heart className="h-4 w-4 text-cream" />
        </button>
        
        {/* Image */}
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-cream truncate">{name}</h3>
          <div className="mt-2 flex items-center">
            {salePrice ? (
              <>
                <span className="text-red-400 font-bold">${salePrice.toFixed(2)}</span>
                <span className="ml-2 text-cream/60 line-through text-sm">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-cream font-bold">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
     </div>
  );
};

export default ProductCard;