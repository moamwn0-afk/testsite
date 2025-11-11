const Achievements = () => {
  const achievements = [
    { value: "+148546", label: "طالب متفوق" },
    { value: "+85", label: "معلم معتمد" },
    { value: "+338", label: "كورس" },
    { value: "+39", label: "كتاب" },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">إنجازاتنا</h2>
          <p className="text-xl text-muted-foreground">
            نفتخر بإنجازاتنا في دعم الطلاب والمعلمين لتحقيق أفضل النتائج.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-primary">
                {achievement.value}
              </div>
              <div className="text-xl text-foreground font-semibold">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
