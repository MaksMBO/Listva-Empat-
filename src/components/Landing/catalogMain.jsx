import "../../styles/landing-main.scss";

import "../../styles/catalog-main.scss";
import "../../styles/catalog-item.scss";

export default function CatalogMain() {
  return (
    <div className="catalog-main">
      <div className="catalog-main__header">
        <span className="catalog-main__title">Каталог</span>
        <span className="catalog-main__more">Дивитися більше</span>
      </div>
      <div className="catalog-main__items">
        <CatalogItem title={"Білунд"} price={"3390 грн."} />
        <CatalogItem title={"Неаполь"} price={"2200 грн."} />
        <CatalogItem title={"Новара"} price={"3390 грн."} />
        <CatalogItem title={"Новара"} price={"3390 грн."} />
        <CatalogItem title={"Новара"} price={"3390 грн."} />
      </div>
      <div className="catalog-main__line"></div>
    </div>
  );
}

function CatalogItem({ img, title, price }) {
  return (
    <div className="catalog-item">
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
