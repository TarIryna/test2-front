import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { changeSubcategory } from "../../redux/collection/collection-actions";
import { getSubcategories } from "../../redux/collection/collection-selectors";
import { Select } from "./Subcategories.styled";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Button from "../../components/Button";

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
      <Select name="subcategory" onChange={(e) => onChangeSubcategory(e)}>
        <option value="">Виберіть підкатегорію</option>
        {subcategories ? (
          subcategories.map((subcategory) => (
            <option key={subcategory} value={subcategory}>
              {subcategory}
            </option>
          ))
        ) : (
          <></>
        )}
      </Select>
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
