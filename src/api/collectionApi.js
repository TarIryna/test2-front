import axios from "axios";

axios.defaults.baseURL = "https://testirinatar.herokuapp.com";

async function fetchCategoriesAll() {
  const { data } = await axios.get("/products");
  return data;
}
async function fetchSubcategoriesAll(category) {
  const { data } = await axios.get(
    `/products/subcategories?category=${category}`
  );
  return data;
}

async function fetchProductsAll() {
  const { data } = await axios.get("/products/products");
  return data;
}

async function fetchProductsdbAll() {
  const { data } = await axios.get("/products/productsdb");
  return data;
}

async function addCategory(category) {
  const { data } = await axios.post(
    `/products/newcategory?category=${category}`
  );
  return data;
}

async function addSubcategory(category, subcategory) {
  const { data } = await axios.post(
    `/products/newsubcategory?category=${category}&subcategory=${subcategory}`
  );
  return data;
}

async function addProduct(product, subcategory) {
  const { data } = await axios.post(
    `/products/newproduct?subcategory=${subcategory}&product=${product}`
  );
  return data;
}

export {
  fetchCategoriesAll,
  fetchSubcategoriesAll,
  fetchProductsAll,
  addCategory,
  addSubcategory,
  addProduct,
  fetchProductsdbAll,
};
