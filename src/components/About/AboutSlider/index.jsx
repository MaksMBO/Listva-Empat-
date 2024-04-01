import Carousel from "react-material-ui-carousel";

import { ReactComponent as NextImage } from "assets/images/about/next(back).svg";
import BouquetIMG from "assets/images/temp/bouquet.webp";
import Bouquet2IMG from "assets/images/temp/bouquet2.webp";
import Bouquet3IMG from "assets/images/temp/bouquet3.webp";
import AboutItem from "components/About/AboutItem";

import "components/About/AboutSlider/carousel.scss";

export default function AboutSlider(props) {
  var items = [
    BouquetIMG,
    Bouquet2IMG,
    Bouquet3IMG,
    Bouquet3IMG,
    Bouquet3IMG,
    Bouquet3IMG,
  ].slice(0, 3);

  const limitedItems = items.slice(0, 3);

  return (
    <Carousel
      sx={{
        ".MuiButtonBase-root": {
          top: "calc(100% - 30px - 17px) !important",
        },
        // ".css-hn784z .css-1g04gm2-MuiButtonBase-root-MuiIconButton-root ": {
        //   top: "calc(100% - 30px - 17px) !important",
        // },
      }}
      indicators={limitedItems.length > 1}
      autoPlay={false}
      navButtonsAlwaysVisible
      NextIcon={<NextImage />}
      PrevIcon={<NextImage style={{ transform: "rotate(180deg)" }} />}
    >
      {items.map((item, i) => (
        <AboutItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
