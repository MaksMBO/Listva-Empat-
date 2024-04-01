import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link as NavLink } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export function MediaCard({ id, img, title, price, currency }) {
  const catalogUrl = `/Listva-Empat-/catalog/${id}/`;

  const dispatch = useDispatch();
  const addInBasket = () => {
    dispatch({ type: "ADD_GOODS", payload: 1 });
  };

  const { t } = useTranslation();

  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0)",
        margin: "0!important",
        boxShadow: "none",
        position: "relative",
        overflow: "visible",
      }}
    >
      <NavLink to={catalogUrl} underline="none">
        <CardMedia
          sx={{
            width: "100%",
            height: "19.5625rem",
            marginBottom: "1.0625rem",
            borderRadius: "0.375rem",
            position: "relative",
            zIndex: 1,
            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "0.375rem",
              boxShadow: "0px 0px 40px 20px rgba(255, 255, 255, 0.14)",
              zIndex: -1,
            },
            "@media (max-width: 770px)": {
              height: "18.125rem",
            },
            "@media (max-width: 550px)": {
              height: "15rem",
            },
            "@media (max-width: 400px)": {
              height: "13.125rem",
            },
          }}
          image={img}
        />
      </NavLink>
      <CardContent sx={{ padding: "0" }}>
        <NavLink to={catalogUrl}>
          <Typography
            gutterBottom
            variant="span"
            component="div"
            sx={{
              fontWeight: 500,
              fontSize: "1.125rem",
              lineHeight: "1.375rem",
              marginBottom: "0.5rem",
              color: "#E5E5E5",
            }}
          >
            {title}
          </Typography>
        </NavLink>
        <Typography
          gutterBottom
          variant="span"
          component="div"
          sx={{
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.25rem",
            color: "#E5E5E5",
            marginBottom: "1.0625rem",
          }}
        >
          {price} {currency}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.875rem",
          width: "100%",
          padding: "0",
          margin: "0",
          "@media (max-width: 770px)": {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          },
        }}
      >
        <NavLink
          to={catalogUrl}
          style={{
            width: "100%",
          }}
          underline="none"
        >
          <Button
            sx={{
              width: "100%",
              borderColor: "#826170",
              borderRadius: "0.625rem",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.25rem",
              color: "#E5E5E5",
              paddingTop: "0.625rem",
              paddingBottom: "0.625rem",
              "&:hover": {
                borderColor: "#d96591",
                backgroundColor: "#d96591",
              },
            }}
            variant="outlined"
          >
            {t("mainCatalog.about")}
          </Button>
        </NavLink>
        <Button
          onClick={addInBasket}
          sx={{
            width: "100%",
            backgroundColor: "#826170",
            borderRadius: "0.625rem",
            margin: "0!important",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.25rem",
            color: "#E5E5E5",
            paddingTop: "0.625rem",
            paddingBottom: "0.625rem",
            "&:hover": {
              backgroundColor: "#d96591",
            },
          }}
          variant="contained"
        >
          {t("mainCatalog.basket")}
        </Button>
      </CardActions>
    </Card>
  );
}
