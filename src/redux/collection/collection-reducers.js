import * as actions from "./collection-actions";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const categories = createReducer([], {
  [actions.categoriesSuccess]: (_, { payload }) => payload,
});

const subcategories = createReducer([], {
  [actions.subcategoriesSuccess]: (_, { payload }) => payload,
});

const products = createReducer([], {
  [actions.productsSuccess]: (_, { payload }) => payload,
});

const productsdb = createReducer([], {
  [actions.productsdbSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [actions.categoriesError]: (_state, action) => action.payload,
  [actions.subcategoriesError]: (_state, action) => action.payload,
  [actions.categoriesRequest]: () => null,
  [actions.subcategoriesRequest]: () => null,
});

const category = createReducer("", {
  [actions.changeCategory]: (_, { payload }) => payload,
});

const subcategory = createReducer("", {
  [actions.changeSubcategory]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.categoriesRequest]: () => true,
  [actions.categoriesSuccess]: () => false,
  [actions.categoriesError]: () => false,
  [actions.subcategoriesRequest]: () => true,
  [actions.subcategoriesSuccess]: () => false,
  [actions.subcategoriesError]: () => false,
});

export default combineReducers({
  categories,
  subcategories,
  products,
  productsdb,
  loading,
  error,
  category,
  subcategory,
});
