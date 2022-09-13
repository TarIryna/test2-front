import { createAction } from "@reduxjs/toolkit";

export const productsRequest = createAction("products/Request");
export const productsSuccess = createAction("products/Success");
export const productsError = createAction("products/Error");

export const categoriesRequest = createAction("categories/Request");
export const categoriesSuccess = createAction("categories/Success");
export const categoriesError = createAction("categories/Error");

export const subcategoriesRequest = createAction("subcategories/Request");
export const subcategoriesSuccess = createAction("subcategories/Success");
export const subcategoriesError = createAction("subcategories/Error");

export const changeCategory = createAction("collection/changeCategory");
export const changeSubcategory = createAction("collection/changeSubcategory");

export const productsdbRequest = createAction("productsdb/Request");
export const productsdbSuccess = createAction("productsdb/Success");
export const productsdbError = createAction("productsdb/Error");
