import { Runeword } from "../../types/runeword";

const runewords: Array<Runeword> = [
  {
    name: "Ancient's Pledge",
    sockets: 3,
    itemType: "Shields",
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
    itemType: "Clubs/Hammers/Maces",
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
    itemType: "Melee Weapons",
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
    itemType: "Scepters",
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
    itemType: "Melee Weapons",
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
    itemType: "Swords/Scepters",
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
    itemType: "Staves* (Not Orbs)",
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
    itemType: "Body Armor",
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
    itemType: "Helms",
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
    itemType: "Melee Weapons",
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
  {
    name: "Melody",
    sockets: 3,
    itemType: "Missile Weapons",
    runeOrder: ["Shael", "Ko", "Nef"],
    effects: [
      "+50% Enhanced Damage",
      "+300% Damage To Undead",
      "+3 To Bow and Crossbow Skills (Amazon Only)",
      "+3 To Critical Strike (Amazon Only)",
      "+3 To Dodge (Amazon Only)",
      "+3 To Slow Missiles (Amazon Only)",
      "20% Increased Attack Speed",
      "+10 To Dexterity",
      "Knockback",
    ],
    level: 39,
  },
  {
    name: "Memory",
    sockets: 4,
    itemType: "Staves (Not Orbs)",
    runeOrder: ["Lum", "Io", "Sol", "Eth"],
    effects: [
      "+3 to Sorceress Skill Levels",
      "33% Faster Cast Rate",
      "Increase Maximum Mana 20%",
      "+3 Energy Shield (Sorceress Only)",
      "+2 Static Field (Sorceress Only)",
      "+10 To Energy",
      "+10 To Vitality",
      "+9 To Minimum Damage",
      "-25% Target Defense",
      "Magic Damage Reduced By 7",
      "+50% Enhanced Defense",
    ],
    level: 37,
  },
  {
    name: "Nadir",
    sockets: 2,
    itemType: "Helms",
    runeOrder: ["Nef", "Tir"],
    effects: [
      "+50% Enhanced Defense",
      "+10 Defense",
      "+30 Defense vs. Missile",
      "Level 13 Cloak of Shadows (9 Charges)",
      "+2 To Mana After Each Kill",
      "+5 To Strength",
      "-33% Extra Gold From Monsters",
      "-3 To Light Radius",
    ],
    level: 13,
  },
  {
    name: "Radiance",
    sockets: 3,
    itemType: "Helms",
    runeOrder: ["Nef", "Sol", "Ith"],
    effects: [
      "+75% Enhanced Defense",
      "+30 Defense Vs. Missile",
      "+10 To Energy",
      "+10 To Vitality",
      "15% Damage Goes To Mana",
      "Magic Damage Reduced By 3",
      "+33 To Mana",
      "Damage Reduced By 7",
      "+5 To Light Radius",
    ],
    level: 27,
  },
  {
    name: "Rhyme",
    sockets: 2,
    itemType: "Shields",
    runeOrder: ["Shael", "Eth"],
    effects: [
      "20% Increased Chance of Blocking",
      "40% Faster Block Rate",
      "All Resistances +25",
      "Regenerate Mana 15%",
      "Cannot Be Frozen",
      "50% Extra Gold From Monsters",
      "25% Better Chance Of Getting Magic Items",
    ],
    level: 29,
  },
  {
    name: "Silence",
    sockets: 6,
    itemType: "Weapons",
    runeOrder: ["Dol", "Eld", "Hel", "Ist", "Tir", "Vex"],
    effects: [
      "200% Enhanced Damage",
      "+75% Damage To Undead",
      "Requirements -20%",
      "20% Increased Attack Speed",
      "+50 To Attack Rating Against Undead",
      "+2 To All Skills",
      "All Resistances +75",
      "20% Faster Hit Recovery",
      "11% Mana Stolen Per Hit",
      "Hit Causes Monster To Flee 25%",
      "Hit Blinds Target +33",
      "+2 To Mana After Each Kill",
      "30% Better Chance Of Getting Magic Items",
    ],
    level: 55,
  },
  {
    name: "Smoke",
    sockets: 2,
    itemType: "Body Armor",
    runeOrder: ["Nef", "Lum"],
    effects: [
      "+75% Enhanced Defense",
      "+280 Defense Vs. Missile",
      "All Resistances +50",
      "20% Faster Hit Recovery",
      "Level 6 Weaken (18 Charges)",
      "+10 To Energy",
      "-1 To Light Radius",
    ],
    level: 37,
  },
  {
    name: "Stealth",
    sockets: 2,
    itemType: "Body Armor",
    runeOrder: ["Tal", "Eth"],
    effects: [
      "Magic Damage Reduced By 3",
      "+6 To Dexterity",
      "+15 To Maximum Stamina",
      "Poison Resist +30%",
      "Regenerate Mana 15%",
      "25% Faster Run/Walk",
      "25% Faster Cast Rate",
      "25% Faster Hit Recovery",
    ],
    level: 17,
  },
  {
    name: "Steel",
    sockets: 2,
    itemType: "Swords/Axes/Maces",
    runeOrder: ["Tir", "El"],
    effects: [
      "20% Enhanced Damage",
      "+3 To Minimum Damage",
      "+3 To Maximum Damage",
      "+50 To Attack Rating",
      "50% Chance Of Open Wounds",
      "25% Increased Attack Speed",
      "+2 To Mana After Each Kill",
      "+1 To Light Radius",
    ],
    level: 13,
  },
  {
    name: "Strength",
    sockets: 2,
    itemType: "Melee Weapons",
    runeOrder: ["Amn", "Tir"],
    effects: [
      "35% Enhanced Damage",
      "25% Chance Of Crushing Blow",
      "7% Life Stolen Per Hit",
      "+2 To Mana After Each Kill",
      "+20 To Strength",
      "+10 To Vitality",
    ],
    level: 25,
  },
  {
    name: "Venom",
    sockets: 3,
    itemType: "Weapons",
    runeOrder: ["Tal", "Dol", "Mal"],
    effects: [
      "Hit Causes Monster To Flee 25%",
      "Prevent Monster Heal",
      "Ignore Target's Defense",
      "7% Mana Stolen Per Hit",
      "Level 15 Poison Explosion (27 Charges)",
      "Level 13 Poison Nova (11 Charges)",
      "+273 Poison Damage Over 6 seconds",
    ],
    level: 49,
  },
  {
    name: "Wealth",
    sockets: 3,
    itemType: "Body Armor",
    runeOrder: ["Lem", "Ko", "Tir"],
    effects: [
      "300% Extra Gold From Monsters",
      "100% Better Chance Of Getting Magic Items",
      "+2 To Mana After Each Kill",
      "+10 To Dexterity",
    ],
    level: 43,
  },
  {
    name: "White",
    sockets: 2,
    itemType: "Wand",
    runeOrder: ["Dol", "Io"],
    effects: [
      "Hit Causes Monster To Flee 25%",
      "+10 To Vitality",
      "+3 To Poison And Bone Skills (Necromancer Only)",
      "+3 To Bone Armor (Necromancer Only)",
      "+2 To Bone Spear (Necromancer Only)",
      "+4 To Skeleton Mastery (Necromancer Only)",
      "Magic Damage Reduced By 4",
      "20% Faster Cast Rate",
      "+13 To Mana",
    ],
    level: 35,
  },
  {
    name: "Zephyr",
    sockets: 2,
    itemType: "Missile Weapons",
    runeOrder: ["Ort", "Eth"],
    effects: [
      "+33% Enhanced Damage",
      "+66 To Attack Rating",
      "Adds 1-50 Lightning Damage",
      "-25% Target Defense",
      "+25 Defense",
      "25% Faster Run/Walk",
      "25% Increased Attack Speed",
      "7% Chance To Cast Level 1 Twister When Struck",
    ],
    level: 21,
  },
];

export default runewords;
