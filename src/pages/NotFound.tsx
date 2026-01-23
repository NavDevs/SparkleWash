
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-yellow">
      <div className="text-center p-6 max-w-md">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 bg-soft-orange rounded-full opacity-20 animate-ping"></div>
            <div className="relative bg-white rounded-full w-32 h-32 flex items-center justify-center font-bold text-6xl text-primary">
              404
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-dark-charcoal">Oops!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We couldn't find the page you were looking for.
        </p>
        <Button asChild className="bg-primary text-white hover:bg-primary/90 button-hover rounded-full">
          <Link to="/" className="inline-flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
