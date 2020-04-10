import { Product } from "../products/Product";

export type Profile = {
  name: string;
  birthDate: string;
};

export type User = {
  id: string;
  userName: string;
  profile: Profile;
  cart: Product[];
};
