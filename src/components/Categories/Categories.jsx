import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "./Categories.styled";
import {
  getCategories,
  getCategory,
} from "../../redux/collection/collection-selectors";
import { changeCategory } from "../../redux/collection/collection-actions";
import {
  fetchCategories,
  fetchSubcategories,
} from "../../redux/collection/collection-operations";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Button from "../../components/Button";

export default function Categories() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onChangeCategory = (e) => {
    const { value } = e.target;
    dispatch(changeCategory(value));
    dispatch(fetchSubcategories(value));
    return;
  };

  const closeModal = () => {
    setModal(false);
  };

  const categories = useSelector(getCategories);

  return (
    <div>
      <Select name="category" onChange={(e) => onChangeCategory(e)}>
        <option value="">Виберіть категорію</option>
        {categories ? (
          categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))
        ) : (
          <></>
        )}
      </Select>
      <Button
        title="Додати категорію"
        type="button"
        onClick={() => setModal(true)}
      />
      <Modal active={modal} setActive={setModal}>
        <Form
          closeModal={closeModal}
          title="Введіть нову категорію"
          buttonTitle="Додати категорію"
        />
      </Modal>
    </div>
  );
}
