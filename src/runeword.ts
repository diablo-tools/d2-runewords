import { CharacterClass } from "./characterClass";
import { ItemEffect } from "./itemEffect";
import { ItemType } from "./itemType";
import { RuneName } from "./rune";

export type Runeword = {
  name: string;
  numberOfSockets: number;
  itemType: ItemType;
  runeOrder: Array<RuneName>;
  effects: Array<ItemEffect>;
  requiredLevel: number;
  requiredClass: CharacterClass | null;
  ladderOnly: boolean;
  diablo2: boolean;
  diablo2Resurrected: boolean;
};
