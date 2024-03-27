import Advantages from "../../components/Landing/advantages";
import CatalogMain from "../../components/Landing/catalogMain";
import Act from "../../components/Landing/act";
import Response from "../../components/Landing/response";

import "../../styles/landing.scss";
import { useRef } from "react";

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
