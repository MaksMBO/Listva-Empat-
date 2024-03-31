import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as LystvaLogoIMG } from "assets/images/footer/LystvaLogo.svg";
import { ReactComponent as PayPalIMG } from "assets/images/footer/PayPal.svg";
import { ReactComponent as VisaIMG } from "assets/images/footer/Visa_2021.svg";
import { ReactComponent as MastercardIMG } from "assets/images/footer/Mastercard-logo.svg";
import { ReactComponent as TelegramIMG } from "assets/images/footer/telegram.svg";
import { ReactComponent as MessengerIMG } from "assets/images/footer/messenger.svg";
import { ReactComponent as ViberIMG } from "assets/images/footer/viber.svg";

import "components/Footer/footer.scss";

export default function Footer({ setContactsRef }) {
  const contactsRef = useRef(null);
  useEffect(() => {
    setContactsRef(contactsRef.current);
  }, [setContactsRef]);

  const { t } = useTranslation();

  return (
    <div className="footer" ref={contactsRef}>
      <div className="footer__content">
        <div className="footer__main">
          <LystvaLogoIMG className="footer__logo" />
          <p className="footer__first-title-main">{t("footer.main_title")}</p>
          <p className="footer__second-title-main">
            {t("footer.main_subtitle")}
          </p>
          <div className="footer__pay">
            <PayPalIMG />
            <VisaIMG />
            <MastercardIMG />
          </div>
        </div>
        <div className="footer__information">
          <p className="footer__title">{t("footer.information.title")}</p>
          {t("footer.information.links", { returnObjects: true }).map(
            (item) => (
              <p key={item} className="footer__subtitle">
                {item}
              </p>
            )
          )}
        </div>
        <div className="footer__franchise">
          <p className="footer__title">{t("footer.franchise.title")}</p>
          {t("footer.franchise.links", { returnObjects: true }).map((item) => (
            <p key={item} className="footer__subtitle">
              {item}
            </p>
          ))}
        </div>
        <div className="footer__contacts">
          <p className="footer__title">{t("footer.contacts.title")}</p>
          <a href="tel:068 999 99 99" className="footer__phone">
            {t("footer.contacts.phone")}
          </a>
          <button
            style={{ cursor: "pointer" }}
            className="footer__location"
            dangerouslySetInnerHTML={{ __html: t("footer.contacts.location") }}
          ></button>

          <div className="footer__social-media">
            <button>
              <TelegramIMG />
            </button>
            <button>
              <MessengerIMG />
            </button>
            <button>
              <ViberIMG />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
