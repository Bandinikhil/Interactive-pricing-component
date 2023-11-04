import { configureStore } from "@reduxjs/toolkit";
import pricingSlice from "./pricingSlice";
import viewsSlice from "./viewsSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    pricing: pricingSlice,
    views: viewsSlice,
    themes: themeSlice,
  },
});

export default store;
