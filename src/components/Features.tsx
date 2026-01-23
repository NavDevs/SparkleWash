
import React from 'react';
import { 
  Clock, 
  MapPin, 
  Shield, 
  Sparkles, 
  BadgeIndianRupee, 
  Settings 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card card-hover">
      <div className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Time-Saving",
      description: "No need to drive to a car wash. We come to you, saving you valuable time.",
      color: "bg-soft-blue/50"
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "Doorstep Service",
      description: "Convenient washing and servicing right at your home or office parking.",
      color: "bg-soft-orange/50"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-purple-500" />,
      title: "Premium Quality",
      description: "Professional-grade cleaning products and techniques for the best results.",
      color: "bg-soft-purple/50"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Fully Insured",
      description: "Peace of mind with our comprehensive insurance coverage for all services.",
      color: "bg-green-100"
    },
    {
      icon: <BadgeIndianRupee className="h-6 w-6 text-blue-600" />,
      title: "Competitive Pricing",
      description: "Affordable packages with transparent pricing in Indian Rupees (INR).",
      color: "bg-blue-100"
    },
    {
      icon: <Settings className="h-6 w-6 text-gray-600" />,
      title: "Basic Servicing",
      description: "Minor maintenance and checks included with every wash service.",
      color: "bg-gray-100"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-soft-purple/30 rounded-full text-sm font-medium text-primary mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Make Us Special</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've designed our service to be as convenient and high-quality as possible,
            giving you a premium vehicle cleaning experience without any hassle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-scale-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
