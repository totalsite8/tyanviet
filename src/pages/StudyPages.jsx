import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Bookmark, Check, ChevronDown, CircleHelp, Ear, Headphones, RotateCcw, Search, Sparkles } from 'lucide-react';
import { courseLessons, courseUnits, courseVocabulary, getLessonById } from '../courseData.js';
import { consonantSounds, soundPairs, stories, tones, vowelSounds } from '../data.js';
import { useLanguage } from '../i18n.jsx';
import { ButtonLink, PageIntro, ProgressBar, SectionHeading, SoundButton, StoryCard, VocabularyCard, vocabularyCategoryLabel } from '../components/Common.jsx';
import VoiceRecorder from '../components/VoiceRecorder.jsx';
import { clearProgress, loadProgress, progressPercent, recordStoryComplete, recordWordReview, toggleSavedWord } from '../progress.js';
import { filterDictionaryEntries, normalizeText } from '../utils.js';

const lessonCategories = [...new Set(courseVocabulary.map((item) => item.category))].sort();
const storyLevels = ['All stories', 'Beginner', 'Elementary', 'Intermediate'];

function ToneQuiz() {
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(1);
  const [choice, setChoice] = useState(null);
  const [checked, setChecked] = useState(false);
  const tone = tones[current];
  const correct = choice === current;
  const next = () => { setCurrent((index) => (index + 1) % tones.length); setChoice(null); setChecked(false); };
  return (
    <div className="tone-quiz-card">
      <div className="tone-quiz-top"><span className="quiz-label"><CircleHelp size={16} />{t('quickListening')}</span><span className="quiz-step">0{current + 1} / 06</span></div>
      <div className="tone-quiz-word"><span>{t('listenThisSound')}</span><strong>{tone.mark}</strong><SoundButton text={tone.mark} label={lang === 'ru' ? `Слушать ${tone.mark}` : `Listen to ${tone.mark}`} /></div>
      <fieldset className="tone-quiz-options"><legend>{t('whichTone')}</legend>{tones.map((option, index) => <button key={option.name} className={`tone-quiz-option ${choice === index ? 'selected' : ''} ${checked && index === current ? 'answer-correct' : ''} ${checked && choice === index && !correct ? 'answer-wrong' : ''}`} type="button" onClick={() => { setChoice(index); setChecked(false); }} aria-pressed={choice === index}><span>{option.name}</span><small>{lang === 'vi' ? option.englishVi : lang === 'ru' ? option.englishRu : option.english}</small></button>)}</fieldset>
      {checked && <p className={`answer-feedback ${correct ? 'is-correct' : 'is-wrong'}`} role="status">{correct ? t('correctToneFeedback') : t('wrongToneFeedback').replace('{tone}', tone.name).replace('{english}', lang === 'vi' ? tone.englishVi : lang === 'ru' ? tone.englishRu : tone.english)}</p>}
      <div className="tone-quiz-actions">{!checked ? <button className="button button-dark" type="button" disabled={choice === null} onClick={() => setChecked(true)}><span>{t('checkAnswer')}</span><Check size={16} /></button> : <button className="text-link" type="button" onClick={next}>{t('nextTone')}<ArrowRight size={16} /></button>}</div>
    </div>
  );
}

