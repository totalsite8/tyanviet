import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Bookmark, BookOpen, Check, Menu, Play, Volume2, X } from 'lucide-react';
import { supportedLanguages, useLanguage } from '../i18n.jsx';

const navItems = [
  { to: '/course', key: 'navCourse' },
  { to: '/pronunciation', key: 'navPronunciation' },
  { to: '/knowledge', key: 'navDictionary' },
  { to: '/stories', key: 'navStories' },
  { to: '/progress', key: 'navProgress' },
  { to: '/journal', key: 'navJournal' },
];

export function Logo({ inverse = false }) {
  const { t } = useLanguage();
  return (
    <Link className={`brand ${inverse ? 'brand-inverse' : ''}`} to="/" aria-label={t('brandHome')}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="17" /><path d="M8 19h4l2.4-7 4.4 14 3.2-10 2 5H28" /></svg>
      </span>
      <span className="brand-word">viet<span>sound</span></span>
    </Link>
  );
}

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">{t('skip')}</a>
      <header className="site-header">
        <div className="header-inner page-container">
          <Logo />
          <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label={t('primaryNavigation')}>
            {navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t(item.key)}</NavLink>)}
          </nav>
          <div className="header-actions">
            <div className="language-toggle" role="group" aria-label={t('language')}>
              {supportedLanguages.map((option) => <button key={option.code} type="button" onClick={() => setLang(option.code)} aria-label={option.name} aria-pressed={lang === option.code} title={option.name} className={lang === option.code ? 'language-current' : ''}>{option.label}</button>)}
            </div>
            <Link className="button button-dark button-header" to="/course"><span>{t('openCourse')}</span><ArrowRight size={15} /></Link>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? t('closeMenu') : t('menu')} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
      </header>
    </>
  );
}

