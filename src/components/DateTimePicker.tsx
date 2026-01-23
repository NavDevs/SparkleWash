import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DateTimePickerProps {
  date: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  label?: string;
}

export function DateTimePicker({ date, onSelect, label = "Pick a date" }: DateTimePickerProps) {
  // Generate time slots from 9 AM to 9 PM
  const times = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 9; // Start from 9 AM
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour > 12 ? hour - 12 : hour;
    return {
      label: `${hour12}:00 ${period}`,
      value: hour
    };
  });

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      // Set time to current selection or default to 9 AM
      const currentTime = date ? date.getHours() : 9;
      selectedDate.setHours(currentTime, 0, 0, 0);
      onSelect(selectedDate);
    }
  };

  const handleTimeSelect = (hour: number) => {
    if (date) {
      const newDate = new Date(date);
      newDate.setHours(hour, 0, 0, 0);
      onSelect(newDate);
    }
  };

  const formatTimeDisplay = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start text-left font-normal w-full border-2 hover:border-soft-orange/50 hover:bg-soft-orange/10",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-soft-orange" />
            {date ? format(date, "PPP") : label}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today;
            }}
            className="rounded-md border-2"
            classNames={{
              day_selected: "bg-soft-orange text-dark-charcoal hover:bg-soft-orange hover:text-dark-charcoal focus:bg-soft-orange focus:text-dark-charcoal",
              day_today: "bg-soft-orange/20 text-dark-charcoal",
            }}
          />
        </PopoverContent>
      </Popover>

      {date && (
        <div>
          <div className="mb-3 flex items-center text-sm text-gray-600">
            <Clock className="mr-2 h-4 w-4 text-soft-orange" />
            Select Time (9 AM - 9 PM)
          </div>
          <div className="grid grid-cols-4 gap-2">
            {times.map(({ label, value }) => (
              <Button
                key={value}
                variant="outline"
                className={cn(
                  "text-sm border-2 transition-all duration-200",
                  date?.getHours() === value 
                    ? "bg-soft-orange text-dark-charcoal border-soft-orange hover:bg-soft-orange/90" 
                    : "hover:bg-soft-orange/10 hover:border-soft-orange/50"
                )}
                onClick={() => handleTimeSelect(value)}
              >
                {label}
              </Button>
            ))}
          </div>
          {date && (
            <p className="mt-2 text-sm text-gray-600 flex items-center">
              <Clock className="mr-2 h-4 w-4 text-soft-orange" />
              Selected time: <span className="font-medium ml-1">{formatTimeDisplay(date)}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
} 