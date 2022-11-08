# d2-runewords

This package contains all of the runewords that exist in _Diablo 2_ and _Diablo 2 Resurrected_.

It provides an easy to use interface to get the runewords and perform operations like sorting and filtering out of the box.

Essentially, by using this package, you're getting a file-based "database" of words that installs as a module.

## Current Patch Level

Diablo 2 Lord of Destruction: `Latest`

Diablo 2 Resurrected: `2.4`

## Installation

GitHub packages hosts this npm package and it requires authentication with GitHub to install it. See the [npm package docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package) for the most up to date authentication instructions.

## Import

```js
import {
  getAllWords,
  sortWords,
  filterWords,
} from "@diablo-tools/d2-runewords";
```

## Features

### Get Runewords

To get the current runewords from the package you can use the `getAllWords` function.

```js
// words will be an array of Runeword (typescript type)
const words = getAllWords();
```

One of the main features of the package is the type-safe Runeword structure. What you see, is what you get, all data conforms to this.

```js
export type Runeword = {
  name: string,
  sockets: NumberOfSockets,
  itemType: ItemType[],
  runeOrder: Array<RuneName>,
  effects: Array<ItemEffect>,
  level: number,
  requiredClass?: CharacterClass,
  ladderOnly?: boolean,
  diablo2ResurrectedOnly?: boolean,
};
```

### Sorting Words

If you find yourself needing to sort the words, currently there are two ways to sort them with `sortWords`

- `level`: Sort by the character level that is required to use the word.
- `name`: This will sort the Runeword array by the name of the runeword.

```js
import { getAllWords, sortWords } from "@diablo-tools/d2-runewords";

const words = getAllWords();
const levelSorted = sortWords(words, "level");
const nameSorted = sortWords(words, "name");
```

### Filtering Words

To filter runewords and return specific ones you can use `filterWords`. Below is an example of how to request only "Helms" with 2 or 3 sockets.

Note - By supplying an empty array all results from that option will be returned.

```js
import { getAllWords, filterWords } from "@diablo-tools/d2-runewords";

const filters = {
  itemType: ["Helms"], // Only Helms
  sockets: [2, 3], // Only 2 or 3 sockets
  games: [], // All games
};

const words = getAllWords();
const helmsWith2or3Sockets = filterWords(words, filters);
```

itemType options:

```js
export type ItemType =
  | "Axes"
  | "Body Armor"
  | "Bows"
  | "Claws"
  | "Clubs"
  | "Crossbows"
  | "Hammers"
  | "Helms"
  | "Maces"
  | "Melee Weapons"
  | "Missile Weapons"
  | "Paladin Shields (only)"
  | "Polearms"
  | "Scepters"
  | "Shields"
  | "Staves (Not Orbs)"
  | "Swords"
  | "Wand"
  | "Weapons";
```

sockets options:

```js
export type NumberOfSockets = 2 | 3 | 4 | 5 | 6;
```

games options:

```js
type Games = "diablo2" | "diablo2Resurrected";
```