export function PronunciationPage() {
  const { lang, t } = useLanguage();
  return (
    <main id="main" className="interior-page pronunciation-page">
      <section className="interior-hero page-container pronunciation-intro">
        <PageIntro eyebrow={t('pronunciationEyebrow')} title={lang === 'vi' ? 'Nghe được tiếng Việt.' : lang === 'ru' ? 'Услышьте, как звучит вьетнамский.' : 'Hear what Vietnamese is doing.'} accent={lang === 'vi' ? 'Nói rõ điều bạn muốn.' : lang === 'ru' ? 'Говорите то, что хотите.' : 'Say what you mean.'} body={t('pronunciationIntro')}>
          <div className="intro-actions"><ButtonLink to="/lesson/sounds-tones" kind="coral">{t('openToneLesson')}</ButtonLink><span className="intro-note"><Headphones size={15} />{t('deviceSpeechNote')}</span></div>
        </PageIntro>
        <div className="pronunciation-mark" aria-label={t('toneTitle')}><span className="pronunciation-mark-overline">{t('tonesMarkOverline')}</span><div className="pronunciation-mark-main"><span>ma</span><span>má</span><span>mà</span></div><div className="pronunciation-mark-sub"><span>mả</span><span>mã</span><span>mạ</span></div><span className="pronunciation-mark-small">{t('toneMeaningNote')}</span><span className="pronunciation-mark-star">✳</span></div>
      </section>
      <section className="section section-paper"><div className="page-container"><SectionHeading eyebrow={t('toneEyebrow')} title={t('toneTitle')} body={t('toneBody')} /><div className="tone-grid">{tones.map((tone, index) => <article className={`tone-card tone-card-${index + 1}`} key={tone.name}><span className="tone-card-number">0{index + 1}</span><span className="tone-card-name">{tone.name}</span><strong>{tone.mark}</strong><span className="tone-card-english">{lang === 'vi' ? tone.englishVi : lang === 'ru' ? tone.englishRu : tone.english}</span><p>{lang === 'vi' ? tone.descriptionVi : lang === 'ru' ? tone.descriptionRu : tone.description}</p><SoundButton text={tone.mark} label={`Listen to tone ${tone.name}, ${tone.mark}`} /><svg viewBox="0 0 120 24" className="tone-contour" aria-hidden="true"><path d={['M4 12h112','M4 20 24 17 45 13 64 9 86 6 116 3','M4 3 28 8 52 13 78 17 116 21','M4 4 31 7 57 14 84 20 97 11 116 5','M4 18 24 15 39 19 53 10 70 13 89 8 116 3','M4 5 30 8 54 12 77 16 100 19 116 20'][index]} /></svg></article>)}</div></div></section>
      <section className="section tone-practice-section"><div className="page-container tone-practice-layout"><div className="tone-practice-copy"><p className="eyebrow"><span className="eyebrow-dot" />{t('practiceNow')}</p><h2>{t('listenMovement')}</h2><p>{t('listenMovementBody')}</p><div className="practice-note"><Ear size={18} /><span>{t('toneTip')}</span></div></div><ToneQuiz /></div><div className="page-container pronunciation-recorder"><VoiceRecorder /></div></section>
      <section className="section section-paper"><div className="page-container"><SectionHeading eyebrow={t('soundPairsEyebrow')} title={t('soundPairsTitle')} body={t('soundPairsBody')} /><div className="sound-pair-grid">{soundPairs.map((pair, index) => <div className="sound-pair-card" key={pair}><span className="sound-pair-index">{String(index + 1).padStart(2, '0')}</span><strong>{pair}</strong><SoundButton text={pair.replaceAll('/', ' ')} label={`Listen to ${pair}`} /></div>)}</div><div className="sound-pair-note"><Sparkles size={16} /><span>{t('soundPairsNote')}</span></div><div className="phoneme-inventory"><div className="inventory-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />{t('vowelsConsonants')}</p><h3>{t('syllableBuildingBlocks')}</h3></div><p>{t('tapSound')}</p></div><div className="inventory-row"><span className="inventory-label">{t('vowels')}</span><div className="sound-chip-grid">{vowelSounds.map((sound) => <span className="sound-chip" key={sound}><strong>{sound}</strong><SoundButton text={sound} label={`Listen to vowel ${sound}`} /></span>)}</div></div><div className="inventory-row"><span className="inventory-label">{t('consonants')}</span><div className="sound-chip-grid">{consonantSounds.map((sound) => <span className="sound-chip" key={sound}><strong>{sound}</strong><SoundButton text={sound} label={`Listen to consonant ${sound}`} /></span>)}</div></div></div></div></section>
    </main>
  );
}

