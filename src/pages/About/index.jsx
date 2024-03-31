import React from "react";

import AboutBouquet from "components/About/AboutBouquet";
import InfoAboutBouquet from "components/About/InfoAboutBouquet";
import Feedback from "components/About/Feedback";

import "pages/About/about.scss";

export default function AboutCatalogPage() {
  return (
    <>
      <AboutBouquet />
      <InfoAboutBouquet />
      <Feedback />
    </>
  );
}
