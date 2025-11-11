import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-right space-y-8 order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              منصتك الأولى <br />
              <span className="text-primary">للنجاح في التعليم</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              منصة Eduvalu تهدف إلى تطوير العملية التعليمية ومساعدة الطلاب على تحقيق التفوق في جميع المواد من خلال خدمات تعليمية متكاملة وحديثة.
            </p>
            <div className="flex gap-4 justify-end flex-wrap">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                تصفح الكورسات
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                أنشئ حسابك الآن
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="منصة التعليم" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
