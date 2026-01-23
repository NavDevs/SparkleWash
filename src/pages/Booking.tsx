import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { 
  Car, 
  Bike, 
  ArrowRight, 
  CreditCard, 
  Wallet, 
  IndianRupee,
  Smartphone,
  QrCode,
  CircleDollarSign,
  Coins,
  Building2,
  CreditCardIcon,
  BanknoteIcon,
  ShieldCheck,
  CheckCircle2,
  Smartphone as GooglePayIcon,
  Wallet as PhonePeIcon,
  CreditCard as PaytmIcon,
  IndianRupee as BhimIcon
} from "lucide-react";
import { DateTimePicker } from "@/components/DateTimePicker";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PAYMENT_LOGOS } from "@/assets/payment-logos";

// Payment options with icons
const PAYMENT_METHODS = {
  cod: {
    icon: BanknoteIcon,
    title: "Cash on Delivery",
    description: "Pay after service completion",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  card: {
    icon: CreditCardIcon,
    title: "Credit/Debit Card",
    description: "Secure card payment",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    subIcons: [
      { icon: Building2, label: "Bank Cards" },
      { icon: ShieldCheck, label: "Secure" },
      { icon: CheckCircle2, label: "Instant" }
    ]
  }
};

// Payment options with brand colors
const UPI_PAYMENT_OPTIONS = [
  {
    id: 'gpay',
    name: 'Google Pay',
    description: 'Fast & Secure',
    brandColor: '#4285f4',
    icon: GooglePayIcon
  },
  {
    id: 'phonepe',
    name: 'PhonePe',
    description: 'UPI & Wallet',
    brandColor: '#5f259f',
    icon: PhonePeIcon
  },
  {
    id: 'paytm',
    name: 'Paytm',
    description: 'Scan & Pay',
    brandColor: '#00baf2',
    icon: PaytmIcon
  },
  {
    id: 'bhim',
    name: 'BHIM UPI',
    description: 'Direct Bank',
    brandColor: '#12a547',
    icon: BhimIcon
  }
];

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
    vehicleType: "car" as "car" | "bike",
  });

  // Pricing based on vehicle type
  const pricing = {
    car: {
      basic: 499,
      standard: 799,
      premium: 1299,
    },
    bike: {
      basic: 299,
      standard: 499,
      premium: 899,
    },
  };

  const [selectedPackage, setSelectedPackage] = useState<"basic" | "standard" | "premium">("standard");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('cod');
  const [upiId, setUpiId] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVehicleChange = (value: "car" | "bike") => {
    setFormData(prev => ({ ...prev, vehicleType: value }));
  };

  const totalAmount = pricing[formData.vehicleType][selectedPackage] + 99;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.address || !formData.city || !formData.pincode || !selectedDate) {
      toast.error("Please fill in all required fields and select a date");
      return;
    }

    if (selectedPaymentMethod === 'upi' && !upiId) {
      toast.error("Please enter UPI ID");
      return;
    }

    // Here you would typically make an API call to create the booking
    toast.success("Booking confirmed successfully!");
    
    // Navigate to the confirmation page with order details
    navigate('/order-confirmation', {
      state: {
        orderDetails: {
          date: selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          time: selectedDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          }),
          address: formData.address,
          city: formData.city,
          pincode: formData.pincode,
          amount: totalAmount,
          paymentMethod: selectedPaymentMethod.toUpperCase(),
          name: formData.name,
          mobile: formData.mobile,
          service: `${formData.vehicleType.charAt(0).toUpperCase() + formData.vehicleType.slice(1)} - ${selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} Package`
        }
      }
    });
  };

  const services = [
    { id: 'exterior', name: 'Exterior Wash', price: 29.99 },
    { id: 'interior', name: 'Interior Detailing', price: 89.99 },
    { id: 'paint', name: 'Paint Protection', price: 149.99 },
    { id: 'express', name: 'Express Service', price: 19.99 }
  ];

  // Add validation state
  const isFormValid = React.useMemo(() => {
    const requiredFields = [
      formData.name,
      formData.mobile,
      formData.address,
      formData.city,
      formData.pincode,
      selectedDate,
      formData.vehicleType,
      selectedPackage
    ];

    const isUpiValid = selectedPaymentMethod === 'upi' ? Boolean(upiId) : true;
    
    return requiredFields.every(Boolean) && isUpiValid;
  }, [formData, selectedDate, selectedPackage, selectedPaymentMethod, upiId]);

  // Update input classes based on validation
  const getInputClassName = (value: string) => {
    return `${value ? 'border-green-500 bg-green-50/50' : ''} focus:border-soft-orange`;
  };

  return (
    <div className="min-h-screen bg-soft-yellow">
      <div className="container mx-auto px-6 pt-24 pb-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              Book a Service
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Complete Your Booking</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please provide your details to schedule your doorstep vehicle cleaning service
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleBooking}>
              {/* Vehicle Type Selection - update the classes */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Select Your Vehicle Type</h2>
                <RadioGroup 
                  defaultValue={formData.vehicleType} 
                  onValueChange={(value) => handleVehicleChange(value as "car" | "bike")}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className={`border rounded-xl p-4 flex items-center gap-4 flex-1 transition-all duration-200 ${
                    formData.vehicleType === "car" 
                      ? "border-soft-orange bg-soft-orange/10 shadow-md" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}>
                    <RadioGroupItem value="car" id="car" className="text-soft-orange" />
                    <Label htmlFor="car" className="flex items-center gap-2 cursor-pointer">
                      <Car className="w-5 h-5 text-soft-orange" />
                      <span>Car</span>
                    </Label>
                  </div>
                  
                  <div className={`border rounded-xl p-4 flex items-center gap-4 flex-1 transition-all duration-200 ${
                    formData.vehicleType === "bike" 
                      ? "border-soft-orange bg-soft-orange/10 shadow-md" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}>
                    <RadioGroupItem value="bike" id="bike" className="text-soft-orange" />
                    <Label htmlFor="bike" className="flex items-center gap-2 cursor-pointer">
                      <Bike className="w-5 h-5 text-soft-orange" />
                      <span>Bike</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Service Package Selection - update the classes */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Choose a Service Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(["basic", "standard", "premium"] as const).map((pkg) => (
                    <div
                      key={pkg}
                      className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                        selectedPackage === pkg 
                          ? "border-soft-orange bg-soft-orange/10 shadow-md transform scale-[1.02]" 
                          : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium capitalize">{pkg}</span>
                        <span className="font-bold text-soft-orange">
                          ₹{pricing[formData.vehicleType][pkg]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {pkg === "basic" && "Exterior wash, wheels & tires cleaning"}
                        {pkg === "standard" && "Basic + interior vacuum & glass cleaning"}
                        {pkg === "premium" && "Standard + wax & dashboard polish"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule Selection */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Choose Your Preferred Time</h2>
                <div className="space-y-4">
                  <DateTimePicker
                    date={selectedDate}
                    onSelect={setSelectedDate}
                    label="Select service date and time"
                  />
                  {selectedDate && (
                    <p className="text-sm text-gray-600">
                      Selected: {selectedDate.toLocaleDateString()} at{' '}
                      {selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Details - update input classes */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Your Contact Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className={getInputClassName(formData.name)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className={getInputClassName(formData.mobile)}
                    />
                  </div>
                </div>
              </div>

              {/* Address Details - update input classes */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Service Location</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street, Apartment 4B"
                      required
                      className={getInputClassName(formData.address)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Mumbai"
                        required
                        className={getInputClassName(formData.city)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="400001"
                        required
                        className={getInputClassName(formData.pincode)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Choose Payment Method</h2>
                <RadioGroup 
                  defaultValue={selectedPaymentMethod}
                  onValueChange={setSelectedPaymentMethod}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {/* Cash on Delivery */}
                  <div className={`border-2 rounded-xl p-6 flex items-start gap-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 ${
                    selectedPaymentMethod === 'cod' ? 'border-soft-orange bg-soft-orange/10 shadow-lg' : 'border-gray-200 hover:border-soft-orange/50 hover:shadow-md'
                  }`}>
                    <RadioGroupItem value="cod" id="cod" className="text-soft-orange mt-1" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full ${PAYMENT_METHODS.cod.bgColor} flex items-center justify-center`}>
                          <BanknoteIcon className={`w-5 h-5 ${PAYMENT_METHODS.cod.color}`} />
                        </div>
                        <div className="font-medium">{PAYMENT_METHODS.cod.title}</div>
                      </div>
                      <div className="text-sm text-gray-500 ml-13">{PAYMENT_METHODS.cod.description}</div>
                      <div className="flex gap-3 mt-3 ml-13">
                        <Coins className="w-5 h-5 text-gray-400" />
                        <IndianRupee className="w-5 h-5 text-gray-400" />
                      </div>
                    </Label>
                  </div>

                  {/* Card Payment */}
                  <div className={`border-2 rounded-xl p-6 flex items-start gap-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 ${
                    selectedPaymentMethod === 'card' ? 'border-soft-orange bg-soft-orange/10 shadow-lg' : 'border-gray-200 hover:border-soft-orange/50 hover:shadow-md'
                  }`}>
                    <RadioGroupItem value="card" id="card" className="text-soft-orange mt-1" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full ${PAYMENT_METHODS.card.bgColor} flex items-center justify-center`}>
                          <CreditCardIcon className={`w-5 h-5 ${PAYMENT_METHODS.card.color}`} />
                        </div>
                        <div className="font-medium">{PAYMENT_METHODS.card.title}</div>
                      </div>
                      <div className="text-sm text-gray-500 ml-13">{PAYMENT_METHODS.card.description}</div>
                      <div className="flex gap-3 mt-3 ml-13">
                        {PAYMENT_METHODS.card.subIcons.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <div key={index} className="flex flex-col items-center">
                              <Icon className="w-5 h-5 text-gray-400" />
                              <span className="text-xs text-gray-500 mt-1">{item.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </Label>
                  </div>

                  {/* UPI Payment */}
                  <div className={`border-2 rounded-xl p-6 col-span-full transition-all duration-300 ${
                    selectedPaymentMethod === 'upi' ? 'border-soft-orange bg-soft-orange/10 shadow-lg' : 'border-gray-200'
                  }`}>
                    <div className="flex items-start gap-4 cursor-pointer">
                      <RadioGroupItem value="upi" id="upi" className="text-soft-orange mt-1" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                            <Wallet className="w-5 h-5 text-purple-500" />
                          </div>
                          <div>
                            <div className="font-medium">UPI Payment</div>
                            <div className="text-sm text-gray-500">Quick & secure payment using UPI apps</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                    
                    {/* UPI Apps */}
                    {selectedPaymentMethod === 'upi' && (
                      <div className="mt-4 pl-13">
                        <div className="grid grid-cols-4 gap-4 mb-4">
                          {UPI_PAYMENT_OPTIONS.map(({ id, name, description, brandColor, icon: Icon }) => (
                            <div 
                              key={id}
                              className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 hover:shadow-lg"
                              style={{ 
                                '--brand-color': brandColor,
                                background: 'linear-gradient(45deg, var(--brand-color) 0%, transparent 15%)'
                              } as React.CSSProperties}
                            >
                              <div className="flex items-center justify-center w-full h-16">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                                  <Icon className="w-6 h-6" style={{ color: brandColor }} />
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="font-medium text-sm" style={{ color: brandColor }}>
                                  {name}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {description}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Input
                          type="text"
                          placeholder="Enter UPI ID (e.g., name@upi)"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="mt-2"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Please enter your UPI ID to proceed with the payment
                        </p>
                      </div>
                    )}
                  </div>
                </RadioGroup>
              </div>

              {/* Checkout Summary */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {formData.vehicleType === "car" ? "Car" : "Bike"} - {selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} Package
                    </span>
                    <span className="font-medium">₹{pricing[formData.vehicleType][selectedPackage]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-medium">₹99</span>
                  </div>
                  {selectedDate && (
                    <div className="flex justify-between text-gray-600">
                      <span>Scheduled for</span>
                      <span>
                        {selectedDate.toLocaleDateString()} at {selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  )}
                  <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between">
                    <span className="font-semibold">Total Amount</span>
                    <span className="font-bold text-lg">₹{totalAmount}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button - update classes based on form validity */}
              <Button 
                type="submit" 
                className={`w-full text-lg py-6 h-auto rounded-full transition-all duration-300 ${
                  isFormValid 
                    ? 'bg-orange-600 text-white hover:bg-orange-700 transform hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-xl' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
              >
                {isFormValid ? (
                  <>
                    Confirm Booking
                <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  'Please Fill All Required Fields'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
