import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, File, Clipboard, FileText, Bookmark, Loader2, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchCourses, getCourseUrl, formatCoursePrice, stripHtml, type TutorCourse } from "@/services/tutorApi";

const LatestCourses = () => {
  const [courses, setCourses] = useState<TutorCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCourses(1, 6); // Fetch first 6 courses
        setCourses(data.courses);
      } catch (err) {
        setError('فشل في تحميل الكورسات. يرجى المحاولة مرة أخرى.');
        console.error('Error loading courses:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  const handleCourseClick = (course: TutorCourse) => {
    const courseUrl = getCourseUrl(course);
    window.open(courseUrl, '_blank');
  };

  const handleViewAll = () => {
    window.open('https://abkadrow.online/courses', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">أحدث الكورسات في المنصة</h2>
          <p className="text-xl text-muted-foreground">
            هنا تجد أحدث الكورسات التي تمت إضافتها حديثًا في المنصة.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-10">
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              إعادة المحاولة
            </Button>
          </div>
        )}

        {!loading && !error && courses.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground text-lg">لا توجد كورسات متاحة حاليًا</p>
          </div>
        )}

        {!loading && !error && courses.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group cursor-pointer"
                  onClick={() => handleCourseClick(course)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.course_thumbnail || "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop"} 
                      alt={stripHtml(course.title.rendered)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop";
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-background/90 p-2 rounded-lg">
                      <Bookmark className="h-5 w-5 text-primary" />
                    </div>
                    {course.course_level && (
                      <div className="absolute bottom-4 right-4 bg-primary/90 px-3 py-1 rounded-full text-sm text-primary-foreground">
                        {course.course_level}
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 text-right">
                    {course.author_name && (
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">
                            {course.author_name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold">{course.author_name}</div>
                          <div className="text-sm text-primary">مدرس</div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {formatCoursePrice(course)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-4 line-clamp-2">
                      {stripHtml(course.title.rendered)}
                    </h3>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.total_lessons || 0} درس</span>
                      </div>
                      {course.total_enrolled !== undefined && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <File className="h-4 w-4" />
                          <span>{course.total_enrolled} طالب</span>
                        </div>
                      )}
                      {course.total_assignments !== undefined && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clipboard className="h-4 w-4" />
                          <span>{course.total_assignments} واجب</span>
                        </div>
                      )}
                      {course.total_quizzes !== undefined && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <FileText className="h-4 w-4" />
                          <span>{course.total_quizzes} اختبار</span>
                        </div>
                      )}
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                      عرض تفاصيل الكورس
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 gap-2"
                onClick={handleViewAll}
              >
                عرض الكل
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LatestCourses;
