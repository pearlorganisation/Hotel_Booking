import Recommended from "@/components/Recommended/Recommended";
import Staycation from "@/components/Staycation/Staycation";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Staycation />
      <Recommended />
    </div>
  );
};

export default Home;
