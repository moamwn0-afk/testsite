import { Button } from "@/components/ui/button";
import { GraduationCap, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">EDUVALU</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">الرئيسية</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">المواد</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">المدرسين</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">الكتب</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">الكتب الذكية</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">الاختبارات الشاملة</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -left-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="outline" size="sm">
              تسجيل دخول والتر
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              تسجيل دخول
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              انشاء حساب
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
