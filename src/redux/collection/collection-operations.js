import {
  fetchCategoriesAll,
  fetchSubcategoriesAll,
  fetchProductsAll,
  fetchProductsdbAll,
} from "../../api/collectionApi";
import {
  categoriesRequest,
  categoriesSuccess,
  categoriesError,
  subcategoriesRequest,
  subcategoriesSuccess,
  subcategoriesError,
  productsRequest,
  productsSuccess,
  productsError,
  productsdbRequest,
  productsdbSuccess,
  productsdbError,
} from "./collection-actions";

const fetchCategories = () => async (dispatch) => {
  dispatch(categoriesRequest());
  try {
    const data = await fetchCategoriesAll();
    dispatch(categoriesSuccess(data));
  } catch (error) {
    dispatch(categoriesError(error));
    console.log(error);
  }
};

const fetchSubcategories = (category) => async (dispatch) => {
  dispatch(subcategoriesRequest());
  try {
    const data = await fetchSubcategoriesAll(category);
    dispatch(subcategoriesSuccess(data));
  } catch (error) {
    dispatch(subcategoriesError(error));
    console.log(error);
  }
};

const fetchProducts = () => async (dispatch) => {
  dispatch(productsRequest());
  try {
    const data = await fetchProductsAll();
    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsError(error));
    console.log(error);
  }
};

const fetchProductsdb = () => async (dispatch) => {
  dispatch(productsdbRequest());
  try {
    const data = await fetchProductsdbAll();
    dispatch(productsdbSuccess(data));
  } catch (error) {
    dispatch(productsdbError(error));
    console.log(error);
  }
};

export { fetchCategories, fetchSubcategories, fetchProducts, fetchProductsdb };
