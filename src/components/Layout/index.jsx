import React, { useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet, useRoutes } from "react-router-dom";
import MainPage from "../Landing/mainPage";
import MainCatalog from "../Catalog/MainCatalog";

export default function Layout() {
  const contactsRef = useRef(null);
  const setContactsRef = (ref) => {
    contactsRef.current = ref;
  };

  const catalogRef = useRef(null);
  const reviewRef = useRef(null);
  const advantagesRef = useRef(null);

  const routeResult = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/catalog/", element: <MainCatalog />}
  ]);

  return (
    <>
      <div className="landing-container">
        <div className="landing-container__cover">
          <div className="landing-container__main">
            <Header
              catalogRef={catalogRef}
              reviewRef={reviewRef}
              contactsRef={contactsRef}
              advantagesRef={advantagesRef}
            />
            {routeResult}
          </div>
        </div>
        <div className="landing-container__body">
          <div className="landing-container__blurry-background"></div>
          <Outlet />
          <Footer setContactsRef={setContactsRef} />
        </div>
      </div>
    </>
  );
}
