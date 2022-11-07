import { Runeword } from "../types/runeword";

type SortBy = "level" | "name";

export const SORT_OPTIONS: {
  LEVEL: "level";
  NAME: "name";
} = {
  LEVEL: "level",
  NAME: "name",
};

export function sortWords(words: Runeword[], sortBy: SortBy) {
  return words.sort((wordA, wordB) => {
    if (wordA[sortBy] < wordB[sortBy]) return -1;
    else if (wordA[sortBy] > wordB[sortBy]) return 1;

    return 0;
  });
}
