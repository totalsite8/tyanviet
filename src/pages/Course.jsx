import { useMemo, useState } from 'react';
import { ChevronDown, CircleCheck, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courseLessons, courseUnits, getLessonById } from '../courseData.js';
import { useLanguage } from '../i18n.jsx';
import { ButtonLink, CourseLessonRow, PageIntro, ProgressBar } from '../components/Common.jsx';
import { loadProgress, progressPercent } from '../progress.js';

export default function CoursePage() {
  const { lang, t } = useLanguage();
  const [progress] = useState(() => loadProgress());
  const [search, setSearch] = useState('');
  const [openUnits, setOpenUnits] = useState(() => new Set(courseUnits.map((unit) => unit.id)));
  const percent = progressPercent(progress, courseLessons.length);
  const nextIncomplete = courseLessons.find((lesson) => !progress.completed.includes(lesson.id));
  const allComplete = progress.completed.length === courseLessons.length;
  const nextLesson = nextIncomplete || courseLessons[courseLessons.length - 1];
  const filteredUnits = useMemo(() => courseUnits.map((unit) => ({
    ...unit,
    lessons: unit.lessonIds.map(getLessonById).filter((lesson) => lesson && `${lesson.title} ${lesson.titleVi} ${lesson.focus}`.toLowerCase().includes(search.toLowerCase())),
  })).filter((unit) => unit.lessons.length), [search]);

  const toggleUnit = (id) => setOpenUnits((current) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });

  return (
    <main id="main" className="course-page">
      <section className="course-page-intro section-cream">
        <div className="page-container course-page-intro-layout">
          <PageIntro
            eyebrow={t('courseOverview')}
            title={lang === 'vi' ? 'Tiếng Việt' : 'Vietnamese'}
            accent={lang === 'vi' ? 'trong đời sống.' : 'for everyday life.'}
            body={t('courseSummary')}
          >
            <div className="course-start-actions"><ButtonLink to={`/lesson/${nextLesson.id}`} kind="coral">{allComplete ? t('reviewLastLesson') : progress.completed.length ? t('continueLearning') : t('startLearning')}</ButtonLink><span className="course-no-paywall"><CircleCheck size={16} />Open course · self-paced · saved locally</span></div>
          </PageIntro>
          <div className="course-progress-panel">
            <div className="course-progress-heading"><span>{t('yourProgress')}</span><strong>{percent}%</strong></div>
            <ProgressBar value={percent} />
            <div className="course-progress-stats"><span>{progress.completed.length} / {courseLessons.length} {t('lessonsComplete')}</span><span>{courseLessons.length} lessons</span></div>
            <Link to="/progress" className="text-link">Open study record<ChevronDown size={15} className="progress-link-icon" /></Link>
          </div>
        </div>
      </section>

      <section className="section section-paper curriculum-section">
        <div className="page-container">
          <div className="curriculum-toolbar">
            <div><p className="eyebrow"><span className="eyebrow-dot" />12 LESSONS · 4 UNITS</p><h2>{lang === 'vi' ? 'Lộ trình học' : 'Course curriculum'}</h2><p>All lessons are open. Learn in order, repeat a lesson or jump to a topic you need.</p></div>
            <label className="lesson-search curriculum-search"><Search size={16} /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find a lesson or topic…" aria-label="Search course lessons" /></label>
          </div>
          <div className="curriculum-list">
            {filteredUnits.map((unit) => {
              const unitLessons = unit.lessonIds.map(getLessonById).filter(Boolean);
              const completedCount = unitLessons.filter((lesson) => progress.completed.includes(lesson.id)).length;
              const isOpen = openUnits.has(unit.id) || Boolean(search);
              return (
                <section className={`curriculum-unit ${isOpen ? 'is-open' : ''}`} key={unit.id}>
                  <button className="curriculum-unit-header" type="button" onClick={() => toggleUnit(unit.id)} aria-expanded={isOpen}>
                    <span className="curriculum-unit-number">{unit.number}</span>
                    <span className="curriculum-unit-heading"><strong>{lang === 'vi' ? unit.titleVi : unit.title}</strong><small>{unit.summary}</small></span>
                    <span className="curriculum-unit-progress">{completedCount}/{unitLessons.length} {t('completedLabel').toLowerCase()}</span>
                    <ChevronDown size={19} />
                  </button>
                  {isOpen && <div className="curriculum-lessons">{unit.lessons.map((lesson) => <CourseLessonRow key={lesson.id} lesson={lesson} completed={progress.completed.includes(lesson.id)} bestScore={progress.bestScores[lesson.id]} current={nextLesson.id === lesson.id} />)}</div>}
                </section>
              );
            })}
            {!filteredUnits.length && <div className="empty-state"><Search size={22} /><h3>{t('noResult')}</h3><p>Try a different lesson title or topic.</p></div>}
          </div>
          <div className="curriculum-footnote"><CircleCheck size={17} /><p><strong>Progress belongs to you.</strong> This browser stores lesson completion and scores locally. Clear browser storage or use “Reset” on the progress page to start over.</p></div>
        </div>
      </section>
    </main>
  );
}