export function DictionaryPage() {
  const { lang, t } = useLanguage();
  const [progress, setProgress] = useState(() => loadProgress());
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const searchRef = useRef(null);
  const categories = useMemo(() => ['All', ...lessonCategories], []);
  const results = useMemo(() => filterDictionaryEntries(courseVocabulary, query, category), [query, category]);

  useEffect(() => {
    const shortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchRef.current?.focus(); }
      if (event.key === 'Escape' && document.activeElement === searchRef.current) { setQuery(''); searchRef.current?.blur(); }
    };
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, []);

  const toggle = (word) => setProgress((current) => toggleSavedWord(current, word.id));
  return (
    <main id="main" className="interior-page knowledge-page"><section className="interior-hero page-container knowledge-intro"><PageIntro eyebrow={t('dictionaryHeroEyebrow')} title={t('dictionaryHeroTitle')} accent={t('dictionaryHeroAccent')} body={t('dictionaryIntro')} /><div className="knowledge-hero-card"><div className="knowledge-hero-letter">ạ</div><div className="knowledge-hero-note"><span>{t('dictionaryHeroLetter')}</span><strong>{t('dictionaryMeaningNote')}</strong><small>{t('dictionaryMeaningHint')}</small></div><span className="knowledge-hero-sparkle">✳</span></div></section>
      <section className="section section-paper dictionary-section"><div className="page-container"><div className="dictionary-toolbar"><div><p className="eyebrow"><span className="eyebrow-dot" />{t('courseVocabularyEyebrow')}</p><h2>{t('wordsFromLessons')}</h2><p>{t('dictionaryIntro')}</p></div><span className="dictionary-count"><BookOpen size={15} />{results.length} {t('wordCount')}</span></div><div className="dictionary-search-row"><label className="dictionary-search" htmlFor="dictionary-search-input"><Search size={19} /><input id="dictionary-search-input" ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder={t('searchWords')} /><kbd>{t('searchShortcut')}</kbd></label><button className="search-clear" type="button" onClick={() => { setQuery(''); setCategory('All'); }} disabled={!query && category === 'All'}>{t('clearSearch')}</button></div><div className="filter-pills" role="group" aria-label={t('filterWordsByCategory')}>{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={category === item ? 'filter-pill active' : 'filter-pill'} aria-pressed={category === item}>{item === 'All' ? t('allCategories') : vocabularyCategoryLabel(item, t)}</button>)}</div>{results.length ? <div className="dictionary-grid">{results.map((word) => <VocabularyCard key={word.id} word={word} saved={progress.savedWords.includes(word.id)} onToggleSave={toggle} />)}</div> : <div className="empty-state"><Search size={22} /><h3>{t('noWords')}</h3><p>{t('searchDictionaryHelp')}</p></div>}</div></section>
      <section className="section section-sand"><div className="page-container grammar-layout"><div className="grammar-copy"><p className="eyebrow"><span className="eyebrow-dot" />{t('grammarFromCourse')}</p><h2>{t('usefulPatterns')}</h2><p>{t('grammarCourseBody')}</p><ButtonLink to="/course" kind="text">{t('goCourseMap')}</ButtonLink></div><div className="grammar-accordion">{courseUnits.map((unit) => <details className="grammar-topic" key={unit.id}><summary><span className="grammar-topic-no">{unit.number}</span><strong>{lang === 'ru' ? unit.titleRu : lang === 'vi' ? unit.titleVi : unit.title}</strong><ChevronDown size={18} /></summary><div className="grammar-topic-content"><p>{lang === 'vi' ? unit.summaryVi : lang === 'ru' ? unit.summaryRu : unit.summary}</p><div>{unit.lessonIds.map((id) => { const lesson = getLessonById(id); return <Link key={id} to={`/lesson/${id}`}>{lesson.number}. {lang === 'ru' ? lesson.titleRu : lang === 'vi' ? lesson.titleVi : lesson.title}<ArrowRight size={14} /></Link>; })}</div></div></details>)}</div></div></section>
    </main>
  );
}

