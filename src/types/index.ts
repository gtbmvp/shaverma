export interface IShaverma {
  id: number;
  title: string;
  category: string;
  ingredients: Array<string>;
  energy: number;
  protein: number;
  fats: number;
  carbohydrates: number;
  price: number;
  photo: string;
  rating: number;
}

export interface ICartShaverma {
  id: number;
  title: string;
  price: number;
  photo: string;
  count: number;
}

export type SortType = "rating" | "price" | "energy";
export type CategoriesType =
  | "все"
  | "курица"
  | "говядина"
  | "баранина"
  | "фалафель";
