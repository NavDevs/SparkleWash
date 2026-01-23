
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-soft-yellow p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-8 md:p-10">
        <div className="mb-8 text-center">
          <div className="w-20 h-20 bg-soft-blue rounded-full mx-auto flex items-center justify-center mb-4">
            <span className="text-3xl">🚗</span>
          </div>
          <h1 className="text-4xl font-bold text-dark-charcoal mb-2">About Sparkle Wash</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="space-y-6 text-dark-charcoal">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg">
              Welcome to Sparkle Wash, India's premier door-to-door vehicle washing and servicing solution. 
              Founded with a vision to revolutionize vehicle maintenance, we set out with a simple mission: to make vehicle care convenient, affordable, and eco-friendly 
              for every vehicle owner in India.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              We believe that taking care of your vehicle shouldn't be a hassle. That's why we bring professional 
              cleaning and servicing right to your doorstep, saving you time and effort.
            </p>
            <p className="text-lg">
              Our team of trained professionals uses eco-friendly products and water-saving techniques to ensure 
              that your vehicles stay spotless while we do our part for the environment.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Quality:</strong> We deliver exceptional service with attention to detail</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Reliability:</strong> We keep our promises and arrive on time</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Eco-Consciousness:</strong> We use environmentally friendly products</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Customer-Centricity:</strong> Your satisfaction is our priority</span>
              </li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
            <ul className="list-disc list-inside space-y-3 text-lg ml-4">
              <li>Door-to-door service across major Indian cities</li>
              <li>Comprehensive care for all types of vehicles - cars, bikes, scooters, and more</li>
              <li>Eco-friendly cleaning solutions that are gentle on your vehicle</li>
              <li>Trained and verified professionals</li>
              <li>Transparent pricing with no hidden charges</li>
              <li>Easy online booking and payment options</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-lg">
              Join thousands of satisfied customers who have made Sparkle Wash their trusted partner for 
              vehicle maintenance. Experience the convenience of doorstep service and the joy of a sparkling clean vehicle!
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-soft-blue rounded-lg">
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-lg mt-2">Happy Customers</div>
              </div>
              <div className="p-4 bg-soft-blue rounded-lg">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-lg mt-2">Satisfaction Rate</div>
              </div>
              <div className="p-4 bg-soft-blue rounded-lg">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-lg mt-2">Cities Served</div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="mt-10 flex justify-center">
          <Button asChild className="bg-primary text-white hover:bg-primary/90 button-hover rounded-full">
            <Link to="/" className="inline-flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
