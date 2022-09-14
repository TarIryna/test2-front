import { SelectElement } from "./Select.styled";

export default function Select({items, placeholder, name, onChange}) {
  return (
    <SelectElement name={name} onChange={onChange}>
      <option value="">{placeholder}</option>
      {items ? (
          items.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))
        ) : (
          <></>)}
    </SelectElement>
  );
};
