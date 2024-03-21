import React from "react";

import { ReactComponent as PersonImage } from "../../assets/images/landig/person.svg";
import { ReactComponent as BouquetImage } from "../../assets/images/landig/bouquet.svg";
import { ReactComponent as GeoImage } from "../../assets/images/landig/geo.svg";
import { ReactComponent as DeliveryImage } from "../../assets/images/landig/delivery.svg";

import "../../styles/advantages.scss";

const advantagesData = [
  { icon: PersonImage, firstText: "15+", secondText: "років бізнес-досвіду" },
  {
    icon: BouquetImage,
    firstText: "26+",
    secondText: "років досвіду у флористиці",
  },
  { icon: GeoImage, firstText: "1 км", secondText: "від центру Львова" },
  {
    icon: DeliveryImage,
    firstText: "200 грн",
    secondText: "доставка по Львову",
  },
];

export default function Advantages() {
  return (
    <div className="advantages">
      <div className="advantages__about">
        <div className="advantages__text">
          <p className="advantages__title">
            Знайдемо найкращі квіти саме для вас
          </p>
          <p className="advantages__subtitle-1">
            Ми знаходимося в самому центрі Львова і маємо велику налагоджену
            систему по роботі з флористикою. Велика кількість фахівців пишається
            роботою з нами.
          </p>
          <p className="advantages__subtitle-2">
            Для оволодіння будь-якою справою потрібно понад 10 000+ годин. Ми
            інвестували понад 100 000+ годин у створення квіткових бізнесів.
          </p>
        </div>

        <div className="advantages__points">
          {advantagesData.map((item, index) => (
            <AdvantagesPoint key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="advantages__line"></div>
    </div>
  );
}

function AdvantagesPoint({ icon: Icon, firstText, secondText }) {
  return (
    <div className="advantages__point">
      <Icon className="advantages__point-img" />
      <p className="advantages__text-point">
        <span>{firstText}</span>
        <span>{secondText}</span>
      </p>
    </div>
  );
}
