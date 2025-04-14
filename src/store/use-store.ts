import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createThemeSlice, ThemeSlice } from "./slices/theme-slice";
import { CartSlice, createCartSlice } from "./slices/cart-slice";
import {
  createProductDialogSlice,
  ProductDialogSlice,
} from "./slices/product-dialog-slice";
import { createDrawerSlice, DrawerSlice } from "./slices/drawer-slice";

type StoreState = ThemeSlice & CartSlice & ProductDialogSlice & DrawerSlice;

export const useGlobalStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createThemeSlice(...a),
      ...createCartSlice(...a),
      ...createProductDialogSlice(...a),
      ...createDrawerSlice(...a),
    }),
    {
      name: "norgesgruppen-storage",
      // We want to persist cart.items and theme.mode
      partialize: (state) => ({
        mode: state.mode,
        items: state.items,
      }),
    }
  )
);
