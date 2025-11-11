import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Teachers = () => {
  const teachers = [
    {
      name: "كريم عطيه",
      subject: "Mathematics",
      description: "اجمد مدرس math❤️❤️",
      grade: "الصف الاول الثانوي",
      additionalGrades: "3 +",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "محمد عبد المعبود",
      subject: "فيزياء",
      description: "لا أبرح حتي أبلغ ❤️",
      grade: "الصف الثالث الثانوي",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "أحمد الجوهري",
      subject: "احياء",
      description: "المتعة في الطريق وعثراته ❤️",
      grade: "الصف الاول الثانوي",
      additionalGrades: "1 +",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "محمد عبد الجواد",
      subject: "كيمياء",
      description: "بابا عبد الجواد - عمدة الكيمياء ⚛️⚗️",
      grade: "الصف الاول الثانوي",
      additionalGrades: "1 +",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      name: "مؤمن محمد",
      subject: "Physics",
      description: "Physics Teacher",
      grade: "الصف الثاني الثانوي",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "احمد رفعت",
      subject: "جغرافيا",
      description: "مدرس",
      grade: "الصف الثالث الثانوي",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    },
    {
      name: "عمر ياقوت",
      subject: "اللغة العربية",
      description: "مدرس لغة عربية",
      grade: "الصف الاول الثانوي",
      additionalGrades: "2 +",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    },
    {
      name: "عمر الشربيني",
      subject: "Mathematics",
      description: "جاااااامد ❤️",
      grade: "الصف الاول الثانوي",
      additionalGrades: "1 +",
      image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">أفضل المدرسين المتخصصين</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            المنصة تحتوي على نخبة من أفضل المدرسين المتخصصين في جميع المواد. يمكنك الاشتراك معهم وشراء الكورسات الخاصة بهم.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary/90 p-2 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6 text-right">
                <div className="text-sm text-primary mb-2">{teacher.subject}</div>
                <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{teacher.description}</p>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">{teacher.grade}</div>
                  {teacher.additionalGrades && (
                    <div className="text-sm text-primary font-semibold">{teacher.additionalGrades}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            عرض الكل
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
