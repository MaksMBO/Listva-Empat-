import React from "react";
import { useTranslation } from "react-i18next";

import "../../styles/act.scss";

export default function Act() {
  const { t } = useTranslation();

  return (
    <div className="act">
      <div className="act__content">
        <p className="act__title">{t("act.title")}</p>
        <p className="act__subtitle">
        {t("act.subtitle")}
        </p>
        <a className="act__button">{t("act.button")}</a>
      </div>
      <div className="act__line"></div>
    </div>
  );
}
