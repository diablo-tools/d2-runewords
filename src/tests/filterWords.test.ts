import { describe, it, expect } from 'vitest';
import { filterWords } from "../functions/filterWords";
import words from "./testWords";
import { getAllWords } from "../functions/getAllWords";

describe('filterWords', () => {
  it('should filter by sockets (2)', () => {
    const result = filterWords(words, {
      itemType: [],
      sockets: [2],
      games: [],
    });
    expect(result.length).toBe(2);
  });

  it('should filter by sockets (3)', () => {
    const result = filterWords(words, {
      itemType: [],
      sockets: [3],
      games: [],
    });
    expect(result.length).toBe(6);
  });

  it('should filter by itemType (Scepters)', () => {
    const result = filterWords(words, {
      itemType: ["Scepters"],
      sockets: [],
      games: [],
    });
    expect(result.length).toBe(2);
  });

  it('should filter by multiple itemTypes', () => {
    const result = filterWords(words, {
      itemType: ["Maces", "Scepters", "Shields"],
      sockets: [],
      games: [],
    });
    expect(result.length).toBe(4);
  });

  it('should filter by sockets and types', () => {
    const result = filterWords(words, {
      itemType: ["Maces", "Scepters", "Shields"],
      sockets: [3],
      games: [],
    });
    expect(result.length).toBe(3);
  });

  it('should filter by sockets, types, and game (diablo2)', () => {
    const result = filterWords(words, {
      itemType: ["Maces", "Scepters", "Shields"],
      sockets: [3],
      games: ["diablo2"],
    });
    expect(result.length).toBe(3);
  });

  it('should filter by sockets, types, and game (diablo2Resurrected)', () => {
    const result = filterWords(words, {
      itemType: ["Maces", "Scepters", "Shields"],
      sockets: [3],
      games: ["diablo2Resurrected"],
    });
    expect(result.length).toBe(0);
  });

  it('should filter all words by game (diablo2Resurrected)', () => {
    expect(
      filterWords(getAllWords(), {
        itemType: [],
        sockets: [],
        games: ["diablo2Resurrected"],
      }).length
    ).toBe(15);
  });
});
