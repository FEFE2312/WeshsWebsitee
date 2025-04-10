import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
  stock: number;
  description: string;
  countdown?: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(prev => !prev);
  };

  useEffect(() => {
    const productData = products.find(p => p.id === parseInt(id!));
    if (!productData) {
      setError("Product not found");
      setLoading(false);
      return;
    }
    setProduct(productData);
    setLoading(false);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-page">
      {/* Main Product Display */}
      <div className="product-main">
        <p>Product ID: {id}</p>
        <img src={product.image} alt={product.name} className="product-image" />
        <h1>{product.name}</h1>
        <div className="prices">
          {product.salePrice ? (
            <>
              <span className="sale-price">${product.salePrice.toFixed(2)}</span>
              <span className="regular-price"><s>${product.price.toFixed(2)}</s></span>
            </>
          ) : (
            <span className="price">${product.price.toFixed(2)}</span>
          )}
        </div>
        {product.countdown && (
          <div className="offer-countdown">
            <p>Offer ends in: {product.countdown}</p>
          </div>
        )}
        <div className="stock-banner">
          <p>{product.stock} left in stock!</p>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <button onClick={toggleDescription}>
          {showDescription ? 'Hide Details' : 'Show Details'}
        </button>
        {showDescription && (
          <div className="description">
            <p>{product.description}</p>
          </div>
        )}
        <div className="size-chart">
          <h3>Size Chart</h3>
          <p>Size chart will be added here.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What our customers say</h2>
        <p>Customer testimonial goes here...</p>
      </div>

      {/* Recommended Products */}
      <div className="recommended-products">
        <h2>Recommended Products</h2>
        <p>Recommended product preview...</p>
      </div>
    </div>
  );
};

export default ProductPage;
