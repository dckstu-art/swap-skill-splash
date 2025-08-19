import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Success Stories", href: "/success-stories" },
      { name: "Instructor Resources", href: "/instructor-resources" }
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Refund Policy", href: "/refunds" },
      { name: "Community Guidelines", href: "/guidelines" }
    ],
    popular: [
      { name: "Cooking Classes", href: "/skills/cooking" },
      { name: "Graphic Design", href: "/skills/design" },
      { name: "Music Lessons", href: "/skills/music" },
      { name: "Language Learning", href: "/skills/languages" },
      { name: "Business Skills", href: "/skills/business" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/skillswaphub" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/skillswaphub" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/skillswaphub" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/skillswaphub" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@skillswaphub" }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                SS
              </div>
              <span className="font-bold text-xl">SkillSwap Hub</span>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Connecting passionate learners with expert instructors worldwide. 
              Transform your skills through personalized 1-on-1 sessions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-background/70">
                <Mail className="h-4 w-4 mr-3" />
                hello@skillswaphub.com
              </div>
              <div className="flex items-center text-sm text-background/70">
                <Phone className="h-4 w-4 mr-3" />
                1-800-SKILLHUB
              </div>
              <div className="flex items-center text-sm text-background/70">
                <MapPin className="h-4 w-4 mr-3" />
                San Francisco, CA
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-background/60 hover:text-primary transition-colors p-2 hover:bg-background/10 rounded-lg"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Skills */}
          <div>
            <h3 className="font-semibold text-background mb-4">Popular Skills</h3>
            <ul className="space-y-3">
              {footerLinks.popular.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-background mb-4">Stay Updated</h3>
            <p className="text-background/70 text-sm mb-4">
              Get the latest tips, success stories, and special offers.
            </p>
            
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="w-full btn-gradient">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-background/20" />

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.legal.map((link, index) => (
            <span key={link.name} className="flex items-center">
              <a
                href={link.href}
                className="text-background/60 hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
              {index < footerLinks.legal.length - 1 && (
                <span className="text-background/40 mx-3">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © {currentYear} SkillSwap Hub. All rights reserved.
          </p>
          
          <p className="text-background/60 text-sm flex items-center">
            Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />{" "}
            for lifelong learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;