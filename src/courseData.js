export const courseUnits = [
  { id: 'unit-1', number: '01', title: 'First conversations', titleVi: 'Những cuộc trò chuyện đầu tiên', titleRu: 'Первые разговоры', summary: 'Sounds, greetings and the people words you need first.', summaryVi: 'Âm thanh, lời chào và những từ xưng hô cần thiết đầu tiên.', summaryRu: 'Звуки, приветствия и первые слова для общения.', lessonIds: ['sounds-tones', 'hello-names', 'pronouns'] },
  { id: 'unit-2', number: '02', title: 'At a café', titleVi: 'Ở quán cà phê', titleRu: 'В кафе', summary: 'Numbers, simple requests and useful questions.', summaryVi: 'Số đếm, cách gọi món đơn giản và những câu hỏi hữu ích.', summaryRu: 'Числа, простые просьбы и полезные вопросы.', lessonIds: ['numbers-age', 'order-coffee', 'yes-no-questions'] },
  { id: 'unit-3', number: '03', title: 'Everyday life', titleVi: 'Cuộc sống hằng ngày', titleRu: 'Повседневная жизнь', summary: 'Talk about your family, routine and what is happening now.', summaryVi: 'Nói về gia đình, thói quen và những việc đang diễn ra.', summaryRu: 'Разговоры о семье, распорядке дня и текущих делах.', lessonIds: ['daily-actions', 'family-people', 'time-routine'] },
  { id: 'unit-4', number: '04', title: 'Around town & review', titleVi: 'Trong thành phố & ôn tập', titleRu: 'По городу и повторение', summary: 'Ask for directions, talk about time and bring the course together.', summaryVi: 'Hỏi đường, nói về thời gian và kết nối kiến thức đã học.', summaryRu: 'Как спросить дорогу, назвать время и повторить пройденное.', lessonIds: ['find-a-place', 'past-and-plans', 'final-conversation'] },
];

