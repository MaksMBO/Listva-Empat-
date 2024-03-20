import { ReactComponent as LogoImage } from "../../assets/images/header/Logo.svg";
import { ReactComponent as BasketImage } from "../../assets/images/header/basket.svg";
import { ReactComponent as PhoneImage } from "../../assets/images/header/phone.svg";

import "../../styles/headerStyled.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <a href="#" className="header__logo-link">
            <LogoImage className="header__logo" />
          </a>
          <div className="header__logo-text">
            <span className="header__title">LISTVA</span>
            <span className="header__subtitle">Служба доставки квітів</span>
          </div>
        </div>
        <div className="header__contact">
          <div className="header__phone-container">
            <PhoneImage className="header__phone" />
            <p className="header__phone-text">+38 (068) 999 99 99</p>
          </div>
          <p className="header__languages">
            <a href="#" className="header__language-link">
              UA
            </a>
            |
            <a href="#" className="header__language-link">
              EN
            </a>
          </p>
        </div>
      </div>
      <div className="header__navigation">
        <nav>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Каталог
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Переваги
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Відгуки
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__currency">
          <p className="header__currency-text">UAH</p>
          <a href="#" className="header__basket-link">
            <BasketImage className="header__basket" />
          </a>
        </div>
      </div>
    </header>
  );
}
