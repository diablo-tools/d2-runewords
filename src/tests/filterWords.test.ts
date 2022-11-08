import assert from "assert";
import { filterWords } from "../functions/filterWords";
import words from "./testWords";

// Socket tests
const sockets2 = filterWords(words, {
  itemType: [],
  sockets: [2],
});
assert(sockets2.length === 2);

const sockets3 = filterWords(words, {
  itemType: [],
  sockets: [3],
});
assert(sockets3.length === 6);

// ItemType tests
const itemType = filterWords(words, {
  itemType: ["Scepters"],
  sockets: [],
});
assert(itemType.length === 2);

const combinedTypes = filterWords(words, {
  itemType: ["Maces", "Scepters", "Shields"],
  sockets: [],
});
assert(combinedTypes.length === 4);

// Sockets and types
const selectedSocketsAndFilters = filterWords(words, {
  itemType: ["Maces", "Scepters", "Shields"],
  sockets: [3],
});
assert(selectedSocketsAndFilters.length === 3);
