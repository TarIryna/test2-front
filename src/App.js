import {MainContainer, ContentContainer, Title} from './App.styled'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProdactsView';;

export default function App() {
  return (
    <MainContainer>
      <Title>TEST TASK</Title>
      <ContentContainer>
          <CategoriesView/>
          <ProductsView/>
      </ContentContainer>
    </MainContainer>
  );
}
