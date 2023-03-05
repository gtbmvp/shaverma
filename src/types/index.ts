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

const sorts = ["rating", "price", "energy"] as const;
export type SortType = typeof sorts[number];
export const isValidSort = (sort: any): sort is SortType => {
  return sorts.includes(sort);
};

const categories = [
  "все",
  "курица",
  "говядина",
  "баранина",
  "фалафель",
] as const;
export type CategoriesType = typeof categories[number];
export const isValidCategory = (cat: any): cat is CategoriesType => {
  return categories.includes(cat);
};
