import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerticalDividers from "@/components/VerticalDividers";
import ContactSection from "@/components/ContactSection";
import WorkSection from "@/components/WorkSection";

import Hero from "@/components/ServiceDetail/Hero";
import Overview from "@/components/ServiceDetail/Overview";
import KeyFeatures from "@/components/ServiceDetail/Features";
import Process from "@/components/ServiceDetail/Process";

import { services } from "@/data/services";

const ServiceDetails = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="min-h-screen bg-background relative">
            <VerticalDividers />
            <Navbar />
            <main className="bg-background">
                <Hero service={service} />
                <Overview service={service} />
                <KeyFeatures service={service} />
                <Process service={service} />

                {/* Reusing WorkSection as requested "reuse the component we have in home page" for "Our Work" */}
                <div className="py-12">
                    <WorkSection />
                </div>

                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
