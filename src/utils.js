export function normalizeText(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLocaleLowerCase('vi');
}

export function normalizeAnswer(value = '') {
  return String(value)
    .normalize('NFC')
    .toLocaleLowerCase('vi')
    .trim()
    .replace(/[.,!?;:]+$/g, '')
    .replace(/\s+/g, ' ');
}

export function filterDictionaryEntries(entries, query = '', category = 'All') {
  const normalizedQuery = normalizeText(query.trim());
  return entries.filter((entry) => {
    const matchesCategory = category === 'All' || entry.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    const searchable = normalizeText([
      entry.term,
      entry.meaning,
      entry.example,
      entry.category,
      entry.note,
      entry.lessonTitle,
    ].filter(Boolean).join(' '));
    return searchable.includes(normalizedQuery);
  });
}
