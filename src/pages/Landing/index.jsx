import Header from "../../components/Header";
import MainPage from "../../components/Landing/mainPage";
import Advantages from "../../components/Landing/advantages";
import CatalogMain from "../../components/Landing/catalogMain";
import Act from "../../components/Landing/act";
import Response from "../../components/Landing/response";
import Footer from "../../components/Landing/footer";

import "../../styles/landing.scss";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-container__main">
        <Header />
        <MainPage />
      </div>
      <div className="landing-container__body">
        <div className="landing-container__blurry-background"></div>
        <Advantages />
        <CatalogMain />
        <Response />
        <Act />
        <Footer />
      </div>
    </div>
  );
}
