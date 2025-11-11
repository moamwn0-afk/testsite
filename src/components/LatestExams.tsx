const LatestExams = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">أحدث الامتحانات الشاملة</h2>
          <p className="text-xl text-muted-foreground">
            هنا تجد أحدث الامتحانات الشاملة التي تمت إضافتها حديثًا في المنصة.
          </p>
        </div>

        <div className="text-center py-16 bg-secondary/20 rounded-2xl">
          <p className="text-xl text-muted-foreground">
            لم يتم العثور على امتحانات.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestExams;
