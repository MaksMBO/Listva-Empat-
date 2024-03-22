import "../../styles/landing-main.scss";

import BouquetIMG from "../../assets/images/temp/bouquet.jpg";
import Bouquet2IMG from "../../assets/images/temp/bouquet2.jpg";
import Bouquet3IMG from "../../assets/images/temp/bouquet3.jpg";
import { ReactComponent as PrevIMG } from "../../assets/images/landig/catalog-page-prev.svg";
import { ReactComponent as NextIMG } from "../../assets/images/landig/catalog-page-next.svg";

import "../../styles/catalog-main.scss";
import "../../styles/catalog-item.scss";

export default function CatalogMain() {
  return (
    <div className="catalog-main">
      <div className="catalog-main__header">
        <span className="catalog-main__title">Каталог</span>
        <span className="catalog-main__more">Дивитися більше</span>
      </div>
      <div className="catalog-main__cover-items">
        <div className="catalog-main__items">
        <PrevIMG className="catalog-main__prev" />
        <CatalogItem img={BouquetIMG} title={"Білунд"} price={"3390 грн."} />
        <CatalogItem img={Bouquet2IMG} title={"Неаполь"} price={"2200 грн."} />
        <CatalogItem img={Bouquet3IMG} title={"Новара"} price={"3390 грн."} />
        <CatalogItem img={BouquetIMG} title={"Новара"} price={"3390 грн."} />
        <CatalogItem img={BouquetIMG} title={"Новара"} price={"3390 грн."} />
        <NextIMG className="catalog-main__next" />
      </div>
      </div>
      

      <div className="catalog-main__line"></div>
    </div>
  );
}

function CatalogItem({ img, title, price }) {
  return (
    <div className="catalog-item">
      <div className="catalog-item__flash"></div>
      <img src={img} className="catalog-item__img" />
      <span className="catalog-item__title">{title}</span>
      <span className="catalog-item__price">{price}</span>
      <div className="catalog-item__buttons">
        <a href="#" className="catalog-item__bout">
          Про товар
        </a>
        <a href="#" className="catalog-item__basket">
          В кошик
        </a>
      </div>
    </div>
  );
}
