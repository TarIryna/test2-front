import { Container } from "./Views.styled";
import Categories from "../components/Categories";
import Subcategories from "../components/Subcategories";
import { useSelector } from "react-redux";
import { getCategory } from "../redux/collection/collection-selectors";

export default function CategoriesView() {
  const category = useSelector(getCategory);

  return (
    <Container>
      <Categories />
      {category && <Subcategories />}
    </Container>
  );
}
