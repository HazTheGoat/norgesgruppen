import { Select, MenuItem } from "@mui/material";
import { useGlobalStore } from "../../store";
import { CartItem } from "../../store/slices/cart-slice";

type Props = {
  item: CartItem;
};
export const QuantitySelector = ({ item }: Props) => {
  const { items, updateItemQuantity } = useGlobalStore();

  const handleQuantityChange = (productId: string, quantity: number) => {
    const existingItem = items.find((item) => item.product._id === productId);
    if (!existingItem) return;

    updateItemQuantity(productId, quantity);
  };

  return (
    <Select
      size="small"
      value={item.quantity}
      onChange={(e) =>
        handleQuantityChange(item.product._id, Number(e.target.value))
      }
      sx={{ width: 70 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qty) => (
        <MenuItem key={qty} value={qty}>
          {qty}
        </MenuItem>
      ))}
    </Select>
  );
};
