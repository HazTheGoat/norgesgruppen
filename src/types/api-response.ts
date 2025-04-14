import { Hits } from "./hit";
import { Shards } from "./shards";

export type ApiResponse = {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
};
