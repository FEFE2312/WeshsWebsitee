import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '../types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials = [],
}) => {
  if (!Array.isArray(testimonials)) {
    console.error("TestimonialCarousel received invalid testimonials prop:", testimonials);
    return <div className="text-center text-red-500">Error: Invalid testimonial data provided.</div>;
  }

  const canLoop = testimonials.length > 4; // Enable loop if more than 4 testimonials

  return (
    <div className="mb-16 relative group px-4 sm:px-8 lg:px-16">
      <h2 className="section-title mb-8 text-center">What Our Customers Say</h2>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={canLoop}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="testimonial-carousel pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-auto">
            <TestimonialCard
              name={testimonial.name}
              image={testimonial.image}
              productImage={testimonial.productImage}
              rating={testimonial.rating}
              date={testimonial.date}
              text={testimonial.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
