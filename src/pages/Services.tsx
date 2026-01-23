import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import BookingForm from '@/components/BookingForm';
import { Car, Sparkles, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <Car className="w-8 h-8 text-blue-500" />,
      title: "Exterior Wash",
      description: "Complete exterior cleaning with premium products",
      features: ["Hand wash", "Wheel cleaning", "Window cleaning", "Tire dressing"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Interior Detailing",
      description: "Deep cleaning of your car's interior",
      features: ["Vacuum cleaning", "Dashboard wiping", "Seat cleaning", "Floor mat washing"]
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Paint Protection",
      description: "Long-lasting protection for your car's paint",
      features: ["Waxing", "Ceramic coating", "Paint sealant", "UV protection"]
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Express Service",
      description: "Quick wash when you're in a hurry",
      features: ["15-minute service", "Exterior wash", "Quick interior vacuum", "Tire shine"]
    }
  ];

  return (
    <div className="min-h-screen bg-soft-yellow">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-soft-blue/20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional cleaning and servicing for all types of vehicles, delivered right to your doorstep.
          </p>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-center mb-3">{service.title}</h2>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => navigate('/booking')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
      <HowItWorks />
      <BookingForm />
      <Footer />
    </div>
  );
}
