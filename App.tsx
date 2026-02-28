import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMission from "./components/AboutMission";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { ImpactStats } from "./components/ImpactStats";
import VoicesOfImpact from "./components/VoicesOfImpact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutMission />
        <Services />
        <ImpactStats />
        <VoicesOfImpact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
