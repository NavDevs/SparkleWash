import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Car,
  Phone,
  Sparkles,
  Droplets
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-white/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <div className="relative flex items-center">
            <Car className="h-8 w-8 text-soft-orange" />
            <Droplets className="h-5 w-5 text-primary absolute -top-1 right-0 transform rotate-45" />
            <Sparkles className="h-4 w-4 text-soft-orange absolute -bottom-1 -right-1" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-soft-orange bg-clip-text text-transparent">
              SparkleWash
            </span>
            <span className="text-xs text-gray-500 -mt-1">
              Premium Car Care
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/" 
            className="font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            Services
          </Link>
          <Link 
            to="/pricing" 
            className="font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            Pricing
          </Link>
          <Link 
            to="/about" 
            className="font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            About
          </Link>
          {isLoggedIn && (
            <>
              <Link 
                to="/orders" 
                className="font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                Orders
              </Link>
              <Link 
                to="/profile" 
                className="font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                Profile
              </Link>
              <Button 
                onClick={handleLogout} 
                variant="ghost"
                className="font-medium hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                Logout
              </Button>
            </>
          )}
          {!isLoggedIn && (
            <Link to="/login">
              <Button 
                variant="soft"
                size="lg" 
                className="shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Login
              </Button>
            </Link>
          )}
          <Link to="/booking">
            <Button 
              className="ml-4 bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 rounded-full"
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full bg-soft-blue/20 hover:bg-soft-blue/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-dark-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-dark-charcoal" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col gap-4 p-8">
          <Link 
            to="/" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary hover:border-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary hover:border-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/pricing" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary hover:border-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/about" 
            className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary hover:border-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          {isLoggedIn && (
            <>
              <Link 
                to="/orders" 
                className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary hover:border-primary transition-all duration-300 hover:pl-2"
                onClick={() => setIsOpen(false)}
              >
                Orders
              </Link>
              <Link 
                to="/profile" 
                className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary hover:border-primary transition-all duration-300 hover:pl-2"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <Button 
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                variant="ghost"
                className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary hover:border-primary transition-all duration-300 hover:pl-2 justify-start"
              >
                Logout
              </Button>
            </>
          )}
          {!isLoggedIn && (
            <Link 
              to="/login" 
              className="py-4 text-lg font-medium border-b border-gray-100 hover:text-primary hover:border-primary transition-all duration-300 hover:pl-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
          <Button 
            className="mt-4 bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 rounded-full py-6 text-lg"
            onClick={() => {
              setIsOpen(false);
              navigate('/booking');
            }}
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
