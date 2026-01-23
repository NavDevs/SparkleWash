import React, { useState } from 'react';
import { 
  Car, 
  Bike, 
  Truck, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  Caravan 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from "@/hooks/use-toast";
import { DateTimePicker } from './DateTimePicker';

// Vehicle type selection component
const VehicleTypeSelector = ({ selected, onChange }: { selected: string, onChange: (type: string) => void }) => {
  const vehicles = [
    { id: 'car', icon: <Car className="h-6 w-6" />, label: 'Car' },
    { id: 'bike', icon: <Bike className="h-6 w-6" />, label: 'Bike' },
    { id: 'truck', icon: <Truck className="h-6 w-6" />, label: 'Truck' },
    { id: 'other', icon: <Caravan className="h-6 w-6" />, label: 'Other' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {vehicles.map((vehicle) => (
        <button
          key={vehicle.id}
          className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
            selected === vehicle.id 
              ? 'border-soft-orange bg-soft-orange/10' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => onChange(vehicle.id)}
          type="button"
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
            selected === vehicle.id ? 'bg-soft-orange text-dark-charcoal' : 'bg-soft-blue/40 text-primary'
          }`}>
            {vehicle.icon}
          </div>
          <span className="font-medium">{vehicle.label}</span>
        </button>
      ))}
    </div>
  );
};

// Service type selection component
const ServiceTypeSelector = ({ selected, onChange }: { selected: string, onChange: (type: string) => void }) => {
  const services = [
    { id: 'basic', label: 'Basic Wash', price: '₹299' },
    { id: 'standard', label: 'Standard', price: '₹599' },
    { id: 'premium', label: 'Premium', price: '₹999' },
    { id: 'full', label: 'Full Service', price: '₹1499' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {services.map((service) => (
        <button
          key={service.id}
          className={`p-4 rounded-xl border-2 transition-all ${
            selected === service.id 
              ? 'border-soft-orange bg-soft-orange/10' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => onChange(service.id)}
          type="button"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{service.label}</span>
            <span className={`font-bold ${
              selected === service.id ? 'text-soft-orange' : 'text-primary'
            }`}>
              {service.price}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {service.id === 'basic' && 'Exterior wash, wheels & tires cleaning'}
            {service.id === 'standard' && 'Basic + interior vacuum & glass cleaning'}
            {service.id === 'premium' && 'Standard + wax, dashboard polish & basic check'}
            {service.id === 'full' && 'Premium + full detail & complete service check'}
          </div>
        </button>
      ))}
    </div>
  );
};

const BookingForm = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [serviceType, setServiceType] = useState('standard');
  const [selectedDateTime, setSelectedDateTime] = useState<Date | undefined>(undefined);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.phone || !formState.address || !selectedDateTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Format date and time for display
    const formattedDate = selectedDateTime.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = selectedDateTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    
    // Success notification with booking details
    toast({
      title: "Booking Confirmed!",
      description: `Your ${serviceType} ${vehicleType} service is scheduled for ${formattedDate} at ${formattedTime}.`,
      variant: "default"
    });
    
    // Clear form
    setFormState({
      name: '',
      phone: '',
      email: '',
      address: '',
    });
    setSelectedDateTime(undefined);
  };

  return (
    <div className="py-20 bg-soft-yellow" id="booking">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Book a Service
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Vehicle Cleaning</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to schedule a convenient time for our team to visit your location
            and provide our professional cleaning and servicing.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-card max-w-4xl mx-auto p-6 md:p-10 animate-scale-up">
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold mb-6">1. Select Your Vehicle Type</h3>
            <VehicleTypeSelector selected={vehicleType} onChange={setVehicleType} />
            
            <h3 className="text-xl font-bold mb-6 mt-10">2. Choose a Service Package</h3>
            <ServiceTypeSelector selected={serviceType} onChange={setServiceType} />
            
            <h3 className="text-xl font-bold mb-6 mt-10">3. Schedule Date & Time</h3>
            <div className="mb-6">
              <DateTimePicker
                date={selectedDateTime}
                onSelect={setSelectedDateTime}
                label="Select date and time"
              />
            </div>
            
            <h3 className="text-xl font-bold mb-6 mt-10">4. Your Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="block mb-2">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="block mb-2">Phone Number</Label>
                <div className="relative">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                    placeholder="+91"
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2">Email Address (Optional)</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Label htmlFor="address" className="block mb-2">Service Location</Label>
                <div className="relative">
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={formState.address}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button type="submit" className="w-full md:w-auto">
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
