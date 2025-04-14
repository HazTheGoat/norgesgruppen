import { Typography, TypographyVariant } from "@mui/material";
import { formatCurrency } from "../../utils";

type Props = {
  price: number;
  variant?: TypographyVariant;
};
export const Price = ({ price, variant }: Props) => {
  return (
    <Typography
      variant={variant}
      sx={{
        mt: 1,
      }}
    >
      {formatCurrency(price)}
    </Typography>
  );
};
