import { Rune, RuneRecipes } from "../types/rune";

const RUNE_RECIPIES: RuneRecipes = {
  El: { items: [] },
  Eld: { items: [{ quantity: 3, item: "El" }] },
  Tir: { items: [{ quantity: 3, item: "Eld" }] },
  Nef: { items: [{ quantity: 3, item: "Tir" }] },
  Eth: { items: [{ quantity: 3, item: "Nef" }] },
  Ith: { items: [{ quantity: 3, item: "Eth" }] },
  Tal: { items: [{ quantity: 3, item: "Ith" }] },
  Ral: { items: [{ quantity: 3, item: "Tal" }] },
  Ort: { items: [{ quantity: 3, item: "Ral" }] },
  Thul: { items: [{ quantity: 3, item: "Ort" }] },
  Amn: {
    items: [
      { quantity: 3, item: "Thul" },
      { quantity: 1, item: "Chipped Topaz" },
    ],
  },
  Sol: {
    items: [
      { quantity: 3, item: "Amn" },
      { quantity: 1, item: "Chipped Amethyst" },
    ],
  },
  Shael: {
    items: [
      { quantity: 3, item: "Sol" },
      { quantity: 1, item: "Chipped Sapphire" },
    ],
  },
  Dol: {
    items: [
      { quantity: 3, item: "Shael" },
      { quantity: 1, item: "Chipped Ruby" },
    ],
  },
  Hel: {
    items: [
      { quantity: 3, item: "Dol" },
      { quantity: 1, item: "Chipped Emerald" },
    ],
  },
  Io: {
    items: [
      { quantity: 3, item: "Hel" },
      { quantity: 1, item: "Chipped Diamond" },
    ],
  },
  Lum: {
    items: [
      { quantity: 3, item: "Io" },
      { quantity: 1, item: "Flawed Topaz" },
    ],
  },
  Ko: {
    items: [
      { quantity: 3, item: "Lum" },
      { quantity: 1, item: "Flawed Amethyst" },
    ],
  },
  Fal: {
    items: [
      { quantity: 3, item: "Ko" },
      { quantity: 1, item: "Flawed Sapphire" },
    ],
  },
  Lem: {
    items: [
      { quantity: 3, item: "Fal" },
      { quantity: 1, item: "Flawed Ruby" },
    ],
  },
  Pul: {
    items: [
      { quantity: 3, item: "Lem" },
      { quantity: 1, item: "Flawed Emerald" },
    ],
  },
  Um: {
    items: [
      { quantity: 2, item: "Pul" },
      { quantity: 1, item: "Flawed Diamond" },
    ],
  },
  Mal: {
    items: [
      { quantity: 2, item: "Um" },
      { quantity: 1, item: "Topaz" },
    ],
  },
  Ist: {
    items: [
      { quantity: 2, item: "Mal" },
      { quantity: 1, item: "Amethyst" },
    ],
  },
  Gul: {
    items: [
      { quantity: 2, item: "Ist" },
      { quantity: 1, item: "Sapphire" },
    ],
  },
  Vex: {
    items: [
      { quantity: 2, item: "Gul" },
      { quantity: 1, item: "Ruby" },
    ],
  },
  Ohm: {
    items: [
      { quantity: 2, item: "Vex" },
      { quantity: 1, item: "Emerald" },
    ],
  },
  Lo: {
    items: [
      { quantity: 2, item: "Ohm" },
      { quantity: 1, item: "Diamond" },
    ],
  },
  Sur: {
    items: [
      { quantity: 2, item: "Lo" },
      { quantity: 1, item: "Flawless Topaz" },
    ],
  },
  Ber: {
    items: [
      { quantity: 2, item: "Sur" },
      { quantity: 1, item: "Flawless Amethyst" },
    ],
  },
  Jah: {
    items: [
      { quantity: 2, item: "Ber" },
      { quantity: 1, item: "Flawless Sapphire" },
    ],
  },
  Cham: {
    items: [
      { quantity: 2, item: "Jah" },
      { quantity: 1, item: "Flawless Ruby" },
    ],
  },
  Zod: {
    items: [
      { quantity: 2, item: "Cham" },
      { quantity: 1, item: "Flawless Emerald" },
    ],
  },
};

