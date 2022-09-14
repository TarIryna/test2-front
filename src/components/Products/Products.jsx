import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import {
  fetchProducts,
  fetchProductsdb,
} from "../../redux/collection/collection-operations";
import {
  getProducts,
  getSubcategory,
  getProductsdb,
} from "../../redux/collection/collection-selectors";
import { addProduct } from "../../api/collectionApi";
import Button from "../Button";
import Select from "../Select";

export default function Products() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const productsdb = useSelector(getProductsdb);
  const subcategory = useSelector(getSubcategory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onChangeProduct = (e) => {
    const { value } = e.target;
    setName(value);
    return;
  };

  const onButton = async () => {
    if (productsdb.includes(name)) {
      Toastify({
        text: "Такий товар вже є у базі даних, спробуйте інше ім'я :)",
        className: "info",
        style: {
          background: "linear-gradient(to right, #ffcccc, #ff471a)",
        },
      }).showToast();
      return;
    }
    await addProduct(name, subcategory);
    dispatch(fetchProductsdb());
    setName("");
    return;
  };

  return (
    <>
      <Select
        items={products}
        placeholder="Виберіть товар"
        name="products"
        onChange={(e) => onChangeProduct(e)}
      />
      <Button title="Додати товар" type="button" onClick={onButton} />
    </>
  );
}
