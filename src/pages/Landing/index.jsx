import Header from "../../components/Header";
import MainPage from "../../components/Landing/mainPage";

import "../../styles/landing.scss";

export default function Landing() {
  return (
    <div className="landing-container">
      <Header />
      <MainPage />
    </div>
  );
}
