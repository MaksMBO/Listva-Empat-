import { ReactComponent as PersonImage } from "assets/images/landig/person.svg";
import { ReactComponent as BouquetImage } from "assets/images/landig/bouquet.svg";
import { ReactComponent as GeoImage } from "assets/images/landig/geo.svg";
import { ReactComponent as DeliveryImage } from "assets/images/landig/delivery.svg";

export default function AdvantagesPoint({ icon, firstText, secondText }) {
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
