import { describe, expect, it } from 'vitest';
import { filterDictionaryEntries, normalizeAnswer, normalizeText } from './utils.js';

const entries = [
  { term: 'được', category: 'Verbs', meaning: 'can; to receive', example: 'Tôi làm được.' },
  { term: 'chúng ta', category: 'Pronouns', meaning: 'we including the listener', example: 'Chúng ta đi nhé.' },
];

describe('Vietnamese dictionary search', () => {
  it('normalizes Vietnamese diacritics while retaining đ as d', () => {
    expect(normalizeText('Được rồi')).toBe('duoc roi');
  });

  it('finds entries without tone marks', () => {
    expect(filterDictionaryEntries(entries, 'duoc')).toHaveLength(1);
  });

  it('combines search and category filters', () => {
    expect(filterDictionaryEntries(entries, 'we', 'Pronouns').map((entry) => entry.term)).toEqual(['chúng ta']);
    expect(filterDictionaryEntries(entries, 'we', 'Verbs')).toHaveLength(0);
  });

  it('normalizes answer spacing and punctuation without erasing tones', () => {
    expect(normalizeAnswer('  TÔI   LÀ LINH. ')).toBe('tôi là linh');
    expect(normalizeAnswer('má')).not.toBe(normalizeAnswer('ma'));
  });
});
