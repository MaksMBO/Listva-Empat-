import { useTranslation } from "react-i18next";

import "components/About/Feedback/feedback.scss"

export default function Feedback() {
  const { t } = useTranslation();

  return (
    <div className="feedback">
      <div className="feedback__content">
        <div className="feedback__submit">
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            className="feedback__input"
            placeholder="+ 38 (09*) *** ** **"
          />
          <button className="feedback__submit-button">
            {t("feedback.submit-button")}
          </button>
        </div>
        <div className="feedback__text">
          <div className="feedback__title">{t("feedback.title")}</div>
          <div className="feedback__subtitle">{t("feedback.subtitle")}</div>
        </div>
      </div>

      <div className="feedback__line"></div>
    </div>
  );
}
