import { StateCreator } from "zustand";
import { Hit } from "./../../types";

export interface ProductDialogSlice {
  productDialog: {
    isOpen: boolean;
    selectedProduct: Hit | null;
  };
  openProductDialog: (product: Hit) => void;
  closeProductDialog: () => void;
}

export const createProductDialogSlice: StateCreator<
  ProductDialogSlice,
  [],
  [],
  ProductDialogSlice
> = (set) => ({
  productDialog: {
    isOpen: false,
    selectedProduct: null,
  },
  openProductDialog: (product) =>
    set({
      productDialog: {
        isOpen: true,
        selectedProduct: product,
      },
    }),
  closeProductDialog: () =>
    set({
      productDialog: {
        isOpen: false,
        selectedProduct: null,
      },
    }),
});
