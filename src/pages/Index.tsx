import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Shield, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  const handleBookNow = () => {
    navigate("/booking");
  };

  const handleViewServices = () => {
    navigate("/services");
  };
  
  return (
    <div className="min-h-screen bg-soft-yellow">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-soft-yellow" 
               style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(254, 198, 161, 0.2) 4px, transparent 0)',
                        backgroundSize: '40px 40px' }}>
          </div>
          
          {/* Cartoon bubbles */}
          <div className="absolute top-1/4 left-10 w-14 h-14 bg-blue-200 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-10 h-10 bg-orange-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-purple-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-pink-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-200 rounded-full text-sm font-medium text-blue-700">
                #1 Door-to-Door Vehicle Cleaning Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
                Sparkling Clean <span className="text-blue-600">Vehicles</span>, Delivered to Your Doorstep!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Professional washing & servicing for cars, bikes, and all types of vehicles. We come to you, so you don't have to go anywhere!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-orange-400 text-white hover:bg-orange-500 text-lg px-8 py-6 rounded-full"
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full"
                  onClick={handleViewServices}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  View Services
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700">
                    ★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-700">
                    ★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700">
                    ★
                  </div>
                </div>
                <span>4.9 stars from 2,000+ happy customers</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 z-0"></div>
                <div className="relative z-10 p-8">
                  <div className="w-full h-64 flex items-center justify-center">
                    <div className="relative">
                      {/* Simple car illustration */}
                      <div className="w-64 h-32 bg-blue-500 rounded-t-3xl rounded-b-lg relative">
                        {/* Car windows */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-16 bg-blue-700 rounded-t-2xl"></div>
                        
                        {/* Wheels */}
                        <div className="absolute -bottom-5 left-6 w-12 h-12 bg-gray-800 rounded-full border-4 border-gray-300"></div>
                        <div className="absolute -bottom-5 right-6 w-12 h-12 bg-gray-800 rounded-full border-4 border-gray-300"></div>
                        
                        {/* Bubbles */}
                        <div className="absolute -top-8 left-10 w-6 h-6 bg-white rounded-full opacity-80"></div>
                        <div className="absolute -top-6 left-20 w-4 h-4 bg-white rounded-full opacity-80"></div>
                        <div className="absolute -top-10 right-10 w-5 h-5 bg-white rounded-full opacity-80"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-2xl font-bold text-blue-700">Book Your Wash</div>
                    <div className="w-20 h-10 rounded-full bg-orange-400 text-white text-center leading-10 font-bold">GO</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-purple-200 rounded-full opacity-30"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-orange-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Features That Make Us Special</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've designed our service to be as convenient and high-quality as possible,
              giving you a premium vehicle cleaning experience without any hassle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-blue-100">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Time-Saving</h3>
              <p className="text-gray-600">No need to drive to a car wash. We come to you, saving you valuable time.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-orange-100">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Doorstep Service</h3>
              <p className="text-gray-600">Convenient washing and servicing right at your home or office parking.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-purple-100">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600">Professional-grade cleaning products and techniques for the best results.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-green-100">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Fully Insured</h3>
              <p className="text-gray-600">Peace of mind with our comprehensive insurance coverage for all services.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6v12m-8-6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Competitive Pricing</h3>
              <p className="text-gray-600">Affordable packages with transparent pricing in Indian Rupees (INR).</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-gray-100">
                <svg className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7.8c0 1.5-1.3 2.8-3 2.8s-3-1.3-3-2.8c0-1.5 1.3-2.8 3-2.8s3 1.3 3 2.8z" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 18.9c0-2.8 3.3-5.1 7-5.1s7 2.3 7 5.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Basic Servicing</h3>
              <p className="text-gray-600">Minor maintenance and checks included with every wash service.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Ready for a Spotless Vehicle?</h2>
            <p className="text-xl mb-10 text-gray-600">
              Experience the convenience of professional vehicle cleaning and servicing right at your doorstep. Book your first service today and get ₹100 off!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-6 rounded-full"
                onClick={handleBookNow}
              >
                Book Your First Service
              </Button>
              <Button variant="outline" className="bg-white border-2 border-orange-400 text-orange-500 hover:bg-orange-50 text-lg px-8 py-6 rounded-full">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
