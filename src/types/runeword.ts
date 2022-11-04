import { CharacterClass } from "./characterClass";
import { ItemEffect, ItemType } from "./items";
import { RuneName } from "./rune";

export type Runeword = {
  name: string;
  numberOfSockets: number;
  itemType: ItemType;
  runeOrder: Array<RuneName>;
  effects: Array<ItemEffect>;
  level: number;
  requiredClass: CharacterClass | null;
  ladderOnly: boolean;
  inDiablo2: boolean;
  inDiablo2Resurrected: boolean;
};
