import { Typography } from "@mui/material";

export type CardTitle = {
  title: string;
  subtitle?: string;
};
export const CardTitle = ({ title, subtitle }: CardTitle) => {
  return (
    <>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </>
  );
};
