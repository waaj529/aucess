import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerticalDividers from "@/components/VerticalDividers";
import Hero from "@/components/Services/Hero";
import Overview from "@/components/Services/Overview";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Services = () => {
    return (
        <div className="min-h-screen bg-background relative">
            <VerticalDividers />
            <Navbar />
            {/* Add padding top to account for fixed navbar */}
            <main className="pt-20">
                <Hero />
                <Overview />
                <ServicesSection />
                <WhyUsSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Services;
