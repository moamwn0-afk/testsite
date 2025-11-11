import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const TelegramStats = () => {
  const stats = [
    { value: "10K+", label: "مشترك" },
    { value: "100+", label: "مسابقة" },
    { value: "10+", label: "كورس" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <div className="bg-primary p-6 rounded-full shadow-lg">
              <Send className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            انضم إلى قناتنا على تليجرام
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            متابعة أولية، تحفيز دائم، ومسابقات ممتعة مع جوائز وتنبيهات وملخصات مرئية
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-xl text-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6">
            انضم للقناة الآن ←
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TelegramStats;
