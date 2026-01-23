import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home, ArrowRight, Calendar, MapPin, IndianRupee } from 'lucide-react';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-soft-yellow flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">No Order Details Found</h1>
          <p className="text-gray-600 mb-6">Please make a booking first.</p>
          <Button onClick={() => navigate('/booking')} className="bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300">
            Make a Booking
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-yellow">
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Order Confirmed!</h1>
              <p className="text-gray-600 mt-2">
                Your booking has been successfully confirmed. We'll see you soon!
              </p>
            </div>

            {/* Order Details */}
            <div className="space-y-6">
              {/* Service Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="font-semibold text-lg mb-4">Booking Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{orderDetails.date}</p>
                      <p className="text-sm text-gray-600">{orderDetails.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{orderDetails.address}</p>
                      <p className="text-sm text-gray-600">{orderDetails.city}, {orderDetails.pincode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">₹{orderDetails.amount}</p>
                      <p className="text-sm text-gray-600">{orderDetails.paymentMethod}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="font-semibold text-lg mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p><span className="text-gray-600">Name:</span> {orderDetails.name}</p>
                  <p><span className="text-gray-600">Mobile:</span> {orderDetails.mobile}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={() => navigate('/orders')} 
                  className="flex-1 bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  View Orders
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => navigate('/')} 
                  variant="outline" 
                  className="flex-1"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 