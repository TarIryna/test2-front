import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsdb } from "../../redux/collection/collection-selectors";
import { fetchProductsdb } from "../../redux/collection/collection-operations";
import { List, Title, Container } from "./ProductsDb.styled";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsdb());
  }, [dispatch]);

  const productsdb = useSelector(getProductsdb);
  return (
    <Container>
      <Title>Товари, які є в базі даних:</Title>
      {productsdb ? (
        <List>
          {productsdb.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </List>
      ) : (
        <></>
      )}
    </Container>
  );
}
