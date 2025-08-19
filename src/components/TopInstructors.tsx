import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import instructorSarah from "@/assets/instructor-sarah.jpg";
import instructorMike from "@/assets/instructor-mike.jpg";
import instructorEmma from "@/assets/instructor-emma.jpg";
import instructorDavid from "@/assets/instructor-david.jpg";
import InstructorProfile from "./InstructorProfile";

const TopInstructors = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<any>(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const { toast } = useToast();
  const instructors = [
    {
      name: "Sarah Chen",
      specialty: "Culinary Arts & Cooking",
      image: instructorSarah,
      rating: 4.9,
      reviews: 324,
      students: 1200,
      location: "San Francisco, CA",
      hourlyRate: 45,
      bio: "Professional chef with 12+ years experience in fine dining restaurants. Specializes in French cuisine and pastry arts.",
      languages: ["English", "Mandarin"],
      responseTime: "1 hour"
    },
    {
      name: "Mike Rodriguez", 
      specialty: "Graphic Design & Branding",
      image: instructorMike,
      rating: 4.8,
      reviews: 256,
      students: 890,
      location: "Austin, TX",
      hourlyRate: 55,
      bio: "Award-winning graphic designer working with Fortune 500 companies. Expert in Adobe Creative Suite and brand development.",
      languages: ["English", "Spanish"],
      responseTime: "2 hours"
    },
    {
      name: "Emma Thompson",
      specialty: "Guitar & Music Theory", 
      image: instructorEmma,
      rating: 5.0,
      reviews: 412,
      students: 1650,
      location: "Nashville, TN",
      hourlyRate: 40,
      bio: "Berklee College of Music graduate with 15+ years teaching experience. Performed with various indie and country artists.",
      languages: ["English"],
      responseTime: "30 minutes"
    },
    {
      name: "David Kim",
      specialty: "Excel & Data Analysis",
      image: instructorDavid, 
      rating: 4.9,
      reviews: 289,
      students: 980,
      location: "Seattle, WA",
      hourlyRate: 50,
      bio: "Senior data analyst at Microsoft with expertise in advanced Excel, Power BI, and business intelligence solutions.",
      languages: ["English", "Korean"],
      responseTime: "1 hour"
    }
  ];

  const handleViewProfile = (instructor: any) => {
    setSelectedInstructor(instructor);
    setProfileModalOpen(true);
  };

  const handleBookSession = (instructor: any) => {
    toast({
      title: "Opening booking calendar...",
      description: `Get ready to book a session with ${instructor.name}!`
    });
    setSelectedInstructor(instructor);
    setProfileModalOpen(true);
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
    <>
      <section id="instructors" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Top Instructors
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry professionals and passionate experts who are dedicated to your success
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {instructors.map((instructor, index) => (
            <Card
              key={instructor.name}
              className="group card-hover border-0 shadow-sm overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={`${instructor.name} - ${instructor.specialty} instructor`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button size="sm" className="btn-gradient" onClick={() => handleViewProfile(instructor)}>
                    View Profile
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Name and Rating */}
                <div className="mb-3">
                  <h3 className="font-semibold text-lg mb-1">{instructor.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {renderStars(instructor.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {instructor.rating} ({instructor.reviews})
                    </span>
                  </div>
                </div>

                {/* Specialty */}
                <p className="text-primary font-medium text-sm mb-3">{instructor.specialty}</p>

                {/* Bio */}
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {instructor.bio}
                </p>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-medium">{instructor.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rate:</span>
                    <span className="font-medium text-primary">${instructor.hourlyRate}/hr</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{instructor.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Responds in {instructor.responseTime}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {instructor.languages.map((language) => (
                    <span
                      key={language}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full btn-gradient" onClick={() => handleBookSession(instructor)}>
                  Book a Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={() => toast({ title: "All instructors", description: "Showing all available instructors..." })}>
            View All Instructors
          </Button>
        </div>
      </div>
    </section>

    {/* Modals */}
    <InstructorProfile
      isOpen={profileModalOpen}
      onClose={() => setProfileModalOpen(false)}
      instructor={selectedInstructor}
    />
  </>
  );
};

export default TopInstructors;