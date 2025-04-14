import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalStore } from "../../store";
import { formatCurrency } from "../../utils";
import { QuantitySelector } from "../ui/quantity-selector";

export const CartProductList = () => {
  const { items, removeItem } = useGlobalStore();
  return (
    <List sx={{ mb: 2 }}>
      {items.map((item) => (
        <div key={item.product._id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar sx={{ mr: 1 }}>
              <Avatar
                variant="square"
                src={`https://bilder.ngdata.no/${item.product._source.imagePath}/medium.jpg`}
                alt={item.product._source.title}
                sx={{ width: 60, height: 60 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.product._source.title}
              secondary={formatCurrency(
                item.product._source.pricePerUnitOriginal
              )}
            />
            <IconButton edge="end" onClick={() => removeItem(item.product._id)}>
              <CloseIcon />
            </IconButton>
          </ListItem>

          <Box sx={{ pl: 2, pr: 2, mb: 1 }}>
            <Typography variant="body2">Antall:</Typography>
            <QuantitySelector item={item} />
          </Box>

          <Divider />
        </div>
      ))}
    </List>
  );
};
