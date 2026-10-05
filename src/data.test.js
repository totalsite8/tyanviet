import { describe, expect, it } from 'vitest';
import { articles, stories, tones } from './data.js';

describe('supplementary learning content', () => {
  it('contains all six tone examples', () => {
    expect(tones.map((tone) => tone.mark)).toEqual(['ma', 'má', 'mà', 'mả', 'mã', 'mạ']);
  });

  it('keeps each story answerable and bilingual', () => {
    expect(stories).toHaveLength(8);
    expect(new Set(stories.map((story) => story.id)).size).toBe(stories.length);
    for (const story of stories) {
      expect(story.story.length).toBeGreaterThanOrEqual(3);
      expect(story.story.every((line) => line.vi && line.en)).toBe(true);
      expect(story.options[story.answer]).toBeTruthy();
      expect(story.question).toBeTruthy();
    }
  });

  it('provides complete reading notes for the journal', () => {
    expect(articles).toHaveLength(4);
    expect(new Set(articles.map((article) => article.slug)).size).toBe(articles.length);
    expect(articles.every((article) => article.paragraphs.length > 0)).toBe(true);
  });
});
