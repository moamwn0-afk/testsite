import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const SmartCenterBooking = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-primary p-5 rounded-full">
                <Calendar className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              حجز السنة الجديدة!
            </h2>

            <p className="text-lg text-muted-foreground mb-2">
              خاص بطلاب سنتر سمارت بجميع فروعه
            </p>

            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              استعد للسنة الدراسية الجديدة وسجّل دلوقتي علشان تضمن مكانك في السنتر والميعاد المناسب ليك.
            </p>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6">
              أحجز دلوقتي..
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCenterBooking;
