import { CharacterClass } from "./characterClass";
import { ItemEffect, ItemType } from "./items";
import { RuneName } from "./rune";

export type Runeword = {
  name: string;
  sockets: number;
  itemType: ItemType[];
  runeOrder: Array<RuneName>;
  effects: Array<ItemEffect>;
  level: number;
  requiredClass?: CharacterClass;
  ladderOnly?: boolean;
  diablo2ResurrectedOnly?: boolean;
};
