## Purpose

This package takes in raw data from patch notes and various websites and provides uniform structure for the runewords in the game.

## Clean Data

Clean data exists in `src/data`

These are the files and folders that help structure that data.

- `src/cleansing/getCleanItemType.ts`
- `src/types`

## Raw Data Rules

If raw data contains types that don't match existing Clean Data, attempts should be made to cleanse the data first to check for matches.

Raw data should conform to the Runeword type in `src/types/runeword.ts`. If any data is missing, use reasonable defaults based on the type. Here are a few example of what the text could be for different values

- name: example "bulwark"
- number of sockets: example text "2 sockets", or "2 socket helms"
- item type: example "swords" or "axes" or "weapons"
- rune order: "ral ort tal" or "Ral Ort Tal"
- (optional) character class: example "Barbarian"

Good example of raw data that can be cleaned up to match

- Raw data has an item type called "Helm" but the existing item types contain "Helms". The raw data should be cleansed and imported to match what has already been set up in the types.

If raw data's item types, character classes, or other structures aren't found in clean data, the files in the in project should be updated to add the new item types or character class.

## Agent Worflow Rules

Use Test/Spec Driven implementation strategies for implementing features

1. Run tests to set a baseline
2. Once all existing tests pass make a basic plan (using planning mode).
3. Confirm and get the plan approved with the user before executing.
   1. The plan should always start with creating new failing tests for the expected feature
   2. Implement the feature until the new tests pass
   3. Run all the tests and ensure they pass
4. When user accepts the plan, execute the plan
