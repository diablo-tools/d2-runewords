import { Runeword } from "../../types/runeword"

const runewords: Array<Runeword> = [
  {
    name: "Brand",
    sockets: 4,
    itemType: ["Missile Weapons"],
    runeOrder: ["Jah", "Lo", "Mal", "Gul"],
    effects: [
      "35% Chance To Cast Level 14 Amplify Damage When Struck",
      "100% Chance To Cast Level 18 Bone Spear On Striking",
      "+260-340% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "20% Bonus to Attack Rating",
      "+280-330% Damage To Demons (varies)",
      "20% Deadly Strike",
      "Prevent Monster Heal",
      "Knockback",
      "Fires Explosive Arrows or Bolts (15)",
    ],
    ladderOnly: true,
    level: 65,
    patch: "1.10",
  },
  {
    name: "Death",
    sockets: 5,
    itemType: ["Swords", "Axes"],
    runeOrder: ["Hel", "El", "Vex", "Ort", "Gul"],
    effects: [
      "100% Chance To Cast Level 44 Chain Lightning When You Die",
      "25% Chance To Cast Level 18 Glacial Spike On Attack",
      "Indestructible",
      "+300-385% Enhanced Damage (varies)",
      "20% Bonus To Attack Rating",
      "+50 To Attack Rating",
      "Adds 1-50 Lightning Damage",
      "7% Mana Stolen Per Hit",
      "50% Chance of Crushing Blow",
      "+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)",
      "+1 To Light Radius",
      "Level 22 Blood Golem (15 Charges)",
      "Requirements -20%",
    ],
    ladderOnly: true,
    level: 55,
    patch: "1.10",
  },
  {
    name: "Destruction",
    sockets: 5,
    itemType: ["Polearms", "Swords"],
    runeOrder: ["Vex", "Lo", "Ber", "Jah", "Ko"],
    effects: [
      "23% Chance To Cast Level 12 Volcano On Striking",
      "5% Chance To Cast Level 23 Molten Boulder On Striking",
      "100% Chance To Cast level 45 Meteor When You Die",
      "15% Chance To Cast Level 22 Nova On Attack",
      "+350% Enhanced Damage",
      "Ignore Target's Defense",
      "Adds 100-180 Magic Damage",
      "7% Mana Stolen Per Hit",
      "20% Chance Of Crushing Blow",
      "20% Deadly Strike",
      "Prevent Monster Heal",
      "+10 To Dexterity",
    ],
    ladderOnly: true,
    level: 65,
    patch: "1.10",
  },
  {
    name: "Dragon",
    sockets: 3,
    itemType: ["Body Armor", "Shields"],
    runeOrder: ["Sur", "Lo", "Sol"],
    effects: [
      "20% Chance to Cast Level 18 Venom When Struck",
      "12% Chance To Cast Level 15 Hydra On Striking",
      "Level 14 Holy Fire Aura When Equipped",
      "+360 Defense",
      "+230 Defense Vs. Missile",
      "+3-5 To All Attributes (varies)",
      "+0.375-37.125 To Strength (Based on Character Level)",
      "Increase Maximum Mana 5% (Armor Only)",
      "+50 To Mana (Shields Only)",
      "+5% To Maximum Lightning Resist",
      "Damage Reduced by 7",
    ],
    ladderOnly: true,
    level: 61,
    patch: "1.10",
  },
  {
    name: "Dream",
    sockets: 3,
    itemType: ["Helms", "Shields"],
    runeOrder: ["Io", "Jah", "Pul"],
    effects: [
      "10% Chance To Cast Level 15 Confuse When Struck",
      "Level 15 Holy Shock Aura When Equipped",
      "+20-30% Faster Hit Recovery (varies)",
      "+30% Enhanced Defense",
      "+150-220 Defense (varies)",
      "+10 To Vitality",
      "Increase Maximum Life 5% (Helms Only)",
      "+50 To Life (Shields Only)",
      "+0.625-61.875 To Mana (Based On Character Level)",
      "All Resistances +5-20 (varies)",
      "12-25% Better Chance of Getting Magic Items (varies)",
    ],
    ladderOnly: true,
    level: 65,
    patch: "1.10",
  },
  {
    name: "Edge",
    sockets: 3,
    itemType: ["Missile Weapons"],
    runeOrder: ["Tir", "Tal", "Amn"],
    effects: [
      "Level 15 Thorns Aura When Equipped",
      "+35% Increased Attack Speed",
      "+320-380% Damage To Demons (varies)",
      "+280% Damage To Undead",
      "+75 Poison Damage Over 5 Seconds",
      "7% Life Stolen Per Hit",
      "Prevent Monster Heal",
      "+5-10 To All Attributes (varies)",
      "+2 To Mana After Each Kill",
      "Reduces All Vendor Prices 15%!!!*",
    ],
    ladderOnly: true,
    level: 25,
    patch: "1.10",
  },
  {
    name: "Faith",
    sockets: 4,
    itemType: ["Missile Weapons"],
    runeOrder: ["Ohm", "Jah", "Lem", "Eld"],
    effects: [
      "Level 12-15 Fanaticism Aura When Equipped (varies)",
      "+1-2 To All Skills (varies)",
      "+330% Enhanced Damage",
      "Ignore Target's Defense",
      "300% Bonus To Attack Rating",
      "+75% Damage To Undead",
      "+50 To Attack Rating Against Undead",
      "+120 Fire Damage",
      "All Resistances +15",
      "10% Reanimate As: Returned",
      "75% Extra Gold From Monsters",
    ],
    ladderOnly: true,
    level: 65,
    patch: "1.10",
  },
  {
    name: "Fortitude",
    sockets: 4,
    itemType: ["Weapons", "Body Armor"],
    runeOrder: ["El", "Sol", "Dol", "Lo"],
    effects: [
      "Weapons",
      "20% Chance To Cast Level 15 Chilling Armor when Struck",
      "+25% Faster Cast Rate",
      "+300% Enhanced Damage",
      "+9 To Minimum Damage",
      "+50 To Attack Rating",
      "20% Deadly Strike",
      "Hit Causes Monster To Flee 25%",
      "+200% Enhanced Defense",
      "+X To Life (Based on Character Level)*",
      "All Resistances +25-30 (varies)",
      "12% Damage Taken Goes To Mana",
      "+1 To Light Radius",
      "",
      "Body Armor",
      "20% Chance To Cast Level 15 Chilling Armor when Struck",
      "+25% Faster Cast Rate",
      "+300% Enhanced Damage",
      "+200% Enhanced Defense",
      "+15 Defense",
      "+X To Life (Based on Character Level)*",
      "Replenish Life +7",
      "+5% To Maximum Lightning Resist",
      "All Resistances +25-30 (varies)",
      "Damage Reduced By 7",
      "12% Damage Taken Goes To Mana",
      "+1 To Light Radius",
    ],
    ladderOnly: true,
    level: 59,
    patch: "1.10",
  },
  {
    name: "Grief",
    sockets: 5,
    itemType: ["Swords", "Axes"],
    runeOrder: ["Eth", "Tir", "Lo", "Mal", "Ral"],
    effects: [
      "35% Chance To Cast Level 15 Venom On Striking",
      "+30-40% Increased Attack Speed (varies)",
      "Damage +340-400 (varies)",
      "Ignore Target's Defense",
      "-25% Target Defense",
      "+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level)",
      "Adds 5-30 Fire Damage",
      "-20-25% To Enemy Poison Resistance (varies)",
      "20% Deadly Strike",
      "Prevent Monster Heal",
      "+2 To Mana After Each Kill",
      "+10-15 Life After Each Kill (varies)",
    ],
    ladderOnly: true,
    level: 59,
    patch: "1.10",
  },
  {
    name: "Harmony",
    sockets: 4,
    itemType: ["Missile Weapons"],
    runeOrder: ["Tir", "Ith", "Sol", "Ko"],
    effects: [
      "Level 10 Vigor Aura When Equipped",
      "+200-275% Enhanced Damage (varies)",
      "+9 To Minimum Damage",
      "+9 To Maximum Damage",
      "Adds 55-160 Lightning Damage",
      "Adds 55-160 Fire Damage",
      "Adds 55-160 Cold Damage",
      "+2-6 To Valkyrie (varies)",
      "+10 To Dexterity",
      "Regenerate Mana 20%",
      "+2 To Mana After Each Kill",
      "+2 To Light Radius",
      "Level 20 Revive (25 Charges)",
    ],
    ladderOnly: true,
    level: 39,
    patch: "1.10",
  },
  {
    name: "Ice",
    sockets: 4,
    itemType: ["Missile Weapons"],
    runeOrder: ["Amn", "Shael", "Jah", "Lo"],
    effects: [
      "100% Chance To Cast Level 40 Blizzard When You Level-up",
      "25% Chance To Cast Level 22 Frost Nova On Striking",
      "Level 18 Holy Freeze Aura When Equipped",
      "+20% Increased Attack Speed",
      "+140-210% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "+25-30% To Cold Skill Damage (varies)",
      "-20% To Enemy Cold Resistance",
      "7% Life Stolen Per Hit",
      "20% Deadly Strike",
      "3.125-309.375 Extra Gold From Monsters (Based on Character Level)",
    ],
    ladderOnly: true,
    level: 65,
    patch: "1.10",
  },
  {
    name: "Infinity",
    sockets: 4,
    itemType: ["Polearms"],
    runeOrder: ["Ber", "Mal", "Ber", "Ist"],
    effects: [
      "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy",
      "Level 12 Conviction Aura When Equipped",
      "+35% Faster Run/Walk",
      "+255-325% Enhanced Damage (varies)",
      "-(45-55)% To Enemy Lightning Resistance (varies)",
      "40% Chance of Crushing Blow",
      "Prevent Monster Heal",
      "0.5-49.5 To Vitality (Based on Character Level)",
      "30% Better Chance of Getting Magic Items",
      "Level 21 Cyclone Armor (30 Charges)",
    ],
    ladderOnly: true,
    level: 63,
    patch: "1.10",
  },
  {
    name: "Insight",
    sockets: 4,
    itemType: ["Polearms", "Staves (Not Orbs)"],
    runeOrder: ["Ral", "Tir", "Tal", "Sol"],
    effects: [
      "Level 12-17 Meditation Aura When Equipped (varies)",
      "+35% Faster Cast Rate",
      "+200-260% Enhanced Damage (varies)",
      "+9 To Minimum Damage",
      "180-250% Bonus to Attack Rating (varies)",
      "Adds 5-30 Fire Damage",
      "+75 Poison Damage Over 5 Seconds",
      "+1-6 To Critical Strike (varies)",
      "+5 To All Attributes",
      "+2 To Mana After Each Kill",
      "23% Better Chance of Getting Magic Items",
    ],
    ladderOnly: true,
    level: 27,
    patch: "1.10",
  },
  {
    name: "Last Wish",
    sockets: 6,
    itemType: ["Swords", "Hammers", "Axes"],
    runeOrder: ["Jah", "Mal", "Jah", "Sur", "Jah", "Ber"],
    effects: [
      "6% Chance To Cast Level 11 Fade When Struck",
      "10% Chance To Cast Level 18 Life Tap On Striking",
      "20% Chance To Cast Level 20 Charged Bolt On Attack",
      "Level 17 Might Aura When Equipped",
      "+330-375% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "60-70% Chance of Crushing Blow (varies)",
      "Prevent Monster Heal",
      "Hit Blinds Target",
      "+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)",
    ],
    ladderOnly: true,
    level: 65,
    patch: "1.10",
  },
  {
    name: "Lawbringer",
    sockets: 3,
    itemType: ["Swords", "Hammers", "Scepters"],
    runeOrder: ["Amn", "Lem", "Ko"],
    effects: [
      "20% Chance To Cast Level 15 Decrepify On Striking",
      "Level 16-18 Sanctuary Aura When Equipped (varies)",
      "-50% Target Defense",
      "Adds 150-210 Fire Damage",
      "Adds 130-180 Cold Damage",
      "7% Life Stolen Per Hit",
      "Slain Monsters Rest In Peace",
      "+200-250 Defense Vs. Missile (varies)",
      "+10 To Dexterity",
      "75% Extra Gold From Monsters",
    ],
    ladderOnly: true,
    level: 43,
    patch: "1.10",
  },
  {
    name: "Oath",
    sockets: 4,
    itemType: ["Swords", "Axes", "Maces"],
    runeOrder: ["Shael", "Pul", "Mal", "Lum"],
    effects: [
      "30% Chance To Cast Level 20 Bone Spirit On Striking",
      "Indestructible",
      "+50% Increased Attack Speed",
      "+210-340% Enhanced Damage (varies)",
      "+75% Damage To Demons",
      "+100 To Attack Rating Against Demons",
      "Prevent Monster Heal",
      "+10 To Energy",
      "+10-15 Magic Absorb (varies)",
      "Level 16 Heart Of Wolverine (20 Charges)",
      "Level 17 Iron Golem (14 Charges)",
    ],
    ladderOnly: true,
    level: 49,
    patch: "1.10",
  },
  {
    name: "Obedience",
    sockets: 5,
    itemType: ["Polearms"],
    runeOrder: ["Hel", "Ko", "Thul", "Eth", "Fal"],
    effects: [
      "30% Chance To Cast Level 21 Enchant When You Kill An Enemy",
      "40% Faster Hit Recovery",
      "+370% Enhanced Damage",
      "-25% Target Defense",
      "Adds 3-14 Cold Damage 3 Second Duration (Normal)",
      "-25% To Enemy Fire Resistance",
      "40% Chance of Crushing Blow",
      "+200-300 Defense (varies)",
      "+10 To Strength",
      "+10 To Dexterity",
      "All Resistances +20-30 (varies)",
      "Requirements -20%",
    ],
    ladderOnly: true,
    level: 41,
    patch: "1.10",
  },
  {
    name: "Phoenix",
    sockets: 4,
    itemType: ["Weapons", "Shields"],
    runeOrder: ["Vex", "Vex", "Lo", "Jah"],
    effects: [
      "Weapons",
      "100% Chance To Cast level 40 Blaze When You Level-up",
      "40% Chance To Cast Level 22 Firestorm On Striking",
      "Level 10-15 Redemption Aura When Equipped (varies)",
      "+350-400% Enhanced Damage (varies)",
      "Ignores Target's Defense",
      "14% Mana Stolen Per Hit",
      "-28% To Enemy Fire Resistance",
      "20% Deadly Strike",
      "+350-400 Defense Vs. Missile (varies)",
      "+15-21 Fire Absorb (varies)",
      "",
      "Shields",
      "100% Chance To Cast level 40 Blaze When You Level-up",
      "40% Chance To Cast Level 22 Firestorm On Striking",
      "Level 10-15 Redemption Aura When Equipped (varies)",
      "+350-400 Defense Vs. Missile (varies)",
      "+350-400% Enhanced Damage (varies)",
      "-28% To Enemy Fire Resistance",
      "+50 To Life",
      "+5% To Maximum Lightning Resist",
      "+10% To Maximum Fire Resist",
      "+15-21 Fire Absorb (varies)",
    ],
    ladderOnly: true,
    level: 65,
    patch: "1.10",
  },
  {
    name: "Pride",
    sockets: 4,
    itemType: ["Polearms"],
    runeOrder: ["Cham", "Sur", "Io", "Lo"],
    effects: [
      "25% Chance To Cast Level 17 Fire Wall When Struck",
      "Level 16-20 Concentration Aura When Equipped (varies)",
      "260-300% Bonus To Attack Rating (varies)",
      "+1-99% Damage To Demons (Based on Character Level)",
      "Adds 50-280 Lightning Damage",
      "20% Deadly Strike",
      "Hit Blinds Target",
      "Freezes Target +3",
      "+10 To Vitality",
      "Replenish Life +8",
      "1.875-185.625% Extra Gold From Monsters (Based on Character Level)",
    ],
    ladderOnly: true,
    level: 67,
    patch: "1.10",
  },
  {
    name: "Rift",
    sockets: 4,
    itemType: ["Polearms", "Scepters"],
    runeOrder: ["Hel", "Ko", "Lem", "Gul"],
    effects: [
      "20% Chance To Cast Level 16 Tornado On Striking",
      "16% Chance To Cast Level 21 Frozen Orb On Attack",
      "20% Bonus To Attack Rating",
      "Adds 160-250 Magic Damage",
      "Adds 60-180 Fire Damage",
      "+5-10 To All Stats (varies)",
      "+10 To Dexterity",
      "38% Damage Taken Goes To Mana",
      "75% Extra Gold From Monsters",
      "Level 15 Iron Maiden (40 Charges)",
      "Requirements -20%",
    ],
    ladderOnly: true,
    level: 53,
    patch: "1.10",
  },
  {
    name: "Spirit",
    sockets: 4,
    itemType: ["Swords", "Shields"],
    runeOrder: ["Tal", "Thul", "Ort", "Amn"],
    effects: [
      "Weapons",
      "+2 To All Skills",
      "+25-35% Faster Cast Rate (varies)",
      "+55% Faster Hit Recovery",
      "Adds 1-50 Lightning Damage",
      "Adds 3-14 Cold Damage 3 Second Duration (Normal)",
      "+75 Poison Damage Over 5 Seconds",
      "7% Life Stolen Per Hit",
      "+250 Defense Vs. Missile",
      "+22 To Vitality",
      "+89-112 To Mana (varies)",
      "+3-8 Magic Absorb (varies)",
      "",
      "Shields",
      "+2 To All Skills",
      "+25-35% Faster Cast Rate (varies)",
      "+55% Faster Hit Recovery",
      "+250 Defense Vs. Missile",
      "+22 To Vitality",
      "+89-112 To Mana (varies)",
      "Cold Resist +35%",
      "Lightning Resist +35%",
      "Poison Resist +35%",
      "+3-8 Magic Absorb (varies)",
      "Attacker Takes Damage of 14",
    ],
    ladderOnly: true,
    level: 25,
    patch: "1.10",
  },
  {
    name: "Voice of Reason",
    sockets: 4,
    itemType: ["Swords", "Maces"],
    runeOrder: ["Lem", "Ko", "El", "Eld"],
    effects: [
      "15% Chance To Cast Level 13 Frozen Orb On Striking",
      "18% Chance To Cast Level 20 Ice Blast On Striking",
      "+50 To Attack Rating",
      "+220-350% Damage To Demons",
      "+355-375% Damage To Undead (varies)",
      "+50 To Attack Rating Against Undead",
      "Adds 100-220 Cold Damage",
      "-24% To Enemy Cold Resistance",
      "+10 To Dexterity",
      "Cannot Be Frozen",
      "75% Extra Gold From Monsters",
      "+1 To Light Radius",
    ],
    ladderOnly: true,
    level: 43,
    patch: "1.10",
  },
  {
    name: "Wrath",
    sockets: 4,
    itemType: ["Missile Weapons"],
    runeOrder: ["Pul", "Lum", "Ber", "Mal"],
    effects: [
      "30% Chance To Cast Level 1 Decrepify On Striking",
      "5% Chance To Cast Level 10 Life Tap On Striking",
      "+375% Damage To Demons",
      "+100 To Attack Rating Against Demons",
      "+250-300% Damage To Undead (varies)",
      "Adds 85-120 Magic Damage",
      "Adds 41-240 Lightning Damage",
      "20% Chance of Crushing Blow",
      "Prevent Monster Heal",
      "+10 To Energy",
      "Cannot Be Frozen",
    ],
    ladderOnly: true,
    level: 63,
    patch: "1.10",
  },
]

export default runewords
