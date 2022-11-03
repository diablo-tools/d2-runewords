import { Gem } from "./gem";

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
  rune: RuneName;
  items: Array<RuneRecipeItem>;
};

export type Rune = {
  name: RuneName;

  image: string;
  level: number;

  armor: string;
  weapon: string;
};
