
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  vehicle: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Car Owner",
      comment: "The SparkleWash team did an amazing job on my Hyundai Creta. They arrived on time, were professional, and left my car looking brand new. The convenience of having them come to my apartment is unbeatable!",
      rating: 5,
      vehicle: "Car"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Bike Enthusiast",
      comment: "I've been using SparkleWash for my Royal Enfield for 6 months now. The team is careful with the chrome parts and always makes sure the engine area is properly cleaned. Great service at a reasonable price.",
      rating: 5,
      vehicle: "Bike"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Business Owner",
      comment: "We use SparkleWash for our entire delivery fleet. Their commercial vehicle package is comprehensive and the service checks have helped us avoid several potential issues. Highly recommended!",
      rating: 4,
      vehicle: "Truck"
    },
    {
      id: 4,
      name: "Ananya Patel",
      role: "Travel Blogger",
      comment: "Getting my caravan cleaned was always a hassle until I found SparkleWash. They have the right equipment and knowledge to clean even the hard-to-reach spots. The team is thorough and friendly.",
      rating: 5,
      vehicle: "Caravan"
    }
  ];
  
  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="py-20 bg-soft-purple/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-soft-purple/30 rounded-full text-sm font-medium text-primary mb-4">
            Customer Feedback
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in providing exceptional service to all our customers.
            Here's what some of them have to say about their experience with SparkleWash.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Quote icon decoration */}
          <div className="absolute -top-10 -left-8 opacity-10">
            <Quote className="w-20 h-20 text-primary" />
          </div>
          
          {/* Testimonial cards */}
          <div className="relative overflow-hidden h-[360px] rounded-3xl">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ease-in-out transform p-8 bg-white rounded-3xl shadow-card ${
                  index === activeIndex 
                    ? "translate-x-0 opacity-100" 
                    : index < activeIndex 
                      ? "-translate-x-full opacity-0" 
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-soft-orange/20 flex items-center justify-center text-soft-orange font-bold text-xl mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role} • {testimonial.vehicle}</div>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          fill={i < testimonial.rating ? "#FEC6A1" : "none"} 
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-soft-orange" : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="text-right text-sm text-gray-400">
                    Verified Customer
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-button flex items-center justify-center hover:bg-soft-blue/20 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? "bg-soft-orange scale-125" 
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-button flex items-center justify-center hover:bg-soft-blue/20 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
