import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from 'lucide-react';

interface CancelOrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  orderDetails?: {
    id: string;
    service: string;
    date: string;
  };
}

const CancelOrderDialog = ({
  isOpen,
  onClose,
  onConfirm,
  orderDetails
}: CancelOrderDialogProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg sm:max-w-[425px]">
        <AlertDialogHeader>
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <AlertDialogTitle className="text-xl font-bold text-center">Cancel Order</AlertDialogTitle>
          <AlertDialogDescription className="text-center text-gray-600">
            Are you sure you want to cancel this order? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {orderDetails && (
          <div className="bg-gray-50 rounded-xl p-4 my-4">
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-gray-600">Order ID:</span> {orderDetails.id}
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Service:</span> {orderDetails.service}
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Date:</span> {orderDetails.date}
              </p>
            </div>
          </div>
        )}

        <AlertDialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Keep Order
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            className="flex-1 bg-red-500 hover:bg-red-600"
          >
            Cancel Order
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelOrderDialog; 