export function ReviewPage() {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(() => loadProgress());
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const deck = progress.savedWords.map((id) => courseVocabulary.find((word) => word.id === id)).filter(Boolean);
  const word = deck[index];
  const next = (knewIt) => {
    setProgress((current) => recordWordReview(current, word.id, knewIt));
    setFlipped(false);
    setIndex((current) => deck.length ? (current + 1) % deck.length : 0);
  };

  return <main id="main" className="review-page"><section className="section section-paper"><div className="page-container review-page-container"><PageIntro eyebrow={t('reviewEyebrow')} title={t('rememberLittle')} accent={t('useOften')} body={t('reviewIntro')} /><div className="review-deck-info"><span>{deck.length} {t('savedWords').toLowerCase()}</span>{deck.length > 0 && <span>{index + 1} / {deck.length}</span>}</div>{word ? <div className={`flashcard ${flipped ? 'is-flipped' : ''}`}><span className="flashcard-category">{vocabularyCategoryLabel(word.category, t)}</span>{!flipped ? <><strong>{word.term}</strong><SoundButton text={word.term} label={`Listen to ${word.term}`} /><button className="button button-dark" type="button" onClick={() => setFlipped(true)}>{t('flipCard')}<ArrowRight size={15} /></button></> : <><strong className="flashcard-meaning">{word.meaning}</strong><p>{word.example}</p><div className="flashcard-actions"><button className="button button-light" type="button" onClick={() => next(false)}>{t('stillLearning')}</button><button className="button button-dark" type="button" onClick={() => next(true)}>{t('gotIt')}<Check size={15} /></button></div></>}</div> : <div className="empty-state"><Bookmark size={23} /><h3>{t('emptyReview')}</h3><Link className="button button-coral" to="/knowledge">{t('openDictionary')}<ArrowRight size={15} /></Link></div>}<div className="review-deck-footer"><Link className="back-link" to="/knowledge"><ArrowLeft size={15} />{t('backDictionary')}</Link><Link className="text-link" to="/progress">{t('reviewHistory')}<ArrowRight size={15} /></Link></div></div></section></main>;
}

export function StoriesPage() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('All stories');
  const [query, setQuery] = useState('');
  const [progress] = useState(() => loadProgress());
  const filtered = useMemo(() => stories.filter((story) => (filter === 'All stories' || story.level === filter) && normalizeText(`${story.title} ${story.titleVi} ${story.titleRu} ${story.summary} ${story.summaryRu} ${story.summaryVi} ${story.tags.join(' ')}`).includes(normalizeText(query))), [filter, query]);
  return <main id="main" className="interior-page stories-page"><section className="interior-hero page-container lessons-intro"><PageIntro eyebrow={t('storiesHeroEyebrow')} title={t('storiesHeroTitle')} accent={t('storiesHeroAccent')} body={t('storiesIntro')}><div className="intro-actions"><ButtonLink to="/course" kind="coral">{t('backToA1Course')}</ButtonLink><span className="intro-note"><BookOpen size={15} />{stories.length} {t('storyCountNote')}</span></div></PageIntro><div className="lesson-intro-art"><div className="lesson-intro-card"><span>“</span><p>Minh gọi một cốc<br /><strong>cà phê đá.</strong></p><small>READ · LISTEN · RESPOND</small></div><span className="lesson-art-star">✳</span><span className="lesson-art-ring" /></div></section><section className="section section-paper"><div className="page-container"><div className="lesson-library-head"><div><p className="eyebrow"><span className="eyebrow-dot" />{t('storyLibraryEyebrow')}</p><h2>{t('chooseStory')}</h2><p>{t('storyInstruction')}</p></div><span className="progress-pill"><span className="progress-pill-dot" />{t('storiesDoneCount').replace('{done}', String(progress.completedStories.length)).replace('{total}', String(stories.length))}</span></div><div className="lesson-filters-row"><div className="filter-pills" role="group" aria-label={t('filterByLevel')}>{storyLevels.map((item) => <button key={item} type="button" className={filter === item ? 'filter-pill active' : 'filter-pill'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item === 'All stories' ? t('allStories') : t(({ Beginner: 'levelBeginner', Elementary: 'levelElementary', Intermediate: 'levelIntermediate' })[item] || 'level')}</button>)}</div><label className="lesson-search"><Search size={16} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('searchStories')} aria-label={t('searchStories')} /></label></div>{filtered.length ? <div className="story-grid">{filtered.map((story) => <StoryCard key={story.id} story={story} completed={progress.completedStories.includes(story.id)} />)}</div> : <div className="empty-state"><Search size={22} /><h3>{t('noStories')}</h3><p>{t('noStoriesHint')}</p></div>}</div></section></main>;
}

