import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Recommended from "@/components/Recommended/Recommended";
import Staycation from "@/components/Staycation/Staycation";
import TravelerProfile from "@/components/Traveler/TravelerProfile";
import HeroSection from "@/components/home/heroSection/HeroSection";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <Staycation />
      <Recommended />
      <NewsLetter />
      <TravelerProfile />
    </div>
  );
};

export default Home;
