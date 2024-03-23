import { useTranslation } from "react-i18next";
import "../../styles/landing-main.scss";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <div className="landing-main-page">
      <p className="landing-main-page__title">{t("MainPage.title")}</p>
      <p className="landing-main-page__subtitle">{t("MainPage.subtitle")}</p>
      <button className="landing-main-page__button">
        {t("MainPage.button")}
      </button>
      <div className="landing-main-page__line"></div>
    </div>
  );
}
