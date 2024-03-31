import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { MediaCard } from "components/MediaCard";

import BouquetIMG from "assets/images/temp/bouquet.webp";
import Bouquet2IMG from "assets/images/temp/bouquet2.webp";
import { ReactComponent as PrevIMG } from "assets/images/landig/catalog-page-prev.svg";
import { ReactComponent as NextIMG } from "assets/images/landig/catalog-page-next.svg";

export default function CatalogMain({ setCatalogRef }) {
  const tablet = 760;

  const { t } = useTranslation();

  const catalogRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const itemsPerSlide = windowWidth <= tablet ? 2 : 3;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setCatalogRef(catalogRef.current);
  }, [setCatalogRef]);

  var items = [
    {
      id: "1",
      img: BouquetIMG,
      title: "Білунд",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "2",
      img: Bouquet2IMG,
      title: "Новара",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "3",
      img: Bouquet2IMG,
      title: "Новара",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "4",
      img: BouquetIMG,
      title: "Білунд",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "5",
      img: BouquetIMG,
      title: "Білунд",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "6",
      img: Bouquet2IMG,
      title: "Новара",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "7",
      img: Bouquet2IMG,
      title: "Новара",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "8",
      img: Bouquet2IMG,
      title: "Новара",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "9",
      img: Bouquet2IMG,
      title: "Новара",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
    {
      id: "10",
      img: Bouquet2IMG,
      title: "Новара",
      price: {
        amount: 3390,
        currency: "грн.",
      },
    },
  ];

  const groupedItems = items.reduce((groupedItems, item, index) => {
    const groupIndex = Math.floor(index / itemsPerSlide);

    if (!groupedItems[groupIndex]) {
      groupedItems[groupIndex] = [];
    }

    groupedItems[groupIndex].push(item);

    return groupedItems;
  }, []);

  return (
    <>
      <Paper
        sx={{
          backgroundColor: "rgba(0,0,0,0)",
          padding: "5rem 8.54% 0 8.54%",
          width: "100%",
        }}
        ref={catalogRef}
      >
        <Paper
          sx={{
            backgroundColor: "rgba(0,0,0,0)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "3rem",
              lineHeight: "3.6875rem",
              "@media (max-width: 1200px)": {
                fontSize: "2rem",
                lineHeight: "2.4375rem",
              },
              "@media (max-width: 550px)": {
                fontSize: "1.375rem",
                lineHeight: "1.6875rem",
              },
            }}
          >
            {t("mainCatalog.title")}
          </Typography>
          <Link to={`catalog/`}>
            <Typography
              sx={{
                textDecorationLine: "underline",
                color: "#E5E5E5",
                cursor: "pointer",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "1.25rem",
              }}
            >
              {t("mainCatalog.more")}
            </Typography>
          </Link>
        </Paper>
      </Paper>
      <Carousel
        fullHeightHover={false}
        swipe={windowWidth <= tablet ? true : false}
        navButtonsAlwaysInvisible={windowWidth <= tablet ? true : false}
        indicators={false}
        autoPlay={false}
        navButtonsAlwaysVisible
        NextIcon={<NextIMG />}
        PrevIcon={<PrevIMG />}
        sx={{
          overflow: "auto",
          padding: "3rem 8.54% 7.25rem 8.54%",
          ".css-1g04gm2-MuiButtonBase-root-MuiIconButton-root": {
            backgroundColor: "rgba(0,0,0,0)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0)",
            },
          },
          "@media (max-width: 740px)": {
            padding: "2rem 5.33% 3.33rem 5.33%",
          },
        }}
      >
        {groupedItems.map((group, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridGap: "1.875rem",
              gridTemplateColumns:
                windowWidth <= tablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            }}
          >
            {group.map((item, i) => (
              <MediaCard
                key={i}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price.amount}
                currency={item.price.currency}
              />
            ))}
          </div>
        ))}
      </Carousel>
      <div
        style={{
          width: "100%",
          height: "0.25rem",
          backgroundColor: "rgba(38, 40, 46, 0.3)",
        }}
      ></div>
    </>
  );
}
