import { describe, expect, it } from 'vitest';
import { courseLessons, courseUnits, courseVocabulary } from './courseData.js';

 describe('A1 Vietnamese course content', () => {
  it('contains a complete 12-lesson path grouped into four units', () => {
    expect(courseLessons).toHaveLength(12);
    expect(courseUnits).toHaveLength(4);
    const groupedIds = courseUnits.flatMap((unit) => unit.lessonIds);
    expect(groupedIds).toHaveLength(12);
    expect(new Set(groupedIds).size).toBe(12);
    expect(new Set(groupedIds)).toEqual(new Set(courseLessons.map((lesson) => lesson.id)));
    expect(new Set(courseLessons.map((lesson) => lesson.id)).size).toBe(12);
  });

  it('provides content and at least three answerable exercises in every lesson', () => {
    for (const lesson of courseLessons) {
      expect(lesson.objective).toBeTruthy();
      expect(lesson.vocabulary.length).toBeGreaterThanOrEqual(4);
      expect(lesson.grammar.examples.length).toBeGreaterThanOrEqual(2);
      expect(lesson.dialogue.length).toBeGreaterThanOrEqual(3);
      expect(lesson.exercises.length).toBeGreaterThanOrEqual(3);
      for (const exercise of lesson.exercises) {
        if (exercise.type === 'choice') {
          expect(exercise.answer).toBeGreaterThanOrEqual(0);
          expect(exercise.answer).toBeLessThan(exercise.options.length);
        }
        if (exercise.type === 'text') expect(exercise.accepted.length).toBeGreaterThan(0);
      }
    }
  });

  it('exposes a deduplicated course dictionary with stable word ids', () => {
    expect(courseVocabulary.length).toBeGreaterThan(50);
    expect(new Set(courseVocabulary.map((word) => word.id)).size).toBe(courseVocabulary.length);
  });
});
