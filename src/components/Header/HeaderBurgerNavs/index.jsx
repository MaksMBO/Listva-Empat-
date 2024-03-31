import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ReactComponent as BasketImage } from "assets/images/header/basket.svg";
import { ReactComponent as CatalogImage } from "assets/images/header/catalog.svg";
import { ReactComponent as AdvantagesImage } from "assets/images/header/advantages.svg";
import { ReactComponent as ReviewImage } from "assets/images/header/review.svg";
import { ReactComponent as ContacsImage } from "assets/images/header/contact.svg";

const iconComponents = {
  CatalogImage: CatalogImage,
  AdvantagesImage: AdvantagesImage,
  ReviewImage: ReviewImage,
  ContacsImage: ContacsImage,
};

export default function HeaderBurgerNavs(props) {
  const navLinks = props.t("landing.navLinks", { returnObjects: true });
  const { t } = useTranslation();

  const quantityInBasket = useSelector((state) => state.quantityInBasket);

  return (
    <nav>
      <ul className="header-burger__nav-list">
        {navLinks.map(({ icon, text }, index) => {
          const IconComponent = iconComponents[icon];

          return (
            <li className="header-burger__nav-item" key={index}>
              <button className="header-burger__nav-link">
                {IconComponent && (
                  <IconComponent className="header-burger__nav-link-img" />
                )}
                <span className="header-burger__nav-link-text">{text}</span>
              </button>
            </li>
          );
        })}
        <li className="header-burger__nav-item">
          <button className="header-burger__nav-link">
            <BasketImage className="header-burger__nav-link-img" />
            <div className="header-burger__circle">{quantityInBasket}</div>
            <span className="header-burger__nav-link-text">
              {t("landing.basket")}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
