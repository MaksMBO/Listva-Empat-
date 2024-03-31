import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import AdvantagesPoint from "components/Landing/AdvantagesPoint";
import "components/Landing/Advantages/advantages.scss";

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
