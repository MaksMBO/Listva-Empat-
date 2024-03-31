import { useRef } from "react";

import Advantages from "components/Landing/Advantages";
import CatalogMain from "components/Landing/CatalogMain";
import Act from "components/Landing/Act";
import Response from "components/Landing/Response";

import "pages/Landing/landing.scss";

export default function Landing() {
  const catalogRef = useRef(null);
  const reviewRef = useRef(null);
  const advantagesRef = useRef(null);

  const setCatalogRef = (ref) => {
    catalogRef.current = ref;
  };
  const setReviewRef = (ref) => {
    reviewRef.current = ref;
  };
  const setAdvantagesRef = (ref) => {
    advantagesRef.current = ref;
  };

  return (
    <>
      <Advantages setAdvantagesRef={setAdvantagesRef} />
      <CatalogMain setCatalogRef={setCatalogRef} />
      <Response setReviewRef={setReviewRef} />
      <Act />
    </>
  );
}
