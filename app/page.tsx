import MainImageSection from "./MainImageSection";
import IntroSection from "./IntroSection";
import MujuEventSection from "./MujuEventSection";
import SeoulEventSection from "./SeoulEventSection";
import AccountSection from "./AccountSection";
import GallerySection from "./GallerySection";
import Footer from "./Footer";
import React from "react";

export default function Page() {
  return (
    <main>
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
