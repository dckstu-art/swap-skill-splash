import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Clock, Calendar, MessageCircle, Heart, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InstructorProfileProps {
  isOpen: boolean;
  onClose: () => void;
  instructor: {
    name: string;
    specialty: string;
    image: string;
    rating: number;
    reviews: number;
    students: number;
    location: string;
    hourlyRate: number;
    bio: string;
    languages: string[];
    responseTime: string;
  } | null;
}

const InstructorProfile = ({ isOpen, onClose, instructor }: InstructorProfileProps) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const { toast } = useToast();

  if (!instructor) return null;

  const availableSlots = [
    { date: 'Today', time: '2:00 PM', available: true },
    { date: 'Today', time: '4:00 PM', available: false },
    { date: 'Tomorrow', time: '10:00 AM', available: true },
    { date: 'Tomorrow', time: '2:00 PM', available: true },
    { date: 'Wed, Dec 21', time: '11:00 AM', available: true },
    { date: 'Wed, Dec 21', time: '3:00 PM', available: true }
  ];

  const handleBookSession = () => {
    if (!selectedTimeSlot) {
      toast({
        title: "Please select a time slot",
        description: "Choose an available time slot to book your session.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Session booked successfully!",
      description: `Your session with ${instructor.name} is confirmed for ${selectedTimeSlot}.`
    });
    onClose();
  };

  const handleSendMessage = () => {
    toast({
      title: "Message sent!",
      description: `Your message has been sent to ${instructor.name}. They typically respond within ${instructor.responseTime}.`
    });
  };

  const handleSave = () => {
    toast({
      title: "Instructor saved!",
      description: `${instructor.name} has been added to your favorites.`
    });
  };

  const handleShare = () => {
    toast({
      title: "Profile shared!",
      description: "Profile link copied to clipboard."
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : index < rating
            ? "text-yellow-400 fill-current opacity-50" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Instructor Profile</DialogTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-6">
          {/* Header Section */}
          <div className="flex gap-6">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">{instructor.name}</h2>
              <p className="text-primary font-medium mb-2">{instructor.specialty}</p>
              
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  {renderStars(instructor.rating)}
                  <span className="text-sm text-muted-foreground ml-1">
                    {instructor.rating} ({instructor.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {instructor.location}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Responds in {instructor.responseTime}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{instructor.students.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">${instructor.hourlyRate}</div>
              <div className="text-sm text-muted-foreground">per hour</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{instructor.reviews}</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-muted-foreground leading-relaxed">{instructor.bio}</p>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {instructor.languages.map((language) => (
                <Badge key={language} variant="secondary">
                  {language}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Booking Section */}
          <div>
            <h3 className="font-semibold mb-4">Book a Session</h3>
            
            {/* Available Time Slots */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Available Times</h4>
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map((slot, index) => {
                  const slotKey = `${slot.date}-${slot.time}`;
                  return (
                    <button
                      key={index}
                      disabled={!slot.available}
                      onClick={() => setSelectedTimeSlot(slotKey)}
                      className={`p-3 text-left rounded-lg border transition-colors ${
                        !slot.available
                          ? 'bg-muted/50 text-muted-foreground cursor-not-allowed'
                          : selectedTimeSlot === slotKey
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'hover:bg-accent border-border'
                      }`}
                    >
                      <div className="text-sm font-medium">{slot.date}</div>
                      <div className="text-xs text-muted-foreground">{slot.time}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <Button onClick={handleBookSession} className="flex-1 btn-gradient">
                <Calendar className="h-4 w-4 mr-2" />
                Book Session
              </Button>
              <Button variant="outline" onClick={handleSendMessage}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InstructorProfile;