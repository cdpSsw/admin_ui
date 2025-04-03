import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "../public/main.css";

import Header from "./homeComp/Header";
// import Activities from "./homeComp/Activities";
// import Highlight from "./homeComp/Highlight";
// import Course from "./homeComp/Course";
// import Team from "./homeComp/Team";
// import CareerP from "./homeComp/CareerP";
// import Faqs from "./homeComp/Faqs";
import HC_Showcase from "./homeComp/hc_Showcase";
// import ShowTiktok from "./homeComp/ShowTiktok";

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Homepages = () => {
  const activityRef = useRef(null);
  useEffect(() => {
    document.title = "Homepage | Comen - SPU";
  }, []);
  return (
    <main className="homp-container">
      <Header />
      <HC_Showcase />
      {/* <Highlight /> */}
      {/* <Roadmap /> */}

      {/* <Course /> */}
      {/* <ShowTiktok /> 
      <Team /> */}
      {/* <CareerP /> */}
      {/* <Faqs /> */}
    </main>
  );
};

export default Homepages;
