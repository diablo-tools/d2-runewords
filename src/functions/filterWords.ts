import { ItemType } from "../types/items";
import { NumberOfSockets, Runeword } from "../types/runeword";

type Games = "diablo2" | "diablo2Resurrected";

// These filters are arrays to allow multiple selections
type WordFilters = {
  itemType: ItemType[];
  sockets: NumberOfSockets[];
  games: Games[];
};

function arraysIntersect(array1: string[], array2: string[]) {
  return array1.some((element) => array2.includes(element));
}

export function filterWords(words: Runeword[], filters: WordFilters) {
  // Iterate through every word and apply each filter
  // by keeping what has been passed in with filters
  return words.filter((word) => {
    // Apply WordFilters.itemType
    let itemTypeFound = true;
    if (
      filters.itemType.length > 0 &&
      !arraysIntersect(word.itemType, filters.itemType)
    ) {
      itemTypeFound = false;
    }

    // Apply WordFilters.sockets
    let socketsFound =
      filters.sockets.length === 0 || filters.sockets.includes(word.sockets);

    let gamesFound = false;
    if (
      filters.games.length === 0 ||
      (word.diablo2ResurrectedOnly &&
        filters.games.includes("diablo2Resurrected")) ||
      (!word.diablo2ResurrectedOnly && filters.games.includes("diablo2"))
    ) {
      gamesFound = true;
    }

    return socketsFound && itemTypeFound && gamesFound;
  });
}
