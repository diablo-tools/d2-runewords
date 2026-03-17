import { describe, it, expect } from 'vitest';
import { getAllWords } from "../functions/getAllWords";

describe('Patch 3.0 Runewords', () => {
  const allWords = getAllWords();

  it('should include Authority', () => {
    const word = allWords.find(w => w.name === "Authority");
    expect(word).toBeDefined();
    expect(word?.patch).toBe("3.0");
    expect(word?.runeOrder).toEqual(["Hel", "Shael", "Ral"]);
    expect(word?.itemType).toContain("Body Armor");
  });

  it('should include Coven', () => {
    const word = allWords.find(w => w.name === "Coven");
    expect(word).toBeDefined();
    expect(word?.patch).toBe("3.0");
    expect(word?.runeOrder).toEqual(["Ist", "Ral", "Io"]);
    expect(word?.itemType).toContain("Helms");
  });

  it('should include Void', () => {
    const word = allWords.find(w => w.name === "Void");
    expect(word).toBeDefined();
    expect(word?.patch).toBe("3.0");
    expect(word?.runeOrder).toEqual(["Thul", "Zod", "Ist"]);
    expect(word?.itemType).toContain("Daggers");
  });

  it('should include Vigilance', () => {
    const word = allWords.find(w => w.name === "Vigilance");
    expect(word).toBeDefined();
    expect(word?.patch).toBe("3.0");
    expect(word?.runeOrder).toEqual(["Dol", "Gul"]);
    expect(word?.itemType).toContain("Grimoires");
    expect(word?.itemType).toContain("Shrunken Heads");
    expect(word?.itemType).toContain("Targes");
  });

  it('should include Ritual', () => {
    const word = allWords.find(w => w.name === "Ritual");
    expect(word).toBeDefined();
    expect(word?.patch).toBe("3.0");
    expect(word?.runeOrder).toEqual(["Amn", "Shael", "Ohm"]);
    expect(word?.itemType).toContain("Daggers");
  });
});
