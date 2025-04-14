import { Grid } from "@mui/material";
import { useGetProducts } from "../../hooks/api/use-get-products";
import { ProductCardFeatureShell } from "./product-card-feature-shell";

export const ProductListFeatureShell = () => {
  const { data } = useGetProducts();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      {data?.map((item) => (
        <Grid
          key={item._id}
          size={{
            md: 3,
            lg: 2.4,
            xs: 6,
          }}
        >
          <ProductCardFeatureShell item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
