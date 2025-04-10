import React from "react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative bg-medium-gray rounded-lg overflow-hidden md:max-w-xl w-full max-w-lg animate-fadeIn shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-cream hover:text-accent text-2xl font-bold z-10"
        >
          &times;
        </button>

        <div className="newsletter-inner grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image container */}
          <div className="p-4 flex items-center justify-center">
            <div className="w-full max-w-xs aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/General/offer1.jpg"
                alt="Special Offer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text and Button */}
          <div className="p-8 flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-cream mb-4">10€ OFF!</h2>
            <p className="text-cream/80 mb-6 max-w-2xl">
              Subscribe to our newsletter and get a 10€ discount on your first order.
            </p>
            <div className="flex flex-col max-w-md mx-auto gap-3 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="input-field p-2 rounded-md w-full"
              />
              <button className="btn-primary whitespace-nowrap p-2 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;



