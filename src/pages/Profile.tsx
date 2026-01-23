import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  User,
  Bell,
  Mail,
  Phone,
  MapPin,
  Shield,
  LogOut,
  Save,
  Edit2,
  Car,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Profile() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    address: "123 Main Street",
    city: "Mumbai",
    pincode: "400001"
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: true,
    orderUpdates: true,
    promotionalOffers: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const recentOrders = [
    {
      id: "ORD001",
      service: "Car Premium Wash",
      date: "2024-03-15",
      status: "Completed",
      amount: 1299
    },
    {
      id: "ORD002",
      service: "Bike Basic Service",
      date: "2024-03-10",
      status: "Scheduled",
      amount: 499
    }
  ];

  return (
    <div className="min-h-screen bg-soft-yellow pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              Your Profile
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Account Settings</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Manage your personal information and preferences
            </p>
          </div>

          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2"
                >
                  <Edit2 className="w-4 h-4" />
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? "border-orange-200 focus:border-orange-500" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? "border-orange-200 focus:border-orange-500" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? "border-orange-200 focus:border-orange-500" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? "border-orange-200 focus:border-orange-500" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? "border-orange-200 focus:border-orange-500" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? "border-orange-200 focus:border-orange-500" : ""}
                  />
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <Button
                    onClick={handleSave}
                    className="bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>

            {/* Recent Orders */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold">Recent Orders</h2>
                </div>
                <Button
                  onClick={() => navigate('/orders')}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  View All Orders
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <Car className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-medium">{order.service}</h3>
                        <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{order.amount}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Notification Preferences</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={preferences.emailNotifications}
                    onCheckedChange={() => handlePreferenceChange('emailNotifications')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">SMS Notifications</Label>
                    <p className="text-sm text-gray-500">Get updates on your phone</p>
                  </div>
                  <Switch
                    checked={preferences.smsNotifications}
                    onCheckedChange={() => handlePreferenceChange('smsNotifications')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Order Updates</Label>
                    <p className="text-sm text-gray-500">Status changes and reminders</p>
                  </div>
                  <Switch
                    checked={preferences.orderUpdates}
                    onCheckedChange={() => handlePreferenceChange('orderUpdates')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Promotional Offers</Label>
                    <p className="text-sm text-gray-500">Deals and special offers</p>
                  </div>
                  <Switch
                    checked={preferences.promotionalOffers}
                    onCheckedChange={() => handlePreferenceChange('promotionalOffers')}
                  />
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Account Actions</h2>
              </div>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 