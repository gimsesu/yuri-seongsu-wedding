import React from "react";
import MainImageSection from "./MainImageSection";
import IntroSection from "./IntroSection";
import MujuEventSection from "./MujuEventSection";
import SeoulEventSection from "./SeoulEventSection";
import AccountSection from "./AccountSection";
import GallerySection from "./GallerySection";
import Footer from "./Footer";

export default function Page() {
  return (
    <main className={"bg-gradient-to-b from-white from-0% to-black"}>
      <MainImageSection />
      <IntroSection />
      <MujuEventSection />
      <SeoulEventSection />
      <AccountSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
