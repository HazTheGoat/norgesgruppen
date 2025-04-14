import { Button } from "@mui/material";
import { useGlobalStore } from "../../store";

export const AddToCart = () => {
  const addItem = useGlobalStore((state) => state.addItem);
  const openCart = useGlobalStore((state) => state.openCart);
  const {
    productDialog: { selectedProduct },
    closeProductDialog,
  } = useGlobalStore();

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    addItem({ product: selectedProduct, quantity: 1 });
    openCart();
    closeProductDialog();
  };
  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      sx={{
        width: {
          xs: "100%",
          md: "300px",
        },
      }}
      onClick={handleAddToCart}
    >
      Legg til i handlekurven
    </Button>
  );
};
