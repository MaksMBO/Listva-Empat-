import React from "react";

import "../../styles/act.scss";

export default function Act() {
  return (
    <div className="act">
      <div className="act__content">
        <p className="act__title">Вирішив купити букет?</p>
        <p className="act__subtitle">
          Найкращі квіти у всьому Львові, можуть опинитися вже у вас, всього за
          один клік
        </p>
        <a className="act__button">Каталог</a>
      </div>
      <div className="act__line"></div>
    </div>
  );
}
