import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import ProductCarousel from '../components/ProductCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CategoryCard from '../components/CategoryCard';
import { newArrivals, bestSellers } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';
import { NewsletterModal } from '../components/NewsletterModal';

const HomePage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner 
        image="/images/General/aaa.png"
        title="Your Ultimate Soccer Jersey Store"
        subtitle="Premium quality jerseys from clubs and national teams worldwide"
        buttonText="Shop Now"
        buttonLink="/catalogue"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Best Sellers */}
        <ProductCarousel products={bestSellers} title="Best Sellers" />
       
        {/* Categories */}
        <div className="mb-16">
          <h2 className="section-title mb-8">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories
              .filter(category => ['club', 'international', 'retro', 'special'].includes(category.id))
              .map((category) => (
                <CategoryCard 
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  image={category.image}
                />
            ))}
          </div>
        </div>
        
        {/* New Arrivals */}
        <ProductCarousel products={newArrivals} title="New Arrivals" />
        
        {/* Featured Collection */}
        <div className="mb-16">
          <div className="bg-medium-gray rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-cream mb-4">World Cup Collection</h2>
                <p className="text-cream/80 mb-6">
                  Celebrate the beautiful game with our exclusive collection of World Cup jerseys. 
                  From Brazil to Argentina, France to Germany, we have jerseys from all your favorite national teams.
                </p>
                <Link 
                  to="/category/international" 
                  className="inline-block px-6 py-3 bg-cream text-dark-gray font-semibold rounded-md hover:bg-cream-dark transition-colors duration-300 self-start"
                >
                  Explore Collection
                </Link>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80" 
                  alt="World Cup Collection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <TestimonialCarousel testimonials={testimonials} />
        
        {/* Floating Image Container */}
        <div className="container mx-auto px-4 py-16">
          <div className="relative w-full rounded-lg overflow-hidden shadow-xl h-[500px]">
            {/* Background image filling entire container */}
            <img
              src="/images/General/newsnews1.png" // Replace this path with your own image
              alt="Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Floating Column */}
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[320px] bg-[#FFFFF0] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 rotate-[-5deg]">
              <div className="p-6 flex flex-col gap-4 items-center">
                {/* Inner image with padding */}
                <div className="w-full h-[180px] rounded-md overflow-hidden">
                  <img
                    src="/images/General/offer1.jpg" // Replace this path with your own image
                    alt="Special Offer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-dark-gray mb-2">Subscribe & Save</h3>
                  <p className="text-sm text-dark-gray mb-4">Get 10€ OFF your next order!</p>
                </div>

                {/* Email input button */}
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full py-2 px-4 rounded-md border border-gray-300"
                  />
                  <button className="mt-3 w-full bg-[#d997fc] text-white py-2 rounded-md hover:bg-[#bf75ea] transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
