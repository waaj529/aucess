import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerticalDividers from "@/components/VerticalDividers";
import Hero from "@/components/AboutUs/Hero";
import Story from "@/components/AboutUs/Story";
import MissionVision from "@/components/AboutUs/MissionVision";
import Team from "@/components/AboutUs/Team";
import Achievements from "@/components/AboutUs/Achievements";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-background relative">
            <VerticalDividers />
            <Navbar />
            {/* Add padding top to account for fixed navbar */}
            <main className="pt-20">
                <Hero />
                <Story />
                <MissionVision />
                <StatsSection />
                <Team />
                <Achievements />
                <FAQSection className="bg-background" />
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
