import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Bookmark, Check, CircleHelp, ListChecks, Volume2 } from 'lucide-react';
import { courseLessons, getLessonById, getNextLesson, getPreviousLesson } from '../courseData.js';
import { useLanguage } from '../i18n.jsx';
import { ButtonLink, ProgressBar, SoundButton } from '../components/Common.jsx';
import VoiceRecorder from '../components/VoiceRecorder.jsx';
import { loadProgress, recordStudy, setLastLesson, toggleSavedWord } from '../progress.js';
import { normalizeAnswer } from '../utils.js';

function isAnswerCorrect(exercise, answer) {
  if (exercise.type === 'choice') return Number(answer) === exercise.answer;
  const given = normalizeAnswer(answer);
  return exercise.accepted.some((item) => normalizeAnswer(item) === given);
}

function ExerciseItem({ exercise, index, value, onChange, submitted, correct }) {
  const { t } = useLanguage();
  const resultClass = submitted ? (correct ? 'exercise-correct' : 'exercise-incorrect') : '';
  return (
    <fieldset className={`exercise-item ${resultClass}`}>
      <legend><span className="exercise-number">{String(index + 1).padStart(2, '0')}</span><span>{exercise.prompt}</span></legend>
      {exercise.type === 'choice' ? (
        <div className="exercise-choices">
          {exercise.options.map((option, optionIndex) => (
            <label className={`exercise-choice ${Number(value) === optionIndex ? 'is-selected' : ''} ${submitted && optionIndex === exercise.answer ? 'is-answer' : ''}`} key={option}>
              <input type="radio" name={`question-${index}`} value={optionIndex} checked={Number(value) === optionIndex} onChange={() => onChange(String(optionIndex))} disabled={submitted} />
              <span className="exercise-choice-letter">{String.fromCharCode(65 + optionIndex)}</span><span>{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <label className="exercise-text-answer"><span className="sr-only">{t('yourAnswer')}</span><input type="text" value={value || ''} onChange={(event) => onChange(event.target.value)} disabled={submitted} placeholder={exercise.placeholder || t('typeAnswer')} autoComplete="off" /></label>
      )}
      {submitted && <div className={`exercise-feedback ${correct ? 'feedback-success' : 'feedback-try-again'}`} role="status"><strong>{correct ? t('correct') : t('incorrect')}.</strong> {exercise.explanation}</div>}
    </fieldset>
  );
}

export default function LessonPage() {
  const { lessonId } = useParams();
  const { t, lang } = useLanguage();
  const lesson = getLessonById(lessonId);
  const [progress, setProgress] = useState(() => loadProgress());
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const previous = getPreviousLesson(lessonId);
  const next = getNextLesson(lessonId);
  const unit = useMemo(() => lesson ? lesson.unitId : '', [lesson]);

  useEffect(() => {
    if (lesson) setProgress((current) => setLastLesson(current, lesson.id));
  }, [lesson]);

  if (!lesson) {
    return <main id="main" className="not-found-page page-container"><p className="eyebrow"><span className="eyebrow-dot" />LESSON NOT FOUND</p><h1>That lesson is not in this course.</h1><ButtonLink to="/course" kind="coral">{t('courseHome')}</ButtonLink></main>;
  }

  const correctCount = submitted ? lesson.exercises.filter((exercise, index) => isAnswerCorrect(exercise, answers[index])).length : 0;
  const passed = submitted && correctCount / lesson.exercises.length >= 2 / 3;
  const lessonProgress = Math.round((Number(lesson.number) / courseLessons.length) * 100);

  const submitAnswers = (event) => {
    event.preventDefault();
    const missing = lesson.exercises.some((exercise, index) => answers[index] === undefined || String(answers[index]).trim() === '');
    if (missing) {
      setFormError(lang === 'vi' ? 'Hãy trả lời tất cả câu hỏi trước khi kiểm tra.' : 'Answer every question before checking your work.');
      return;
    }
    setFormError('');
    setSubmitted(true);
    const score = lesson.exercises.filter((exercise, index) => isAnswerCorrect(exercise, answers[index])).length;
    setProgress((current) => recordStudy(current, lesson.id, score, lesson.exercises.length));
  };

  const toggleWord = (word) => setProgress((current) => toggleSavedWord(current, word.id));
  const retry = () => { setSubmitted(false); setAnswers({}); setFormError(''); };
  const scorePercent = submitted ? Math.round((correctCount / lesson.exercises.length) * 100) : 0;

  return (
    <main id="main" className="lesson-page">
      <div className="lesson-topbar page-container">
        <Link className="back-link" to="/course"><ArrowLeft size={15} />{t('courseHome')}</Link>
        <span className="lesson-topbar-unit">{t('unit')} {unit.replace('unit-', '')} · {lesson.focus}</span>
        <span className="lesson-topbar-time">{lesson.minutes} min</span>
      </div>
      <section className="lesson-hero page-container">
        <div className="lesson-hero-main">
          <p className="eyebrow"><span className="eyebrow-dot" />{t('lesson')} {lesson.number} / {courseLessons.length} · A1 BEGINNER</p>
          <h1>{lang === 'vi' ? lesson.titleVi : lesson.title}</h1>
          <p className="lesson-hero-vietnamese">{lang === 'vi' ? lesson.title : lesson.titleVi}<SoundButton text={lesson.titleVi} label={`Listen to ${lesson.titleVi}`} /></p>
          <p className="lesson-hero-objective">{lesson.objective}</p>
          <div className="lesson-hero-links"><a href="#learn"><span>01</span>Learn</a><a href="#dialogue"><span>02</span>Listen &amp; read</a><a href="#practice"><span>03</span>Practice</a></div>
        </div>
        <div className="lesson-hero-progress"><div className="lesson-progress-top"><span>COURSE PATH</span><strong>{lessonProgress}%</strong></div><ProgressBar value={lessonProgress} /><p>{progress.completed.length} of {courseLessons.length} lessons completed</p><Link to="/progress" className="text-link">Study record<ArrowRight size={15} /></Link></div>
      </section>

      <div className="lesson-body-grid page-container">
        <aside className="lesson-contents-nav" aria-label="Lesson sections"><span>IN THIS LESSON</span><a href="#learn">01 · Learn</a><a href="#vocabulary">02 · Words</a><a href="#grammar">03 · Pattern</a><a href="#dialogue">04 · Dialogue</a><a href="#practice">05 · Check</a></aside>
        <div className="lesson-content-column">
          <section className="lesson-content-section lesson-objective-card" id="learn"><p className="eyebrow"><span className="eyebrow-dot" />{t('lessonObjectives')}</p><h2>{lesson.objective}</h2><p>{lesson.intro}</p></section>

          <section className="lesson-content-section" id="vocabulary"><div className="lesson-section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />01 · {t('vocabulary')}</p><h2>Words to carry into the conversation.</h2></div><span className="lesson-section-count">{lesson.vocabulary.length} words</span></div><div className="lesson-vocabulary-list">
            {lesson.vocabulary.map((word) => {
              const isSaved = progress.savedWords.includes(word.term);
              return <article className="lesson-vocab-row" key={word.term}><div className="lesson-vocab-word"><strong>{word.term}</strong><SoundButton text={word.term} label={`Listen to ${word.term}`} /></div><div className="lesson-vocab-explanation"><span>{word.category}</span><p>{word.meaning}</p>{word.example && <small>{word.example}</small>}{word.note && <small className="vocab-note">{word.note}</small>}</div><button className={`bookmark-button ${isSaved ? 'saved' : ''}`} type="button" onClick={() => toggleWord({ ...word, id: word.term })} aria-label={isSaved ? `Remove ${word.term} from saved words` : `Save ${word.term}`} aria-pressed={isSaved}><Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} /></button></article>;
            })}
          </div><Link className="text-link lesson-dictionary-link" to="/knowledge">Browse the full course dictionary<ArrowRight size={15} /></Link></section>

          <section className="lesson-content-section grammar-lesson-card" id="grammar"><p className="eyebrow"><span className="eyebrow-dot" />02 · {t('grammar')}</p><h2>{lesson.grammar.title}</h2><p>{lesson.grammar.explanation}</p><div className="grammar-examples">{lesson.grammar.examples.map((example) => <div key={example}><Check size={15} /><span>{example}</span></div>)}</div></section>

          <section className="lesson-content-section" id="dialogue"><div className="lesson-section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />03 · {t('dialogue')}</p><h2>Listen first. Read for meaning.</h2></div><span className="dialogue-note"><Volume2 size={15} />Tap any line to hear it</span></div><div className="lesson-dialogue-list">
            {lesson.dialogue.map((line, index) => <article className="lesson-dialogue-line" key={`${line.speaker}-${index}`}><span className="dialogue-speaker">{line.speaker}</span><div className="dialogue-lines"><p className="dialogue-vietnamese">{line.vi}</p><p className="dialogue-english">{line.en}</p></div><SoundButton text={line.vi} label={`Listen: ${line.vi}`} /></article>)}
          </div><p className="lesson-note">{t('lessonNote')}</p><VoiceRecorder />
          </section>

          <section className="lesson-content-section quiz-section" id="practice"><div className="lesson-section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />04 · {t('practice')}</p><h2>What stayed with you?</h2><p>Try from memory first. You can review the lesson before submitting.</p></div><span className="quiz-number-badge"><ListChecks size={16} />{lesson.exercises.length} questions</span></div>
            <form onSubmit={submitAnswers} className="lesson-quiz-form">
              {lesson.exercises.map((exercise, index) => <ExerciseItem key={`${lesson.id}-${index}`} exercise={exercise} index={index} value={answers[index]} onChange={(value) => { setAnswers((current) => ({ ...current, [index]: value })); setFormError(''); }} submitted={submitted} correct={submitted && isAnswerCorrect(exercise, answers[index])} />)}
              {formError && <p className="form-error" role="alert">{formError}</p>}
              {!submitted ? <button className="button button-dark quiz-submit" type="submit"><span>{t('showAnswer')}</span><Check size={16} /></button> : <div className={`lesson-result ${passed ? 'result-pass' : 'result-review'}`} role="status"><div className="lesson-result-top"><span className="result-score">{scorePercent}%</span><div><strong>{passed ? t('lessonComplete') : t('lessonTryAgain')}</strong><p>{passed ? t('lessonPassed') : t('lessonTryAgain')}</p></div></div><div className="lesson-result-actions"><button className="text-link" type="button" onClick={retry}>{t('retryLesson')}<ArrowRight size={15} /></button>{passed && next ? <ButtonLink to={`/lesson/${next.id}`} kind="coral">{t('nextLesson')}</ButtonLink> : passed ? <ButtonLink to="/progress" kind="coral">{t('yourProgress')}</ButtonLink> : null}</div></div>}
            </form>
          </section>

          <div className="lesson-prev-next">{previous ? <Link to={`/lesson/${previous.id}`} className="lesson-prev-next-link"><span>PREVIOUS</span><strong>{previous.title}</strong></Link> : <span />}{next ? <Link to={`/lesson/${next.id}`} className="lesson-prev-next-link next"><span>NEXT</span><strong>{next.title}</strong></Link> : <Link to="/course" className="lesson-prev-next-link next"><span>FINISH</span><strong>Course outline</strong></Link>}</div>
        </div>
      </div>
    </main>
  );
}