const runes: Array<Rune> = [
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeEl.gif",
    name: "El",
    weapon: "+50 To Attack Rating, +1 Light Radius",
    armor: "+15 Defense, +1 To Light Radius",
    level: 11,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeEld.gif",
    name: "Eld",
    weapon: "+75% Damage To Undead, +50 Attack Rating Against Undead",
    armor: "15% Slower Stamina Drain/7% Increased Chance of Blocking(Shields)",
    level: 11,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeTir.gif",
    name: "Tir",
    weapon: "+2 To Mana After Each Kill",
    armor: "+2 To Mana After Each Kill",
    level: 13,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeNef.gif",
    name: "Nef",
    weapon: "Knockback",
    armor: "+30 Defense Vs. Missile",
    level: 13,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeEth.gif",
    name: "Eth",
    weapon: "-25% To Target Defense",
    armor: "Regenerate Mana 15%",
    level: 15,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeIth.gif",
    name: "Ith",
    weapon: "+9 To Maximum Damage",
    armor: "15% Damage Taken Goes to Mana",
    level: 15,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeTal.gif",
    name: "Tal",
    weapon: "+75 Poison Damage Over 5 Seconds",
    armor: "Poison Resist 30%/Poison Resist 35%(Shields)",
    level: 17,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeRal.gif",
    name: "Ral",
    weapon: "Adds 5-30 Fire Damage",
    armor: "Fire Resist 30%/Fire Resist 35%(Shields)",
    level: 19,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeOrt.gif",
    name: "Ort",
    weapon: "Adds 1-50 Lightning Damage",
    armor: "Lightning Resist 30%/Lightning Resist 35%(Shields)",
    level: 21,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeThul.gif",
    name: "Thul",
    weapon: "Adds 3-14 Cold Damage - 3 Second Duration",
    armor: "Cold Resist 30%/Cold Resist 35%(Shields)",
    level: 23,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeAmn.gif",
    name: "Amn",
    weapon: "7% Life Stolen Per Hit",
    armor: "Attacker Takes Damage of 14",
    level: 25,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeSol.gif",
    name: "Sol",
    weapon: "+9 To Minimum Damage",
    armor: "Damage Reduced By 7",
    level: 27,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeShae.gif",
    name: "Shael",
    weapon: "20% Increased Attack Speed",
    armor: "20% Faster Hit Recovery/20% Faster Block Rate(Shields)",
    level: 29,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeDol.gif",
    name: "Dol",
    weapon: "Hit Causes Monster To Flee 25%",
    armor: "Replenish Life +7",
    level: 31,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeHel.gif",
    name: "Hel",
    weapon: "Requirements -20%",
    armor: "Requirements -15%",
    level: 0,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeIo.gif",
    name: "Io",
    weapon: "+10 To Vitality",
    armor: "+10 To Vitality",
    level: 35,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeLum.gif",
    name: "Lum",
    weapon: "+10 To Energy",
    armor: "+10 To Energy",
    level: 37,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeKo.gif",
    name: "Ko",
    weapon: "+10 To Dexterity",
    armor: "+10 To Dexterity",
    level: 39,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeFal.gif",
    name: "Fal",
    weapon: "+10 To Strength",
    armor: "+10 To Strength",
    level: 41,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeLem.gif",
    name: "Lem",
    weapon: "75% Extra Gold From Monsters",
    armor: "50% Extra Gold From Monsters",
    level: 43,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runePul.gif",
    name: "Pul",
    weapon: "+75% Damage To Demons, +100 Attack Rating Against Demons",
    armor: "+30% Enhanced Defense",
    level: 45,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeUm.gif",
    name: "Um",
    weapon: "25% Chance of Open Wounds",
    armor: "All Resistances +15(Armor/Helms) +22(Shields)",
    level: 47,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeMal.gif",
    name: "Mal",
    weapon: "Prevent Monster Heal",
    armor: "Magic Damage Reduced By 7",
    level: 49,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeIst.gif",
    name: "Ist",
    weapon: "30% Better Chance of Getting Magic Items",
    armor: "25% Better Chance of Getting Magic Items",
    level: 51,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeGul.gif",
    name: "Gul",
    weapon: "20% Bonus To Attack Rating",
    armor: "5% To Maximum Poison Resist",
    level: 53,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeVex.gif",
    name: "Vex",
    weapon: "7% Mana Stolen Per Hit",
    armor: "5% To Maximum Fire Resist",
    level: 55,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeOhm.gif",
    name: "Ohm",
    weapon: "+50% Enhanced Damage",
    armor: "5% To Maximum Cold Resist",
    level: 57,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeLo.gif",
    name: "Lo",
    weapon: "20% Deadly Strike",
    armor: "5% To Maximum Lightning Resist",
    level: 59,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeSur.gif",
    name: "Sur",
    weapon: "Hit Blinds Target",
    armor: "Maximum Mana 5%/+50 To Mana (Shields)",
    level: 61,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeBer.gif",
    name: "Ber",
    weapon: "20% Chance of Crushing Blow",
    armor: "Damage Reduced by 8%",
    level: 63,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeJo.gif",
    name: "Jah",
    weapon: "Ignore Target's Defense",
    armor: "Increase Maximum Life 5%/+50 Life (Shields)",
    level: 65,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeCham.gif",
    name: "Cham",
    weapon: "Freeze Target +3",
    armor: "Cannot Be Frozen",
    level: 67,
  },
  {
    image:
      "http://classic.battle.net/images/battle/diablo2exp/images/runes/runeZod.gif",
    name: "Zod",
    weapon: "Indestructible",
    armor: "Indestructible",
    level: 69,
  },
];

function getRunesWithRecipe() {
  return runes.map((rune) => ({
    ...rune,
    recipe: RUNE_RECIPIES[rune.name],
  }));
}

export { RUNE_RECIPIES as runeRecipes, runes, getRunesWithRecipe };
