import React, { useRef } from "react";
import {
  Outlet,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";

import MainPage from "components/Landing/MainPage";
import MainCatalog from "components/Catalog/MainCatalog";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout() {
  const contactsRef = useRef(null);
  const setContactsRef = (ref) => {
    contactsRef.current = ref;
  };

  const catalogRef = useRef(null);
  const reviewRef = useRef(null);
  const advantagesRef = useRef(null);

  const pathStyles = {
    "/": "landing-container",
    "/catalog/:id/": "catalog-id-container",
    "/catalog/": "catalog-main-container",
  };
  const { id } = useParams();
  const location = useLocation();
  let path;

  if (id) {
    path = `/catalog/:id/`;
  } else if (
    location.pathname.startsWith("/catalog") &&
    location.search.startsWith("?page=")
  ) {
    path = "/catalog/";
  } else {
    path = location.pathname;
  }

  const landingContainerStyle = pathStyles[path] || "landing-container";

  return (
    <>
      <div className={landingContainerStyle}>
        <div className={`${landingContainerStyle}__cover`}>
          <div className={`${landingContainerStyle}__main`}>
            <Header
              catalogRef={catalogRef}
              reviewRef={reviewRef}
              contactsRef={contactsRef}
              advantagesRef={advantagesRef}
            />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog/" element={<MainCatalog />} />
            </Routes>
          </div>
        </div>
        <div className={`${landingContainerStyle}__body`}>
          <div className={`${landingContainerStyle}__blurry-background`}></div>
          <Outlet />
          <Footer setContactsRef={setContactsRef} />
        </div>
      </div>
    </>
  );
}
