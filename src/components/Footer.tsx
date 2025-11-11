import { GraduationCap, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EDUVALU</span>
            </div>
            <p className="text-muted-foreground">
              منصتك الأولى للنجاح في التعليم والتفوق الأكاديمي
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">الكورسات</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">المدرسين</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">من نحن</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">الدعم</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">تابعنا</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-card hover:bg-primary/20 p-3 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-card hover:bg-primary/20 p-3 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-card hover:bg-primary/20 p-3 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-card hover:bg-primary/20 p-3 rounded-lg transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Eduvalu. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
