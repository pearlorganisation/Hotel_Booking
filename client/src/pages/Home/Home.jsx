import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Recommended from "@/components/Recommended/Recommended";
import Staycation from "@/components/Staycation/Staycation";
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
    </div>
  );
};

export default Home;
