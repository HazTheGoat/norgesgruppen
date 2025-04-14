import { BASE_URL } from "./../constants";
import { Hit } from "./../types";
import axios from "axios";
import { ApiResponse } from "../types";

/**
 * This function fetches a list of products from the API
 * @returns - A list of products
 */
export const getProducts = async (): Promise<Hit[]> => {
  const { data } = await axios.get<ApiResponse>(
    `${BASE_URL}/products/1300/7080001150488?page=1&page_size=20&full_response=true&fieldset=maximal&facets=Category%2CAllergen&showNotForSale=true`
  );

  return data.hits.hits;
};
