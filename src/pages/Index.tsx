
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Legacy from "@/components/Legacy";
import Memorial from "@/components/Memorial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <History />
        <Timeline />
        <Testimonials />
        <Legacy />
        <Memorial />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
