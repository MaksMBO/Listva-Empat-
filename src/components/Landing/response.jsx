import React from "react";

import "../../styles/response.scss";
import "../../styles/response-item.scss";

function ResponseItem({ img, text, username }) {
  return (
    <div className="response-item">
      <p className="response-item__text">{text}</p>
      <div className="response-item__img">
        <img className="response-item__avatar" src={require(`../../assets/images/temp/avatar.jpg`)} alt="User avatar" />
      </div>
      <p className="response-item__username">{username}</p>
    </div>
  );
}

export default function Response() {
  return (
    <div className="response">
      <div className="response__content">
        <div className="response__title">Відгуки</div>
        <div className="response__items">
          <ResponseItem
            img={`../../assets/images/temp/avatar.jpg`}
            text={
              "Дуже чудовий сервіс.\nШвидко відповідають на повідомлення та вчасно виконують замовлення відповідно до усіх побажань))"
            }
            username={"Khrysty"}
          />
          <ResponseItem
            img={`../../assets/images/temp/avatar.jpg`}
            text={
              "Неймовірне оформлення та дуже швидка доставка!\nБули враховані всі побажання, які були обговорені при замовленні."
            }
            username={"Andrii Bereznyuk"}
          />
          <ResponseItem
            img={`../../assets/images/temp/avatar.jpg`}
            text={
              "Чудова робота, дякую! \nТреба було терміново привітати дівчину, лише завдяки вам все встиг, вона просто в захваті!"
            }
            username={"Denis Khlibov"}
          />
        </div>
      </div>
      <div className="response__line"></div>
    </div>
  );
}
