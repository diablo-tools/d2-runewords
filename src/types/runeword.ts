import { CharacterClass } from "./characterClass";
import { ItemEffect, ItemType } from "./items";
import { RuneName } from "./rune";

export type NumberOfSockets = 2 | 3 | 4 | 5 | 6;

export type Runeword = {
  name: string;
  sockets: NumberOfSockets;
  itemType: ItemType[];
  runeOrder: Array<RuneName>;
  effects: Array<ItemEffect>;
  level: number;
  requiredClass?: CharacterClass;
  ladderOnly?: boolean;
  diablo2ResurrectedOnly?: boolean;
};
