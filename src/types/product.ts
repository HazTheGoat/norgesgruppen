import { Allergen } from "./allergen";
import { EnvironmentalCode } from "./environmental-code";
import { Nutrient } from "./nutrient";
import { Promotion } from "./promotion";

export type Product = {
  productionCountry: string;
  isMedicin: boolean;
  shoppingListGroupName: string;
  imagePath: string;
  pricePerUnit: number;
  isRevoked: boolean;
  recycleValue: number;
  vitaminsMinerals: Nutrient[];
  measurementType: string;
  shoppingListGroupIds: number[];
  brand: string;
  isForSale: boolean;
  productByWeightSoldAsItem: boolean;
  weight: number;
  isFreshProduce: boolean;
  environmentalCodes: EnvironmentalCode[];
  unitRule: number;
  productSoldByWeight: boolean;
  unit: string;
  pricePerUnitOriginal: number;
  isBreadAndCanSlice: boolean;
  subtitle: string;
  mustOrderFromSupplier: boolean;
  shoppingListGroupName1: string;
  unitWeight: number;
  measurementValue: number;
  supplierId: number;
  leadTime: unknown[]; // Cant tell the type from the API example
  packageSize: string;
  title: string;
  assortmentGroup: unknown[]; // Cant tell the type from the API example
  categoryName: string;
  calcUnit: string;
  alcoholPercentage: number;
  unitType: string;
  nutritionalContent: Nutrient[];
  ageLimit: number;
  ean: string;
  vendor: string;
  comparePricePerUnit: number;
  servingSize: number;
  organic: boolean;
  containsAlcohol: boolean;
  calcUnitType: string;
  compareUnit: string;
  calcPricePerUnit: number;
  isOffer: boolean;
  isNew: boolean;
  storeId: string;
  slugifiedUrl: string;
  imageGtin: string;
  isLocal: boolean;
  isOutOfStock: boolean;
  allergens: Allergen[];
  unitRules: number;
  epdNumber: number;
  promotions: Promotion[];
  guidelineDailyAmount: unknown[]; // Cant tell the type from the API example
  countryOfOrigin: string;
  usesPromotionPrice: boolean;
  promotionDisplayName: string;
  promotionId: number;
  availableInventory: unknown; // Cant tell the type from the API example
  coupon: unknown; // Cant tell the type from the API example
};
