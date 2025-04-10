import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CataloguePage from './pages/CataloguePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import FAQ from "./pages/Footer legal/FAQ";
import SizeGuide from "./pages/Footer legal/SizeGuide";
import PrivacyPolicy from './components/privacypolicy';
import TermsOfService from './components/TermsOfService';
import LegalNotice from './components/LegalNotice';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/SizeGuide" element={<SizeGuide />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/LegalNotice" element={<LegalNotice />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
