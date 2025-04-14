import { Product } from "./product";

export interface Hits {
  total: number;
  max_score: number;
  hits: Hit[];
}

export interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Product;
  sort: [number, number];
}
