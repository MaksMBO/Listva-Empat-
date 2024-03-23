import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

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

export default function Advantages({ setAdvantagesRef }) {
  const advantagesRef = useRef(null);
  useEffect(() => {
    setAdvantagesRef(advantagesRef.current);
  }, [setAdvantagesRef]);

  const { t } = useTranslation();

  return (
    <div className="advantages" ref={advantagesRef}>
      <div className="advantages__about">
        <div className="advantages__text">
          <p className="advantages__title">{t("advantages.title.title")}</p>
          <p className="advantages__subtitle-1">
            {t("advantages.title.subtitle_1")}
          </p>
          <p className="advantages__subtitle-2">
            {t("advantages.title.subtitle_2")}
          </p>
        </div>

        <div className="advantages__points">
          {t("advantages.points", { returnObjects: true }).map(
            (item, index) => (
              <AdvantagesPoint key={index} {...item} />
            )
          )}
        </div>
      </div>
      <div className="advantages__line"></div>
    </div>
  );
}

function AdvantagesPoint({ icon, firstText, secondText }) {
  let IconComponent;

  switch (icon.trim()) {
    case "PersonImage":
      IconComponent = PersonImage;
      break;
    case "BouquetImage":
      IconComponent = BouquetImage;
      break;
    case "GeoImage":
      IconComponent = GeoImage;
      break;
    case "DeliveryImage":
      IconComponent = DeliveryImage;
      break;
    default:
      IconComponent = null;
  }

  return (
    <div className="advantages__point">
      {IconComponent && (
        <IconComponent className="advantages__point-img" alt="icon" />
      )}
      <p className="advantages__text-point">
        <span>{firstText}</span>
        <span>{secondText}</span>
      </p>
    </div>
  );
}
