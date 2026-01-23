
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Book Online",
      description: "Choose your vehicle type, select a service package, and schedule a convenient time slot."
    },
    {
      number: "02",
      title: "We Come to You",
      description: "Our professional cleaning team arrives at your location with all necessary equipment."
    },
    {
      number: "03",
      title: "Sparkly Clean",
      description: "We thoroughly clean and service your vehicle while you carry on with your day."
    },
    {
      number: "04",
      title: "Inspection & Pay",
      description: "Inspect our work, provide feedback, and pay securely online or in cash."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-soft-blue/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-soft-pink/30 rounded-full text-sm font-medium text-primary mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SparkleWash Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our hassle-free process makes getting your vehicle cleaned and serviced as easy as possible.
            Here's how it works in four simple steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-soft-blue/50 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="animate-scale-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="bg-white rounded-2xl p-6 shadow-card h-full flex flex-col items-center text-center relative card-hover">
                  <div className="w-16 h-16 rounded-full bg-soft-orange/20 text-primary flex items-center justify-center text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-soft-purple/30"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-soft-blue/40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-primary text-white hover:bg-primary/90 button-hover text-lg px-8 py-6 rounded-full">
            <CalendarDays className="mr-2 h-5 w-5" />
            Book Your Service Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
