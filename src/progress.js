const KEY = 'vietsound-learning-progress-v2';

const localDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const emptyProgress = () => ({
  completed: [],
  completedStories: [],
  bestScores: {},
  attempts: {},
  reviewStats: {},
  lastLessonId: '',
  savedWords: [],
  lastStudyDate: '',
  studyDays: [],
});

export function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!saved || typeof saved !== 'object') return emptyProgress();
    return {
      ...emptyProgress(),
      ...saved,
      completed: Array.isArray(saved.completed) ? saved.completed : [],
      completedStories: Array.isArray(saved.completedStories) ? saved.completedStories : [],
      savedWords: Array.isArray(saved.savedWords) ? saved.savedWords : [],
      studyDays: Array.isArray(saved.studyDays) ? saved.studyDays : [],
      bestScores: saved.bestScores && typeof saved.bestScores === 'object' ? saved.bestScores : {},
      attempts: saved.attempts && typeof saved.attempts === 'object' ? saved.attempts : {},
      reviewStats: saved.reviewStats && typeof saved.reviewStats === 'object' ? saved.reviewStats : {},
    };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    // The app remains usable for the current session when browser storage is disabled.
  }
  return progress;
}

export function recordStudy(progress, lessonId, score, total) {
  const date = localDateKey();
  const ratio = total > 0 ? Math.round((score / total) * 100) : 0;
  const next = {
    ...progress,
    completed: ratio >= 67 && !progress.completed.includes(lessonId)
      ? [...progress.completed, lessonId]
      : progress.completed,
    bestScores: { ...progress.bestScores, [lessonId]: Math.max(progress.bestScores[lessonId] || 0, ratio) },
    attempts: { ...progress.attempts, [lessonId]: (progress.attempts[lessonId] || 0) + 1 },
    lastLessonId: lessonId,
    lastStudyDate: date,
    studyDays: [...new Set([...(progress.studyDays || []), date])].slice(-60),
  };
  return saveProgress(next);
}

export function setLastLesson(progress, lessonId) {
  return saveProgress({ ...progress, lastLessonId: lessonId });
}

export function toggleSavedWord(progress, wordId) {
  const savedWords = progress.savedWords.includes(wordId)
    ? progress.savedWords.filter((id) => id !== wordId)
    : [...progress.savedWords, wordId];
  return saveProgress({ ...progress, savedWords });
}

export function recordStoryComplete(progress, storyId) {
  const date = localDateKey();
  const next = {
    ...progress,
    completedStories: progress.completedStories.includes(storyId) ? progress.completedStories : [...progress.completedStories, storyId],
    lastStudyDate: date,
    studyDays: [...new Set([...(progress.studyDays || []), date])].slice(-60),
  };
  return saveProgress(next);
}

export function recordWordReview(progress, wordId, knewIt) {
  const current = progress.reviewStats[wordId] || { seen: 0, known: 0 };
  const date = localDateKey();
  return saveProgress({
    ...progress,
    lastStudyDate: date,
    studyDays: [...new Set([...(progress.studyDays || []), date])].slice(-60),
    reviewStats: {
      ...progress.reviewStats,
      [wordId]: { seen: current.seen + 1, known: current.known + (knewIt ? 1 : 0), lastSeen: new Date().toISOString() },
    },
  });
}

export function clearProgress() {
  const fresh = emptyProgress();
  return saveProgress(fresh);
}

export function progressPercent(progress, totalLessons) {
  return totalLessons ? Math.round((progress.completed.length / totalLessons) * 100) : 0;
}
