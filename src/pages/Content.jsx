import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Headphones, ShieldCheck, Sparkles } from 'lucide-react';
import { articles } from '../data.js';
import { useLanguage } from '../i18n.jsx';
import { ArticleCard, ButtonLink, PageIntro, SectionHeading } from '../components/Common.jsx';

export function JournalPage() {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All notes');
  const categories = ['All notes', ...new Set(articles.map((article) => article.category))];
  const filtered = useMemo(() => articles.filter((article) => (category === 'All notes' || article.category === category) && `${article.title} ${article.titleVi} ${article.titleRu} ${article.summary} ${article.summaryVi} ${article.summaryRu}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <main id="main" className="interior-page journal-page"><section className="interior-hero page-container journal-intro"><PageIntro eyebrow={t('notesEyebrow')} title={t('notesTitle')} accent={t('notesAccent')} body={t('journalIntro')} /><div className="journal-cover-art"><span className="journal-cover-small">LANGUAGE NOTES · 01</span><span className="journal-cover-char">ạ</span><span className="journal-cover-caption">WORDS IN<br />REAL CONTEXT</span><span className="journal-cover-spark">✳</span></div></section><section className="section section-paper journal-library-section"><div className="page-container"><div className="journal-toolbar"><div className="filter-pills" role="group" aria-label={t('filterStudyNotes')}>{categories.map((item) => { const matchingArticle = articles.find((article) => article.category === item);
          const label = item === 'All notes' ? t('allNotes') : lang === 'vi' ? matchingArticle?.categoryVi || item : lang === 'ru' ? matchingArticle?.categoryRu || item : item; return <button key={item} type="button" className={category === item ? 'filter-pill active' : 'filter-pill'} onClick={() => setCategory(item)} aria-pressed={category === item}>{label}</button>; })}</div><label className="lesson-search"><BookOpen size={16} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('notesSearch')} aria-label={t('notesSearch')} /></label></div>{filtered.length ? <div className="article-grid journal-article-grid">{filtered.map((article) => <ArticleCard key={article.slug} article={article} />)}</div> : <div className="empty-state"><BookOpen size={22} /><h3>{t('noResult')}</h3><p>{t('tryOtherNotes')}</p></div>}</div></section></main>;
}

export function ArticlePage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <NotFoundPage />;
  const title = lang === 'vi' ? article.titleVi : lang === 'ru' ? article.titleRu : article.title;
  const summary = lang === 'vi' ? article.summaryVi : lang === 'ru' ? article.summaryRu : article.summary;
  const paragraphs = lang === 'vi' ? article.paragraphsVi : lang === 'ru' ? article.paragraphsRu : article.paragraphs;
  const category = lang === 'vi' ? article.categoryVi : lang === 'ru' ? article.categoryRu : article.category;
  return <main id="main" className="article-detail-page"><div className="page-container article-detail-container"><Link className="back-link" to="/journal"><ArrowLeft size={16} />{t('backToNotes')}</Link><header className="article-detail-header"><p className="eyebrow"><span className="eyebrow-dot" />{category}</p><h1>{title}</h1><p className="article-detail-summary">{summary}</p><div className="article-detail-meta"><span>{article.read.replace(' min read', ` ${t('minuteShort')}`)}</span><span>{t('languageNoteTag')}</span></div></header><div className="article-detail-art"><span>{article.slug === 'a-polite-particle' ? 'ạ' : article.titleVi.charAt(0)}</span><i>✳</i></div><article className="article-body">{paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{article.slug === 'a-polite-particle' && <div className="article-examples"><h2>{t('tryExamples')}</h2><p><strong>Vâng ạ.</strong><span>{lang === 'ru' ? 'Да, конечно.' : lang === 'vi' ? 'Dạ, vâng ạ. (cách đáp lễ phép)' : 'Yes, certainly.'}</span></p><p><strong>Con chào mẹ ạ.</strong><span>{lang === 'ru' ? 'Здравствуйте, мама. (почтительно и тепло)' : lang === 'vi' ? 'Lời chào ấm áp và lễ phép của con dành cho mẹ.' : 'Hi, Mom. (respectful / warm)'}</span></p><p><strong>Con mới về nhà ạ.</strong><span>{lang === 'ru' ? 'Я только что вернулся домой.' : lang === 'vi' ? 'Con mới về nhà ạ. (nói lịch sự)' : 'I just got home.'}</span></p></div>}<div className="article-source-note"><ShieldCheck size={17} /><span>{t('languageNoteDisclaimer')}</span></div></article><div className="article-bottom-nav"><Link className="back-link" to="/journal"><ArrowLeft size={16} />{t('allStudyNotes')}</Link><ButtonLink to="/course" kind="coral">{t('practiseInCourse')}</ButtonLink></div></div></main>;
}

export function AboutPage() {
  const { t } = useLanguage();
  return <main id="main" className="interior-page about-page"><section className="interior-hero page-container"><PageIntro eyebrow={t('aboutEyebrow')} title={t('aboutHeroTitle')} accent={t('aboutAccent')} body={t('aboutDescription')} /><div className="about-method-stamp"><span>TPR</span><i>✳</i><span>TPRS</span><strong>TIẾNG VIỆT</strong><small>{t('aboutStampCaption')}</small></div></section><section className="section section-paper"><div className="page-container"><SectionHeading eyebrow={t('teachingApproach')} title={t('teachingTitle')} body={t('originalApproachBody')} /><div className="about-method-grid"><article><span>01</span><h3>{t('methodHearTitle')}</h3><p>{t('methodHearBody')}</p></article><article><span>02</span><h3>{t('methodRespondTitle')}</h3><p>{t('methodRespondBody')}</p></article><article><span>03</span><h3>{t('methodStoriesTitle')}</h3><p>{t('methodStoriesBody')}</p></article><article><span>04</span><h3>{t('methodNoticeTitle')}</h3><p>{t('methodNoticeBody')}</p></article></div></div></section><section className="section about-course-section"><div className="page-container about-course-layout"><div><p className="eyebrow"><span className="eyebrow-dot" />{t('aboutCourseNote')}</p><h2>{t('noPaywallTitle')}</h2><p>{t('noPaywallBody')}</p></div><ButtonLink to="/course" kind="coral">{t('openTheCourse')}</ButtonLink></div></section></main>;
}

export function HelpPage() {
  const { t } = useLanguage();
  const questions = [['helpQ1', 'helpA1'], ['helpQ2', 'helpA2'], ['helpQ3', 'helpA3'], ['helpQ4', 'helpA4'], ['helpQ5', 'helpA5']];
  const [open, setOpen] = useState(0);
  return <main id="main" className="interior-page help-page"><section className="interior-hero page-container"><PageIntro eyebrow={t('supportEyebrow')} title={t('helpTitle')} accent={t('helpAccent')} body={t('helpBody')} /><div className="help-stamp"><Headphones size={28} /><span>{t('listenAgain')}</span><i>✳</i></div></section><section className="section section-paper"><div className="page-container help-layout"><div><p className="eyebrow"><span className="eyebrow-dot" />{t('commonQuestions')}</p><h2>{t('helpUnstuck')}</h2><p className="help-audio-note"><Headphones size={17} />{t('helpAudioNote')}</p><ButtonLink to="/course" kind="text">{t('returnToCourse')}</ButtonLink></div><div className="grammar-accordion">{questions.map(([q, a], index) => <article className={`grammar-topic ${open === index ? 'open' : ''}`} key={q}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span className="grammar-topic-no">0{index + 1}</span><strong>{t(q)}</strong><span className="faq-toggle">{open === index ? '−' : '+'}</span></button>{open === index && <p>{t(a)}</p>}</article>)}</div></div></section></main>;
}

export function PrivacyPage() {
  const { t } = useLanguage();
  return <main id="main" className="policy-page page-container"><div className="policy-icon"><ShieldCheck size={21} /></div><p className="eyebrow"><span className="eyebrow-dot" />{t('localFirstEyebrow')}</p><h1>{t('privacyTitle')}</h1><p className="policy-lede">{t('privacyLead')}</p><div className="policy-content"><h2>{t('whatStored')}</h2><p>{t('privacyStorageBody')}</p><h2>{t('enquiryForms')}</h2><p>{t('privacyFormsBody')}</p><h2>{t('audioMicrophone')}</h2><p>{t('privacyAudioBody')}</p><h2>{t('deletingData')}</h2><p>{t('privacyDeleteBody')}</p><div className="policy-source-note"><Sparkles size={17} /><p>{t('canvaNoticePolicy')}</p></div></div><Link className="back-link" to="/course"><ArrowLeft size={16} />{t('backToCourse')}</Link></main>;
}

export function TermsPage() {
  const { t } = useLanguage();
  return <main id="main" className="policy-page page-container"><div className="policy-icon"><BookOpen size={21} /></div><p className="eyebrow"><span className="eyebrow-dot" />{t('learningGuidance')}</p><h1>{t('termsTitle')}</h1><p className="policy-lede">{t('termsLead')}</p><div className="policy-content"><h2>{t('educationalMaterial')}</h2><p>{t('termsEducationalBody')}</p><h2>{t('progressAndAccounts')}</h2><p>{t('termsProgressBody')}</p><h2>{t('audioAndRecordings')}</h2><p>{t('termsAudioBody')}</p><h2>{t('courseScope')}</h2><p>{t('termsScopeBody')}</p><div className="policy-source-note"><ShieldCheck size={17} /><p>{t('rightsNotice')}</p></div></div><Link className="back-link" to="/course"><ArrowLeft size={16} />{t('backToCourse')}</Link></main>;
}

export function NotFoundPage() {
  const { t } = useLanguage();
  return <main id="main" className="not-found-page page-container"><span className="not-found-glyph" aria-hidden="true">ơ</span><p className="eyebrow"><span className="eyebrow-dot" />{t('notFoundEyebrow')}</p><h1>{t('pageNotFound')}</h1><p>{t('returnKeepLearning')}</p><ButtonLink to="/" kind="coral">{t('backHome')}</ButtonLink></main>;
}
