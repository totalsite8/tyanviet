import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Headphones, RotateCcw, Sparkles } from 'lucide-react';
import { courseLessons, courseUnits, getLessonById } from '../courseData.js';
import { stories } from '../data.js';
import { useLanguage } from '../i18n.jsx';
import { ButtonLink, CourseLessonRow, ProgressBar, SectionHeading, SoundButton, StoryCard } from '../components/Common.jsx';
import { loadProgress, progressPercent } from '../progress.js';
import { useState } from 'react';

const heroImage = `${import.meta.env.BASE_URL}assets/vietsound-hero.jpg`;

export default function HomePage() {
  const { lang, t } = useLanguage();
  const [progress] = useState(() => loadProgress());
  const percent = progressPercent(progress, courseLessons.length);
  const resume = getLessonById(progress.lastLessonId);
  const nextIncomplete = courseLessons.find((lesson) => !progress.completed.includes(lesson.id));
  const allComplete = progress.completed.length === courseLessons.length;
  const focusLesson = allComplete ? courseLessons[courseLessons.length - 1] : resume && !progress.completed.includes(resume.id) ? resume : nextIncomplete;
  const isResume = !allComplete && focusLesson.id === resume?.id;
  const featuredStory = stories[0];

  return (
    <main id="main" className="learning-home">
      <section className="dashboard-hero page-container">
        <div className="dashboard-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{t('homeEyebrow')}</p>
          <h1>{t('homeTitle')}<br /><em>{t('homeAccent')}</em></h1>
          <p className="dashboard-hero-body">{t('homeBody')}</p>
          <div className="dashboard-hero-actions">
            <ButtonLink to={`/lesson/${focusLesson.id}`} kind="coral">{allComplete ? t('reviewLastLesson') : isResume ? t('continueLearning') : t('startLearning')}</ButtonLink>
            <ButtonLink to="/course" kind="text">{t('courseMap')}</ButtonLink>
          </div>
          <div className="dashboard-progress-snippet">
            <div className="dashboard-progress-label"><span>{t('yourProgress')}</span><strong>{progress.completed.length} / {courseLessons.length}</strong></div>
            <ProgressBar value={percent} />
          </div>
        </div>
        <div className="dashboard-hero-side">
          <div className="dashboard-photo"><img src={heroImage} alt={lang === 'vi' ? 'Người học tiếng Việt tại nhà bên cạnh máy tính xách tay và quyển vở' : lang === 'ru' ? 'Ученик занимается вьетнамским языком дома за ноутбуком и с тетрадью' : 'A learner studying Vietnamese beside a notebook and laptop at home'} /><span className="dashboard-photo-caption">{t('dashboardPhotoCaption')}</span></div>
          <article className="continue-card">
            <div className="continue-card-top"><span className="continue-card-label"><span className="live-dot" />{allComplete ? t('courseComplete') : isResume ? t('resumeLesson') : t('nextStep')}</span><span className="continue-card-number">{focusLesson.number} / 12</span></div>
            <h2>{lang === 'vi' ? focusLesson.titleVi : lang === 'ru' ? focusLesson.titleRu : focusLesson.title}</h2>
            <p>{lang === 'vi' ? focusLesson.objectiveVi : lang === 'ru' ? focusLesson.objectiveRu : focusLesson.objective}</p>
            <Link to={`/lesson/${focusLesson.id}`} className="continue-card-action"><span>{allComplete ? t('reviewLastLesson') : isResume ? t('continueLearning') : t('startLearning')}</span><span className="continue-arrow"><ArrowRight size={17} /></span></Link>
          </article>
          <div className="tone-peek"><span><small>{t('listenSixTones')}</small><strong>ma · má · mà · mả · mã · mạ</strong></span><SoundButton text="ma, má, mà, mả, mã, mạ" label={lang === 'ru' ? 'Слушать шесть тонов' : lang === 'vi' ? 'Nghe sáu thanh điệu' : 'Listen to the six tones'} /></div>
        </div>
      </section>

      <section className="dashboard-stats page-container">
        <div><strong>{courseLessons.length}</strong><span>{t('guidedLessons')}</span></div><i />
        <div><strong>{courseUnits.length}</strong><span>{t('learningUnits')}</span></div><i />
        <div><strong>{new Set(courseLessons.flatMap((lesson) => lesson.vocabulary.map((word) => word.term))).size}</strong><span>{t('wordsLearned')}</span></div><i />
        <div><strong>4</strong><span>{t('fourSkills')}</span></div>
      </section>

      <section className="section section-paper dashboard-course-section">
        <div className="page-container">
          <SectionHeading eyebrow={t('homeCourseEyebrow')} title={t('homeCourseTitle')} body={t('homeCourseBody')} link={{ to: '/course', label: t('courseMap') }} />
          <div className="dashboard-units-grid">
            {courseUnits.slice(0, 2).map((unit) => {
              const unitLessons = unit.lessonIds.map((id) => getLessonById(id)).filter(Boolean);
              const done = unitLessons.filter((lesson) => progress.completed.includes(lesson.id)).length;
              return <article className="dashboard-unit-card" key={unit.id}>
                <div className="dashboard-unit-top"><span>{t('unit')} {unit.number}</span><span>{done}/{unitLessons.length}</span></div>
                <h3>{lang === 'vi' ? unit.titleVi : lang === 'ru' ? unit.titleRu : unit.title}</h3><p>{lang === 'vi' ? unit.summaryVi : lang === 'ru' ? unit.summaryRu : unit.summary}</p>
                <div className="dashboard-unit-lessons">{unitLessons.slice(0, 2).map((lesson) => <CourseLessonRow key={lesson.id} lesson={lesson} completed={progress.completed.includes(lesson.id)} bestScore={progress.bestScores[lesson.id]} current={focusLesson.id === lesson.id} />)}</div>
                <Link className="text-link" to="/course">{t('openUnit')}<ArrowRight size={15} /></Link>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="section daily-practice-section">
        <div className="page-container daily-practice-layout">
          <div className="daily-practice-copy"><p className="eyebrow eyebrow-light"><span className="eyebrow-dot" />{t('dailyPractice')}</p><h2>{t('dailyHeadline')}</h2><p>{t('dailyBody')}</p></div>
          <div className="quick-tools-grid">
            <Link to="/pronunciation" className="quick-tool-card"><span className="quick-tool-icon"><Headphones size={19} /></span><span><strong>{t('toolPronunciation')}</strong><small>{t('toolPronunciationDetail')}</small></span><ArrowRight size={16} /></Link>
            <Link to="/knowledge" className="quick-tool-card"><span className="quick-tool-icon quick-tool-mint"><BookOpen size={19} /></span><span><strong>{t('toolDictionary')}</strong><small>{t('toolDictionaryDetail')}</small></span><ArrowRight size={16} /></Link>
            <Link to="/stories" className="quick-tool-card"><span className="quick-tool-icon quick-tool-lilac"><Sparkles size={19} /></span><span><strong>{t('toolStories')}</strong><small>{t('toolStoriesDetail')}</small></span><ArrowRight size={16} /></Link>
            <Link to="/review" className="quick-tool-card"><span className="quick-tool-icon quick-tool-butter"><RotateCcw size={19} /></span><span><strong>{t('toolSavedWords')}</strong><small>{progress.savedWords.length} {t('savedWordsReady')}</small></span><ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-cream dashboard-story-section">
        <div className="page-container">
          <SectionHeading eyebrow={t('storySectionEyebrow')} title={t('storySectionTitle')} body={t('storySectionBody')} link={{ to: '/stories', label: t('openStoryLibrary') }} />
          <StoryCard story={featuredStory} completed={progress.completedStories?.includes(featuredStory.id)} />
        </div>
      </section>
    </main>
  );
}
