import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import i18n from "i18next";

import { ReactComponent as LogoImage } from "../../assets/images/header/Logo.svg";
import { ReactComponent as BasketImage } from "../../assets/images/header/basket.svg";
import { ReactComponent as PhoneImage } from "../../assets/images/header/phone.svg";
import { ReactComponent as CloseImage } from "../../assets/images/header/close.svg";
import { ReactComponent as CatalogImage } from "../../assets/images/header/catalog.svg";
import { ReactComponent as AdvantagesImage } from "../../assets/images/header/advantages.svg";
import { ReactComponent as ReviewImage } from "../../assets/images/header/review.svg";
import { ReactComponent as ContacsImage } from "../../assets/images/header/contact.svg";

import { ReactComponent as BurgerButtonImage } from "../../assets/images/header/burgerButton.svg";

import "../../styles/headerStyled.scss";

const iconComponents = {
  CatalogImage: CatalogImage,
  AdvantagesImage: AdvantagesImage,
  ReviewImage: ReviewImage,
  ContacsImage: ContacsImage,
};

const HeaderBurgerNavs = (props) => {
  const navLinks = props.t("landing.navLinks", { returnObjects: true });

  return (
    <nav>
      <ul className="header-burger__nav-list">
        {navLinks.map(({ icon, text }, index) => {
          const IconComponent = iconComponents[icon];

          return (
            <li className="header-burger__nav-item" key={index}>
              <a className="header-burger__nav-link">
                {IconComponent && (
                  <IconComponent className="header-burger__nav-link-img" />
                )}
                <span className="header-burger__nav-link-text">{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

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
              <a className="header__logo-link">
                <LogoImage className="header__logo" />
              </a>
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
                <a
                  onClick={() => changeLanguage("uk")}
                  className="header__language-link"
                >
                  UA
                </a>
                |
                <a
                  onClick={() => changeLanguage("en")}
                  className="header__language-link"
                >
                  EN
                </a>
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
                      <a className="header__nav-link">{link.text}</a>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className="header__currency">
              <p className="header__currency-text">UAH</p>
              <a className="header__basket-link">
                <BasketImage className="header__basket" />
                <div className="header__circle">{quantityInBasket}</div>
              </a>
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
            <li className="header-burger__nav-item">
              <a className="header-burger__nav-link">
                <BasketImage className="header-burger__nav-link-img" />
                <div className="header-burger__circle">{quantityInBasket}</div>
                <span className="header-burger__nav-link-text">
                  {t("landing.basket")}
                </span>
              </a>
            </li>
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
              <a
                onClick={() => changeLanguage("uk")}
                className="header-burger__language-link"
              >
                UA
              </a>
              |
              <a
                onClick={() => changeLanguage("en")}
                className="header-burger__language-link"
              >
                EN
              </a>
            </p>
          </div>
        </header>
      )}
    </>
  );
}
