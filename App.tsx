import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMission from "./components/AboutMission";
import Services from "./components/Services";
import ImpactChart from "./components/ImpactChart";
import Footer from "./components/Footer";
import AiAssistant from "./components/AiAssistant";
import { ImpactStats } from "./components/ImpactStats";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutMission />
        <Services />
        {/* <ImpactChart /> */}
        <ImpactStats />
      </main>
      <Footer />
      {/* <AiAssistant /> */}
    </div>
  );
};

export default App;
