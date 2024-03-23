import { useRef } from "react";

import Header from "../../components/Header";
import MainPage from "../../components/Landing/mainPage";
import Advantages from "../../components/Landing/advantages";
import CatalogMain from "../../components/Landing/catalogMain";
import Act from "../../components/Landing/act";
import Response from "../../components/Landing/response";
import Footer from "../../components/Footer";

import "../../styles/landing.scss";

export default function Landing() {
  const catalogRef = useRef(null);
  const setCatalogRef = (ref) => {
    catalogRef.current = ref;
  };

  const reviewRef = useRef(null);
  const setReviewRef = (ref) => {
    reviewRef.current = ref;
  };

  const contactsRef = useRef(null);
  const setContactsRef = (ref) => {
    contactsRef.current = ref;
  };

  const advantagesRef = useRef(null);
  const setAdvantagesRef = (ref) => {
    advantagesRef.current = ref;
  };

  return (
    <div className="landing-container">
      <div className="landing-container__cover">
        <div className="landing-container__main">
          <Header
            catalogRef={catalogRef}
            reviewRef={reviewRef}
            contactsRef={contactsRef}
            advantagesRef={advantagesRef}
          />
          <MainPage />
        </div>
      </div>
      <div className="landing-container__body">
        <div className="landing-container__blurry-background"></div>
        <Advantages setAdvantagesRef={setAdvantagesRef} />
        <CatalogMain setCatalogRef={setCatalogRef} />
        <Response setReviewRef={setReviewRef} />
        <Act />
        <Footer setContactsRef={setContactsRef} />
      </div>
    </div>
  );
}
