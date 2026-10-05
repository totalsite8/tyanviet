import { describe, expect, it } from 'vitest';
import { loadProgress, recordStudy, recordStoryComplete, recordWordReview, toggleSavedWord } from './progress.js';

describe('local learner progress', () => {
  it('marks lessons complete at 67% while keeping the best score', () => {
    const start = loadProgress();
    const retry = recordStudy(start, 'first-words', 1, 3);
    expect(retry.completed).not.toContain('first-words');
    expect(retry.bestScores['first-words']).toBe(33);
    const passed = recordStudy(retry, 'first-words', 2, 3);
    expect(passed.completed).toContain('first-words');
    expect(passed.bestScores['first-words']).toBe(67);
    expect(passed.attempts['first-words']).toBe(2);
  });

  it('keeps saved words and tracks story and review activity', () => {
    const start = loadProgress();
    const withWord = toggleSavedWord(start, 'xin-chao');
    expect(withWord.savedWords).toContain('xin-chao');
    const withStory = recordStoryComplete(withWord, 'story-1');
    expect(withStory.completedStories).toContain('story-1');
    const reviewed = recordWordReview(withStory, 'xin-chao', true);
    expect(reviewed.reviewStats['xin-chao']).toMatchObject({ seen: 1, known: 1 });
    expect(reviewed.studyDays).toHaveLength(1);
  });
});
