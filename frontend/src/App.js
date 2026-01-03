import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import { Toaster } from './components/ui/sonner';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
