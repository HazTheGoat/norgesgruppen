import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { useGlobalStore } from "../../store";

export const NutrientTable = () => {
  const {
    productDialog: { selectedProduct },
  } = useGlobalStore();

  return (
    <>
      <Typography sx={{ color: "inherit" }}>Innholdsfortegnelse</Typography>
      <TableContainer
        sx={{
          maxHeight: {
            md: 400,
          },
          overflow: "scroll",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">displayName</TableCell>
              <TableCell align="right">amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedProduct?._source.nutritionalContent.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.displayName}</TableCell>
                <TableCell align="right">
                  {row.amount} ({row.unit})
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
