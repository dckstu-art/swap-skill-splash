import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Jessica Park",
      role: "Marketing Manager",
      skill: "Graphic Design",
      rating: 5,
      content: "Learning graphic design through SkillSwap Hub has been incredible. My instructor Sarah was patient, professional, and helped me create a complete rebrand for my startup. The 1-on-1 sessions were perfectly tailored to my needs.",
      location: "Los Angeles, CA",
      sessionCount: 12
    },
    {
      name: "Marcus Johnson", 
      role: "Software Engineer",
      skill: "Guitar",
      rating: 5,
      content: "I always wanted to learn guitar but never had time for group classes. Emma's flexible scheduling and personalized approach made it possible. In just 3 months, I went from complete beginner to playing my favorite songs!",
      location: "Portland, OR", 
      sessionCount: 16
    },
    {
      name: "Priya Sharma",
      role: "Business Analyst",
      skill: "Advanced Excel",
      rating: 5,
      content: "David's Excel mastery sessions transformed how I work with data. The techniques I learned have made me 3x more efficient at work and helped me get promoted. Best investment in my career development.",
      location: "Chicago, IL",
      sessionCount: 8
    },
    {
      name: "Tom Wilson",
      role: "Food Blogger",  
      skill: "French Cuisine",
      rating: 5,
      content: "As a food blogger, I needed to elevate my cooking skills. Sarah's French cuisine lessons were amazing - professional techniques explained simply. My readers love the new recipes, and my confidence in the kitchen has soared.",
      location: "Miami, FL",
      sessionCount: 20
    },
    {
      name: "Ana Rodriguez",
      role: "Freelancer",
      skill: "Web Design",
      rating: 5, 
      content: "The web design skills I learned have completely changed my freelancing business. Mike taught me not just the tools, but design thinking. My client work has improved dramatically and my rates have doubled!",
      location: "Denver, CO",
      sessionCount: 15
    },
    {
      name: "Kevin Chen",
      role: "Startup Founder",
      skill: "Public Speaking", 
      rating: 5,
      content: "Public speaking was my biggest fear as a founder. The confidence-building techniques and practice sessions I got were life-changing. I now confidently pitch to investors and speak at conferences.",
      location: "San Francisco, CA",
      sessionCount: 10
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real success stories from learners who transformed their skills and careers
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-lg bg-card">
                    <CardContent className="p-8 lg:p-12">
                      <div className="relative">
                        {/* Quote Icon */}
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                        
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          {/* Content */}
                          <div className="flex-1">
                            {/* Stars */}
                            <div className="flex items-center mb-4">
                              {renderStars(testimonial.rating)}
                            </div>

                            {/* Testimonial */}
                            <blockquote className="text-lg lg:text-xl leading-relaxed mb-6 text-foreground">
                              "{testimonial.content}"
                            </blockquote>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-primary font-semibold">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">{testimonial.name}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                <div className="text-sm text-primary">{testimonial.location}</div>
                              </div>
                            </div>
                          </div>

                          {/* Metadata */}
                          <div className="lg:w-48 space-y-3">
                            <div className="bg-muted/50 rounded-lg p-4">
                              <div className="text-sm text-muted-foreground mb-1">Skill Learned</div>
                              <div className="font-semibold text-primary">{testimonial.skill}</div>
                            </div>
                            <div className="bg-muted/50 rounded-lg p-4">
                              <div className="text-sm text-muted-foreground mb-1">Sessions Completed</div>
                              <div className="font-semibold">{testimonial.sessionCount}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="h-10 w-10 p-0 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="h-10 w-10 p-0 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Sessions Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;