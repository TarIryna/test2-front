import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import collectionReducer from "./collection/collection-reducers";

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
  },

  devTools: process.env.NODE_ENV !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
