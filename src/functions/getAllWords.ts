import d107 from "../data/runewords/1.07";
import d110 from "../data/runewords/1.10";
import d110ladder from "../data/runewords/1.10-ladder";
import d111 from "../data/runewords/1.11";
import d2r24 from "../data/runewords/d2r-2.4";

export default function getAllWords() {
  // From all runeword files, find all the items types
  const allWords = [...d107, ...d110, ...d110ladder, ...d111, ...d2r24];
  return allWords;
}