export function PageIntro({ eyebrow, title, accent, body, children, align = 'left', compact = false }) {
  return (
    <div className={`page-intro page-intro-${align} ${compact ? 'page-intro-compact' : ''}`}>
      {eyebrow && <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>}
      <h1>{title}{accent && <> <em>{accent}</em></>}</h1>
      {body && <p className="page-intro-body">{body}</p>}
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, body, link, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'section-heading-centered' : ''}`}>
      <div>
        {eyebrow && <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>}
        <h2>{title}</h2>
        {body && <p className="section-heading-body">{body}</p>}
      </div>
      {link && <Link className="text-link section-heading-link" to={link.to}>{link.label}<ArrowUpRight size={16} /></Link>}
    </div>
  );
}

export function ButtonLink({ to, children, kind = 'dark', icon = true, className = '', ...props }) {
  const Icon = kind === 'text' ? ArrowRight : ArrowUpRight;
  return <Link className={`button button-${kind} ${className}`} to={to} {...props}><span>{children}</span>{icon && <Icon size={16} strokeWidth={1.8} />}</Link>;
}

export function SoundButton({ text, className = '', label }) {
  const [message, setMessage] = useState('');
  const { t } = useLanguage();
  const speechAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function';
  const speak = () => {
    if (!speechAvailable) {
      setMessage(t('speechUnavailable'));
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.82;
    const vietnameseVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith('vi'));
    if (vietnameseVoice) utterance.voice = vietnameseVoice;
    window.speechSynthesis.speak(utterance);
    setMessage(vietnameseVoice ? t('playingVietnamese') : t('defaultBrowserVoice'));
  };
  return <span className="sound-control"><button className={`sound-button ${className}`} onClick={speak} type="button" aria-label={label || `Listen to ${text}`} title={speechAvailable ? undefined : t('speechUnavailableTitle')} disabled={!speechAvailable}><Volume2 size={17} strokeWidth={1.8} /></button><span className="sr-only" aria-live="polite">{message}</span></span>;
}

export function ProgressBar({ value, label }) {
  const { t } = useLanguage();
  const safe = Math.max(0, Math.min(100, value));
  return <div className="progress-bar-wrap" aria-label={`${label || t('courseProgress')}: ${safe}%`}><div className="progress-bar"><span style={{ width: `${safe}%` }} /></div><span className="progress-bar-value">{safe}%</span></div>;
}

export function CourseLessonRow({ lesson, completed, bestScore, current = false }) {
  const { lang, t } = useLanguage();
  return (
    <Link to={`/lesson/${lesson.id}`} className={`course-lesson-row ${completed ? 'is-completed' : ''} ${current ? 'is-current' : ''}`}>
      <span className="course-lesson-number">{completed ? <Check size={14} /> : lesson.number}</span>
      <span className="course-lesson-title"><strong>{lang === 'vi' ? lesson.titleVi : lang === 'ru' ? lesson.titleRu || lesson.title : lesson.title}</strong><small>{lang === 'vi' ? lesson.focusVi || lesson.focus : lang === 'ru' ? lesson.focusRu || lesson.focus : lesson.focus} · {lesson.minutes} {t('minuteShort')}</small></span>
      <span className="course-lesson-score" aria-label={completed ? `${t('bestScore')}: ${bestScore || 70}%` : t('notStarted')}>{completed ? `${bestScore || 70}%` : '—'}</span>
      <span className="course-lesson-arrow"><ArrowRight size={16} /></span>
    </Link>
  );
}

const vocabularyCategoryKeys = {
  Activities: 'categoryActivities', Classifiers: 'categoryClassifiers', Directions: 'categoryDirections', Everyday: 'categoryEveryday', Family: 'categoryFamily', 'Food & drink': 'categoryFood', Grammar: 'categoryGrammar', Greetings: 'categoryGreetings', Numbers: 'categoryNumbers', Particles: 'categoryParticles', People: 'categoryPeople', Places: 'categoryPlaces', Pronouns: 'categoryPronouns', Questions: 'categoryQuestions', Time: 'categoryTime', 'Tone example': 'categoryTone', 'Useful phrases': 'categoryPhrases', Verbs: 'categoryVerbs',
};

export function vocabularyCategoryLabel(category, t) {
  const key = vocabularyCategoryKeys[category];
  return key ? t(key) : category;
}

export function VocabularyCard({ word, saved, onToggleSave, compact = false }) {
  const { t } = useLanguage();
  return (
    <article className={`vocabulary-card ${compact ? 'vocabulary-card-compact' : ''}`}>
      <div className="vocabulary-card-top"><span className="vocabulary-category">{vocabularyCategoryLabel(word.category, t)}</span><button type="button" className={`bookmark-button ${saved ? 'saved' : ''}`} aria-label={saved ? `${t('removeSavedWord')}: ${word.term}` : `${t('saveWord')}: ${word.term}`} aria-pressed={saved} onClick={() => onToggleSave(word)}><Bookmark size={15} fill={saved ? 'currentColor' : 'none'} /></button></div>
      <div className="vocabulary-word-line"><h3>{word.term}</h3><SoundButton text={word.term} label={`Listen to ${word.term}`} /></div>
      <p className="vocabulary-meaning">{word.meaning}</p>
      {word.example && <p className="vocabulary-example">{word.example}</p>}
      {word.lessonTitle && <small className="vocabulary-origin">{t('fromLesson')}: {word.lessonTitle}</small>}
    </article>
  );
}

export function StoryCard({ story, completed = false }) {
  const { lang, t } = useLanguage();
  const levelKey = { Beginner: 'levelBeginner', Elementary: 'levelElementary', Intermediate: 'levelIntermediate' }[story.level];
  const level = levelKey ? t(levelKey) : story.level;
  return (
    <Link className="story-card" to={`/stories/${story.id}`}>
      <div className={`story-card-art story-art-${story.color || 'peach'}`}><span>{story.titleVi.slice(0, 1)}</span><small>{level}</small></div>
      <div className="story-card-content"><div className="story-card-meta"><span>{level}</span><span>{story.length.replace('min', t('minuteShort'))}</span></div><h3>{lang === 'vi' ? story.titleVi : lang === 'ru' ? story.titleRu : story.title}</h3><p className="story-card-vietnamese">{lang === 'vi' ? story.title : story.titleVi}</p><p>{lang === 'vi' ? story.summaryVi : lang === 'ru' ? story.summaryRu : story.summary}</p><div className="story-card-bottom"><span className="story-card-status">{completed ? <><Check size={13} /> {t('storyDone')}</> : `${story.tags.join(' · ')}`}</span><span className="round-arrow" aria-hidden="true"><Play size={15} /></span></div></div>
    </Link>
  );
}

export function ArticleCard({ article }) {
  const { lang, t } = useLanguage();
  const title = lang === 'vi' ? article.titleVi : lang === 'ru' ? article.titleRu : article.title;
  const summary = lang === 'vi' ? article.summaryVi : lang === 'ru' ? article.summaryRu : article.summary;
  const category = lang === 'vi' ? article.categoryVi : lang === 'ru' ? article.categoryRu : article.category;
  const colors = ['peach', 'mint', 'lilac', 'butter'];
  const index = Math.abs(article.slug.split('').reduce((total, character) => total + character.charCodeAt(0), 0)) % colors.length;
  return (
    <article className="article-card">
      <Link className={`article-art article-art-${colors[index]}`} to={`/journal/${article.slug}`} aria-label={`${t('readNote')}: ${title}`}><span className="article-art-orbit" /><span className="article-art-word">{article.slug === 'a-polite-particle' ? 'ạ' : article.titleVi.charAt(0)}</span><span className="article-art-caption">{t('articleArtCaption')}</span><ArrowUpRight size={19} className="article-art-arrow" /></Link>
      <div className="article-card-meta"><span>{category}</span><span>{article.read.replace(' min read', ` ${t('minuteShort')}`)}</span></div>
      <h3><Link to={`/journal/${article.slug}`}>{title}</Link></h3><p>{summary}</p><Link className="text-link" to={`/journal/${article.slug}`}>{t('readNote')}<ArrowUpRight size={15} /></Link>
    </article>
  );
}

function FooterOrnament() {
  return <svg className="footer-ornament" viewBox="0 0 240 190" fill="none" aria-hidden="true"><path d="M15 94c27-42 62-42 88 0s61 42 91 0 48-42 62-21M3 120c32-42 68-42 96 0s60 42 89 0 51-42 75-21" stroke="currentColor" strokeWidth="1.5" /><circle cx="176" cy="42" r="5" fill="currentColor" /><circle cx="207" cy="64" r="3" fill="currentColor" /></svg>;
}

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-learning page-container"><div><p className="eyebrow eyebrow-light"><span className="eyebrow-dot" />{t('keepGoing')}</p><h2>{t('footerContinue')}</h2><p>{t('footerContinueBody')}</p></div><FooterOrnament /><Link className="button button-light" to="/course">{t('openCourse')}<ArrowUpRight size={16} /></Link></div>
      <div className="footer-main page-container">
        <div className="footer-brand-column"><Logo inverse /><p>{t('footerTagline')}</p><a className="footer-video-link" href="https://www.youtube.com/channel/UC-XTV6OCNGnj36FPNgH_c_w" target="_blank" rel="noreferrer"><Play size={14} />{t('footerVideoLessons')}<ArrowUpRight size={13} /></a></div>
        <div className="footer-column"><p className="footer-column-title">{t('footerLearn')}</p><Link to="/course">{t('navCourse')}</Link><Link to="/pronunciation">{t('navPronunciation')}</Link><Link to="/knowledge">{t('navDictionary')}</Link><Link to="/stories">{t('navStories')}</Link></div>
        <div className="footer-column"><p className="footer-column-title">{t('footerPractice')}</p><Link to="/progress">{t('navProgress')}</Link><Link to="/review">{t('navReview')}</Link><Link to="/journal">{t('navJournal')}</Link><Link to="/help">{t('navHelp')}</Link></div>
        <div className="footer-column"><p className="footer-column-title">{t('footerSupport')}</p><Link to="/terms">{t('terms')}</Link><Link to="/privacy">{t('privacy')}</Link><Link to="/about">{t('navAbout')}</Link></div>
      </div>
      <div className="footer-bottom page-container"><span>© {new Date().getFullYear()} Vietsound</span><div className="footer-legal-links"><Link to="/terms">{t('terms')}</Link><Link to="/privacy">{t('privacy')}</Link></div><span className="footer-note">{t('footerNote')} <BookOpen size={14} /></span></div>
    </footer>
  );
}
