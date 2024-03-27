import { useTranslation } from "react-i18next";

import BouquetIMG from "../../assets/images/temp/bouquet.webp";
import Bouquet2IMG from "../../assets/images/temp/bouquet2.webp";
import Bouquet3IMG from "../../assets/images/temp/bouquet3.webp";
import { ReactComponent as PrevIMG } from "../../assets/images/landig/catalog-page-prev.svg";
import { ReactComponent as NextIMG } from "../../assets/images/landig/catalog-page-next.svg";

import "../../styles/landing-main.scss";
import "../../styles/catalog-main.scss";
import "../../styles/catalog-item.scss";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

const data = [
  { img: BouquetIMG, title: "Білунд", price: "3390 грн." },
  { img: Bouquet2IMG, title: "Новара", price: "3390 грн." },
  { img: Bouquet2IMG, title: "Новара", price: "3390 грн." },
  { img: BouquetIMG, title: "Білунд", price: "3390 грн." },
  { img: BouquetIMG, title: "Білунд", price: "3390 грн." },
  { img: Bouquet2IMG, title: "Новара", price: "3390 грн." },
  { img: Bouquet2IMG, title: "Новара", price: "3390 грн." },
  { img: Bouquet2IMG, title: "Новара", price: "3390 грн." },
  { img: Bouquet2IMG, title: "Новара", price: "3390 грн." },
  { img: Bouquet2IMG, title: "Новара", price: "3390 грн." },
];

export default function CatalogMain({ setCatalogRef }) {
  const itemsRef = useRef(null);
  const catalogRef = useRef(null);

  useEffect(() => {
    setCatalogRef(catalogRef.current);
  }, [setCatalogRef]);

  const handleScroll = (scrollOffset) => {
    if (itemsRef.current) {
      const currentCard = 3;
      const computedStyle = getComputedStyle(itemsRef.current);
      const paddingLeft = parseFloat(computedStyle.paddingLeft);
      const paddingRight = parseFloat(computedStyle.paddingRight);
      const gridGap = parseFloat(computedStyle.getPropertyValue("grid-gap"));
      parseFloat(computedStyle.getPropertyValue("grid-auto-columns"));
      const columnWidth =
        currentCard *
        ((itemsRef.current.offsetWidth -
          2 * gridGap -
          paddingLeft -
          paddingRight) /
          3 +
          gridGap);
      const newScrollLeft =
        itemsRef.current.scrollLeft + scrollOffset * columnWidth;
      itemsRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const { t } = useTranslation();

  return (
    <div className="catalog-main" ref={catalogRef}>
      <div className="catalog-main__header">
        <span className="catalog-main__title">{t("mainCatalog.title")}</span>
        <span className="catalog-main__more">{t("mainCatalog.more")}</span>
      </div>
      <div className="catalog-main__cover-items">
        <div className="catalog-main__items" ref={itemsRef}>
          <PrevIMG
            className="catalog-main__prev"
            onClick={() => handleScroll(-1)}
          />
          {data.map((item, index) => (
            <CatalogItem
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
          <NextIMG
            className="catalog-main__next"
            onClick={() => handleScroll(1)}
          />
        </div>
      </div>

      <div className="catalog-main__line"></div>
    </div>
  );
}

function CatalogItem({ img, title, price }) {
  const dispatch = useDispatch();
  const addInBasket = () => {
    dispatch({ type: "ADD_GOODS", payload: 1 });
  };
  const { t } = useTranslation();
  return (
    <div className="catalog-item">
      <div className="catalog-item__flash"></div>
      <img loading="lazy" src={img} draggable="false" className="catalog-item__img" />
      <span className="catalog-item__title">{title}</span>
      <span className="catalog-item__price">{price}</span>
      <div className="catalog-item__buttons">
        <a className="catalog-item__bout">{t("mainCatalog.about")}</a>
        <a onClick={addInBasket} className="catalog-item__basket">
          {t("mainCatalog.basket")}
        </a>
      </div>
    </div>
  );
}
