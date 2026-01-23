
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white relative">
      {/* Decorative top border */}
      <div className="h-3 bg-gradient-to-r from-soft-blue via-soft-orange to-soft-purple"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
              <Car className="h-8 w-8 text-soft-orange" />
              <span className="bg-gradient-to-r from-primary to-soft-orange bg-clip-text text-transparent">
                SparkleWash
              </span>
            </Link>
            <p className="text-gray-600">
              Professional door-to-door vehicle cleaning and basic servicing for cars, bikes, and all types of vehicles across India.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-soft-blue/20 hover:bg-soft-blue/40 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-soft-blue/20 hover:bg-soft-blue/40 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-soft-blue/20 hover:bg-soft-blue/40 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-soft-blue/20 hover:bg-soft-blue/40 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#booking" className="text-gray-600 hover:text-primary transition-colors">
                  Book a Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Car Washing & Servicing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Bike Cleaning & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Commercial Vehicle Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Special Vehicle Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Corporate Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-soft-orange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Customer Support</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-soft-orange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-gray-600">info@sparklewash.in</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-soft-orange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-gray-600">123 Clean Street, Washing Plaza, Mumbai - 400001, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SparkleWash. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-sm text-gray-500 hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
