import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-soft-yellow" 
             style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(254, 198, 161, 0.2) 4px, transparent 0)',
                      backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Cartoon bubbles */}
        <div className="absolute top-1/4 left-10 w-14 h-14 bg-soft-blue rounded-full opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-10 h-10 bg-soft-orange rounded-full opacity-60 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-soft-purple rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-soft-pink rounded-full opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-right">
            <div className="inline-block px-4 py-2 bg-soft-blue rounded-full text-sm font-medium text-primary animate-bounce-slight">
              #1 Door-to-Door Vehicle Cleaning Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Sparkling Clean <span className="text-primary">Vehicles</span>, Delivered to Your Doorstep!
            </h1>
            <p className="text-lg md:text-xl opacity-80 max-w-lg">
              Professional washing & servicing for cars, bikes, and all types of vehicles. We come to you, so you don't have to go anywhere!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-600 text-white hover:bg-orange-700 button-hover text-lg px-8 py-6 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                Book Now
              </Button>
              <Button variant="outline" className="bg-white border-2 border-primary text-primary hover:bg-primary/5 button-hover text-lg px-8 py-6 rounded-full">
                <Calendar className="mr-2 h-5 w-5" />
                View Services
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-soft-blue flex items-center justify-center text-primary">
                  ★
                </div>
                <div className="w-8 h-8 rounded-full bg-soft-orange flex items-center justify-center text-dark-charcoal">
                  ★
                </div>
                <div className="w-8 h-8 rounded-full bg-soft-purple flex items-center justify-center text-primary">
                  ★
                </div>
              </div>
              <span>4.9 stars from 2,000+ happy customers</span>
            </div>
          </div>
          
          <div className="relative animate-scale-up">
            <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-card relative">
              <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/20 to-soft-orange/20 z-0"></div>
              <div className="relative z-10 p-8">
                <svg 
                  className="w-full h-auto" 
                  viewBox="0 0 400 300" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Car body */}
                  <path d="M50,200 C50,180 100,180 130,180 L270,180 C300,180 350,180 350,200 L350,220 C350,240 300,240 270,240 L130,240 C100,240 50,240 50,220 L50,200 Z" fill="#4DA3FF" />
                  
                  {/* Car top */}
                  <path d="M120,180 L150,130 L250,130 L280,180 Z" fill="#2D7CD1" />
                  
                  {/* Windows */}
                  <path d="M150,132 L165,150 L235,150 L250,132 Z" fill="#D3E4FD" />
                  
                  {/* Wheels */}
                  <circle cx="110" cy="220" r="25" fill="#333" />
                  <circle cx="110" cy="220" r="15" fill="#666" />
                  <circle cx="290" cy="220" r="25" fill="#333" />
                  <circle cx="290" cy="220" r="15" fill="#666" />
                  
                  {/* Headlights */}
                  <circle cx="70" cy="190" r="10" fill="#FEF7CD" />
                  <circle cx="330" cy="190" r="10" fill="#FEF7CD" />
                  
                  {/* Soap bubbles */}
                  <circle cx="200" cy="120" r="15" fill="#FFF" fillOpacity="0.8" />
                  <circle cx="230" cy="100" r="10" fill="#FFF" fillOpacity="0.8" />
                  <circle cx="170" cy="100" r="12" fill="#FFF" fillOpacity="0.8" />
                  <circle cx="250" cy="90" r="8" fill="#FFF" fillOpacity="0.8" />
                  <circle cx="150" cy="90" r="9" fill="#FFF" fillOpacity="0.8" />
                  
                  {/* Water droplets */}
                  <path d="M120,160 Q122,155 124,160 Z" fill="#D3E4FD" />
                  <path d="M280,160 Q282,155 284,160 Z" fill="#D3E4FD" />
                  <path d="M190,120 Q192,115 194,120 Z" fill="#D3E4FD" />
                  <path d="M210,120 Q212,115 214,120 Z" fill="#D3E4FD" />
                </svg>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="text-2xl font-bold text-primary">Book Your Wash</div>
                  <div className="w-20 h-10 rounded-full bg-soft-orange text-center leading-10 font-bold">GO</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-soft-purple rounded-full opacity-30"></div>
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-soft-orange rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
