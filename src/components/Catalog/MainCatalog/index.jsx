import React from "react";
import { useTranslation } from "react-i18next";
import "components/Catalog/MainCatalog/catalogTitle.scss";

export default function MainCatalog() {
  const { t } = useTranslation();

  return (
    <div className="catalog-main">
      <div className="catalog-main__content">
        <p className="catalog-main__title">{t("catalog-main.title")}</p>
        <div className="catalog-main__subtitle-block">
          <div className="catalog-main__line-subtitle-container">
            <div className="catalog-main__line-subtitle"></div>
          </div>

          <span className="catalog-main__subtitle">
            {t("catalog-main.subtitle")}
          </span>
        </div>
      </div>
    </div>
  );
}
