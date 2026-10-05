import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n.jsx';
import { SiteFooter, SiteHeader } from './components/Common.jsx';
import HomePage from './pages/Home.jsx';
import CoursePage from './pages/Course.jsx';
import LessonPage from './pages/Lesson.jsx';
import { DictionaryPage, ProgressPage, PronunciationPage, ReviewPage, StoriesPage, StoryPage } from './pages/StudyPages.jsx';
import { AboutPage, ArticlePage, HelpPage, JournalPage, NotFoundPage, PrivacyPage, TermsPage } from './pages/Content.jsx';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

function ScrollAndTitle() {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    const titles = {
      '/': 'Vietsound — Learn Vietnamese',
      '/course': 'A1 Vietnamese course — Vietsound',
      '/pronunciation': 'Vietnamese pronunciation — Vietsound',
      '/knowledge': 'Course dictionary — Vietsound',
      '/stories': 'Vietnamese story practice — Vietsound',
      '/progress': 'My study progress — Vietsound',
      '/review': 'Saved-word review — Vietsound',
      '/journal': 'Vietnamese study notes — Vietsound',
      '/about': 'About the course — Vietsound',
      '/help': 'Study help — Vietsound',
      '/privacy': 'Privacy — Vietsound',
      '/terms': 'Terms — Vietsound',
    };
    document.title = titles[path] || (path.startsWith('/lesson/') ? 'Vietnamese lesson — Vietsound' : path.startsWith('/stories/') ? 'Story practice — Vietsound' : 'Vietsound — Learn Vietnamese');
    if (location.hash) {
      window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);
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
