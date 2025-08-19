import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import cookingSkill from "@/assets/cooking-skill.jpg";
import graphicDesignSkill from "@/assets/graphic-design-skill.jpg";
import guitarSkill from "@/assets/guitar-skill.jpg";
import excelSkill from "@/assets/excel-skill.jpg";
import SkillBrowser from "./SkillBrowser";

const PopularSkills = () => {
  const [skillBrowserOpen, setSkillBrowserOpen] = useState(false);
  const { toast } = useToast();
  const skills = [
    {
      name: "Cooking",
      description: "Master culinary techniques from professional chefs",
      image: cookingSkill,
      students: "2,400+ students",
      price: "From $25/hr",
      category: "Lifestyle"
    },
    {
      name: "Graphic Design",
      description: "Create stunning visuals and brand identity",
      image: graphicDesignSkill,
      students: "1,800+ students", 
      price: "From $30/hr",
      category: "Creative"
    },
    {
      name: "Guitar",
      description: "Learn acoustic and electric guitar fundamentals",
      image: guitarSkill,
      students: "3,200+ students",
      price: "From $20/hr", 
      category: "Music"
    },
    {
      name: "Excel",
      description: "Advanced data analysis and spreadsheet mastery",
      image: excelSkill,
      students: "2,900+ students",
      price: "From $35/hr",
      category: "Business"
    }
  ];

  const handleExploreSkill = (skillName: string) => {
    toast({
      title: `Exploring ${skillName} classes!`,
      description: "Opening skill browser with matching instructors..."
    });
    setSkillBrowserOpen(true);
  };

  return (
    <>
      <section id="popular-skills" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Popular Skills to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the most in-demand skills taught by expert instructors worldwide
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="group cursor-pointer card-hover border-0 shadow-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={skill.image} 
                  alt={`${skill.name} lessons`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {skill.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {skill.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {skill.students}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {skill.price}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => handleExploreSkill(skill.name)}
                >
                  Explore Classes
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group" onClick={() => setSkillBrowserOpen(true)}>
            View All Skills
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>

    {/* Modals */}
    <SkillBrowser
      isOpen={skillBrowserOpen}
      onClose={() => setSkillBrowserOpen(false)}
    />
  </>
  );
};

export default PopularSkills;