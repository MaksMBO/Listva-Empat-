import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import i18n from "i18next";

import HeaderBurgerNavs from "components/Header/HeaderBurgerNavs";

import { ReactComponent as LogoImage } from "assets/images/header/Logo.svg";
import { ReactComponent as BasketImage } from "assets/images/header/basket.svg";
import { ReactComponent as PhoneImage } from "assets/images/header/phone.svg";
import { ReactComponent as CloseImage } from "assets/images/header/close.svg";
import { ReactComponent as BurgerButtonImage } from "assets/images/header/burgerButton.svg";

import "components/Header/headerStyled.scss";

export default function Header({
  catalogRef,
  reviewRef,
  contactsRef,
  advantagesRef,
}) {
  const headerRef = useRef(null);

  const scrollToElement = (elementRef) => {
    let elem;
    switch (elementRef) {
      case "catalog":
        elem = catalogRef;
        break;
      case "review":
        elem = reviewRef;
        break;
      case "contacts":
        elem = contactsRef;
        break;
      case "advantages":
        elem = advantagesRef;
        break;
      default:
        break;
    }
    console.log(elem);
    if (elem && elem.current) {
      const rect = elem.current.getBoundingClientRect();
      console.log("Top position:", elem.current.offsetHeight);
      window.scrollTo({
        top: window.pageYOffset + rect.y - 0.5 * headerRef.current.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const quantityInBasket = useSelector((state) => state.quantityInBasket);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch({ type: "CHANGE_LANG", payload: lng });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 740) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isOpen ? (
        <header className="header" ref={headerRef}>
          <div className="header__container">
            <div className="header__logo-container">
              <button className="header__logo-link">
                <LogoImage className="header__logo" />
              </button>
              <div className="header__logo-text">
                <span className="header__title">LISTVA</span>
                <span className="header__subtitle">
                  {t("landing.logoSubtitle.text")}
                </span>
              </div>
            </div>
            <div className="header__contact">
              <div className="header__phone-container">
                <PhoneImage className="header__phone" />
                <a href="tel:068 999 99 99" className="header__phone-text">
                  +38 (068) 999 99 99
                </a>
              </div>
              <p className="header__languages">
                <button
                  onClick={() => changeLanguage("uk")}
                  className="header__language-link"
                >
                  UA
                </button>
                |
                <button
                  onClick={() => changeLanguage("en")}
                  className="header__language-link"
                >
                  EN
                </button>
              </p>
            </div>
          </div>
          <div className="header__navigation">
            <nav>
              <ul className="header__nav-list">
                {t("landing.navLinks", { returnObjects: true }).map(
                  (link, index) => (
                    <li
                      className="header__nav-item"
                      key={index}
                      onClick={() => scrollToElement(link.to)}
                    >
                      <button className="header__nav-link">{link.text}</button>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className="header__currency">
              <p className="header__currency-text">UAH</p>
              <button className="header__basket-link">
                <BasketImage className="header__basket" />
                <div className="header__circle">{quantityInBasket}</div>
              </button>
            </div>
          </div>
          <BurgerButtonImage
            onClick={toggleMenu}
            className="header__burger-button"
          />
        </header>
      ) : (
        <header className="header-burger">
          <div className="header-burger__close">
            <CloseImage
              className="header-burger__img-close"
              onClick={toggleMenu}
            />
          </div>
          <div className="header-burger__link">
            <HeaderBurgerNavs t={t} />
          </div>
          <div className="header-burger__contact">
            <div className="header-burger__phone-container">
              <PhoneImage
                onClick={toggleMenu}
                className="header-burger__phone"
              />
              <a href="tel:068 999 99 99" className="header-burger__phone-text">
                +38 (068) 999 99 99
              </a>
            </div>
            <p className="header-burger__languages">
              <button
                onClick={() => changeLanguage("uk")}
                className="header-burger__language-link"
              >
                UA
              </button>
              |
              <button
                onClick={() => changeLanguage("en")}
                className="header-burger__language-link"
              >
                EN
              </button>
            </p>
          </div>
        </header>
      )}
    </>
  );
}
