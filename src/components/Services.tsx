import React from 'react';
import { Car, Bike, Truck, Caravan, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  price, 
  popular = false 
}) => {
  return (
    <div className={`relative bg-white rounded-2xl p-6 shadow-card card-hover ${
      popular ? 'border-2 border-soft-orange' : 'border border-gray-100'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-soft-orange text-dark-charcoal font-bold py-1 px-4 rounded-full text-sm">
          Most Popular
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
          popular ? 'bg-soft-orange text-dark-charcoal' : 'bg-soft-blue text-primary'
        }`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-end justify-between mb-4">
            <div>
              <span className="text-gray-500 text-sm">Starting from</span>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-dark-charcoal">₹{price}</span>
              </div>
            </div>
            <span className="text-sm text-gray-500">Per service</span>
          </div>
          
          <Button className={`w-full ${
            popular 
              ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300' 
              : 'bg-soft-blue text-primary hover:bg-soft-blue/90'
          } button-hover`}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Car Wash & Service",
      description: "Complete car cleaning and basic servicing at your doorstep",
      features: [
        "Exterior wash & polish",
        "Interior vacuum & cleaning",
        "Dashboard & console polishing",
        "Tire dressing & rim cleaning",
        "Basic fluid check"
      ],
      price: "599",
      popular: true
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "Bike Wash & Service",
      description: "Professional bike cleaning and maintenance service",
      features: [
        "Body wash & polish",
        "Chain lubrication",
        "Seat & handle cleaning",
        "Tire pressure check",
        "Basic service check"
      ],
      price: "299"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Commercial Vehicle",
      description: "Heavy-duty cleaning for commercial vehicles",
      features: [
        "Exterior pressure wash",
        "Cabin cleaning & sanitization",
        "Undercarriage wash",
        "Chrome & metal polishing",
        "Basic maintenance check"
      ],
      price: "1299"
    },
    {
      icon: <Caravan className="h-8 w-8" />,
      title: "Special Vehicles",
      description: "Custom cleaning for RVs, caravans and special vehicles",
      features: [
        "Full exterior detailing",
        "Interior deep cleaning",
        "Awning & exterior component cleaning",
        "Roof & solar panel cleaning",
        "Systems check"
      ],
      price: "1999"
    }
  ];

  return (
    <div className="py-20 bg-soft-blue/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-soft-orange/30 rounded-full text-sm font-medium text-dark-charcoal mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vehicle Cleaning & Servicing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of professional cleaning and basic servicing options for all types of vehicles.
            Our trained professionals come to your location with all necessary equipment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-scale-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
