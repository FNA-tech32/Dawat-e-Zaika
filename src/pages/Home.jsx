import React from "react";
import LandingSection from "../components/Home/LandingSection";
import AboutUs from "../components/Home/AboutUs";
import MenuSection from "../components/Home/MenuSection";

function Home() {
  return (
    <main className="max-w-[2100px] mx-auto">
      <section>
        <LandingSection />
        <AboutUs />
        <MenuSection />
      </section>
    </main>
  );
}

export default Home;
