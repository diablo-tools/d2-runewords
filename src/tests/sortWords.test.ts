import assert from "assert";
import { sortWords, SORT_OPTIONS } from "../functions/sortWords";
import { Runeword } from "../types/runeword";

// This is a sub-list of 1.07 words
const words: Runeword[] = [
  {
    name: "Ancient's Pledge",
    sockets: 3,
    itemType: ["Shields"],
    runeOrder: ["Ral", "Ort", "Tal"],
    effects: [
      "+50% Enhanced Defense",
      "Cold Resist +43%",
      "Fire Resist +48%",
      "Lightning Resist +48%",
      "Poison Resist +48%",
      "10% Damage Goes To Mana",
    ],
    level: 21,
  },
  {
    name: "Black",
    sockets: 3,
    itemType: ["Clubs", "Hammers", "Maces"],
    runeOrder: ["Thul", "Io", "Nef"],
    effects: [
      "+120% Enhanced Damage",
      "40% Chance Of Crushing Blow",
      "+200 To Attack Rating",
      "Adds 3-14 Cold Damage - Cold Duration 3 Seconds",
      "+10 To Vitality",
      "15% Increased Attack Speed",
      "Knockback",
      "Magic Damage Reduced By 2",
      "Level 4 Corpse Explosion (12 Charges)",
    ],
    level: 35,
  },
  {
    name: "Fury",
    sockets: 3,
    itemType: ["Melee Weapons"],
    runeOrder: ["Jah", "Gul", "Eth"],
    effects: [
      "+209% Enhanced Damage",
      "40% Increased Attack Speed",
      "Prevent Monster Heal",
      "66% Chance Of Open Wounds",
      "33% Deadly Strike",
      "Ignore Target's Defense",
      "-25% Target Defense",
      "20% Bonus To Attack Rating",
      "6% Life Stolen Per Hit",
      "+5 To Frenzy (Barbarian Only)",
    ],
    level: 65,
  },
  {
    name: "Holy Thunder",
    sockets: 4,
    itemType: ["Scepters"],
    runeOrder: ["Eth", "Ral", "Ort", "Tal"],
    effects: [
      "+60% Enhanced Damage",
      "-25% Target Defense",
      "Adds 5-30 Fire Damage",
      "Adds 21-110 Lightning Damage",
      "+75 Poison Damage Over 5 Seconds",
      "+10 To Maximum Damage",
      "Lightning Resistance +60%",
      "+5 To Maximum Lightning Resistance",
      "+3 To Holy Shock (Paladin Only)",
      "Level 7 Chain Lightning (60 Charges)",
    ],
    level: 21,
  },
  {
    name: "Honor",
    sockets: 5,
    itemType: ["Melee Weapons"],
    runeOrder: ["Amn", "El", "Ith", "Tir", "Sol"],
    effects: [
      "+160% Enhanced Damage",
      "+9 To Minimum Damage",
      "+9 To Maximum Damage",
      "25% Deadly Strike",
      "+250 To Attack Rating",
      "+1 to All Skills",
      "7% Life Stolen Per Hit",
      "Replenish Life +10",
      "+10 To Strength",
      "+1 To Light Radius",
      "+2 To Mana After Each Kill",
    ],
    level: 27,
  },
  {
    name: "King's Grace",
    sockets: 3,
    itemType: ["Swords", "Scepters"],
    runeOrder: ["Amn", "Ral", "Thul"],
    effects: [
      "+100% Enhanced Damage",
      "+100% Damage To Demons",
      "+50% Damage To Undead",
      "Adds 5-30 Fire Damage",
      "Adds 3-14 Cold Damage - 3 Second Duration",
      "+150 To Attack Rating",
      "+100 To Attack Rating Against Demons",
      "+100 To Attack Rating Against Undead",
      "7% Life Stolen Per Hit",
    ],
    level: 25,
  },
  {
    name: "Leaf",
    sockets: 2,
    itemType: ["Staves (Not Orbs)"],
    runeOrder: ["Tir", "Ral"],
    effects: [
      "Adds 5-30 Fire Damage",
      "+3 To Fire Skills",
      "+3 To Fire Bolt (Sorceress Only)",
      "+3 To Inferno (Sorceress Only)",
      "+3 To Warmth (Sorceress Only)",
      "+2 To Mana After Each Kill",
      "+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)",
      "Cold Resist +33%",
    ],
    level: 19,
  },
  {
    name: "Lionheart",
    sockets: 3,
    itemType: ["Body Armor"],
    runeOrder: ["Hel", "Lum", "Fal"],
    effects: [
      "+20% Enhanced Damage",
      "Requirements -15%",
      "+25 To Strength",
      "+10 To Energy",
      "+20 To Vitality",
      "+15 To Dexterity",
      "+50 To Life",
      "All Resistances +30",
    ],
    level: 41,
  },
  {
    name: "Lore",
    sockets: 2,
    itemType: ["Helms"],
    runeOrder: ["Ort", "Sol"],
    effects: [
      "+1 To All Skill Levels",
      "+10 To Energy",
      "+2 To Mana After Each Kill",
      "Lightning Resist +30%",
      "Damage Reduced By 7",
      "+2 To Light Radius",
    ],
    level: 27,
  },
  {
    name: "Malice",
    sockets: 3,
    itemType: ["Melee Weapons"],
    runeOrder: ["Ith", "El", "Eth"],
    effects: [
      "+33% Enhanced Damage",
      "+9 To Maximum Damage",
      "100% Chance Of Open Wounds",
      "-25% Target Defense",
      "-100 To Monster Defense Per Hit",
      "Prevent Monster Heal",
      "+50 To Attack Rating",
      "Drain Life -5",
    ],
    level: 15,
  },
];

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
