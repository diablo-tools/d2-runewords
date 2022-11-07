export default function getCleanItemType(type: string) {
  switch (type) {
    case "Maces":
    case "Maces*":
      return "Maces";
    case "Staves":
    case "Staves (Not Orbs)":
    case "Staves* (Not Orbs)":
      return "Staves (Not Orbs)";
    default:
      return type;
  }
}
