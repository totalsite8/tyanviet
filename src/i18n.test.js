import { describe, expect, it } from 'vitest';
import { supportedLanguages, translate } from './i18n.jsx';

describe('interface language options', () => {
  it('offers English, Vietnamese and Russian in the selector', () => {
    expect(supportedLanguages.map(({ code }) => code)).toEqual(['en', 'vi', 'ru']);
  });

  it('returns localized Russian UI copy and safely falls back for unknown keys', () => {
    expect(translate('ru', 'openCourse')).toBe('Открыть курс');
    expect(translate('ru', 'navStories')).toBe('Истории');
    expect(translate('ru', 'recordYourself')).toBe('Запишите себя');
    expect(translate('ru', 'missing-label')).toBe('missing-label');
  });

  it('provides Vietnamese copy for the new study and privacy screens', () => {
    expect(translate('vi', 'filterByLevel')).toBe('Lọc truyện theo trình độ');
    expect(translate('vi', 'privacyStorageBody')).toContain('bộ nhớ cục bộ');
    expect(translate('vi', 'startRecording')).toBe('Bắt đầu ghi âm');
  });
});
