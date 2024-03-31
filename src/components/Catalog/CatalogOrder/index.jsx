import { useTranslation } from "react-i18next";

import "components/Catalog/CatalogOrder/orderCatalog.scss";

export default function CatalogOrder() {
  const { t } = useTranslation();

  return (
    <div className="order">
      <div className="order__content">
        <div className="order__submit">
          <div className="order__inputs">
            <label htmlFor="order-name"></label>
            <input
              type="text"
              id="order-name"
              className="order__input"
              placeholder={t("order-catalog.name")}
            />
            <label htmlFor="order-email"></label>
            <input
              type="email"
              id="order-email"
              className="order__input"
              placeholder={t("order-catalog.email")}
            />
            <label htmlFor="order-wish"></label>
            <input
              type="text"
              id="order-wish"
              className="order__input"
              placeholder={t("order-catalog.wish")}
            />
          </div>
          <button className="order__submit-button">
            {t("order-catalog.submit-button")}
          </button>
        </div>
        <div className="order__text">
          <p className="order__title">{t("order-catalog.title")}</p>
          <div className="order__subtitle-content">
            <div className="order__subtitle-text-content">
              <div className="order__subtitle-line"></div>
            </div>
            <p className="order__subtitle-text">
              {t("order-catalog.subtitle")}
            </p>
          </div>
        </div>
      </div>
      <div className="order__line"></div>
    </div>
  );
}
