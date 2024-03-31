import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
import PageLoader from "components/PageLoader";
import "utils/i18n";
import Layout from "components/Layout";

const Landing = lazy(() => import("pages/Landing"));
const Catalog = lazy(() => import("pages/Catalog"));
const AboutCatalogPage = lazy(() => import("pages/About"));

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="Listva-Empat-/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="catalog/" element={<Catalog />} />
              <Route path="catalog/:id/" element={<AboutCatalogPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
