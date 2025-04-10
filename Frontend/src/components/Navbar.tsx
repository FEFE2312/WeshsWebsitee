import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, ChevronDown } from 'lucide-react';
import { categories } from '../data/categories';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // For Clubs flyout: track if flyout is active and which league is hovered.
  const [isClubsHovered, setIsClubsHovered] = useState(false);
  const [hoveredLeague, setHoveredLeague] = useState<string | null>(null);

  const clubCategory = categories.find(cat => cat.id === 'club');
  const intlCategory = categories.find(cat => cat.id === 'international');

  return (
    <nav className="bg-medium-gray shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-cream">
                Wesh<span className="text-accent">Sport</span>s
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {/* Home with effects */}
              <li className="relative group">
                <Link
                  to="/"
                  className="text-cream transition-colors transform duration-300 group-hover:scale-105 relative inline-block hover:text-accent"
                >
                  Home
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                </Link>
              </li>

              {/* All Categories with scroll-out dropdown */}
              <li className="relative group">
                <div className="relative">
                  <Link
                    to="/catalogue"
                    className="text-cream transition-colors transform duration-300 group-hover:scale-105 relative inline-block hover:text-accent"
                  >
                    All Categories
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                  </Link>
                  {/* Invisible bridging element to cover the gap */}
                  <div className="absolute top-full left-0 h-2 w-full" />
                </div>
                <ul
                  className="absolute left-0 mt-2 w-56 bg-medium-gray shadow-lg rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <li className="px-4 py-2 hover:bg-accent hover:text-dark-gray transition-colors">
                    <Link to="/category/newarrivals">New Arrivals</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-accent hover:text-dark-gray transition-colors">
                    <Link to="/category/bestsellers">Best Sellers</Link>
                  </li>
                </ul>
              </li>

              {/* Clubs Flyout with invisible bridge */}
              <li
                className="relative group"
                onMouseEnter={() => setIsClubsHovered(true)}
                onMouseLeave={() => {
                  setIsClubsHovered(false);
                  setHoveredLeague(null);
                }}
              >
                <div className="relative">
                  <Link
                    to="/category/club"
                    className="flex items-center space-x-1 text-cream transition-colors transform duration-300 group-hover:scale-105 relative hover:text-accent"
                  >
                    <span>Clubs</span>
                    <ChevronDown className="h-4 w-4" />
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                  </Link>
                  {/* Invisible bridging element for Clubs */}
                  <div className="absolute top-full left-0 h-2 w-full" />
                </div>
                {isClubsHovered && (
                  <>
                    {/* Column 1: Leagues */}
                    <ul className="absolute top-full left-0 mt-2 w-56 min-h-[200px] bg-medium-gray shadow-lg rounded-lg overflow-hidden">
                      {clubCategory?.subcategories?.map(league => (
                        <li
                          key={league.id}
                          onMouseEnter={() => setHoveredLeague(league.id)}
                          className="px-4 py-2 hover:bg-accent hover:text-dark-gray transition-colors cursor-pointer"
                        >
                          <Link to={`/category/club/${league.id}`}>
                            {league.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {/* Column 2: Clubs */}
                    {hoveredLeague && (
                      <ul
                        className="absolute top-full mt-2 w-56 min-h-[200px] bg-medium-gray shadow-lg rounded-lg overflow-hidden"
                        style={{ left: "calc(14rem + 0.5rem)" }}
                      >
                        {clubCategory?.subcategories
                          ?.find(league => league.id === hoveredLeague)
                          ?.subcategories?.map(club => (
                            <li
                              key={club.id}
                              className="px-4 py-2 hover:bg-accent hover:text-dark-gray transition-colors"
                            >
                              <Link to={`/category/club/${hoveredLeague}/${club.id}`}>
                                {club.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    )}
                    {/* Invisible gap element to catch mouse events between columns */}
                    <div className="absolute top-full mt-2 h-[200px] w-2" style={{ left: "14rem" }} />
                  </>
                )}
              </li>

              {/* International with scroll-out dropdown and invisible bridge */}
              <li className="relative group">
                <div className="relative">
                  <Link
                    to="/category/international"
                    className="flex items-center space-x-1 text-cream transition-colors transform duration-300 group-hover:scale-105 relative hover:text-accent"
                  >
                    <span>International</span>
                    <ChevronDown className="h-4 w-4" />
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                  </Link>
                  {/* Invisible bridging element for International */}
                  <div className="absolute top-full left-0 h-2 w-full" />
                </div>
                <ul className="absolute left-0 mt-2 w-56 bg-medium-gray shadow-lg rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {/* Test category for International */}
                  <li className="px-4 py-2 hover:bg-accent hover:text-dark-gray transition-colors">
                    <Link to="/category/international/germany">Germany</Link>
                  </li>
                </ul>
              </li>

              {/* Retro */}
              <li className="relative group">
                <Link
                  to="/category/retro"
                  className="text-cream transition-colors transform duration-300 group-hover:scale-105 relative inline-block hover:text-accent"
                >
                  Retro
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                </Link>
              </li>

              {/* Special */}
              <li className="relative group">
                <Link
                  to="/category/special"
                  className="text-cream transition-colors transform duration-300 group-hover:scale-105 relative inline-block hover:text-accent"
                >
                  Special
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-cream hover:text-accent transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <div className= "group">
            <Link 
            to="/login" className="relative inline-block text-cream hover:text-accent  transition-all duration-300 group-hover:scale-105">
              <User className="h-5 w-5" />
            </Link>
            </div>
            <Link to="/cart" className="relative text-cream hover:text-accent transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-dark-gray text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative text-cream hover:text-accent transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-dark-gray text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-cream hover:text-accent focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-light-gray">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for jerseys..."
                className="w-full py-2 px-4 pr-10 rounded-md bg-light-gray text-cream border border-cream/20 focus:outline-none focus:ring-2 focus:ring-cream/30"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-cream/50" />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-light-gray">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link to="/" className="text-cream hover:text-accent transition-colors px-4 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="text-cream hover:text-accent transition-colors px-4 py-2">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/category/club" className="text-cream hover:text-accent transition-colors px-4 py-2">
                  Clubs
                </Link>
              </li>
              <li>
                <Link to="/category/international" className="text-cream hover:text-accent transition-colors px-4 py-2">
                  International
                </Link>
              </li>
              <li>
                <Link to="/category/retro" className="text-cream hover:text-accent transition-colors px-4 py-2">
                  Retro
                </Link>
              </li>
              <li>
                <Link to="/category/special" className="text-cream hover:text-accent transition-colors px-4 py-2">
                  Special
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
