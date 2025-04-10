import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, CreditCard, Shield, Truck } from 'lucide-react';

const Footer = () => {
  return (
    // Added w-full to ensure footer takes full available width
    <footer className="bg-medium-gray text-cream w-full">
      {/* This single container now wraps ALL content for consistent padding/alignment */}
      <div className="container mx-auto px-4 py-8">

        {/* Trust Badges - WITH hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-light-gray pb-8">
          {/* Fast Shipping Badge */}
          <div className="flex flex-col bg-dark-gray items-center text-center p-6 border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-accent/75 hover:scale-105 hover:shadow-lg">
            <Truck className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
            <p className="text-cream/70">Free shipping on orders over $100</p>
          </div>
          {/* Secure Payment Badge */}
          <div className="flex flex-col bg-dark-gray items-center text-center p-6 border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-accent/75 hover:scale-105 hover:shadow-lg">
            <CreditCard className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
            <p className="text-cream/70">100% secure payment processing</p>
          </div>
          {/* Quality Guarantee Badge */}
          <div className="flex flex-col bg-dark-gray items-center text-center p-6 border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-accent/75 hover:scale-105 hover:shadow-lg">
            <Shield className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-cream/70">Authentic jerseys or your money back</p>
          </div>
        </div>

        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Wesh<span className="text-accent">Sports</span></h3>
            <p className="text-cream/70 mb-4">
              Your ultimate destination for premium soccer jerseys from around the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#" // Add your actual Facebook link here
                aria-label="Facebook" // Added for accessibility
                className="group relative inline-block text-cream/70 transition-transform duration-300 hover:text-accent hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#" // Add your actual Twitter link here
                aria-label="Twitter" // Added for accessibility
                className="group relative inline-block text-cream/70 transition-transform duration-300 hover:text-accent hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#" // Add your actual Instagram link here
                aria-label="Instagram" // Added for accessibility
                className="group relative inline-block text-cream/70 transition-transform duration-300 hover:text-accent hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="group">
                <Link to="/" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Home</Link>
              </li>
              <li className="group">
                <Link to="/catalogue" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Shop All</Link>
              </li>
              <li className="group">
                <Link to="/category/club" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Club Jerseys</Link>
              </li>
              <li className="group">
                <Link to="/category/international" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">International Jerseys</Link>
              </li>
              <li className="group">
                <Link to="/category/retro" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Retro Jerseys</Link>
              </li>
              <li className="group">
                <Link to="/category/special" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Special Jerseys</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2">
               <li className="group">
                 <Link to="/FAQ" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">FAQ</Link>
               </li>
               <li className="group">
                 <Link to="/ShippingInfo" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Shipping Info</Link>
               </li>
               <li className="group">
                 <Link to="/ReturnsExchanges" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Returns & Exchanges</Link>
               </li>
               <li className="group">
                 <Link to="/SizeGuide" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Size Guide</Link>
               </li>
               <li className="group">
                 <Link to="/TrackOrder" className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105">Track Order</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - WITH interactive links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                <a
                  href="mailto:business@weshs.com"
                  className="text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105"
                >
                  business@weshs.com
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                <a
                  href="tel:+1-555-123-4567" 
                  className="text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105"
                >
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div> {/* End of 4-column grid */}

        {/* Legal Footer */}
        <div className="border-t border-light-gray mt-12 pt-8 text-cream/70">
          <p className="flex mb-4 justify-center">&copy; {new Date().getFullYear()} Weshs. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <div className="group">
              <Link
                to="/LegalNotice"
                className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105"
              >
                Legal Notice
              </Link>
            </div>
            <div className="group">
              <Link
                to="/privacy-policy"
                className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="group">
              <Link
                to="/TermsofService"
                className="relative inline-block text-cream/70 hover:text-accent transition-all duration-300 group-hover:scale-105"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;