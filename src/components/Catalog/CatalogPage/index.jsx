import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Pagination,
  PaginationItem,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";
import { Link as NavLink, useLocation, useNavigate } from "react-router-dom";

import { Grid, Typography, TextField } from "@mui/material";

import { MediaCard } from "components/MediaCard";

import BouquetIMG from "assets/images/temp/bouquet.webp";
import Bouquet2IMG from "assets/images/temp/bouquet2.webp";

import "components/Catalog/CatalogPage/catalogItems.scss";
import "components/Catalog/CatalogPage/select.scss";

export default function CatalogPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const [sliderVisible, setSliderVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 740) {
      setSliderVisible(true);
    }
  }, [windowWidth]);

  const handleTypographyClick = () => {
    if (windowWidth < 740) {
      setSliderVisible(!sliderVisible);
    }
  };

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(parseInt(query.get("page")) || 1);
  const [pageQty, setPageQty] = useState(1);

  const [sort, setSort] = useState("alphabet");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [search, setSearch] = useState("");

  const data = useMemo(() => {
    const data = [];
    for (let i = 1; i <= 75; i++) {
      data.push({
        id: `${i}`,
        img: i % 2 === 0 ? Bouquet2IMG : BouquetIMG,
        title: i % 2 === 0 ? "Новара" : "Білунд",
        price: {
          amount: i % 2 === 0 ? 3390 : 2000,
          currency: "грн.",
        },
      });
    }
    return data;
  }, []);

  useEffect(() => {
    let sortedData = [...data];

    sortedData = sortedData.filter((item) => {
      const price = parseInt(item.price.amount);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    if (sort === "alphabet") {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "priceAsc") {
      sortedData.sort((a, b) => a.price.amount - b.price.amount);
    } else if (sort === "priceDesc") {
      sortedData.sort((a, b) => b.price.amount - a.price.amount);
    }

    sortedData = sortedData
      .map((item) => {
        const amount = parseInt(item.price.amount);
        const currency = item.price.currency;
        return { ...item, price: { amount: amount, currency: currency } };
      })
      .filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });

    const itemsOnePage = 12;
    const startIndex = (page - 1) * itemsOnePage;
    const endIndex = startIndex + itemsOnePage;
    const pageData = sortedData.slice(startIndex, endIndex);

    setPosts(pageData);
    setPageQty(Math.ceil(sortedData.length / itemsOnePage));

    if (page < 1 || page > pageQty) {
      setPage(1);
      navigate("/Listva-Empat-/catalog?page=1");
    }
  }, [page, navigate, sort, priceRange, search, pageQty, data]);

  return (
    <>
      <div className="filters">
        <div
          style={{
            marginLeft: "16px",
            display: "flex",
            alignItems: "center",
          }}
          className="filters1"
        >
          <Typography
            id="price-range-slider"
            gutterBottom
            sx={{ marginRight: "1.3125rem", marginBottom: "0" }}
          >
            {t("filter.sort")}
          </Typography>
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            sx={{
              fontSize: "1rem",
              lineHeight: "1.25rem",
              color: "#E5E5E5",
              border: 0,
              marginTop: "4px",
              fieldset: { border: 0, borderColor: "rgba(0,0,0,0)!important" },
            }}
          >
            <MenuItem sx={{ color: "#E5E5E5" }} value="alphabet">
              {t("filter.alphabetical")}
            </MenuItem>
            <MenuItem sx={{ color: "#E5E5E5" }} value="priceAsc">
              {t("filter.price_asc")}
            </MenuItem>
            <MenuItem sx={{ color: "#E5E5E5" }} value="priceDesc">
              {t("filter.price_desc")}
            </MenuItem>
          </Select>
        </div>
        <TextField
          className="filters2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label={t("filter.search")}
          sx={{
            width: "23.12%",

            ".css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
              color: "#e5e5e5",
            },

            ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "rgba(229, 229, 229, 0.3)",
                "&::hover": {
                  borderColor: "rgba(229, 229, 229, 0.3)",
                },
              },

            input: {
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.25rem",
              color: "#E5E5E5",
              zIndex: 1,
              height: "1.25rem",
              paddingTop: "0.3125rem",
              paddingBottom: "0.3125rem",
            },

            label: {
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.25rem",
              color: "#E5E5E5",
              top: "-0.625rem",
            },

            fieldset: {
              backgroundColor: "rgba(43, 45, 52, 0.5)",
              border: "1px solid #888888",
              borderRadius: "0.625rem",
              zIndex: -1,
            },
          }}
        />
        <div
          className="filters3"
          style={{
            marginLeft: "16px",
            display: "flex",
            alignItems: "center",
            width: "23.2%",
          }}
        >
          <Typography
            id="price-range-slider"
            gutterBottom
            sx={{
              marginRight: "0.9375rem",
              marginBottom: "0",
              cursor: "pointer",
            }}
            onClick={handleTypographyClick}
          >
            {t("filter.price")}
          </Typography>
          {sliderVisible && (
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              aria-labelledby="price-range-slider"
              min={0}
              max={5000}
              sx={{
                ".MuiSlider-valueLabelOpen": {
                  background: "rgba(43, 45, 52, 0.5)",
                  border: "1px solid #888888",
                  borderRadius: "0.375rem",
                  top: "60px",
                },
                ".css-14gyywz-MuiSlider-valueLabel": { top: "60px" },
                ".css-14gyywz-MuiSlider-valueLabel::before": {
                  top: "-8px",
                  display: "none",
                },
              }}
            />
          )}
        </div>
      </div>

      <Grid
        container
        spacing={3}
        sx={{
          padding: "3.4375rem 8.54% 3rem 8.54%",
          "@media (max-width: 740px)": {
            paddingRight: "5.33%",
            paddingLeft: "5.33%",
          },
        }}
      >
        {posts.length > 0 ? (
          posts.map((post) => (
            <Grid item key={post.id} xs={6} sm={6} md={4} lg={3}>
              <MediaCard
                id={post.id}
                img={post.img}
                title={post.title}
                price={post.price.amount}
                currency={post.price.currency}
              />
            </Grid>
          ))
        ) : (
          <p
            style={{
              fontWeight: 500,
              textAlign: "center",
              width: "100%",
              fontSize: "3.0rem",
            }}
          >
            {t("filter.no_goods")}
          </p>
        )}
      </Grid>
      {!!pageQty && (
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => {
            if (num < 1 || num > pageQty) {
              setPage(1);
            } else {
              setPage(num);
            }
          }}
          sx={{
            ".css-wjh20t-MuiPagination-ul": {
              justifyContent: "center",
            },
            "@media (max-width: 330px)": {
              ".css-wjh20t-MuiPagination-ul li": {
                width: "28px",
              },
            },

            "& .MuiPaginationItem-ellipsis": {
              color: "rgba(229, 229, 229, 0.5)",
            },
          }}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                color: "rgba(229, 229, 229, 0.5)",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",

                "&.Mui-selected": {
                  color: "#E5E5E5",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                },
              }}
              component={NavLink}
              to={`/Listva-Empat-/catalog?page=${item.page}`}
              {...item}
            />
          )}
        />
      )}
    </>
  );
}