export function StoryPage() {
  const { storyId } = useParams();
  const { lang, t } = useLanguage();
  const story = stories.find((item) => item.id === storyId);
  const [progress, setProgress] = useState(() => loadProgress());
  const [choice, setChoice] = useState(null);
  const [checked, setChecked] = useState(false);
  if (!story) return <main id="main" className="not-found-page page-container"><h1>{t('storyNotFound')}</h1><ButtonLink to="/stories" kind="coral">{t('backStoryLibrary')}</ButtonLink></main>;
  const correct = choice !== null && Number(choice) === story.answer;
  const speakAll = () => {
    if (!window.speechSynthesis || typeof window.SpeechSynthesisUtterance !== 'function') return;
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(story.story.map((line) => line.vi).join('. '));
    utterance.lang = 'vi-VN';
    window.speechSynthesis.speak(utterance);
  };
  const check = () => {
    setChecked(true);
    if (correct) setProgress((current) => recordStoryComplete(current, story.id));
  };
  return <main id="main" className="story-detail-page"><div className="page-container story-detail-container"><Link className="back-link" to="/stories"><ArrowLeft size={15} />{t('backStoryLibrary')}</Link><header className="story-detail-header"><p className="eyebrow"><span className="eyebrow-dot" />{t(({ Beginner: 'levelBeginner', Elementary: 'levelElementary', Intermediate: 'levelIntermediate' })[story.level] || 'level')} · {story.length.replace('min', t('minuteShort'))} · {story.tags.join(' · ')}</p><h1>{lang === 'vi' ? story.titleVi : lang === 'ru' ? story.titleRu : story.title}</h1><p>{lang === 'vi' ? story.title : story.titleVi}<SoundButton text={story.titleVi} label={lang === 'ru' ? `Слушать: ${story.titleVi}` : lang === 'vi' ? `Nghe: ${story.titleVi}` : `Listen: ${story.titleVi}`} /></p></header><section className="story-reading-card"><div className="story-reading-top"><span>{t('readTheStory')}</span><button className="text-link" type="button" onClick={speakAll} disabled={!('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window)}><Headphones size={15} />{t('listenAll')}</button></div>{story.story.map((line, index) => <article className="story-reading-line" key={index}><span>{String(index + 1).padStart(2, '0')}</span><div><p>{line.vi}<SoundButton text={line.vi} label={lang === 'ru' ? `Слушать: ${line.vi}` : `Listen: ${line.vi}`} /></p><small>{lang === 'ru' ? line.ru : line.en}</small></div></article>)}<div className="story-vocabulary-row"><strong>{t('wordsToNotice')}</strong>{(lang === 'ru' ? story.vocabularyRu : story.vocabulary).map((word) => <span key={word}>{word}</span>)}</div></section><section className="story-comprehension"><p className="eyebrow"><span className="eyebrow-dot" />{t('storyQuestion')}</p><h2>{lang === 'ru' ? story.questionRu : story.question}</h2><div className="answer-options">{(lang === 'ru' ? story.optionsRu : story.options).map((option, index) => <button key={option} type="button" className={`answer-option ${choice !== null && Number(choice) === index ? 'selected' : ''} ${checked && index === story.answer ? 'answer-correct' : ''} ${checked && choice !== null && Number(choice) === index && !correct ? 'answer-wrong' : ''}`} onClick={() => { setChoice(index); setChecked(false); }} aria-pressed={choice !== null && Number(choice) === index}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>{checked && <p className={`answer-feedback ${correct ? 'is-correct' : 'is-wrong'}`} role="status">{correct ? t('answerCorrect') : t('answerTryAgain')}</p>}<button className="button button-dark" type="button" disabled={choice === null} onClick={check}>{checked && correct ? <><span>{t('storyDone')}</span><Check size={16} /></> : <><span>{t('showAnswer')}</span><Check size={16} /></>}</button></section><div className="story-detail-next"><Link className="text-link" to="/knowledge">{t('lookUpWord')}<ArrowRight size={15} /></Link><Link className="text-link" to="/stories">{t('chooseAnotherStory')}<ArrowRight size={15} /></Link></div></div></main>;
}

export function ProgressPage() {
  const { lang, t } = useLanguage();
  const [progress, setProgress] = useState(() => loadProgress());
  const percent = progressPercent(progress, courseLessons.length);
  const reviewCount = Object.values(progress.reviewStats).reduce((sum, item) => sum + (item.seen || 0), 0);
  const reset = () => {
    if (window.confirm(t('resetConfirm'))) setProgress(clearProgress());
  };
  const printRecord = () => window.print();
  return <main id="main" className="progress-page"><section className="section section-paper"><div className="page-container progress-page-container"><PageIntro eyebrow={t('progressPageEyebrow')} title={t('progressPageTitle')} accent={t('progressPageAccent')} body={t('progressIntro')} /><div className="progress-overview-card"><div className="progress-overview-main"><span className="eyebrow"><span className="eyebrow-dot" />{t('a1BeginnerCourse')}</span><strong className="progress-overview-percent">{percent}%</strong><h2>{t('progressCourseName')}</h2><p>{progress.completed.length} / {courseLessons.length} {t('lessonsComplete')}</p><ProgressBar value={percent} /><div className="progress-overview-numbers"><span><strong>{progress.studyDays.length}</strong><small>{t('studyDays')}</small></span><span><strong>{Object.values(progress.attempts).reduce((sum, count) => sum + count, 0)}</strong><small>{t('attempts')}</small></span><span><strong>{progress.savedWords.length}</strong><small>{t('savedWords')}</small></span><span><strong>{reviewCount}</strong><small>{t('wordReviews')}</small></span><span><strong>{progress.completedStories.length}</strong><small>{t('storiesLabel')}</small></span></div></div><div className="progress-overview-side"><h3>{t('keepLearningVisible')}</h3><p>{t('progressThreshold')}</p><Link className="button button-light" to="/course">{t('openCourseMap')}<ArrowRight size={15} /></Link>{progress.completed.length === courseLessons.length && <button className="button button-dark" type="button" onClick={printRecord}>{t('printCertificate')}</button>}</div></div><div className="progress-history"><div className="progress-history-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />{t('lessonHistory')}</p><h2>{t('everyStepCounts')}</h2></div><button className="text-link reset-progress" type="button" onClick={reset}>{t('resetProgress')}<RotateCcw size={14} /></button></div>{courseUnits.map((unit) => <section className="progress-history-unit" key={unit.id}><h3>{unit.number} · {lang === 'ru' ? unit.titleRu : lang === 'vi' ? unit.titleVi : unit.title}</h3>{unit.lessonIds.map((id) => { const lesson = getLessonById(id); const done = progress.completed.includes(id); return <Link className="progress-history-row" key={id} to={`/lesson/${id}`}><span className={`history-status ${done ? 'is-done' : ''}`}>{done ? <Check size={13} /> : lesson.number}</span><strong>{lang === 'ru' ? lesson.titleRu : lang === 'vi' ? lesson.titleVi : lesson.title}</strong><span>{progress.attempts[id] ? `${t('bestScore')}: ${progress.bestScores[id]}% · ${progress.attempts[id]} ${t('attempts').toLowerCase()}` : t('noAttempts')}</span><ArrowRight size={15} /></Link>; })}</section>)}</div><div className="local-data-notice"><Bookmark size={16} /><p><strong>{t('localByDesign')}</strong> {t('noAccountNeeded')}</p></div></div></section></main>;
}
