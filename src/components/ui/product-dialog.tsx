import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ImageComponent } from "../ui/image";
import { CardTitle } from "../ui/card-title";
import { CardCategory } from "../ui/card-category";
import { Price } from "../ui/price";
import { useGlobalStore } from "../../store";
import { NutrientTable } from "./nutrient-table";
import { AddToCart } from "./add-to-cart";

export const ProductDialog = () => {
  const { productDialog, closeProductDialog } = useGlobalStore();
  const { isOpen, selectedProduct } = productDialog;

  if (!selectedProduct) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={closeProductDialog}
      aria-labelledby="product-dialog-title"
      aria-describedby="product-dialog-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle id="product-dialog-title">
        {selectedProduct._source.title}
        <IconButton
          aria-label="close"
          onClick={closeProductDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <ImageComponent
          height={{ xs: 200, md: 300 }} // Responsive height
          alt={selectedProduct._source.subtitle}
          src={`https://bilder.ngdata.no/${selectedProduct._source.imagePath}/`}
          lazyLoad={false}
        />

        <DialogContentText component={Box} id="product-dialog-description">
          <CardTitle
            title={selectedProduct._source.title}
            subtitle={selectedProduct._source.subtitle}
          />
          <CardCategory category={selectedProduct._source.categoryName} />

          <Box mb={4}>
            <Box mb={2}>
              <Price
                price={selectedProduct._source.pricePerUnitOriginal}
                variant="h4"
              />
            </Box>
            <AddToCart />
          </Box>
          <NutrientTable />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
