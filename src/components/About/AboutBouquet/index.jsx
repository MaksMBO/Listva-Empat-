import { useTranslation } from "react-i18next";
import { ReactComponent as MinusImage } from "assets/images/about/minus.svg";
import { ReactComponent as PlusImage } from "assets/images/about/plus.svg";
import AboutSlider from "components/About/AboutSlider";
import "components/About/AboutBouquet/aboutBouquet.scss";
import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

export default function AboutBouquet() {
  const [count, setCount] = useState(1);
  const [currentActive, setCurrentActive] = useState(2);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const addInBasket = () => {
    dispatch({ type: "ADD_GOODS", payload: 1 });
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="about-catalog">
      <div className="about-catalog__content">
        <div className="about-catalog__slider">
          <AboutSlider />
        </div>
        <div className="about-catalog__info">
          <span className="about-catalog__title">Білунд</span>
          <span className="about-catalog__subtitle">
            {t("aboutBouquet.info")}
          </span>
          <div className="about-catalog__about-bouquet">
            <span className="about-catalog__size-title">
              {t("aboutBouquet.size")}
            </span>
            <div className="about-catalog__size-buttons">
              <div
                className={`about-catalog__size-button ${
                  currentActive === 1
                    ? "about-catalog__size-button--active"
                    : ""
                }`}
                onClick={() => setCurrentActive(1)}
              >
                <div className="about-catalog__size-button-title">
                  {t("aboutBouquet.reduced")}
                </div>
                <div className="about-catalog__size-button-subtitle">
                  2880 грн.
                </div>
              </div>
              <div
                className={`about-catalog__size-button ${
                  currentActive === 2
                    ? "about-catalog__size-button--active"
                    : ""
                }`}
                onClick={() => setCurrentActive(2)}
              >
                <div className="about-catalog__size-button-title">
                  {t("aboutBouquet.standard")}
                </div>
                <div className="about-catalog__size-button-subtitle">
                  3390 грн.
                </div>
              </div>
              <div
                className={`about-catalog__size-button ${
                  currentActive === 3
                    ? "about-catalog__size-button--active"
                    : ""
                }`}
                onClick={() => setCurrentActive(3)}
              >
                <div className="about-catalog__size-button-title">
                  {t("aboutBouquet.deluxe")}
                </div>
                <div className="about-catalog__size-button-subtitle">
                  6700 грн.
                </div>
              </div>
            </div>
            <div className="about-catalog__about-basket">
              <div className="about-catalog__amount">
                <Button
                  onClick={decrementCount}
                  className="about-catalog__minus"
                  sx={{
                    minWidth: "0",
                    backgroundColor: "#826170",
                    borderRadius: "0.625rem",
                    "&:hover": {
                      backgroundColor: "#d96591",
                    },
                  }}
                  variant="contained"
                >
                  <MinusImage />
                </Button>
                <span className="about-catalog__number">{count}</span>
                <Button
                  className="about-catalog__plus"
                  onClick={incrementCount}
                  sx={{
                    minWidth: "0",
                    backgroundColor: "#826170",
                    borderRadius: "0.625rem",
                    "&:hover": {
                      backgroundColor: "#d96591",
                    },
                  }}
                  variant="contained"
                >
                  <PlusImage />
                </Button>
              </div>
              <Button
                onClick={addInBasket}
                className="about-catalog__to-basket"
                sx={{
                  width: "100%",
                  background: "rgba(223, 131, 172, 0.9)",
                  borderRadius: "0.625rem",
                  filter: "drop-shadow(0px 0px 20px #a47087)",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: "normal",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#d96591",
                  },
                }}
                variant="contained"
              >
                {t("aboutBouquet.toBasket")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-catalog__line"></div>
    </div>
  );
}
