import { Runeword } from "../../types/runeword";

const runewords: Array<Runeword> = [
  {
    name: "Beast",
    sockets: 5,
    itemType: ["Axes", "Scepters", "Hammers"],
    runeOrder: ["Ber", "Tir", "Um", "Mal", "Lum"],
    effects: [
      "Level 9 Fanaticism Aura When Equipped",
      "+40% Increased Attack Speed",
      "+240-270% Enhanced Damage (varies)",
      "20% Chance of Crushing Blow",
      "25% Chance of Open Wounds",
      "+3 To Werebear",
      "+3 To Lycanthropy",
      "Prevent Monster Heal",
      "+25-40 To Strength (varies)",
      "+10 To Energy",
      "+2 To Mana After Each Kill",
      "Level 13 Summon Grizzly (5 Charges)",
    ],
    level: 63,
  },
  {
    name: "Bramble",
    sockets: 4,
    itemType: ["Body Armor"],
    runeOrder: ["Ral", "Ohm", "Sur", "Eth"],
    effects: [
      "Level 15-21 Thorns Aura When Equipped (varies)",
      "+50% Faster Hit Recovery",
      "+25-50% To Poison Skill Damage (varies)",
      "+300 Defense",
      "Increase Maximum Mana 5%",
      "Regenerate Mana 15%",
      "+5% To Maximum Cold Resist",
      "Fire Resist +30%",
      "Poison Resist +100%",
      "+13 Life After Each Kill",
      "Level 13 Spirit of Barbs (33 Charges)",
    ],
    level: 61,
  },
  {
    name: "Breath of the Dying",
    sockets: 6,
    itemType: ["Weapons"],
    runeOrder: ["Vex", "Hel", "El", "Eld", "Zod", "Eth"],
    effects: [
      "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
      "Indestructible",
      "+60% Increased Attack Speed",
      "+350-400% Enhanced Damage (varies)",
      "+200% Damage To Undead",
      "-25% Target Defense",
      "+50 To Attack Rating",
      "+50 To Attack Rating Against Undead",
      "7% Mana Stolen Per Hit",
      "12-15% Life Stolen Per Hit (varies)",
      "Prevent Monster Heal",
      "+30 To All Attributes",
      "+1 To Light Radius",
      "Requirements -20%",
    ],
    level: 69,
  },
  {
    name: "Call To Arms*",
    sockets: 5,
    itemType: ["Weapons"],
    runeOrder: ["Amn", "Ral", "Mal", "Ist", "Ohm"],
    effects: [
      "+1 To All Skills",
      "+40% Increased Attack Speed",
      "+250-290% Enhanced Damage (varies)",
      "Adds 5-30 Fire Damage",
      "7% Life Stolen Per Hit",
      "+2-6 To Battle Command (varies)*",
      "+1-6 To Battle Orders (varies)*",
      "+1-4 To Battle Cry (varies)*",
      "Prevent Monster Heal",
      "Replenish Life +12",
      "30% Better Chance of Getting Magic Items",
    ],
    level: 57,
  },
  {
    name: "Chains of Honor",
    sockets: 4,
    itemType: ["Body Armor"],
    runeOrder: ["Dol", "Um", "Ber", "Ist"],
    effects: [
      "+2 To All Skills",
      "+200% Damage To Demons",
      "+100% Damage To Undead",
      "8% Life Stolen Per Hit",
      "+70% Enhanced Defense",
      "+20 To Strength",
      "Replenish Life +7",
      "All Resistances +65",
      "Damage Reduced By 8%",
      "25% Better Chance of Getting Magic Items",
    ],
    level: 63,
  },
  {
    name: "Chaos",
    sockets: 3,
    itemType: ["Claws"],
    runeOrder: ["Fal", "Ohm", "Um"],
    effects: [
      "9% Chance To Cast Level 11 Frozen Orb On Striking",
      "11% Chance To Cast Level 9 Charged Bolt On Striking",
      "+35% Increased Attack Speed",
      "+290-340% Enhanced Damage (varies)",
      "Adds 216-471 Magic Damage",
      "25% Chance of Open Wounds",
      "+1 To Whirlwind",
      "+10 To Strength",
      "+15 Life After Each Demon Kill",
    ],
    level: 57,
  },
  {
    name: "Crescent Moon",
    sockets: 3,
    itemType: ["Axes", "Swords", "Polearms"],
    runeOrder: ["Shael", "Um", "Tir"],
    effects: [
      "10% Chance To Cast Level 17 Chain Lightning On Striking",
      "7% Chance To Cast Level 13 Static Field On Striking",
      "+20% Increased Attack Speed",
      "+180-220% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "-35% To Enemy Lightning Resistance",
      "25% Chance of Open Wounds",
      "+9-11 Magic Absorb (varies)",
      "+2 To Mana After Each Kill",
      "Level 18 Summon Spirit Wolf (30 Charges)",
    ],
    level: 47,
  },
  {
    name: "Delirium*",
    sockets: 3,
    itemType: ["Helms"],
    runeOrder: ["Lem", "Ist", "Io"],
    effects: [
      "1% Chance To Cast Level 50 Delirium* (morph) When Struck",
      "6% Chance To Cast Level 14 Mind Blast When Struck",
      "14% Chance To Cast Level 13 Terror When Struck",
      "11% Chance To Cast Level 18 Confuse On Striking",
      "+2 To All Skills",
      "+261 Defense",
      "+10 To Vitality",
      "50% Extra Gold From Monsters",
      "25% Better Chance of Getting Magic Items",
      "Level 17 Attract (60 Charges)",
    ],
    level: 51,
  },
  {
    name: "Doom",
    sockets: 5,
    itemType: ["Axes", "Polearms", "Hammers"],
    runeOrder: ["Hel", "Ohm", "Um", "Lo", "Cham"],
    effects: [
      "5% Chance To Cast Level 18 Volcano On Striking",
      "Level 12 Holy Freeze Aura When Equipped",
      "+2 To All Skills",
      "+45% Increased Attack Speed",
      "+330-370% Enhanced Damage (varies)",
      "-(40-60)% To Enemy Cold Resistance (varies)",
      "20% Deadly Strike",
      "25% Chance of Open Wounds",
      "Prevent Monster Heal",
      "Freezes Target +3",
      "Requirements -20%",
    ],
    level: 67,
  },
  {
    name: "Duress",
    sockets: 3,
    itemType: ["Body Armor"],
    runeOrder: ["Shael", "Um", "Thul"],
    effects: [
      "+40% Faster Hit Recovery",
      "+10-20% Enhanced Damage (varies)",
      "Adds 37-133 Cold Damage 2 sec. Duration (Normal)",
      "15% Chance of Crushing Blow",
      "33% Chance of Open Wounds",
      "+150-200% Enhanced Defense (varies)",
      "-20% Slower Stamina Drain",
      "Cold Resist +45%",
      "Lightning Resist +15%",
      "Fire Resist +15%",
      "Poison Resist +15%",
    ],
    level: 47,
  },
  {
    name: "Enigma",
    sockets: 3,
    itemType: ["Body Armor"],
    runeOrder: ["Jah", "Ith", "Ber"],
    effects: [
      "+2 To All Skills",
      "+45% Faster Run/Walk",
      "+1 To Teleport",
      "+750-775 Defense (varies)",
      "+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)",
      "Increase Maximum Life 5%",
      "Damage Reduced By 8%",
      "+14 Life After Each Kill",
      "15% Damage Taken Goes To Mana",
      "+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)",
    ],
    level: 65,
  },
  {
    name: "Eternity",
    sockets: 5,
    itemType: ["Melee Weapons"],
    runeOrder: ["Amn", "Ber", "Ist", "Sol", "Sur"],
    effects: [
      "Indestructible",
      "+260-310% Enhanced Damage (varies)",
      "+9 To Minimum Damage",
      "7% Life Stolen Per Hit",
      "20% Chance of Crushing Blow",
      "Hit Blinds Target",
      "Slows Target By 33%",
      "Regenerate Mana 16%",
      "Replenish Life +16",
      "Cannot Be Frozen",
      "30% Better Chance Of Getting Magic Items",
      "Level 8 Revive (88 Charges)",
    ],
    level: 63,
  },
  {
    name: "Exile",
    sockets: 4,
    itemType: ["Paladin Shields (only)"],
    runeOrder: ["Vex", "Ohm", "Ist", "Dol"],
    effects: [
      "15% Chance To Cast Level 5 Life Tap On Striking",
      "Level 13-16 Defiance Aura When Equipped (varies)",
      "+2 To Offensive Auras (Paladin Only)",
      "+30% Faster Block Rate",
      "Freezes Target",
      "+220-260% Enhanced Defense (varies)",
      "Replenish Life +7",
      "+5% To Maximum Cold Resist",
      "+5% To Maximum Fire Resist",
      "25% Better Chance Of Getting Magic Items",
      "Repairs 1 Durability in 4 Seconds",
    ],
    level: 57,
  },
  {
    name: "Famine",
    sockets: 4,
    itemType: ["Axes", "Hammers"],
    runeOrder: ["Fal", "Ohm", "Ort", "Jah"],
    effects: [
      "+30% Increased Attack Speed",
      "+320-370% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "Adds 180-200 Magic Damage",
      "Adds 50-200 Fire Damage",
      "Adds 51-250 Lightning Damage",
      "Adds 50-200 Cold Damage",
      "12% Life Stolen Per Hit",
      "Prevent Monster Heal",
      "+10 To Strength",
    ],
    level: 65,
  },
  {
    name: "Gloom",
    sockets: 3,
    itemType: ["Body Armor"],
    runeOrder: ["Fal", "Um", "Pul"],
    effects: [
      "15% Chance To Cast Level 3 Dim Vision When Struck",
      "+10% Faster Hit Recovery",
      "+200-260% Enhanced Defense (varies)",
      "+10 To Strength",
      "All Resistances +45",
      "Half Freeze Duration",
      "5% Damage Taken Goes To Mana",
      "-3 To Light Radius",
    ],
    level: 47,
  },
  {
    name: "Hand of Justice*",
    sockets: 4,
    itemType: ["Weapons"],
    runeOrder: ["Sur", "Cham", "Amn", "Lo"],
    effects: [
      "100% Chance To Cast Level 36 Blaze When You Level-Up",
      "100% Chance To Cast Level 48 Meteor When You Die",
      "Level 16 Holy Fire Aura When Equipped",
      "+33% Increased Attack Speed",
      "+280-330% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "7% Life Stolen Per Hit",
      "-20% To Enemy Fire Resistance",
      "20% Deadly Strike",
      "Hit Blinds Target",
      "Freezes Target +3",
    ],
    level: 67,
  },
  {
    name: "Heart of the Oak",
    sockets: 4,
    itemType: ["Staves (Not Orbs)", "Maces"],
    runeOrder: ["Ko", "Vex", "Pul", "Thul"],
    effects: [
      "+3 To All Skills",
      "+40% Faster Cast Rate",
      "+75% Damage To Demons",
      "+100 To Attack Rating Against Demons",
      "Adds 3-14 Cold Damage, 3 sec. Duration (Normal)",
      "7% Mana Stolen Per Hit",
      "+10 To Dexterity",
      "Replenish Life +20",
      "Increase Maximum Mana 15%",
      "All Resistances +30-40 (varies)",
      "Level 4 Oak Sage (25 Charges)",
      "Level 14 Raven (60 Charges)",
    ],
    level: 55,
  },
  {
    name: "Kingslayer",
    sockets: 4,
    itemType: ["Swords", "Axes"],
    runeOrder: ["Mal", "Um", "Gul", "Fal"],
    effects: [
      "+30% Increased Attack Speed",
      "+230-270% Enhanced Damage (varies)",
      "-25% Target Defense",
      "20% Bonus To Attack Rating",
      "33% Chance of Crushing Blow",
      "50% Chance of Open Wounds",
      "+1 To Vengeance",
      "Prevent Monster Heal",
      "+10 To Strength",
      "40% Extra Gold From Monsters",
    ],
    level: 53,
  },
  {
    name: "Passion",
    sockets: 4,
    itemType: ["Weapons"],
    runeOrder: ["Dol", "Ort", "Eld", "Lem"],
    effects: [
      "+25% Increased Attack Speed",
      "+160-210% Enhanced Damage (varies)",
      "50-80% Bonus To Attack Rating (varies)",
      "+75% Damage To Undead",
      "+50 To Attack Rating Against Undead",
      "Adds 1-50 Lightning Damage",
      "+1 To Berserk",
      "+1 To Zeal",
      "Hit Blinds Target +10",
      "Hit Causes Monster To Flee 25%",
      "75% Extra Gold From Monsters",
      "Level 3 Heart of Wolverine (12 Charges)",
    ],
    level: 43,
  },
  {
    name: "Prudence",
    sockets: 2,
    itemType: ["Body Armor"],
    runeOrder: ["Mal", "Tir"],
    effects: [
      "+25% Faster Hit Recovery",
      "+140-170% Enhanced Defense (varies)",
      "All Resistances +25-35 (varies)",
      "Damage Reduced by 3",
      "Magic Damage Reduced by 17",
      "+2 To Mana After Each Kill",
      "+1 To Light Radius",
      "Repairs Durability 1 In 4 Seconds",
    ],
    level: 49,
  },
  {
    name: "Sanctuary",
    sockets: 3,
    itemType: ["Shields"],
    runeOrder: ["Ko", "Ko", "Mal"],
    effects: [
      "+20% Faster Hit Recovery",
      "+20% Faster Block Rate",
      "20% Increased Chance of Blocking",
      "+130-160% Enhanced Defense (varies)",
      "+250 Defense vs. Missile",
      "+20 To Dexterity",
      "All Resistances +50-70 (varies)",
      "Magic Damage Reduced By 7",
      "Level 12 Slow Missiles (60 Charges)",
    ],
    level: 49,
  },
  {
    name: "Splendor",
    sockets: 2,
    itemType: ["Shields"],
    runeOrder: ["Eth", "Lum"],
    effects: [
      "+1 To All Skills",
      "+10% Faster Cast Rate",
      "+20% Faster Block Rate",
      "+60-100% Enhanced Defense (varies)",
      "+10 To Energy",
      "Regenerate Mana 15%",
      "50% Extra Gold From Monsters",
      "20% Better Chance of Getting Magic Items",
      "+3 To Light Radius",
    ],
    level: 37,
  },
  {
    name: "Stone",
    sockets: 4,
    itemType: ["Body Armor"],
    runeOrder: ["Shael", "Um", "Pul", "Lum"],
    effects: [
      "+60% Faster Hit Recovery",
      "+250-290% Enhanced Defense (varies)",
      "+300 Defense Vs. Missile",
      "+16 To Strength",
      "+16 To Vitality",
      "+10 To Energy",
      "All Resistances +15",
      "Level 16 Molten Boulder (80 Charges)",
      "Level 16 Clay Golem (16 Charges)",
    ],
    level: 47,
  },
  {
    name: "Wind",
    sockets: 2,
    itemType: ["Melee Weapons"],
    runeOrder: ["Sur", "El"],
    effects: [
      "10% Chance To Cast Level 9 Tornado On Striking",
      "+20% Faster Run/Walk",
      "+40% Increased Attack Speed",
      "+15% Faster Hit Recovery",
      "+120-160% Enhanced Damage (varies)",
      "-50% Target Defense",
      "+50 To Attack Rating",
      "Hit Blinds Target",
      "+1 To Light Radius",
      "Level 13 Twister (127 Charges)",
    ],
    level: 61,
  },
];

export default runewords;
