import assert from "assert";
import { sortWords, SORT_OPTIONS } from "../functions/sortWords";
import words from "./testWords";

const sortedByName = sortWords(words, SORT_OPTIONS.NAME);

// Sort by name
assert(sortedByName[0].name === "Ancient's Pledge");
assert(sortedByName[sortedByName.length - 1].name === "Malice");

const sortedByLevel = sortWords(words, SORT_OPTIONS.LEVEL);

// Sort by level
assert(sortedByLevel[0].name === "Malice");
assert(sortedByLevel[0].level === 15);
assert(sortedByLevel[sortedByLevel.length - 1].name === "Fury");
assert(sortedByLevel[sortedByLevel.length - 1].level === 65);
