import React from "react";

import "../../styles/response.scss";
import "../../styles/response-item.scss";

import AvatarIMG from "../../assets/images/temp/avatar.jpg";

function ResponseItem({ img, text, username }) {
  const textWithLineBreaks = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="response-item">
      <p className="response-item__text">{textWithLineBreaks}</p>
      <div className="response-item__img">
        <img
          className="response-item__avatar"
          src={img}
          alt="User avatar"
        />
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
            img={AvatarIMG}
            text={
              "Дуже чудовий сервіс.\nШвидко відповідають на повідомлення та вчасно виконують замовлення відповідно до усіх побажань))"
            }
            username={"Khrysty"}
          />
          <ResponseItem
            img={AvatarIMG}
            text={
              "Неймовірне оформлення та дуже швидка доставка!\nБули враховані всі побажання, які були обговорені при замовленні."
            }
            username={"Andrii Bereznyuk"}
          />
          <ResponseItem
            img={AvatarIMG}
            text={
              "Чудова робота, дякую! \nТреба було терміново привітати дівчину, лише завдяки вам все встиг, вона просто в захваті!"
            }
            username={"Denis Khlibov"}
          />
        </div>
      </div>
      <div className="response__back-block"></div>
      <div className="response__line"></div>
    </div>
  );
}
