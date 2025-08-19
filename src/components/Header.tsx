import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, User } from "lucide-react";
import AuthModal from "./AuthModal";
import SkillBrowser from "./SkillBrowser";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' as 'login' | 'signup' });
  const [skillBrowserOpen, setSkillBrowserOpen] = useState(false);

  const handleAuthModal = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const toggleAuthMode = () => {
    setAuthModal(prev => ({ 
      ...prev, 
      mode: prev.mode === 'login' ? 'signup' : 'login' 
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigation = [
    { name: "Home", href: "#", action: () => scrollToSection('hero') },
    { name: "Browse Skills", href: "#", action: () => setSkillBrowserOpen(true) },
    { name: "Become a Teacher", href: "#", action: () => scrollToSection('how-it-works') },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  SS
                </div>
                <span className="font-bold text-xl text-foreground">SkillSwap Hub</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setSkillBrowserOpen(true)}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleAuthModal('login')}>
                Login
              </Button>
              <Button size="sm" className="btn-gradient" onClick={() => handleAuthModal('signup')}>
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        item.action();
                        setIsOpen(false);
                      }}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-border space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        handleAuthModal('login');
                        setIsOpen(false);
                      }}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                    <Button 
                      className="w-full btn-gradient"
                      onClick={() => {
                        handleAuthModal('signup');
                        setIsOpen(false);
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Modals */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal(prev => ({ ...prev, isOpen: false }))}
        mode={authModal.mode}
        onToggleMode={toggleAuthMode}
      />
      <SkillBrowser
        isOpen={skillBrowserOpen}
        onClose={() => setSkillBrowserOpen(false)}
      />
    </>
  );
};

export default Header;