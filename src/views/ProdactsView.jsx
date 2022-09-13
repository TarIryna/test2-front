import { useSelector } from "react-redux";
import { getSubcategory } from "../redux/collection/collection-selectors";
import Products from "../components/Products";
import ProductsDb from "../components/ProductsDb";

export default function ProductsView() {
  const subcategory = useSelector(getSubcategory);
  return (
    <div>
      {subcategory && <Products />}
      {subcategory && <ProductsDb />}
    </div>
  );
}
