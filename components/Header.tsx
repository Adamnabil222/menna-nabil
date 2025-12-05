import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary-100 rounded-lg text-primary-700 group-hover:bg-primary-600 group-hover:text-white transition-colors">
            <HeartHandshake size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 leading-tight">منة نبيل</span>
            <span className="text-xs text-gray-500 font-medium">أخصائية نفسية</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm lg:text-base relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="primary" className="mr-4">
              احجز جلستك
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-fade-in-down">
          <nav className="flex flex-col p-4 gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-100">
               <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full justify-center">
                  احجز جلستك الآن
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};