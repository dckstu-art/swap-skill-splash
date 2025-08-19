import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, GraduationCap, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Find a Skill",
      description: "Browse our extensive catalog of skills and find the perfect instructor for your learning goals.",
      details: [
        "Search by skill, instructor, or price",
        "Read reviews and ratings",
        "Compare instructor profiles"
      ]
    },
    {
      step: 2, 
      icon: Calendar,
      title: "Book a Session",
      description: "Schedule a convenient time that works for both you and your chosen instructor.",
      details: [
        "View real-time availability",
        "Choose session length and format",
        "Secure payment processing"
      ]
    },
    {
      step: 3,
      icon: GraduationCap,
      title: "Learn or Teach",
      description: "Join your personalized 1-on-1 session and start your learning journey or share your expertise.",
      details: [
        "Video call integration",
        "Screen sharing tools",
        "Progress tracking"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SkillSwap Hub
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is simple. Follow these three easy steps to begin your learning journey
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between px-16">
              <ArrowRight className="text-primary/30 h-8 w-8" />
              <ArrowRight className="text-primary/30 h-8 w-8" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8">
                      {/* Step Number */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-10 w-10 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className="text-left space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6 mb-2">
                      <ArrowRight className="text-primary/40 h-6 w-6 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of learners and teachers already using SkillSwap Hub to achieve their goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors">
              Start Learning
            </button>
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary-hover transition-colors">
              Become a Teacher
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;