export const courseLessons = [
  {
    id: 'sounds-tones', number: '01', unitId: 'unit-1', title: 'Sounds and six tones', titleVi: 'Âm và sáu thanh điệu', titleRu: 'Звуки и шесть тонов', minutes: 18,
    objective: 'Notice how Vietnamese tones change meaning and begin to hear the sounds in a syllable.', objectiveRu: 'Замечать, как вьетнамские тоны меняют значение, и учиться различать звуки слога.', objectiveVi: 'Nhận biết cách thanh điệu làm thay đổi ý nghĩa và bắt đầu nghe các âm trong một âm tiết.',
    focus: 'Listening · pronunciation', focusRu: 'Аудирование · произношение', focusVi: 'Nghe · phát âm',
    intro: 'Vietnamese is a tonal language. A syllable is built from an initial consonant, a vowel or vowel combination, and a tone. Start by listening; you do not need a perfect accent before you can communicate.', introRu: 'Вьетнамский язык тональный. Слог состоит из начального согласного, гласного или их сочетания и тона. Начните со слушания: чтобы общаться, не обязательно сразу говорить с идеальным акцентом.', introVi: 'Tiếng Việt là ngôn ngữ có thanh điệu. Một âm tiết gồm phụ âm đầu, nguyên âm hoặc tổ hợp nguyên âm và thanh điệu. Hãy bắt đầu bằng việc lắng nghe; bạn không cần có giọng hoàn hảo mới có thể giao tiếp.',
    vocabulary: [
      { term: 'ma', category: 'Tone example', meaning: 'ghost / spirit (with the level tone)', example: 'ma', note: 'A tone pair: the letters stay the same while the contour changes.' },
      { term: 'má', category: 'Tone example', meaning: 'cheek; also “mother” in some southern family speech', example: 'má', note: 'The sắc tone rises. Meaning depends on context and region.' },
      { term: 'mà', category: 'Tone example', meaning: 'but; that / which (depending on grammar)', example: 'Tôi biết mà. — I know.', note: 'The huyền tone falls.' },
      { term: 'mả', category: 'Tone example', meaning: 'grave / tomb', example: 'ngôi mả — a grave', note: 'The hỏi tone dips and rises in many northern accents.' },
      { term: 'mã', category: 'Tone example', meaning: 'code; horse (in compounds)', example: 'mã số — code / number', note: 'The ngã tone is often creaky or broken in northern speech.' },
      { term: 'mạ', category: 'Tone example', meaning: 'rice seedling', example: 'cây mạ — a rice seedling', note: 'The nặng tone is short and low.' },
    ],
    grammar: { title: 'A syllable has a tone', explanation: 'Tone belongs to the spoken syllable, not just the written accent mark. Northern and southern voices realize some tones differently, so practise one target accent consistently and listen for meaning.', examples: ['ma → má → mà → mả → mã → mạ', 'Say each one briefly, then place it in a familiar phrase.'] }, grammarVi: { title: 'Một âm tiết có thanh điệu', explanation: 'Thanh điệu thuộc về âm tiết được nói, không chỉ là dấu viết. Một số thanh điệu được thể hiện khác nhau ở giọng miền Bắc và miền Nam; hãy luyện nhất quán theo một giọng và chú ý đến ý nghĩa.', examples: ['ma → má → mà → mả → mã → mạ', 'Đọc từng âm ngắn, rồi đặt vào một cụm từ quen thuộc.'] }, grammarRu: { title: 'В слоге есть тон', explanation: 'Тон относится к произносимому слогу, а не только к письменному знаку. В северной и южной речи некоторые тоны звучат по-разному, поэтому придерживайтесь выбранного варианта и прислушивайтесь к значению.', examples: ['ma → má → mà → mả → mã → mạ', 'Произнесите каждый слог коротко, затем поместите его в знакомую фразу.'] },
    dialogue: [
      { speaker: 'Tutor', vi: 'Nghe nhé: ma, má, mà, mả, mã, mạ.', en: 'Listen: ma, má, mà, mả, mã, mạ.' },
      { speaker: 'Learner', vi: 'Em nghe thấy sáu thanh điệu.', en: 'I can hear six tones.' },
      { speaker: 'Tutor', vi: 'Đúng rồi. Bây giờ mình nghe lại thật chậm.', en: 'That’s right. Now let’s listen again slowly.' },
    ],
    exercises: [
      { type: 'choice', prompt: 'Which spelling carries the rising sắc tone?', options: ['ma', 'má', 'mà', 'mạ'], answer: 1, explanation: 'The acute accent (´) marks sắc: má.' },
      { type: 'choice', prompt: 'What is the best first strategy for learning tones?', options: ['Memorize a long list of rules', 'Listen for the contour and meaning in context', 'Ignore tones until advanced level'], answer: 1, explanation: 'Listening to meaningful contrasts builds a useful foundation.' },
      { type: 'text', prompt: 'Type the word for “cheek” from this tone set.', accepted: ['má'], placeholder: 'Type the Vietnamese word', explanation: 'The example is má. Remember the rising tone mark.' },
    ],
  },
  {
    id: 'hello-names', number: '02', unitId: 'unit-1', title: 'Hello and names', titleVi: 'Chào hỏi và tên', titleRu: 'Приветствия и имена', minutes: 16,
    objective: 'Greet someone and introduce yourself in a short first conversation.', objectiveRu: 'Поздороваться и представиться в коротком первом разговоре.', objectiveVi: 'Chào hỏi và tự giới thiệu trong một cuộc trò chuyện ngắn đầu tiên.', focus: 'Greetings · word order', focusRu: 'Приветствия · порядок слов', focusVi: 'Chào hỏi · trật tự từ',
    intro: 'Xin chào is a clear, widely understood greeting. Vietnamese often leaves out words that English requires, so learn each phrase as a useful pattern rather than translating word by word.', introRu: 'Xin chào — понятное и широко употребительное приветствие. Во вьетнамском часто опускают слова, необходимые в английском, поэтому полезно запоминать целые речевые модели, а не переводить фразу слово за словом.', introVi: 'Xin chào là lời chào rõ ràng và được hiểu rộng rãi. Tiếng Việt thường lược bỏ những từ cần thiết trong tiếng Anh, vì vậy hãy học cả cụm như một mẫu hữu ích thay vì dịch từng từ.',
    vocabulary: [
      { term: 'xin chào', category: 'Greetings', meaning: 'hello', example: 'Xin chào! — Hello!', note: 'A polite, general greeting.' },
      { term: 'tên', category: 'People', meaning: 'name', example: 'Tên tôi là An. — My name is An.' },
      { term: 'là', category: 'Grammar', meaning: 'to be / is (before a noun or identity)', example: 'Tôi là Mai. — I am Mai.' },
      { term: 'rất vui', category: 'Greetings', meaning: 'very pleased / glad', example: 'Rất vui được gặp bạn. — Nice to meet you.' },
      { term: 'gặp', category: 'Verbs', meaning: 'to meet / see', example: 'Tôi gặp bạn. — I meet you.' },
    ],
    grammar: { title: 'Name pattern: Tôi tên là…', explanation: 'A natural way to give your name is “Tôi tên là + name.” You can also say “Tên tôi là + name.” “Tôi là + name” is a shorter introduction.', examples: ['Tôi tên là An. — My name is An.', 'Tên tôi là Mai. — My name is Mai.', 'Bạn tên là gì? — What is your name?'] }, grammarVi: { title: 'Mẫu giới thiệu tên: Tôi tên là…', explanation: 'Cách tự nhiên để giới thiệu tên là “Tôi tên là + tên”. Bạn cũng có thể nói “Tên tôi là + tên”. “Tôi là + tên” là cách giới thiệu ngắn hơn.', examples: ['Tôi tên là An. — Tôi tên là An.', 'Tên tôi là Mai. — Tên tôi là Mai.', 'Bạn tên là gì? — Bạn tên là gì?'] }, grammarRu: { title: 'Модель имени: Tôi tên là…', explanation: 'Естественный способ назвать себя — «Tôi tên là + имя». Можно также сказать «Tên tôi là + имя». Вариант «Tôi là + имя» короче.', examples: ['Tôi tên là An. — Меня зовут Ан.', 'Tên tôi là Mai. — Меня зовут Май.', 'Bạn tên là gì? — Как вас зовут?'] },
    dialogue: [
      { speaker: 'An', vi: 'Xin chào! Tôi tên là An. Bạn tên là gì?', en: 'Hello! My name is An. What is your name?' },
      { speaker: 'Mai', vi: 'Chào An. Tôi tên là Mai.', en: 'Hi, An. My name is Mai.' },
      { speaker: 'An', vi: 'Rất vui được gặp bạn.', en: 'Nice to meet you.' },
      { speaker: 'Mai', vi: 'Tôi cũng rất vui.', en: 'I’m pleased to meet you too.' },
    ],
    exercises: [
      { type: 'choice', prompt: 'Choose the natural translation of “My name is An.”', options: ['Bạn tên là An.', 'Tôi tên là An.', 'Tên An bạn.'], answer: 1, explanation: 'Tôi tên là An means “My name is An.”' },
      { type: 'text', prompt: 'Write “Hello” in Vietnamese.', accepted: ['xin chào', 'chào'], placeholder: 'Vietnamese greeting', explanation: 'Xin chào is a polite general greeting; chào is also common in conversation.' },
      { type: 'choice', prompt: 'What does “Bạn tên là gì?” ask?', options: ['Where do you live?', 'What is your name?', 'How old are you?'], answer: 1, explanation: 'Tên is name and gì is what.' },
    ],
  },
  {
    id: 'pronouns', number: '03', unitId: 'unit-1', title: 'People words and pronouns', titleVi: 'Đại từ và cách xưng hô', titleRu: 'Местоимения и обращение', minutes: 20,
    objective: 'Use a safe first-person form and understand why Vietnamese forms of address change with relationships.', objectiveRu: 'Использовать нейтральную форму первого лица и понимать, почему обращение зависит от отношений между людьми.', objectiveVi: 'Dùng cách xưng tôi phù hợp và hiểu vì sao cách xưng hô thay đổi theo mối quan hệ.', focus: 'Pronouns · social context', focusRu: 'Местоимения · социальный контекст', focusVi: 'Đại từ · ngữ cảnh xã hội',
    intro: 'Vietnamese pronouns often encode age, closeness and social relationship. Tôi is a useful neutral “I” for introductions. In closer conversation, speakers may use kinship words such as anh, chị or em. Listen and ask politely which form feels natural.', introRu: 'Вьетнамские местоимения часто отражают возраст, близость и социальные отношения. Tôi — относительно нейтральное «я» для знакомства. В близком общении используют слова родства, например anh, chị или em. Слушайте собеседника и вежливо уточняйте, какая форма будет естественной.', introVi: 'Đại từ tiếng Việt thường thể hiện tuổi tác, sự thân thiết và mối quan hệ xã hội. Tôi là cách xưng “tôi” tương đối trung tính khi giới thiệu. Trong giao tiếp thân mật, người nói có thể dùng các từ chỉ quan hệ gia đình như anh, chị hoặc em. Hãy lắng nghe và lịch sự hỏi cách xưng hô phù hợp.',
    vocabulary: [
      { term: 'tôi', category: 'Pronouns', meaning: 'I / me; a relatively neutral form', example: 'Tôi là Alex. — I am Alex.' },
      { term: 'bạn', category: 'Pronouns', meaning: 'you; friend (depending on context)', example: 'Bạn khỏe không? — How are you?' },
      { term: 'anh', category: 'Pronouns', meaning: 'older brother; commonly used for a man slightly older than the speaker', example: 'Anh tên là gì? — What is your name?' },
      { term: 'chị', category: 'Pronouns', meaning: 'older sister; commonly used for a woman slightly older than the speaker', example: 'Chị sống ở đâu? — Where do you live?' },
      { term: 'em', category: 'Pronouns', meaning: 'younger sibling; also a younger person or a warm first-person form', example: 'Em là Linh. — I’m Linh. (context-dependent)' },
    ],
    grammar: { title: 'Pronouns depend on people', explanation: 'There is no single pronoun choice that fits every conversation. Start with tôi / bạn when appropriate, notice how your conversation partner addresses you, and follow their preference. Age, region and relationship all matter.', examples: ['Tôi tên là Linh. — I’m Linh.', 'Bạn tên là gì? — What is your name?', 'Em tên là Linh. — I’m Linh. (when the relationship supports em)'] }, grammarVi: { title: 'Đại từ phụ thuộc vào người giao tiếp', explanation: 'Không có một cách xưng hô duy nhất phù hợp với mọi cuộc trò chuyện. Khi thích hợp, hãy bắt đầu với tôi / bạn, chú ý cách người đối thoại xưng hô và làm theo lựa chọn của họ. Tuổi tác, vùng miền và mối quan hệ đều quan trọng.', examples: ['Tôi tên là Linh. — Tôi tên là Linh.', 'Bạn tên là gì? — Bạn tên là gì?', 'Em tên là Linh. — Em tên là Linh. (tùy mối quan hệ)'] }, grammarRu: { title: 'Местоимения зависят от собеседников', explanation: 'Одно местоимение не подходит для всех разговоров. В подходящей ситуации начните с tôi / bạn, обратите внимание, как собеседник обращается к вам, и следуйте его предпочтению. Важны возраст, регион и отношения.', examples: ['Tôi tên là Linh. — Меня зовут Линь.', 'Bạn tên là gì? — Как вас зовут?', 'Em tên là Linh. — Меня зовут Линь. (если отношения позволяют em)'] },
    dialogue: [
      { speaker: 'Linh', vi: 'Chào anh. Em tên là Linh.', en: 'Hello. My name is Linh. (Linh uses em for herself and anh for the other person.)' },
      { speaker: 'Nam', vi: 'Chào em, anh tên là Nam.', en: 'Hello. My name is Nam. (Nam uses anh for himself and em for Linh.)' },
      { speaker: 'Linh', vi: 'Rất vui được gặp anh.', en: 'Nice to meet you.' },
    ],
    exercises: [
      { type: 'choice', prompt: 'Which is a useful neutral first-person form for a new introduction?', options: ['tôi', 'bạn', 'gì'], answer: 0, explanation: 'Tôi is a useful relatively neutral “I” in introductions.' },
      { type: 'choice', prompt: 'Why do Vietnamese speakers choose different pronouns?', options: ['Pronouns show only grammatical gender', 'They can reflect age, relationship and social context', 'Pronouns never change'], answer: 1, explanation: 'Vietnamese forms of address carry social meaning.' },
      { type: 'text', prompt: 'Complete: “I am Linh.” Use tôi and là.', accepted: ['tôi là linh'], placeholder: 'Write the sentence in Vietnamese', explanation: 'Tôi là Linh. Capitalize the name when writing.' },
    ],
  },
  {
    id: 'numbers-age', number: '04', unitId: 'unit-2', title: 'Numbers, age and prices', titleVi: 'Số đếm, tuổi và giá tiền', titleRu: 'Числа, возраст и цены', minutes: 18,
    objective: 'Recognize numbers 0–10 and ask or answer a simple age and price question.', objectiveRu: 'Распознавать числа от нуля до десяти и задавать простые вопросы о возрасте и цене.', objectiveVi: 'Nhận biết các số từ 0 đến 10 và hỏi hoặc trả lời câu đơn giản về tuổi và giá tiền.', focus: 'Numbers · questions', focusRu: 'Числа · вопросы', focusVi: 'Số đếm · câu hỏi',
    intro: 'Vietnamese numbers are built in a regular pattern. Learn zero to ten first, then use them with tuổi (years of age) and đồng (Vietnamese currency). Prices in real life can be large; check the written or displayed amount too.', introRu: 'Числа во вьетнамском языке строятся по регулярной модели. Сначала выучите числа от нуля до десяти, затем используйте их со словами tuổi (возраст) и đồng (вьетнамская валюта). В реальной жизни суммы могут быть большими — сверяйтесь с написанной или указанной ценой.', introVi: 'Số đếm tiếng Việt được hình thành theo một quy luật đều đặn. Trước tiên hãy học từ không đến mười, sau đó dùng chúng với tuổi và đồng. Giá cả ngoài đời có thể là những con số lớn; hãy kiểm tra cả số tiền được viết hoặc hiển thị.',
    vocabulary: [
      { term: 'không', category: 'Numbers', meaning: 'zero; also “not” in other contexts', example: 'không đồng — zero đồng' },
      { term: 'một', category: 'Numbers', meaning: 'one', example: 'một người — one person' },
      { term: 'năm', category: 'Numbers', meaning: 'five; year (context decides)', example: 'năm tuổi — five years old' },
      { term: 'mười', category: 'Numbers', meaning: 'ten', example: 'mười nghìn đồng — ten thousand đồng' },
      { term: 'tuổi', category: 'People', meaning: 'age; years old', example: 'Tôi 25 tuổi. — I am 25 years old.' },
      { term: 'bao nhiêu', category: 'Questions', meaning: 'how many / how much', example: 'Bao nhiêu tiền? — How much is it?' },
    ],
    grammar: { title: 'Age and amount: noun + number', explanation: 'Say the person or thing, then the number and classifier/unit when needed. For age, “Tôi 25 tuổi” literally places the number before tuổi. To ask a price, “Bao nhiêu tiền?” is a short everyday phrase.', examples: ['Tôi 25 tuổi. — I am 25 years old.', 'Cái này bao nhiêu tiền? — How much is this?', 'Mười nghìn đồng. — Ten thousand đồng.'] }, grammarVi: { title: 'Tuổi và số tiền: danh từ + số', explanation: 'Nói người hoặc vật trước, sau đó là số và từ chỉ đơn vị khi cần. Với tuổi, “Tôi 25 tuổi” đặt số đứng trước tuổi. Để hỏi giá, “Bao nhiêu tiền?” là cách nói ngắn thường dùng.', examples: ['Tôi 25 tuổi. — Tôi 25 tuổi.', 'Cái này bao nhiêu tiền? — Cái này bao nhiêu tiền?', 'Mười nghìn đồng. — Mười nghìn đồng.'] }, grammarRu: { title: 'Возраст и сумма: существительное + число', explanation: 'Сначала назовите человека или предмет, затем число и, если нужно, единицу счёта. В выражении «Tôi 25 tuổi» число стоит перед словом tuổi. Короткий повседневный вопрос о цене — «Bao nhiêu tiền?»', examples: ['Tôi 25 tuổi. — Мне 25 лет.', 'Cái này bao nhiêu tiền? — Сколько это стоит?', 'Mười nghìn đồng. — Десять тысяч донгов.'] },
    dialogue: [
      { speaker: 'Mai', vi: 'Cái này bao nhiêu tiền ạ?', en: 'How much is this?' },
      { speaker: 'Seller', vi: 'Mười nghìn đồng.', en: 'Ten thousand đồng.' },
      { speaker: 'Mai', vi: 'Vâng, cho tôi một cái.', en: 'Okay, one please.' },
    ],
    exercises: [
      { type: 'choice', prompt: 'What does “bao nhiêu” usually ask?', options: ['Where?', 'How much / how many?', 'Who?'], answer: 1, explanation: 'Bao nhiêu asks about quantity or amount.' },
      { type: 'text', prompt: 'Write the Vietnamese word for “five”.', accepted: ['năm'], placeholder: 'Number word', explanation: 'Five is năm. The same written word can mean “year” in another context.' },
      { type: 'choice', prompt: 'Choose the natural way to say “I am 25 years old.”', options: ['Tôi tuổi 25.', 'Tôi 25 tuổi.', '25 tôi là tuổi.'], answer: 1, explanation: 'A common pattern is subject + number + tuổi.' },
    ],
  },
  {
    id: 'order-coffee', number: '05', unitId: 'unit-2', title: 'Order a coffee', titleVi: 'Gọi cà phê', titleRu: 'Заказ в кафе', minutes: 20,
    objective: 'Order one drink politely and understand a simple café exchange.', objectiveRu: 'Вежливо заказать напиток и понять короткий разговор в кафе.', objectiveVi: 'Gọi một món uống lịch sự và hiểu đoạn hội thoại đơn giản trong quán cà phê.', focus: 'Food · polite requests', focusRu: 'Еда · вежливые просьбы', focusVi: 'Đồ ăn · lời yêu cầu lịch sự',
    intro: 'A short request can be clear and polite without a word-for-word English sentence. “Cho tôi…” means “Give me / I’ll have…”. Add ạ to soften the request or show respect where it is natural.', introRu: 'Короткая просьба может быть ясной и вежливой без дословного перевода с английского. Cho tôi… означает «Дайте мне…» или «Я возьму…». Добавляйте ạ, если это уместно в данной ситуации и помогает выразить уважение.', introVi: 'Thử gọi một món đồ uống quen thuộc. “Cho tôi…” là cách mở đầu rõ ràng cho một yêu cầu. Thêm ạ có thể khiến câu lịch sự hơn, tùy vào mối quan hệ và tình huống.',
    vocabulary: [
      { term: 'cà phê', category: 'Food & drink', meaning: 'coffee', example: 'cà phê sữa — coffee with condensed milk' },
      { term: 'đá', category: 'Food & drink', meaning: 'ice; stone (context decides)', example: 'cà phê đá — iced coffee' },
      { term: 'sữa', category: 'Food & drink', meaning: 'milk', example: 'sữa đặc — condensed milk' },
      { term: 'cốc', category: 'Classifiers', meaning: 'cup / glass (classifier)', example: 'một cốc cà phê — a cup of coffee' },
      { term: 'cho tôi', category: 'Useful phrases', meaning: 'give me; I’ll have', example: 'Cho tôi một cốc nước. — I’ll have a glass of water.' },
      { term: 'ạ', category: 'Particles', meaning: 'a respectful or polite particle', example: 'Vâng ạ. — Yes, certainly.' },
    ],
    grammar: { title: 'A simple request: Cho tôi + item', explanation: 'Use “Cho tôi + quantity + item” to make a straightforward order. Add ạ if it fits the relationship and situation; tone of voice also matters.', examples: ['Cho tôi một cốc cà phê đá. — I’ll have an iced coffee.', 'Cho tôi cà phê sữa đá ạ. — I’d like iced coffee with milk, please.', 'Một cốc nước, làm ơn. — A glass of water, please.'] }, grammarVi: { title: 'Lời yêu cầu đơn giản: Cho tôi + món', explanation: 'Dùng “Cho tôi + số lượng + món” để gọi món. Có thể thêm ạ nếu phù hợp với mối quan hệ và hoàn cảnh; giọng nói cũng rất quan trọng.', examples: ['Cho tôi một cốc cà phê đá. — Cho tôi một cốc cà phê đá.', 'Cho tôi cà phê sữa đá ạ. — Cho tôi cà phê sữa đá ạ.', 'Một cốc nước, làm ơn. — Một cốc nước, làm ơn.'] }, grammarRu: { title: 'Простая просьба: Cho tôi + предмет', explanation: 'Чтобы сделать простой заказ, используйте «Cho tôi + количество + предмет». Частица ạ может сделать фразу вежливее, если это уместно в данной ситуации; важна и интонация.', examples: ['Cho tôi một cốc cà phê đá. — Мне, пожалуйста, кофе со льдом.', 'Cho tôi cà phê sữa đá ạ. — Мне, пожалуйста, кофе со льдом и молоком.', 'Một cốc nước, làm ơn. — Стакан воды, пожалуйста.'] },
    dialogue: [
      { speaker: 'Customer', vi: 'Cho tôi một cốc cà phê sữa đá ạ.', en: 'I’d like an iced coffee with milk, please.' },
      { speaker: 'Server', vi: 'Vâng. Anh dùng ở đây hay mang đi?', en: 'Sure. For here or to go?' },
      { speaker: 'Customer', vi: 'Tôi dùng ở đây. Cảm ơn.', en: 'For here. Thank you.' },
    ],
    exercises: [
      { type: 'choice', prompt: 'Which phrase means “I’ll have a coffee”?', options: ['Cho tôi cà phê.', 'Cà phê ở đâu?', 'Tôi không cà phê.'], answer: 0, explanation: 'Cho tôi… is a common way to make a request.' },
      { type: 'text', prompt: 'Write “iced coffee” in Vietnamese.', accepted: ['cà phê đá'], placeholder: 'Drink name', explanation: 'Cà phê đá literally means coffee + ice.' },
      { type: 'choice', prompt: 'What does ạ often add at the end of a phrase?', options: ['A plural ending', 'Politeness or respect', 'A past tense'], answer: 1, explanation: 'Ạ is a polite particle; its use depends on context.' },
    ],
  },
  {
    id: 'yes-no-questions', number: '06', unitId: 'unit-2', title: 'Yes, no and checking', titleVi: 'Câu hỏi có – không', titleRu: 'Вопросы с ответом «да» или «нет»', minutes: 18,
    objective: 'Ask a simple yes/no question and answer politely.', objectiveRu: 'Задавать простые вопросы с ответом «да» или «нет» и вежливо отвечать.', objectiveVi: 'Đặt câu hỏi có/không đơn giản và trả lời lịch sự.', focus: 'Questions · negation', focusRu: 'Вопросы · отрицание', focusVi: 'Câu hỏi · phủ định',
    intro: 'A common yes/no question uses không after the verb or adjective. A short answer can repeat the key idea, or use có / không. In conversation, chưa can ask whether something has happened yet.', introRu: 'В распространённых вопросах с ответом «да» или «нет» không ставится после глагола или прилагательного. В коротком ответе можно повторить основную мысль или использовать có / không. Слово chưa помогает спросить, произошло ли что-то уже.', introVi: 'Đặt không ở cuối câu để tạo nhiều câu hỏi có/không. Với một số động từ, bạn có thể dùng cấu trúc có…không? Phải không? thường dùng để xác nhận điều gì đó, gần giống “đúng không?”.',
    vocabulary: [
      { term: 'không', category: 'Questions', meaning: 'not; no; question particle in yes/no questions', example: 'Bạn khỏe không? — Are you well?' },
      { term: 'có', category: 'Everyday', meaning: 'yes; have / there is (context decides)', example: 'Có, tôi có. — Yes, I do.' },
      { term: 'chưa', category: 'Questions', meaning: 'not yet; yet?', example: 'Bạn ăn chưa? — Have you eaten yet?' },
      { term: 'phải không', category: 'Questions', meaning: 'right? / is that so? (confirmation tag)', example: 'Bạn là Mai, phải không? — You’re Mai, right?' },
      { term: 'khỏe', category: 'People', meaning: 'well / healthy', example: 'Tôi khỏe. — I am well.' },
    ],
    grammar: { title: 'Yes/no question: statement + không?', explanation: 'Place không at the end of many yes/no questions: “Bạn khỏe không?” Some verbs use a có…không? frame. For confirmation, phải không? often works like “right?”.', examples: ['Bạn khỏe không? — Are you well?', 'Bạn có cà phê không? — Do you have coffee?', 'Bạn là sinh viên, phải không? — You are a student, right?'] }, grammarVi: { title: 'Câu hỏi có/không: câu kể + không?', explanation: 'Đặt không ở cuối nhiều câu hỏi có/không, ví dụ “Bạn khỏe không?”. Một số động từ dùng mẫu có…không?. Để xác nhận, phải không? thường có nghĩa gần như “đúng không?”.', examples: ['Bạn khỏe không? — Bạn khỏe không?', 'Bạn có cà phê không? — Bạn có cà phê không?', 'Bạn là sinh viên, phải không? — Bạn là sinh viên, đúng không?'] }, grammarRu: { title: 'Вопрос да/нет: утверждение + không?', explanation: 'Частица không в конце превращает многие утверждения в вопросы: «Bạn khỏe không?» Для некоторых глаголов используется рамка có…không?. Для подтверждения подойдёт phải không? — примерно «верно?»', examples: ['Bạn khỏe không? — Как вы?', 'Bạn có cà phê không? — У вас есть кофе?', 'Bạn là sinh viên, phải không? — Вы студент, верно?'] },
    dialogue: [
      { speaker: 'Nam', vi: 'Bạn khỏe không?', en: 'How are you?' },
      { speaker: 'Linh', vi: 'Tôi khỏe, cảm ơn. Còn bạn?', en: 'I’m well, thank you. And you?' },
      { speaker: 'Nam', vi: 'Tôi cũng khỏe.', en: 'I’m well too.' },
    ],
    exercises: [
      { type: 'choice', prompt: 'Where does không usually go in “Bạn khỏe không?”', options: ['At the beginning', 'At the end of the question', 'Before bạn'], answer: 1, explanation: 'Không appears at the end in this common pattern.' },
      { type: 'text', prompt: 'Complete the question: “Are you well?”', accepted: ['bạn khỏe không', 'bạn khỏe không?'], placeholder: 'Write the Vietnamese question', explanation: 'Bạn khỏe không? is the common phrase.' },
      { type: 'choice', prompt: 'What does “chưa?” often mean in a question?', options: ['Not yet / yet?', 'Tomorrow', 'Very much'], answer: 0, explanation: 'Chưa asks whether something has happened yet.' },
    ],
  },
  {
    id: 'daily-actions', number: '07', unitId: 'unit-3', title: 'What are you doing?', titleVi: 'Bạn đang làm gì?', titleRu: 'Повседневные действия', minutes: 18,
    objective: 'Describe an action happening now with đang.', objectiveRu: 'Описывать действие, которое происходит сейчас, с помощью đang.', objectiveVi: 'Mô tả một hành động đang diễn ra bằng từ đang.', focus: 'Activities · aspect marker', focusRu: 'Действия · маркер процесса', focusVi: 'Hoạt động · dấu hiệu tiếp diễn',
    intro: 'Vietnamese verbs do not change their ending for tense. Words such as đang, đã and sẽ give time or aspect information. Use đang before a verb to describe an action in progress.', introRu: 'Вьетнамские глаголы не меняют окончание по временам. Время и вид выражают слова вроде đang, đã и sẽ. Ставьте đang перед глаголом, когда описываете действие, которое происходит сейчас.', introVi: 'Từ đang đứng trước động từ để diễn tả một hành động đang tiếp diễn. Hãy kết hợp từ này với những hoạt động quen thuộc và chú ý đến người đang thực hiện hành động.',
    vocabulary: [
      { term: 'đang', category: 'Grammar', meaning: 'marks an action in progress', example: 'Tôi đang học. — I am studying.' },
      { term: 'học', category: 'Activities', meaning: 'to study / learn', example: 'học tiếng Việt — study Vietnamese' },
      { term: 'làm việc', category: 'Activities', meaning: 'to work', example: 'Tôi đang làm việc. — I am working.' },
      { term: 'đọc', category: 'Activities', meaning: 'to read', example: 'đọc sách — read a book' },
      { term: 'nghe', category: 'Activities', meaning: 'to listen / hear', example: 'nghe nhạc — listen to music' },
      { term: 'gì', category: 'Questions', meaning: 'what', example: 'Bạn đang làm gì? — What are you doing?' },
    ],
    grammar: { title: 'Subject + đang + verb', explanation: 'Place đang before the main verb to describe an action in progress. The verb itself stays the same.', examples: ['Tôi đang học tiếng Việt. — I am learning Vietnamese.', 'Bạn đang làm gì? — What are you doing?', 'Cô ấy đang đọc sách. — She is reading a book.'] }, grammarVi: { title: 'Chủ ngữ + đang + động từ', explanation: 'Đặt đang trước động từ chính để mô tả hành động đang diễn ra. Bản thân động từ không thay đổi.', examples: ['Tôi đang học tiếng Việt. — Tôi đang học tiếng Việt.', 'Bạn đang làm gì? — Bạn đang làm gì?', 'Cô ấy đang đọc sách. — Cô ấy đang đọc sách.'] }, grammarRu: { title: 'Подлежащее + đang + глагол', explanation: 'Поставьте đang перед основным глаголом, чтобы описать действие в процессе. Сам глагол не меняется.', examples: ['Tôi đang học tiếng Việt. — Я изучаю вьетнамский.', 'Bạn đang làm gì? — Что вы делаете?', 'Cô ấy đang đọc sách. — Она читает книгу.'] },
    dialogue: [
      { speaker: 'Mai', vi: 'Bạn đang làm gì?', en: 'What are you doing?' },
      { speaker: 'An', vi: 'Tôi đang học tiếng Việt.', en: 'I’m studying Vietnamese.' },
      { speaker: 'Mai', vi: 'Hay quá! Bạn học ở đâu?', en: 'That’s great! Where are you studying?' },
    ],
    exercises: [
      { type: 'choice', prompt: 'Choose the correct sentence for “I am reading.”', options: ['Tôi đọc đang.', 'Tôi đang đọc.', 'Đang tôi đọc.'], answer: 1, explanation: 'Subject + đang + verb: Tôi đang đọc.' },
      { type: 'text', prompt: 'Translate: “I am studying Vietnamese.”', accepted: ['tôi đang học tiếng việt'], placeholder: 'Vietnamese sentence', explanation: 'Tôi đang học tiếng Việt.' },
      { type: 'choice', prompt: 'What does “Bạn đang làm gì?” mean?', options: ['What are you doing?', 'Where are you going?', 'What did you buy?'], answer: 0, explanation: 'Bạn = you, đang = in progress, làm gì = do what.' },
    ],
  },
  {
    id: 'family-people', number: '08', unitId: 'unit-3', title: 'Family and people', titleVi: 'Gia đình và mọi người', titleRu: 'Семья и люди', minutes: 19,
    objective: 'Name close family members and say who someone is.', objectiveRu: 'Называть близких родственников и говорить, кем приходится человек.', objectiveVi: 'Gọi tên người thân và nói một người là ai.', focus: 'Family · possession', focusRu: 'Семья · принадлежность', focusVi: 'Gia đình · sở hữu',
    intro: 'Family words are also used as forms of address in Vietnamese. The sentence “Đây là…” means “This is…”. Use của to make possession clear, while remembering that pronouns and kinship terms depend on the family and context.', introRu: 'Слова родства во вьетнамском также служат обращениями. Модель Đây là… означает «Это…». Для обозначения принадлежности используйте của, помня, что местоимения и родственные обращения зависят от семьи и ситуации.', introVi: 'Học từ vựng về gia đình qua những người thân quen. Một số từ chỉ quan hệ gia đình có thể được dùng thay cho đại từ, vì vậy cách xưng hô còn phụ thuộc vào tuổi tác và mối quan hệ.',
    vocabulary: [
      { term: 'gia đình', category: 'Family', meaning: 'family', example: 'gia đình tôi — my family' },
      { term: 'mẹ', category: 'Family', meaning: 'mother / mom', example: 'Đây là mẹ tôi. — This is my mother.' },
      { term: 'bố', category: 'Family', meaning: 'father / dad (common northern usage)', example: 'bố tôi — my father' },
      { term: 'anh trai', category: 'Family', meaning: 'older brother', example: 'Anh trai tôi tên là Nam. — My older brother’s name is Nam.' },
      { term: 'em gái', category: 'Family', meaning: 'younger sister', example: 'em gái tôi — my younger sister' },
      { term: 'của', category: 'Grammar', meaning: 'of; possessive marker', example: 'sách của tôi — my book' },
    ],
    grammar: { title: 'Possession: noun + của + person', explanation: 'Use của between the thing and the owner: sách của tôi (my book). For close relationships, Vietnamese often places the person before the family word, as in mẹ tôi (my mother).', examples: ['gia đình tôi — my family', 'sách của bạn — your book', 'Đây là mẹ tôi. — This is my mother.'] }, grammarVi: { title: 'Sở hữu: danh từ + của + người', explanation: 'Dùng của giữa sự vật và người sở hữu: sách của tôi. Với mối quan hệ thân thiết, tiếng Việt thường đặt người trước từ chỉ quan hệ gia đình, như mẹ tôi.', examples: ['gia đình tôi — gia đình tôi', 'sách của bạn — sách của bạn', 'Đây là mẹ tôi. — Đây là mẹ tôi.'] }, grammarRu: { title: 'Принадлежность: существительное + của + владелец', explanation: 'Поставьте của между предметом и владельцем: sách của tôi — моя книга. Для близкого родства вьетнамский часто ставит местоимение перед словом родства, например mẹ tôi — моя мама.', examples: ['gia đình tôi — моя семья', 'sách của bạn — ваша книга', 'Đây là mẹ tôi. — Это моя мама.'] },
    dialogue: [
      { speaker: 'Tutor', vi: 'Đây là ai?', en: 'Who is this?' },
      { speaker: 'Linh', vi: 'Đây là mẹ tôi. Còn đây là em gái tôi.', en: 'This is my mother. And this is my younger sister.' },
      { speaker: 'Tutor', vi: 'Gia đình bạn thật dễ thương.', en: 'Your family is lovely.' },
    ],
    exercises: [
      { type: 'choice', prompt: 'What does “Đây là mẹ tôi.” mean?', options: ['This is my mother.', 'My mother is there.', 'Who is your mother?'], answer: 0, explanation: 'Đây là introduces a person or thing: “This is…”' },
      { type: 'text', prompt: 'Write “my family” in Vietnamese.', accepted: ['gia đình tôi'], placeholder: 'Two words', explanation: 'Gia đình tôi means “my family.”' },
      { type: 'choice', prompt: 'What does của often mark?', options: ['Possession / “of”', 'The future', 'A yes/no question'], answer: 0, explanation: 'Của links a thing to its owner.' },
    ],
  },
  {
    id: 'time-routine', number: '09', unitId: 'unit-3', title: 'Time and daily routine', titleVi: 'Thời gian và thói quen', titleRu: 'Время и распорядок дня', minutes: 20,
    objective: 'Ask the time and say when a regular activity happens.', objectiveRu: 'Спрашивать время и говорить, когда обычно происходит действие.', objectiveVi: 'Hỏi giờ và nói một hoạt động thường lệ diễn ra khi nào.', focus: 'Time · sentence order', focusRu: 'Время · порядок слов', focusVi: 'Thời gian · trật tự câu',
    intro: 'Time expressions often come before the main action. “Mấy giờ?” asks what time; “buổi sáng” means morning. A small set of time phrases will let you talk about a whole day.', introRu: 'Обозначения времени часто ставятся перед основным действием. Вопрос Mấy giờ? означает «Который час?», а buổi sáng — «утром». Нескольких выражений времени достаточно, чтобы рассказать о распорядке дня.', introVi: 'Đặt cụm từ chỉ thời gian ở đầu câu hoặc trước động từ để nói về thói quen hằng ngày. Hãy kết hợp buổi sáng, buổi tối và những giờ cụ thể với hoạt động quen thuộc.',
    vocabulary: [
      { term: 'mấy giờ', category: 'Time', meaning: 'what time', example: 'Mấy giờ rồi? — What time is it?' },
      { term: 'buổi sáng', category: 'Time', meaning: 'morning', example: 'buổi sáng tôi học — I study in the morning' },
      { term: 'hôm nay', category: 'Time', meaning: 'today', example: 'Hôm nay tôi làm việc. — I work today.' },
      { term: 'hằng ngày', category: 'Time', meaning: 'every day', example: 'Tôi đi bộ hằng ngày. — I walk every day.' },
      { term: 'lúc', category: 'Time', meaning: 'at (a time)', example: 'lúc tám giờ — at eight o’clock' },
      { term: 'đi ngủ', category: 'Activities', meaning: 'to go to sleep', example: 'Tôi đi ngủ lúc mười giờ. — I go to sleep at ten.' },
    ],
    grammar: { title: 'Time phrase before the action', explanation: 'A time expression can come at the start of a sentence or before the verb. Vietnamese does not require a special verb ending for a regular habit.', examples: ['Buổi sáng tôi học. — I study in the morning.', 'Tôi đi ngủ lúc mười giờ. — I go to bed at ten.', 'Hôm nay tôi làm việc. — I’m working today.'] }, grammarVi: { title: 'Cụm từ chỉ thời gian đứng trước hành động', explanation: 'Cụm từ chỉ thời gian có thể đứng đầu câu hoặc trước động từ. Tiếng Việt không cần biến đổi đuôi động từ để diễn tả thói quen.', examples: ['Buổi sáng tôi học. — Buổi sáng tôi học.', 'Tôi đi ngủ lúc mười giờ. — Tôi đi ngủ lúc mười giờ.', 'Hôm nay tôi làm việc. — Hôm nay tôi làm việc.'] }, grammarRu: { title: 'Обстоятельство времени перед действием', explanation: 'Обстоятельство времени можно поставить в начале предложения или перед глаголом. Во вьетнамском не нужно менять окончание глагола, чтобы выразить регулярное действие.', examples: ['Buổi sáng tôi học. — Утром я учусь.', 'Tôi đi ngủ lúc mười giờ. — Я ложусь спать в десять.', 'Hôm nay tôi làm việc. — Сегодня я работаю.'] },
    dialogue: [
      { speaker: 'Nam', vi: 'Bạn học tiếng Việt lúc mấy giờ?', en: 'What time do you study Vietnamese?' },
      { speaker: 'Mai', vi: 'Tôi học lúc tám giờ buổi tối.', en: 'I study at eight in the evening.' },
      { speaker: 'Nam', vi: 'Bạn học hằng ngày à?', en: 'Do you study every day?' },
    ],
    exercises: [
      { type: 'choice', prompt: 'Which phrase means “in the morning”?', options: ['buổi sáng', 'buổi tối', 'hôm qua'], answer: 0, explanation: 'Buổi sáng is morning.' },
      { type: 'text', prompt: 'Translate: “I study in the morning.”', accepted: ['buổi sáng tôi học', 'tôi học buổi sáng'], placeholder: 'Vietnamese sentence', explanation: 'Both “Buổi sáng tôi học” and “Tôi học buổi sáng” are understandable.' },
      { type: 'choice', prompt: 'What does “mấy giờ” ask?', options: ['What time?', 'How old?', 'How many people?'], answer: 0, explanation: 'Mấy giờ asks what time.' },
    ],
  },
  {
    id: 'find-a-place', number: '10', unitId: 'unit-4', title: 'Find a place', titleVi: 'Tìm đường', titleRu: 'Как найти нужное место', minutes: 20,
    objective: 'Ask where a place is and understand two simple directions.', objectiveRu: 'Спросить, где находится место, и понять простые указания.', objectiveVi: 'Hỏi một địa điểm ở đâu và hiểu hai chỉ dẫn đơn giản.', focus: 'Places · directions', focusRu: 'Места · как спросить дорогу', focusVi: 'Địa điểm · hỏi đường',
    intro: 'To ask where something is, use “ở đâu?”. Directions can be short: đi thẳng (go straight), rẽ trái (turn left), rẽ phải (turn right). Add a place name to make the phrase useful.', introRu: 'Чтобы спросить, где находится место, используйте ở đâu?. Указания могут быть короткими: đi thẳng — идите прямо, rẽ trái — поверните налево, rẽ phải — поверните направо. Добавьте название места, и фраза станет полезной.', introVi: 'Hỏi vị trí của một địa điểm quen thuộc bằng cách dùng tên địa điểm cùng ở đâu. Khi nghe chỉ đường, hãy chú ý đến hướng đi và thứ tự các hành động.',
    vocabulary: [
      { term: 'ở đâu', category: 'Questions', meaning: 'where', example: 'Nhà vệ sinh ở đâu? — Where is the restroom?' },
      { term: 'đi thẳng', category: 'Directions', meaning: 'go straight', example: 'Bạn đi thẳng. — Go straight.' },
      { term: 'rẽ trái', category: 'Directions', meaning: 'turn left', example: 'Rẽ trái ở đây. — Turn left here.' },
      { term: 'rẽ phải', category: 'Directions', meaning: 'turn right', example: 'Rẽ phải ở ngã tư. — Turn right at the intersection.' },
      { term: 'gần', category: 'Places', meaning: 'near', example: 'ở gần đây — nearby' },
      { term: 'nhà ga', category: 'Places', meaning: 'station', example: 'nhà ga ở đâu? — where is the station?' },
    ],
    grammar: { title: 'Place + ở đâu?', explanation: 'Put the place first, then ask “ở đâu?” for its location. For directions, use a short action phrase. You can add nhé or ạ depending on the situation.', examples: ['Nhà ga ở đâu? — Where is the station?', 'Bạn đi thẳng rồi rẽ trái. — Go straight, then turn left.', 'Quán cà phê ở gần đây. — The café is nearby.'] }, grammarVi: { title: 'Địa điểm + ở đâu?', explanation: 'Nêu địa điểm trước, sau đó hỏi “ở đâu?” để biết vị trí. Khi chỉ đường, dùng cụm động từ ngắn. Có thể thêm nhé hoặc ạ tùy tình huống.', examples: ['Nhà ga ở đâu? — Nhà ga ở đâu?', 'Bạn đi thẳng rồi rẽ trái. — Bạn đi thẳng rồi rẽ trái.', 'Quán cà phê ở gần đây. — Quán cà phê ở gần đây.'] }, grammarRu: { title: 'Место + ở đâu?', explanation: 'Сначала назовите место, затем спросите «ở đâu?» — где оно находится. Для указания дороги используйте короткую глагольную фразу. В зависимости от ситуации можно добавить nhé или ạ.', examples: ['Nhà ga ở đâu? — Где находится вокзал?', 'Bạn đi thẳng rồi rẽ trái. — Идите прямо, затем поверните налево.', 'Quán cà phê ở gần đây. — Кафе рядом.'] },
    dialogue: [
      { speaker: 'Visitor', vi: 'Xin lỗi, nhà ga ở đâu ạ?', en: 'Excuse me, where is the station?' },
      { speaker: 'Local', vi: 'Bạn đi thẳng rồi rẽ phải.', en: 'Go straight, then turn right.' },
      { speaker: 'Visitor', vi: 'Nhà ga có gần đây không?', en: 'Is the station nearby?' },
    ],
    exercises: [
      { type: 'choice', prompt: 'How do you ask “Where is the station?”', options: ['Nhà ga ở đâu?', 'Nhà ga mấy giờ?', 'Nhà ga là ai?'], answer: 0, explanation: 'Place + ở đâu? asks where the place is.' },
      { type: 'text', prompt: 'Write “go straight” in Vietnamese.', accepted: ['đi thẳng'], placeholder: 'Direction phrase', explanation: 'Đi thẳng means go straight.' },
      { type: 'choice', prompt: 'What does “rẽ trái” mean?', options: ['Turn right', 'Turn left', 'Go back'], answer: 1, explanation: 'Trái is left; phải is right.' },
    ],
  },
  {
    id: 'past-and-plans', number: '11', unitId: 'unit-4', title: 'Yesterday and tomorrow', titleVi: 'Hôm qua và ngày mai', titleRu: 'Прошедшее и планы', minutes: 20,
    objective: 'Use đã and sẽ with a verb to talk about a completed action and a future plan.', objectiveRu: 'Использовать đã и sẽ с глаголом, чтобы говорить о завершённом действии и планах на будущее.', objectiveVi: 'Dùng đã và sẽ với động từ để nói về việc đã làm và kế hoạch tương lai.', focus: 'Time markers · aspect', focusRu: 'Маркеры времени · вид', focusVi: 'Từ chỉ thời gian · thể',
    intro: 'Vietnamese verbs do not conjugate for past or future. Time words and particles help establish when something happens. Đã often marks a completed or past action; sẽ often marks a future event or plan. Context can make them optional.', introRu: 'Вьетнамские глаголы не спрягаются по прошедшему и будущему времени. Когда происходит действие, помогают понять слова времени и частицы. Đã часто отмечает завершённое или прошлое действие, а sẽ — будущее событие или план. В зависимости от контекста они могут опускаться.', introVi: 'Đặt đã trước động từ để nói về một hành động đã hoàn thành và sẽ để nói về kế hoạch tương lai. Các cụm từ như hôm qua và ngày mai cũng giúp người nghe hiểu mốc thời gian.',
    vocabulary: [
      { term: 'hôm qua', category: 'Time', meaning: 'yesterday', example: 'Hôm qua tôi ở nhà. — I was at home yesterday.' },
      { term: 'ngày mai', category: 'Time', meaning: 'tomorrow', example: 'Ngày mai tôi sẽ đi. — I will go tomorrow.' },
      { term: 'đã', category: 'Grammar', meaning: 'often marks a completed or past action', example: 'Tôi đã ăn rồi. — I have already eaten.' },
      { term: 'sẽ', category: 'Grammar', meaning: 'often marks a future action or intention', example: 'Tôi sẽ học. — I will study.' },
      { term: 'rồi', category: 'Particles', meaning: 'already; indicates a changed or completed state', example: 'Tôi ăn rồi. — I’ve eaten already.' },
    ],
    grammar: { title: 'Time marker + unchanged verb', explanation: 'Place đã or sẽ before the main verb. The verb stays the same. These markers are useful, but time expressions and context also tell the listener when something happens.', examples: ['Hôm qua tôi đã học. — I studied yesterday.', 'Ngày mai tôi sẽ học. — I will study tomorrow.', 'Tôi ăn rồi. — I have already eaten.'] }, grammarVi: { title: 'Từ chỉ thời gian + động từ không đổi', explanation: 'Đặt đã hoặc sẽ trước động từ chính. Động từ vẫn giữ nguyên. Những từ này hữu ích, nhưng cụm từ chỉ thời gian và ngữ cảnh cũng cho biết hành động xảy ra khi nào.', examples: ['Hôm qua tôi đã học. — Hôm qua tôi đã học.', 'Ngày mai tôi sẽ học. — Ngày mai tôi sẽ học.', 'Tôi ăn rồi. — Tôi ăn rồi.'] }, grammarRu: { title: 'Маркер времени + неизменённый глагол', explanation: 'Поставьте đã или sẽ перед основным глаголом. Глагол не меняется. Эти маркеры полезны, но время также передаётся обстоятельствами и контекстом.', examples: ['Hôm qua tôi đã học. — Вчера я занимался.', 'Ngày mai tôi sẽ học. — Завтра я буду заниматься.', 'Tôi ăn rồi. — Я уже поел.'] },
    dialogue: [
      { speaker: 'Mai', vi: 'Hôm qua bạn đã đi đâu?', en: 'Where did you go yesterday?' },
      { speaker: 'An', vi: 'Tôi đã đi chợ. Ngày mai tôi sẽ đi bảo tàng.', en: 'I went to the market. Tomorrow I’ll go to the museum.' },
      { speaker: 'Mai', vi: 'Hay quá!', en: 'That sounds great!' },
    ],
    exercises: [
      { type: 'choice', prompt: 'Which word often marks a future action?', options: ['đã', 'sẽ', 'của'], answer: 1, explanation: 'Sẽ often marks a future action or plan.' },
      { type: 'text', prompt: 'Complete: “Tomorrow I will study.”', accepted: ['ngày mai tôi sẽ học'], placeholder: 'Vietnamese sentence', explanation: 'Ngày mai tôi sẽ học.' },
      { type: 'choice', prompt: 'What happens to the verb ending in Vietnamese past tense?', options: ['It changes like English “go/went”', 'It stays the same; time markers/context help', 'Every verb adds -ed'], answer: 1, explanation: 'Vietnamese verbs do not conjugate by tense.' },
    ],
  },
  {
    id: 'final-conversation', number: '12', unitId: 'unit-4', title: 'Put it together', titleVi: 'Cùng trò chuyện', titleRu: 'Итоговый диалог', minutes: 25,
    objective: 'Use greetings, names, a polite request, a question and a simple time expression in one dialogue.', objectiveRu: 'Объединить в одном диалоге приветствие, имя, вежливую просьбу, вопрос и простое указание времени.', objectiveVi: 'Kết hợp lời chào, tên, yêu cầu lịch sự, câu hỏi và cách nói thời gian đơn giản trong một đoạn hội thoại.', focus: 'Review · four skills', focusRu: 'Повторение · четыре навыка', focusVi: 'Ôn tập · bốn kỹ năng',
    intro: 'This final lesson combines the course patterns. Read the dialogue once for meaning, listen to each line, then try the short conversation without looking at the English. You can repeat it with your own name, drink and destination.', introRu: 'В этом уроке собраны модели из всего курса. Сначала прочитайте диалог для понимания, затем прослушайте каждую реплику и попробуйте разыграть разговор, не подглядывая в английский перевод. Повторите его со своим именем, напитком и местом назначения.', introVi: 'Dùng những cụm từ đã học để xây dựng một cuộc trò chuyện ngắn. Hãy linh hoạt: các mẫu câu là điểm khởi đầu, không phải kịch bản phải đọc thuộc lòng.',
    vocabulary: [
      { term: 'xin lỗi', category: 'Useful phrases', meaning: 'excuse me; sorry', example: 'Xin lỗi, nhà ga ở đâu ạ? — Excuse me, where is the station?' },
      { term: 'cảm ơn', category: 'Useful phrases', meaning: 'thank you', example: 'Cảm ơn bạn. — Thank you.' },
      { term: 'cũng', category: 'Everyday', meaning: 'also / too', example: 'Tôi cũng vậy. — Me too.' },
      { term: 'một chút', category: 'Everyday', meaning: 'a little', example: 'Tôi nói tiếng Việt một chút. — I speak a little Vietnamese.' },
      { term: 'bây giờ', category: 'Time', meaning: 'now', example: 'Bây giờ tôi đi. — I’m going now.' },
    ],
    grammar: { title: 'Build a conversation from familiar blocks', explanation: 'Use phrases you already know: a greeting, self-introduction, one question, one request and a polite closing. Real conversation is flexible; these are building blocks, not a script you must follow exactly.', examples: ['Xin chào, tôi tên là Alex.', 'Cho tôi một cốc cà phê đá ạ.', 'Xin lỗi, nhà ga ở đâu?', 'Cảm ơn bạn.'] }, grammarVi: { title: 'Ghép cuộc trò chuyện từ các cụm quen thuộc', explanation: 'Kết hợp những cụm bạn đã biết: lời chào, phần giới thiệu, một câu hỏi, một lời yêu cầu và lời kết lịch sự. Hội thoại thực tế linh hoạt; đây là các khối xây dựng chứ không phải kịch bản cố định.', examples: ['Xin chào, tôi tên là Alex.', 'Cho tôi một cốc cà phê đá ạ.', 'Xin lỗi, nhà ga ở đâu?', 'Cảm ơn bạn.'] }, grammarRu: { title: 'Составьте разговор из знакомых фраз', explanation: 'Используйте знакомые выражения: приветствие, представление, вопрос, просьбу и вежливое завершение. Живой разговор гибок; это строительные блоки, а не обязательный сценарий.', examples: ['Xin chào, tôi tên là Alex. — Здравствуйте, меня зовут Алекс.', 'Cho tôi một cốc cà phê đá ạ. — Мне, пожалуйста, кофе со льдом.', 'Xin lỗi, nhà ga ở đâu? — Извините, где вокзал?', 'Cảm ơn bạn. — Спасибо.'] },
    dialogue: [
      { speaker: 'Mai', vi: 'Xin chào! Bạn tên là gì?', en: 'Hello! What is your name?' },
      { speaker: 'Alex', vi: 'Tôi tên là Alex. Tôi nói tiếng Việt một chút.', en: 'My name is Alex. I speak a little Vietnamese.' },
      { speaker: 'Mai', vi: 'Rất vui được gặp bạn. Bạn có muốn uống cà phê không?', en: 'Nice to meet you. Would you like to have coffee?' },
      { speaker: 'Alex', vi: 'Có, cho tôi một cốc cà phê đá ạ. Cảm ơn bạn.', en: 'Yes, I’ll have an iced coffee, please. Thank you.' },
      { speaker: 'Mai', vi: 'Sau đó chúng ta đi bộ đến nhà ga nhé.', en: 'After that, let’s walk to the station.' },
    ],
    exercises: [
      { type: 'choice', prompt: 'You want an iced coffee. Which request is best?', options: ['Cho tôi một cốc cà phê đá ạ.', 'Nhà ga ở đâu?', 'Tôi đã học hôm qua.'], answer: 0, explanation: 'Cho tôi… makes a request; cà phê đá is iced coffee.' },
      { type: 'text', prompt: 'Write “Thank you” in Vietnamese.', accepted: ['cảm ơn', 'cám ơn'], placeholder: 'Vietnamese phrase', explanation: 'Cảm ơn is the standard spelling; cám ơn is a common variant.' },
      { type: 'choice', prompt: 'Which question asks where the station is?', options: ['Nhà ga ở đâu?', 'Bạn khỏe không?', 'Bạn tên là gì?'], answer: 0, explanation: 'Ở đâu means where.' },
      { type: 'choice', prompt: 'What should you do after finishing the course?', options: ['Repeat the phrases with your own details and keep listening', 'Stop using Vietnamese', 'Memorize without context'], answer: 0, explanation: 'Re-use the patterns in your own life; spaced practice helps them stick.' },
    ],
  },
];

const allCourseVocabulary = courseLessons.flatMap((lesson) => lesson.vocabulary.map((word) => ({
  ...word,
  lessonId: lesson.id,
  lessonTitle: lesson.title,
})));

export const courseVocabulary = [...new Map(allCourseVocabulary.map((word) => [word.term, { ...word, id: word.term }])).values()];

export function getLessonById(id) {
  return courseLessons.find((lesson) => lesson.id === id);
}

export function getNextLesson(id) {
  const index = courseLessons.findIndex((lesson) => lesson.id === id);
  return index >= 0 ? courseLessons[index + 1] || null : null;
}

export function getPreviousLesson(id) {
  const index = courseLessons.findIndex((lesson) => lesson.id === id);
  return index > 0 ? courseLessons[index - 1] : null;
}
