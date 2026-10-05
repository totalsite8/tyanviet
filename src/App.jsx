import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './i18n.jsx';
import { SiteFooter, SiteHeader } from './components/Common.jsx';
import HomePage from './pages/Home.jsx';
import CoursePage from './pages/Course.jsx';
import LessonPage from './pages/Lesson.jsx';
import { DictionaryPage, ProgressPage, PronunciationPage, ReviewPage, StoriesPage, StoryPage } from './pages/StudyPages.jsx';
import { AboutPage, ArticlePage, HelpPage, JournalPage, NotFoundPage, PrivacyPage, TermsPage } from './pages/Content.jsx';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

function ScrollAndTitle() {
  const location = useLocation();
  const { lang } = useLanguage();
  useEffect(() => {
    const path = location.pathname;
    const titles = {
      en: { '/': 'Vietsound — Learn Vietnamese', '/course': 'A1 Vietnamese course — Vietsound', '/pronunciation': 'Vietnamese pronunciation — Vietsound', '/knowledge': 'Course dictionary — Vietsound', '/stories': 'Vietnamese story practice — Vietsound', '/progress': 'My study progress — Vietsound', '/review': 'Saved-word review — Vietsound', '/journal': 'Vietnamese study notes — Vietsound', '/about': 'About the course — Vietsound', '/help': 'Study help — Vietsound', '/privacy': 'Privacy — Vietsound', '/terms': 'Terms — Vietsound' },
      vi: { '/': 'Vietsound — Học tiếng Việt', '/course': 'Khóa học tiếng Việt A1 — Vietsound', '/pronunciation': 'Phát âm tiếng Việt — Vietsound', '/knowledge': 'Từ điển khóa học — Vietsound', '/stories': 'Luyện tập qua câu chuyện — Vietsound', '/progress': 'Tiến độ học tập — Vietsound', '/review': 'Ôn từ — Vietsound', '/journal': 'Ghi chú học tiếng Việt — Vietsound', '/about': 'Giới thiệu khóa học — Vietsound', '/help': 'Trợ giúp học tập — Vietsound', '/privacy': 'Quyền riêng tư — Vietsound', '/terms': 'Điều khoản — Vietsound' },
      ru: { '/': 'Vietsound — Изучайте вьетнамский', '/course': 'Курс вьетнамского A1 — Vietsound', '/pronunciation': 'Произношение вьетнамского — Vietsound', '/knowledge': 'Словарь курса — Vietsound', '/stories': 'Практика на историях — Vietsound', '/progress': 'Мой учебный прогресс — Vietsound', '/review': 'Повторение слов — Vietsound', '/journal': 'Заметки о вьетнамском — Vietsound', '/about': 'О курсе — Vietsound', '/help': 'Помощь в обучении — Vietsound', '/privacy': 'Конфиденциальность — Vietsound', '/terms': 'Условия — Vietsound' },
    };
    const fallback = { en: 'Vietsound — Learn Vietnamese', vi: 'Vietsound — Học tiếng Việt', ru: 'Vietsound — Изучайте вьетнамский' };
    const localizedTitles = titles[lang] || titles.en;
    document.title = localizedTitles[path] || (path.startsWith('/lesson/') ? (lang === 'ru' ? 'Урок вьетнамского — Vietsound' : lang === 'vi' ? 'Bài học tiếng Việt — Vietsound' : 'Vietnamese lesson — Vietsound') : path.startsWith('/stories/') ? (lang === 'ru' ? 'Практика по истории — Vietsound' : lang === 'vi' ? 'Luyện tập câu chuyện — Vietsound' : 'Story practice — Vietsound') : fallback[lang]);
    if (location.hash) {
      window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash, lang]);
  return null;
}

function SiteShell() {
  return <><ScrollAndTitle /><SiteHeader /><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/course" element={<CoursePage />} />
    <Route path="/lesson/:lessonId" element={<LessonPage />} />
    <Route path="/pronunciation" element={<PronunciationPage />} />
    <Route path="/knowledge" element={<DictionaryPage />} />
    <Route path="/stories" element={<StoriesPage />} />
    <Route path="/stories/:storyId" element={<StoryPage />} />
    <Route path="/progress" element={<ProgressPage />} />
    <Route path="/review" element={<ReviewPage />} />
    <Route path="/journal" element={<JournalPage />} />
    <Route path="/journal/:slug" element={<ArticlePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/help" element={<HelpPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="/courses" element={<Navigate to="/course" replace />} />
    <Route path="/lessons" element={<Navigate to="/stories" replace />} />
    <Route path="/tutors" element={<Navigate to="/about" replace />} />
    <Route path="/contact" element={<Navigate to="/help" replace />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes><SiteFooter /></>;
}

export default function App() {
  return <LanguageProvider><BrowserRouter basename={basePath}><SiteShell /></BrowserRouter></LanguageProvider>;
}
