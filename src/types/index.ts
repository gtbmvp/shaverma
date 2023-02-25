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
}

export type SortType = "rating" | "price" | "energy";
export type CategoriesType =
  | "все"
  | "курица"
  | "говядина"
  | "баранина"
  | "фалафель";
