import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="People learning and teaching skills together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Teach what you know.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Learn what you love.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Connect with passionate instructors and eager learners in our global community. 
              Master new skills or share your expertise in personalized 1-on-1 sessions.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="What would you like to learn?" 
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button className="h-12 px-8 btn-gradient font-medium">
                Find Skills
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="btn-gradient font-medium group">
                Start Learning Today
                <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="font-medium hover:bg-accent">
                Become a Teacher
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2K+</div>
                <div className="text-sm text-muted-foreground">Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Skill Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;