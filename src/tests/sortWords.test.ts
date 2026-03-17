import { describe, it, expect } from 'vitest';
import { sortWords, SORT_OPTIONS } from "../functions/sortWords";
import words from "./testWords";

describe('sortWords', () => {
  it('should sort by name', () => {
    const sortedByName = sortWords(words, SORT_OPTIONS.NAME);
    expect(sortedByName[0].name).toBe("Ancient's Pledge");
    expect(sortedByName[sortedByName.length - 1].name).toBe("Malice");
  });

  it('should sort by level', () => {
    const sortedByLevel = sortWords(words, SORT_OPTIONS.LEVEL);
    expect(sortedByLevel[0].name).toBe("Malice");
    expect(sortedByLevel[0].level).toBe(15);
    expect(sortedByLevel[sortedByLevel.length - 1].name).toBe("Fury");
    expect(sortedByLevel[sortedByLevel.length - 1].level).toBe(65);
  });
});
