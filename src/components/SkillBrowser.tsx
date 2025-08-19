import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Users, Clock, Star } from "lucide-react";
import cookingSkill from "@/assets/cooking-skill.jpg";
import graphicDesignSkill from "@/assets/graphic-design-skill.jpg";
import guitarSkill from "@/assets/guitar-skill.jpg";
import excelSkill from "@/assets/excel-skill.jpg";

interface SkillBrowserProps {
  isOpen: boolean;
  onClose: () => void;
  initialSearch?: string;
}

const SkillBrowser = ({ isOpen, onClose, initialSearch = '' }: SkillBrowserProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'creative', name: 'Creative' },
    { id: 'business', name: 'Business' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'music', name: 'Music' },
    { id: 'technology', name: 'Technology' },
    { id: 'language', name: 'Languages' }
  ];

  const allSkills = [
    {
      name: "Cooking",
      category: "lifestyle",
      description: "Master culinary techniques from professional chefs",
      image: cookingSkill,
      students: 2400,
      avgRating: 4.9,
      priceRange: "$25-45/hr",
      instructors: 45
    },
    {
      name: "Graphic Design",
      category: "creative", 
      description: "Create stunning visuals and brand identity",
      image: graphicDesignSkill,
      students: 1800,
      avgRating: 4.8,
      priceRange: "$30-60/hr",
      instructors: 32
    },
    {
      name: "Guitar",
      category: "music",
      description: "Learn acoustic and electric guitar fundamentals", 
      image: guitarSkill,
      students: 3200,
      avgRating: 4.9,
      priceRange: "$20-40/hr",
      instructors: 67
    },
    {
      name: "Excel",
      category: "business",
      description: "Advanced data analysis and spreadsheet mastery",
      image: excelSkill,
      students: 2900,
      avgRating: 4.7,
      priceRange: "$35-55/hr",
      instructors: 28
    },
    {
      name: "Photography",
      category: "creative",
      description: "Capture stunning photos with professional techniques",
      image: cookingSkill, // Using placeholder
      students: 1650,
      avgRating: 4.8,
      priceRange: "$40-70/hr",
      instructors: 41
    },
    {
      name: "Spanish",
      category: "language",
      description: "Learn conversational Spanish with native speakers",
      image: guitarSkill, // Using placeholder
      students: 2200,
      avgRating: 4.9,
      priceRange: "$25-45/hr",
      instructors: 56
    }
  ];

  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Browse Skills</DialogTitle>
        </DialogHeader>

        {/* Search and Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search skills..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <Filter className="h-3 w-3 mr-1" />
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-2">
            {filteredSkills.map(skill => (
              <Card key={skill.name} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img 
                      src={skill.image} 
                      alt={skill.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {skill.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {skill.students.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          {skill.avgRating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {skill.instructors} instructors
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">
                          {skill.priceRange}
                        </span>
                        <Button size="sm" variant="outline">
                          View Classes
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No skills found matching your criteria.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillBrowser;