import { Eye, MessageCircle, Trophy, Gift, Bell, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "متابعة أولية",
      description: "خطط متابعة وبداية التعلم",
    },
    {
      icon: MessageCircle,
      title: "رسايل تشجيعية",
      description: "تحفيز مستمر ودعم معنوي",
    },
    {
      icon: Trophy,
      title: "مسابقات واختبارات",
      description: "اختبر معلوماتك وتحدى نفسك",
    },
    {
      icon: Gift,
      title: "جوايز ومكافات",
      description: "احصل على جوائز قيمة",
    },
    {
      icon: Bell,
      title: "تنبيهات",
      description: "تذكيرات وتنبيهات مهمة",
    },
    {
      icon: Video,
      title: "فيديوهات وملخصات",
      description: "ملخصات مرئية سهلة الفهم",
    },
  ];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا ستحصل عليه؟</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
