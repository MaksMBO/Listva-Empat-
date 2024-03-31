import CatalogPage from "components/Catalog/CatalogPage";
import CatalogOrder from "components/Catalog/CatalogOrder";

import "pages/Catalog/catalog.scss";

export default function Catalog() {
  return (
    <>
      <CatalogPage />
      <CatalogOrder />
    </>
  );
}
