import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "components/Landing/MainPage/landingMain.scss";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <div className="landing-main-page">
      <p className="landing-main-page__title">{t("MainPage.title")}</p>
      <p className="landing-main-page__subtitle">{t("MainPage.subtitle")}</p>
      <Link to={`catalog/`}>
        <button className="landing-main-page__button">
          {t("MainPage.button")}
        </button>
      </Link>
      <div className="landing-main-page__line"></div>
    </div>
  );
}
