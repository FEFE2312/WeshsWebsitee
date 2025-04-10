import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import { Product } from '../types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title }) => {
  return (
    <div className="mb-16">
      <h2 className="section-title mb-8">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="product-carousel"
      >
        {products.map((product) => (
  <SwiperSlide key={product.id}>
    <Link to={`/product/${product.id}`} className="block">
      <ProductCard
        id={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
        salePrice={product.salePrice}
        isNew={product.isNew}
        isBestSeller={product.isBestSeller}
      />
    </Link>
  </SwiperSlide>
))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;