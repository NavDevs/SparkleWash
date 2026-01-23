import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from 'lucide-react';
import { toast } from "sonner";

interface FeedbackDialogProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    id: string;
    serviceType: string;
  };
}

const FeedbackDialog = ({
  isOpen,
  onClose,
  orderDetails
}: FeedbackDialogProps) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    // Here you would typically make an API call to submit the feedback
    toast.success("Thank you for your feedback!");
    onClose();
    setRating(0);
    setFeedback('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Service Feedback</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            How was your experience with our service?
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Order Details */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-gray-600">Order ID:</span> {orderDetails.id}
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Service:</span> {orderDetails.serviceType}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-8 h-8 transition-all duration-300 ${
                    star <= (hoveredStar || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Feedback Text */}
          <div className="space-y-2">
            <label htmlFor="feedback" className="text-sm font-medium text-gray-700">
              Additional Comments
            </label>
            <Textarea
              id="feedback"
              placeholder="Tell us about your experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </div>

        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="flex-1 bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300"
          >
            Submit Feedback
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog; 