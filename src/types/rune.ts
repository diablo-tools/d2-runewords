import { Gem } from "./gem";
import { ItemEffect } from "./items";

export type RuneName =
  | "El"
  | "Eld"
  | "Tir"
  | "Nef"
  | "Eth"
  | "Ith"
  | "Tal"
  | "Ral"
  | "Ort"
  | "Thul"
  | "Amn"
  | "Sol"
  | "Shael"
  | "Dol"
  | "Hel"
  | "Io"
  | "Lum"
  | "Ko"
  | "Fal"
  | "Lem"
  | "Pul"
  | "Um"
  | "Mal"
  | "Ist"
  | "Gul"
  | "Vex"
  | "Ohm"
  | "Lo"
  | "Sur"
  | "Ber"
  | "Jah"
  | "Cham"
  | "Zod";

export type RuneRecipeItem = {
  item: RuneName | Gem;
  quantity: number;
};

export type RuneRecipe = {
  items: Array<RuneRecipeItem>;
};

// All properties of RuneRecipes should be a RuneName, and contain a RuneRecipe
export type RuneRecipes = {
  [R in RuneName]: RuneRecipe;
};

export type Rune = {
  name: RuneName;

  image: string;
  level: number;

  armor: ItemEffect;
  weapon: ItemEffect;
};
