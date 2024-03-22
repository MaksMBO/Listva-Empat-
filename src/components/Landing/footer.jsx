import React from "react";

import "../../styles/footer.scss";

import { ReactComponent as LystvaLogoIMG } from "../../assets/images/footer/LystvaLogo.svg";
import { ReactComponent as PayPalIMG } from "../../assets/images/footer/PayPal.svg";
import { ReactComponent as VisaIMG } from "../../assets/images/footer/Visa_2021.svg";
import { ReactComponent as MastercardIMG } from "../../assets/images/footer/Mastercard-logo.svg";
import { ReactComponent as TelegramIMG } from "../../assets/images/footer/telegram.svg";
import { ReactComponent as MessengerIMG } from "../../assets/images/footer/messenger.svg";
import { ReactComponent as ViberIMG } from "../../assets/images/footer/viber.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__main">
          <LystvaLogoIMG className="footer__logo" />
          <p className="footer__first-title-main">Служба доставки квітів</p>
          <p className="footer__second-title-main">
            Доставляємо квіти по всій країні
          </p>
          <div className="footer__pay">
            <PayPalIMG />
            <VisaIMG />
            <MastercardIMG />
          </div>
        </div>
        <div className="footer__information">
          <p className="footer__title">Інформація</p>
          <p className="footer__subtitle">Благодійність</p>
          <p className="footer__subtitle">Вакансії</p>
          <p className="footer__subtitle">Оплата і доставка</p>
          <p className="footer__subtitle">Питання та відповіді</p>
          <p className="footer__subtitle">Про нас</p>
          <p className="footer__subtitle">Статтті та події</p>
        </div>
        <div className="footer__franchise">
          <p className="footer__title">Франшиза</p>
          <p className="footer__subtitle">Стати партнером</p>
          <p className="footer__subtitle">Про франшизу</p>
          <p className="footer__subtitle">Питання та відповіді</p>
        </div>
        <div className="footer__contacts">
          <p className="footer__title">Наші контакти</p>
          <p className="footer__phone">+38 (068) 615 50 40</p>
          <p className="footer__location">
            м. Львів вул. Кирила <br />і Мефодія 1
          </p>
          <div className="footer__social-media">
            <TelegramIMG />
            <MessengerIMG />
            <ViberIMG />
          </div>
        </div>
      </div>
    </div>
  );
}
