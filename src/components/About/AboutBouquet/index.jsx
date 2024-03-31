import { useTranslation } from "react-i18next";

import { ReactComponent as MinusImage } from "assets/images/about/minus.svg";
import { ReactComponent as PlusImage } from "assets/images/about/plus.svg";
import AboutSlider from "components/About/AboutSlider";

import "components/About/AboutBouquet/aboutBouquet.scss";

export default function AboutBouquet() {
  const { t } = useTranslation();

  return (
    <div className="about-catalog">
      <div className="about-catalog__content">
        <div className="about-catalog__slider">
          <AboutSlider />
        </div>
        <div className="about-catalog__info">
          <span className="about-catalog__title">title</span>
          <span className="about-catalog__subtitle">
            {t("aboutBouquet.info")}
          </span>
          <div className="about-catalog__about-bouquet">
            <span className="about-catalog__size-title">
              {t("aboutBouquet.size")}
            </span>
            <div className="about-catalog__size-buttons">
              <div className="about-catalog__size-button">
                <div className="about-catalog__size-button-title">
                  {t("aboutBouquet.reduced")}
                </div>
                <div className="about-catalog__size-button-subtitle">price</div>
              </div>
              <div className="about-catalog__size-button about-catalog__size-button--active">
                <div className="about-catalog__size-button-title">
                  {t("aboutBouquet.standard")}
                </div>
                <div className="about-catalog__size-button-subtitle">price</div>
              </div>
              <div className="about-catalog__size-button">
                <div className="about-catalog__size-button-title">
                  {t("aboutBouquet.deluxe")}
                </div>
                <div className="about-catalog__size-button-subtitle">price</div>
              </div>
            </div>
            <div className="about-catalog__about-basket">
              <div className="about-catalog__amount">
                <div className="about-catalog__minus">
                  <MinusImage />
                </div>
                <span className="about-catalog__number">4</span>
                <div className="about-catalog__plus">
                  <PlusImage />
                </div>
              </div>
              <button className="about-catalog__to-basket">
                {t("aboutBouquet.toBasket")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-catalog__line"></div>
    </div>
  );
}
