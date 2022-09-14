import { FormCont, Input } from "./Form.styled";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { addCategory, addSubcategory } from "../../api/collectionApi";
import {
  getCategory,
  getCategories,
  getSubcategories,
} from "../../redux/collection/collection-selectors";
import {
  fetchCategories,
  fetchSubcategories,
} from "../../redux/collection/collection-operations";
import Button from '../Button';

export default function Form({ title, buttonTitle, closeModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const category = useSelector(getCategory);
  const categories = useSelector(getCategories);
  const subcategories = useSelector(getSubcategories);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if(name.length === 0){
      Toastify({
        text: "Введіть, будь ласка, назву!",
        className: "info",
        style: {
          background: "linear-gradient(to right, #4956e6, #3443eb)",
        },
      }).showToast();
      return;
    }
    switch (title) {
      case "Введіть нову категорію":
        if (categories.includes(name)) {
          Toastify({
            text: "Така категорія вже є, спробуйте інше ім'я :)",
            className: "info",
            style: {
              background: "linear-gradient(to right, #ffcccc, #ff471a)",
            },
          }).showToast();
          return;
        }
        await addCategory(name);
        dispatch(fetchCategories());
        setName("");
        closeModal();
        break;

      case "Введіть нову підкатегорію":
        if (subcategories.includes(name)) {
          Toastify({
            text: "Така підкатегорія вже є, спробуйте інше ім'я :)",
            className: "info",
            style: {
              background: "linear-gradient(to right, #e67d49, #ff471a)",
            },
          }).showToast();
          return;
        }
        await addSubcategory(category, name);
        dispatch(fetchSubcategories(category));
        setName("");
        closeModal();
        break;

      default:
        break;
    }
  };

  const onChangeInput = (e) => {
    const { value } = e.currentTarget;
    setName(value);
    return;
  };

  return (
    <FormCont type="submit" onSubmit={onSubmitForm}>
      <h5>{title}</h5>
      <Input type="text" name="name" value={name} onChange={onChangeInput} />
      <Button type="submit" title={buttonTitle}/>
    </FormCont>
  );
}
