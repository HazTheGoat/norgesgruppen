import { useGlobalStore } from "../../store";
import { CardCategory } from "../ui/card-category";
import { CardTitle } from "../ui/card-title";
import { ImageComponent } from "../ui/image";
import { Price } from "../ui/price";
import { Hit } from "./../../types";
import { Card, CardContent } from "@mui/material";

type Props = {
  item: Hit;
};
export const ProductCardFeatureShell = ({ item }: Props) => {
  const openProductDialog = useGlobalStore((state) => state.openProductDialog);

  const handleClick = () => {
    openProductDialog(item);
  };

  const handleMouseOver = async () => {
    /*
     *
     * We can use this to prefetch data when the user hovers over the card, 
     * This is useful for improving performance and user experience, 
     * by preloading data that the user is likely to navigate to, 
     * This is a good place to prefetch data for the product details page, 
     * Uncomment the following line to enable prefetching
     * 
     * 
     
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery({
        queryKey: [USE_GET_PRODUCT, { id: item.id }],
        queryFn: () => getProductById({ id: item.id }),
        });
    */
  };

  return (
    <Card
      tabIndex={0} // Make the card focusable
      aria-label={`View details for ${item._source.title}`} // Add an aria-label for accessibility
      aria-description={item._source.subtitle} // Add an aria-description for accessibility
      onMouseEnter={handleMouseOver}
      onClick={handleClick}
      variant="outlined"
      sx={{
        position: "relative",
        cursor: "pointer",
        transition: "box-shadow 0.3s",
        "&:hover": {
          "& .quick-view": {
            opacity: 1,
          },
          "& .image-container": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        },
      }}
    >
      {/* Card image */}
      <ImageComponent
        height={{ xs: 200, md: 300 }} // Responsive height
        alt={item._source.subtitle}
        src={`https://bilder.ngdata.no/${item._source.imagePath}/`}
      />

      <CardContent sx={{ pt: 2 }}>
        {/* Title */}
        <CardTitle
          title={item._source.title}
          subtitle={item._source.subtitle}
        />
        {/* Category */}
        <CardCategory category={item._source.categoryName} />
        {/* Price */}
        <Price price={item._source.pricePerUnitOriginal} />
      </CardContent>
    </Card>
  );
};
