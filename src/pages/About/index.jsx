import React from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as MinusImage } from "../../assets/images/about/minus.svg";
import { ReactComponent as PlusImage } from "../../assets/images/about/plus.svg";

import "../../styles/about.scss";

import "../../styles/about-bouquet.scss";
import "../../styles/info-bouquet.scss";
import "../../styles/feedback.scss";

function AboutBouquet() {
  const { t } = useTranslation();

  return (
    <div className="about-catalog">
      <div className="about-catalog__content">
        <div className="about-catalog__slider"></div>
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
              <a className="about-catalog__to-basket">
                {t("aboutBouquet.toBasket")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-catalog__line"></div>
    </div>
  );
}

function InfoAboutBouquet() {
  const { t } = useTranslation();

  return (
    <div className="info-bouquet">
      <div className="info-bouquet__content">
        <p className="info-bouquet__title">{t("infoBouquet.title")}</p>
        <p
          className="info-bouquet__text"
          dangerouslySetInnerHTML={{
            __html:
              "Букет з рожевої гілкової троянди. На зображенні показаний середній варіант. <br/><br/>\
              Життя квітів – це мить. Це яскравий кольоровий спалах, швидкий, як спалах блискавки. Він вміщає в собі все життя квітки. В кожної квітки цей спалах особливий, тому що особливими є колір і форма кожної квітки. В кожній з наших робіт ми намагаємось вловити цю неповторність, підкреслити її і дозволити квітам розкритись та показати в повній мірі те, що вони можуть показати. <br/><br/>\
              Замовити квіти на нашому сайті дуже просто. Ви можете замовити вже готову роботу із наданих нами у цьому каталозі або зателефонувати чи написати нам. Ми створимо букет за власним дизайном або втілимо в життя Ваш. <br/><br/>\
              У випадку, якщо деяких квітів для цього букету не бути в наявності, ми залишаємо за собою право замінити їх на альтернативні, зберігаючи при цьому кольорову гаму, форму, стиль та цінову категорію букету. <br/><br/>\
              Телефон служби доставки квітів LYSTVA в м. Львів +38 (068) 615 50 40. Доставка квітів в м. Львів працює ЦІЛОДОБОВО. Ви також можете зв’язатись з нами в мессенджері по вказаному номеру. З інформацією стосовно умов роботи служби доставки квітів Ви можете ознайомитись в пункті меню Інформація в верхній частині сторінки.",
          }}
        ></p>
      </div>
      <div className="info-bouquet__line"></div>
    </div>
  );
}

function Feedback() {
  const { t } = useTranslation();

  return (
    <div className="feedback">
      <div className="feedback__content">
        <div className="feedback__submit">
          <label for="phone"></label>
          <input
            type="tel"
            id="phone"
            className="feedback__input"
            placeholder="+ 38 (09*) *** ** **"
          />
          <a className="feedback__submit-button">
            {t("feedback.submit-button")}
          </a>
        </div>
        <div className="feedback__text">
          <div className="feedback__title">{t("feedback.title")}</div>
          <div className="feedback__subtitle">{t("feedback.subtitle")}</div>
        </div>
      </div>

      <div className="feedback__line"></div>
    </div>
  );
}

export default function AboutCatalogPage() {
  return (
    <>
      <AboutBouquet />
      <InfoAboutBouquet />
      <Feedback />
    </>
  );
}
