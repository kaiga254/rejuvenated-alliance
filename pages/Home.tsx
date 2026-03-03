import React from "react";
import Hero from "../components/Hero";
import AboutMission from "../components/AboutMission";
import Services from "../components/Services";
import { ImpactStats } from "../components/ImpactStats";
import VoicesOfImpact from "../components/VoicesOfImpact";

const Home: React.FC = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <AboutMission />
      <Services />
      <ImpactStats />
      <VoicesOfImpact />
    </div>
  );
};

export default Home;
