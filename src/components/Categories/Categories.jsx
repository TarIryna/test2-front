import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/collection/collection-selectors";
import { changeCategory } from "../../redux/collection/collection-actions";
import {
  fetchCategories,
  fetchSubcategories,
} from "../../redux/collection/collection-operations";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Button from "../../components/Button";
import Select from "../../components/Select";

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
      <Select
        items={categories}
        placeholder="Виберіть категорію"
        name="categories"
        onChange={(e) => onChangeCategory(e)}
      />
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
