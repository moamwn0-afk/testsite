import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TelegramStats from "@/components/TelegramStats";
import Features from "@/components/Features";
import Teachers from "@/components/Teachers";
import Achievements from "@/components/Achievements";
import SmartCenterBooking from "@/components/SmartCenterBooking";
import LatestCourses from "@/components/LatestCourses";
import LatestExams from "@/components/LatestExams";
import PopularBooks from "@/components/PopularBooks";
import Footer from "@/components/Footer";
import OrbitalSection from "@/components/OrbitalSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OrbitalSection />
      <TelegramStats />
      <Features />
      <Teachers />
      <Achievements />
      <SmartCenterBooking />
      <LatestCourses />
      <LatestExams />
      <PopularBooks />
      <Footer />
    </div>
  );
};

export default Index;
