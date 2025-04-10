import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, CreditCard, Truck } from 'lucide-react';

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "FC Barcelona Home Jersey 2023/24",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1577212017308-55f90828eae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    quantity: 1,
    size: "M"
  },
  {
    id: 3,
    name: "Brazil Home Jersey 2022 World Cup",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    quantity: 2,
    size: "L"
  }
];

const CartPage = () => {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'soccer10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };
  
  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 100 ? 0 : 5.99;
  const total = subtotal - discount + shipping;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-cream mb-8">Your Cart</h1>
      
      {items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-medium-gray rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-cream mb-6">Cart Items ({items.length})</h2>
                
                {/* Cart Items List */}
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row border-b border-light-gray pb-6">
                      <div className="sm:w-24 h-24 bg-light-gray rounded-md overflow-hidden mb-4 sm:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 sm:ml-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-medium text-cream">
                              <Link to={`/product/${item.id}`} className="hover:text-accent">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="text-cream/70 text-sm mt-1">Size: {item.size}</p>
                          </div>
                          <div className="mt-2 sm:mt-0 text-right">
                            <span className="text-cream font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                            <p className="text-cream/70 text-sm">${item.price.toFixed(2)} each</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <button 
                              className="px-3 py-1 bg-light-gray text-cream border border-cream/30 rounded-l-md hover:bg-dark-gray"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-12 px-2 py-1 bg-light-gray text-cream border-y border-cream/30 text-center focus:outline-none"
                            />
                            <button 
                              className="px-3 py-1 bg-light-gray text-cream border border-cream/30 rounded-r-md hover:bg-dark-gray"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <button 
                            className="text-cream/70 hover:text-red-400 transition-colors"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Link 
                to="/catalogue" 
                className="inline-flex items-center text-cream hover:text-accent transition-colors"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-medium-gray rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-cream mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-cream/80">Subtotal</span>
                    <span className="text-cream">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-cream/80">Shipping</span>
                    <span className="text-cream">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="border-t border-light-gray pt-4 flex justify-between">
                    <span className="font-semibold text-cream">Total</span>
                    <span className="font-semibold text-cream">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-cream/80 mb-2">Promo Code</label>
                  <div className="flex">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      placeholder="Enter promo code"
                      className="input-field flex-grow rounded-r-none"
                    />
                    <button 
                      onClick={applyPromoCode}
                      disabled={promoApplied || !promoCode}
                      className={`px-4 py-2 rounded-r-md font-medium ${
                        promoApplied 
                          ? 'bg-green-500/20 text-green-400 cursor-not-allowed' 
                          : 'bg-cream text-dark-gray hover:bg-cream-dark'
                      }`}
                    >
                      {promoApplied ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-green-400 text-sm mt-1">Promo code applied successfully!</p>
                  )}
                </div>
                
                {/* Checkout Button */}
                <button className="w-full py-3 bg-cream text-dark-gray font-semibold rounded-md hover:bg-cream-dark transition-colors flex items-center justify-center">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                {/* Payment Methods */}
                <div className="mt-6">
                  <p className="text-cream/70 text-sm mb-2">We Accept:</p>
                  <div className="flex items-center space-x-3">
                    <div className="bg-light-gray p-2 rounded">
                      <CreditCard className="h-6 w-6 text-cream/70" />
                    </div>
                    <span className="text-cream/70">Visa, Mastercard, Amex, PayPal</span>
                  </div>
                </div>
                
                {/* Shipping Info */}
                <div className="mt-4 flex items-start">
                  <Truck className="h-5 w-5 text-cream/70 mr-2 mt-0.5" />
                  <span className="text-cream/70 text-sm">
                    Free shipping on orders over $100. Standard delivery 5-7 business days.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-medium-gray rounded-lg">
          <ShoppingBag className="h-16 w-16 text-cream/50 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-cream mb-2">Your cart is empty</h2>
          <p className="text-cream/70 mb-8">Looks like you haven't added any jerseys to your cart yet.</p>
          <Link 
            to="/catalogue" 
            className="inline-block px-6 py-3 bg-cream text-dark-gray font-semibold rounded-md hover:bg-cream-dark transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;