import React, { useEffect } from "react";
import Footer from "src/components/Footer";
import IntroSection from "./IntroSection";
import MainImageSection from "./MainImageSection";
import * as amplitude from "@amplitude/analytics-browser";
import MujuEventSection from "./MujuEventSection";
import SeoulEventSection from "./SeoulEventSection";
import AccountSection from "./AccountSection";
import GallerySection from "./GallerySection";
import { STUDIO_PICS } from "../../assets/images";

const IndexPage = () => {
  useEffect(() => {
    const amplitudeKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
    if (amplitudeKey != null) {
      console.info("Initialized Amplitude!");
      amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!);
    }
  }, []);

  return (
    <>
      <MainImageSection />
      <IntroSection />
      <MujuEventSection />
      <SeoulEventSection />
      <AccountSection />
      <GallerySection images={STUDIO_PICS} />
      <Footer />
    </>
  );
};

export default IndexPage;
