import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image?: string;        // user’s profile pic
  productImage?: string; // product pic
  rating: number;
  date: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  productImage,
  rating,
  date,
  text,
}) => {
  return (
    <div
      className="bg-medium-gray rounded-lg shadow-md overflow-visible
                 relative flex flex-col pb-10 h-full max-w-xs mx-auto"
    >
      {/* Top: product image in ~2:3 aspect ratio */}
      {productImage && (
        <div className="w-full aspect-w-2 aspect-h-3">
          <img
            src={productImage}
            alt={`Product mentioned by ${name}`}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      )}

      {/* Middle: star rating + testimonial text */}
      <div className="p-3 flex flex-col items-center text-center flex-grow">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
              fill={i < rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <p className="text-sm font-semibold text-cream-700 italic leading-snug mb-2 line-clamp-3">
          "{text}"
        </p>
        {/* Name is bold, bigger, easy to see */}
        <p className="text-sm font-bold text-cream-dark">{name}</p>
      </div>

      {/* Bottom: user profile image overlapping card bottom */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-dark-gray object-cover shadow"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center shadow">
            <span className="text-lg font-bold text-gray-600">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
