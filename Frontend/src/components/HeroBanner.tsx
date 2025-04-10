import React from 'react';
import { Link } from 'react-router-dom';

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  image,
  title,
  subtitle,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] overflow-hidden mb-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-gray/60"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-left text-left px-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-cream/90 mb-8">{subtitle}</p>
          )}
          <Link 
            to={buttonLink} 
            className="inline-block px-8 py-3 bg-cream text-dark-gray font-semibold rounded-md hover:bg-cream-dark transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;