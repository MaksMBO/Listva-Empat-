import { useTranslation } from "react-i18next";

import "components/About/Feedback/feedback.scss";
import { Button } from "@mui/material";

export default function Feedback() {
  const { t } = useTranslation();

  return (
    <div className="feedback">
      <div className="feedback__content">
        <div className="feedback__submit">
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            className="feedback__input"
            placeholder="+ 38 (09*) *** ** **"
          />
          <Button
            className="feedback__submit-button"
            sx={{
              fontWeight: 400,
              width: "100%",
              padding: "0.75rem",
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "normal",
              textTransform: "none",
              background: "rgba(223, 131, 172, 0.9)",
              borderRadius: "0.625rem",
              filter: "drop-shadow(0px 0px 20px #a47087)",
              "&:hover": {
                backgroundColor: "#d96591",
              },
            }}
            variant="contained"
          >
            {t("feedback.submit-button")}
          </Button>
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
