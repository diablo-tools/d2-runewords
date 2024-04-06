import assert from "assert";
import { filterWords } from "../functions/filterWords";
import words from "./testWords";

import { getAllWords } from "../functions/getAllWords";

// Socket tests
const sockets2 = filterWords(words, {
  itemType: [],
  sockets: [2],
  games: [],
});
assert(sockets2.length === 2);

const sockets3 = filterWords(words, {
  itemType: [],
  sockets: [3],
  games: [],
});
assert(sockets3.length === 6);

// ItemType tests
const itemType = filterWords(words, {
  itemType: ["Scepters"],
  sockets: [],
  games: [],
});
assert(itemType.length === 2);

const combinedTypes = filterWords(words, {
  itemType: ["Maces", "Scepters", "Shields"],
  sockets: [],
  games: [],
});
assert(combinedTypes.length === 4);

// Sockets and types
const selectedSocketsAndFilters = filterWords(words, {
  itemType: ["Maces", "Scepters", "Shields"],
  sockets: [3],
  games: [],
});
assert(selectedSocketsAndFilters.length === 3);

// Sockets and types and games
const selectedSocketsFiltersGames = filterWords(words, {
  itemType: ["Maces", "Scepters", "Shields"],
  sockets: [3],
  games: ["diablo2"],
});
assert(selectedSocketsFiltersGames.length === 3);

// Sockets and types and games
const selectedSocketsFiltersGames2 = filterWords(words, {
  itemType: ["Maces", "Scepters", "Shields"],
  sockets: [3],
  games: ["diablo2Resurrected"],
});
assert(selectedSocketsFiltersGames2.length === 0);

assert(
  filterWords(getAllWords(), {
    itemType: [],
    sockets: [],
    games: ["diablo2Resurrected"],
  }).length === 15
);
