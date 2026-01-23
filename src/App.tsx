import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import OrderCancellationConfirmation from "./pages/OrderCancellationConfirmation";
import OrderConfirmation from "./pages/OrderConfirmation";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route 
              path="/booking" 
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/booking-confirmation" 
              element={
                <ProtectedRoute>
                  <BookingConfirmation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/order-confirmation" 
              element={
                <ProtectedRoute>
                  <OrderConfirmation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/order-cancellation" 
              element={
                <ProtectedRoute>
                  <OrderCancellationConfirmation />
                </ProtectedRoute>
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/orders" 
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
