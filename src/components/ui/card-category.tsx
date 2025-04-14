import { Typography } from "@mui/material";

type Props = {
  category: string;
};
export const CardCategory = ({ category }: Props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textTransform: "uppercase", mt: 0.5 }}
    >
      {category}
    </Typography>
  );
};
