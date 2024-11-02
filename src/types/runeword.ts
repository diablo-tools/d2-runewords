import { CharacterClass } from "./characterClass"
import { ItemEffect, ItemType } from "./items"
import { RuneName } from "./rune"

export type NumberOfSockets = 2 | 3 | 4 | 5 | 6

export type Runeword = {
  diablo2ResurrectedOnly?: boolean
  effects: Array<ItemEffect>
  itemType: ItemType[]
  ladderOnly?: boolean
  level: number
  name: string
  patch: string
  requiredClass?: CharacterClass
  runeOrder: Array<RuneName>
  sockets: NumberOfSockets
}
