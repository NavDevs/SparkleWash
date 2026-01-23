import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { DateTimePicker } from "@/components/DateTimePicker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const Orders = () => {
  // State for orders
  const [orders, setOrders] = useState([
    {
      id: '1',
      serviceType: 'Premium Wash',
      vehicleType: 'Car',
      date: new Date(Date.now() + 86400000), // tomorrow
      address: '123 Main St, Mumbai',
      price: 999,
      status: 'scheduled'
    },
    {
      id: '2',
      serviceType: 'Basic Wash',
      vehicleType: 'Bike',
      date: new Date(Date.now() - 86400000), // yesterday
      address: '456 Park Ave, Mumbai',
      price: 299,
      status: 'completed'
    }
  ]);

  // State for reschedule dialog
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newDateTime, setNewDateTime] = useState(null);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  // Handle reschedule
  const handleReschedule = (order) => {
    setSelectedOrder(order);
    setNewDateTime(order.date);
    setIsRescheduleOpen(true);
  };

  const confirmReschedule = () => {
    if (!newDateTime) {
      toast.error("Please select a new date and time");
      return;
    }

    setOrders(orders.map(order => 
      order.id === selectedOrder.id 
        ? { ...order, date: newDateTime }
        : order
    ));

    toast.success("Order rescheduled successfully");
    setIsRescheduleOpen(false);
    setSelectedOrder(null);
    setNewDateTime(null);
  };

  // Handle cancel
  const handleCancel = (order) => {
    setSelectedOrder(order);
    setIsCancelOpen(true);
  };

  const confirmCancel = () => {
    setOrders(orders.map(o => 
      o.id === selectedOrder.id 
        ? { ...o, status: 'cancelled' }
        : o
    ));
    toast.success("Order cancelled successfully");
    setIsCancelOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="min-h-screen bg-soft-yellow py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              My Orders
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Service Bookings</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              View and manage your vehicle care service appointments
            </p>
          </div>

          {orders.length === 0 ? (
            <Card className="text-center py-12 bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4">
                <Calendar className="h-12 w-12 text-gray-400" />
                <h3 className="text-xl font-semibold">No Orders Found</h3>
                <p className="text-gray-500">You haven't made any bookings yet.</p>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id} className="bg-white/80 backdrop-blur-sm p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold">{order.serviceType}</h3>
                      <p className="text-gray-600">{order.vehicleType}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">₹{order.price}</div>
                      <div className={`text-sm ${
                        order.status === 'cancelled' 
                          ? 'text-red-500' 
                          : order.status === 'completed'
                          ? 'text-green-500'
                          : 'text-blue-500'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-5 w-5" />
                      <span>{formatDate(order.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-5 w-5" />
                      <span>{formatTime(order.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-5 w-5" />
                      <span>{order.address}</span>
                    </div>
                  </div>

                  {order.status === 'scheduled' && (
                    <div className="flex gap-4 mt-6">
                      <Button 
                        variant="outline"
                        className="flex-1 hover:bg-soft-orange/10"
                        onClick={() => handleReschedule(order)}
                      >
                        Reschedule
                      </Button>
                      <Button 
                        variant="destructive"
                        className="flex-1"
                        onClick={() => handleCancel(order)}
                      >
                        Cancel Order
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}

          {/* Reschedule Dialog */}
          <Dialog open={isRescheduleOpen} onOpenChange={setIsRescheduleOpen}>
            <DialogContent className="bg-white/95 backdrop-blur-md">
              <DialogHeader>
                <DialogTitle>Reschedule Order</DialogTitle>
                <DialogDescription>
                  Pick a new date and time for your service
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <DateTimePicker
                  date={newDateTime}
                  onSelect={setNewDateTime}
                  label="Select new date and time"
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsRescheduleOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={confirmReschedule}
                  className="bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Confirm Reschedule
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Cancel Dialog */}
          <Dialog open={isCancelOpen} onOpenChange={setIsCancelOpen}>
            <DialogContent className="bg-white/95 backdrop-blur-md">
              <DialogHeader>
                <DialogTitle>Cancel Order</DialogTitle>
                <DialogDescription>
                  Are you sure you want to cancel this order? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCancelOpen(false)}>
                  Keep Order
                </Button>
                <Button 
                  onClick={confirmCancel}
                  variant="destructive"
                >
                  Cancel Order
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Orders;