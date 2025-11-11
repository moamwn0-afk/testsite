import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, FileText, Bookmark } from "lucide-react";

const PopularBooks = () => {
  const books = [
    {
      title: "باكدج الباب الاول والثاني - كمياء عبدالجواد",
      teacher: "محمد عبد الجواد",
      subject: "كيمياء",
      grade: "الصف الثالث الثانوي",
      price: "195 جنية",
      available: "-3 متوفره",
      rating: 7,
      pages: 500,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
      teacherImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
    {
      title: "باكدج منهج الترم الاول كاملا في الفلسفة والمنطق",
      teacher: "استاذ سيد العراقي",
      subject: "مواد فلسفية",
      grade: "الصف الاول الثانوي",
      price: "145 جنية",
      available: "0 متوفره",
      rating: 7,
      pages: 200,
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
      teacherImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop",
    },
    {
      title: "الاحياء - احمد الجوهري 3ث ( باكدج اول فصلين)",
      teacher: "د/أحمد الجوهري",
      subject: "احياء",
      grade: "الصف الثالث الثانوي",
      price: "165 جنية",
      available: "12 متوفره",
      rating: 5,
      pages: 500,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
      teacherImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      title: "كتاب فيزياء -3 ث (اول فصلين )",
      teacher: "محمد عبد المعبود",
      subject: "فيزياء",
      grade: "الصف الثالث الثانوي",
      price: "160 جنية",
      available: "66 متوفره",
      rating: 5,
      pages: 500,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      teacherImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">الكتب الأكثر شهرة</h2>
          <p className="text-xl text-muted-foreground">
            مجموعة مختارة من الكتب الأكثر شهرة بين الطلاب على المنصة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {books.map((book, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-background/90 p-2 rounded-lg">
                  <Bookmark className="h-5 w-5 text-primary" />
                </div>
                <div className="absolute bottom-4 right-4 bg-primary/90 px-3 py-1 rounded-full text-sm text-primary-foreground">
                  {book.grade}
                </div>
              </div>
              
              <CardContent className="p-6 text-right">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={book.teacherImage} 
                    alt={book.teacher}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{book.teacher}</div>
                    <div className="text-xs text-primary">{book.subject}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{book.price}</span>
                </div>

                <h3 className="text-base font-bold mb-4 line-clamp-2 min-h-[3rem]">
                  {book.title}
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      {book.available}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      {book.rating} نجوم
                    </span>
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      {book.pages} صفحة
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  شراء الكتاب
                </Button>
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

export default PopularBooks;
