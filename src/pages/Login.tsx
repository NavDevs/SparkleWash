import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoggedIn } = useAuth();

  // If already logged in, redirect to home or the intended page
  useEffect(() => {
    if (isLoggedIn) {
      const params = new URLSearchParams(location.search);
      const redirectTo = params.get('redirectTo') || '/';
      navigate(redirectTo, { replace: true });
    }
  }, [isLoggedIn, navigate, location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Check if password matches demo123
    if (password === 'demo123') {
      login();
      toast.success("Login successful!");
      // Get the redirect path from the URL or default to home
      const params = new URLSearchParams(location.search);
      const redirectTo = params.get('redirectTo') || '/';
      navigate(redirectTo, { replace: true });
    } else {
      toast.error("Invalid password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-soft-yellow flex items-center justify-center">
      <div className="absolute inset-0 bg-soft-blue/20" />
      <div className="relative max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 mb-6">
              Sign in to access your account
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition-colors shadow-sm hover:shadow-md"
              >
                Sign in
              </Button>
            </div>
            <div className="text-center text-sm text-gray-600">
              <p>Demo credentials:</p>
              <p>Any email with password: demo123</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 