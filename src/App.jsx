import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PageLoader from "./components/PageLoader";
import "./utils/i18n"

const Landing = lazy(() => import("./pages/Landing"));

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PageLoader />}>
          <Landing />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
