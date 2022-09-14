import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { changeSubcategory } from "../../redux/collection/collection-actions";
import { getSubcategories } from "../../redux/collection/collection-selectors";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Button from "../../components/Button";
import Select from "../../components/Select";

export default function Subcategories() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const subcategories = useSelector(getSubcategories);

  const onChangeSubcategory = (e) => {
    const { value } = e.target;
    dispatch(changeSubcategory(value));
    return;
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <Select
        items={subcategories}
        placeholder="Виберіть підкатегорію"
        name="subcategories"
        onChange={(e) => onChangeSubcategory(e)}
      />
      <Button
        title="Додати підкатегорію"
        type="button"
        onClick={() => setModal(true)}
      />
      <Modal active={modal} setActive={setModal}>
        <Form
          closeModal={closeModal}
          title="Введіть нову підкатегорію"
          buttonTitle="Додати підкатегорію"
        />
      </Modal>
    </div>
  );
}
