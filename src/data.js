export const tones = [
  { name: 'Ngang', english: 'level', englishVi: 'bằng', englishRu: 'ровный', mark: 'ma', description: 'A steady, level tone.', descriptionVi: 'Âm bằng và ổn định.', descriptionRu: 'Ровный тон без заметного подъёма или падения.' },
  { name: 'Sắc', english: 'rising', englishVi: 'sắc', englishRu: 'восходящий', mark: 'má', description: 'A high rising tone.', descriptionVi: 'Âm vực cao và đi lên.', descriptionRu: 'Высокий восходящий тон.' },
  { name: 'Huyền', english: 'falling', englishVi: 'huyền', englishRu: 'нисходящий', mark: 'mà', description: 'A low falling tone.', descriptionVi: 'Âm vực thấp và đi xuống.', descriptionRu: 'Низкий нисходящий тон.' },
  { name: 'Hỏi', english: 'dipping', englishVi: 'hỏi', englishRu: 'нисходяще-восходящий', mark: 'mả', description: 'A dipping tone, often with a gentle rise.', descriptionVi: 'Âm đi xuống rồi thường nhẹ nhàng đi lên.', descriptionRu: 'Тон с понижением и часто мягким последующим подъёмом.' },
  { name: 'Ngã', english: 'broken rising', englishVi: 'ngã', englishRu: 'прерывисто-восходящий', mark: 'mã', description: 'A rising tone with a glottal break in many northern accents.', descriptionVi: 'Âm đi lên, thường có ngắt thanh hầu trong nhiều giọng miền Bắc.', descriptionRu: 'Восходящий тон с гортанной смычкой во многих северных вариантах произношения.' },
  { name: 'Nặng', english: 'low checked', englishVi: 'nặng', englishRu: 'низкий краткий', mark: 'mạ', description: 'A short, low, firmly checked tone.', descriptionVi: 'Âm thấp, ngắn và kết thúc dứt khoát.', descriptionRu: 'Короткий низкий тон с резким завершением.' },
];

export const soundPairs = ['ua / uơ', 'ai / ay', 'ao / au', 'ưa / ươ', 'ua / uô', 'c / k / q', 'd / r / gi', 's / x', 'ch / tr', 'ng / ngh', 'ia / iê / yê', 'nh', 'kh', 'ph', 'th'];
export const vowelSounds = ['a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y'];
export const consonantSounds = ['b', 'đ', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 't', 'v', 'nh', 'kh', 'ph', 'th'];

export const stories = [
  {
    id: 'ca-phe-da', title: 'An iced coffee, please', titleVi: 'Cho tôi một cốc cà phê đá', titleRu: 'Кофе со льдом, пожалуйста', level: 'Beginner', length: '5 min', tags: ['Food', 'Ordering'], color: 'peach',
    summary: 'Minh orders a familiar drink and decides whether to stay or go.', summaryVi: 'Minh gọi món uống quen thuộc và quyết định ở lại hay đi.', summaryRu: 'Минь заказывает привычный напиток и решает, остаться ли в кафе.',
    story: [
      { vi: 'Minh muốn uống cà phê.', en: 'Minh wants to drink coffee.', ru: 'Минь хочет выпить кофе.' },
      { vi: 'Minh gọi một cốc cà phê đá.', en: 'Minh orders a glass of iced coffee.', ru: 'Минь заказывает стакан кофе со льдом.' },
      { vi: 'Cà phê đá rất ngon, nhưng hơi đắng.', en: 'The iced coffee is delicious, but a little bitter.', ru: 'Кофе со льдом очень вкусный, но немного горький.' },
      { vi: 'Minh ngồi ở quán và đọc sách.', en: 'Minh sits in the café and reads a book.', ru: 'Минь сидит в кафе и читает книгу.' },
    ],
    vocabulary: ['muốn — to want', 'gọi — to order / call', 'hơi — a little', 'đắng — bitter'], vocabularyRu: ['хотеть — muốn', 'заказывать — gọi', 'немного — hơi', 'горький — đắng'],
    question: 'Minh gọi đồ uống gì?', questionRu: 'Что заказал Минь?', options: ['Một cốc trà', 'Một cốc cà phê đá', 'Một cốc nước cam'], optionsRu: ['Чашку чая', 'Кофе со льдом', 'Апельсиновый сок'], answer: 1,
  },
  {
    id: 'chiec-o-vang', title: 'The yellow umbrella', titleVi: 'Chiếc ô màu vàng', titleRu: 'Жёлтый зонт', level: 'Beginner', length: '6 min', tags: ['Daily life', 'Weather'], color: 'mint',
    summary: 'Lan shares her umbrella with a friend on a rainy walk home.', summaryVi: 'Lan chia sẻ chiếc ô với một người bạn trên đường về nhà trong cơn mưa.', summaryRu: 'Лан делится зонтом с другом по дороге домой под дождём.',
    story: [
      { vi: 'Hôm nay trời mưa.', en: 'It is raining today.', ru: 'Сегодня идёт дождь.' },
      { vi: 'Lan có một chiếc ô màu vàng.', en: 'Lan has a yellow umbrella.', ru: 'У Лан есть жёлтый зонт.' },
      { vi: 'Lan đi bộ về nhà và chia sẻ chiếc ô với bạn.', en: 'Lan walks home and shares the umbrella with a friend.', ru: 'Лан идёт домой пешком и делится зонтом с другом.' },
    ],
    vocabulary: ['trời — weather / sky', 'chiếc ô — umbrella', 'chia sẻ — to share'], vocabularyRu: ['погода / небо — trời', 'зонт — chiếc ô', 'делиться — chia sẻ'],
    question: 'Chiếc ô của Lan màu gì?', questionRu: 'Какого цвета зонт Лан?', options: ['Màu đỏ', 'Màu xanh', 'Màu vàng'], optionsRu: ['Красный', 'Зелёный', 'Жёлтый'], answer: 2,
  },
  {
    id: 'lo-chuyen-xe', title: 'The bus that left early', titleVi: 'Lỡ chuyến xe', titleRu: 'Автобус ушёл раньше', level: 'Elementary', length: '8 min', tags: ['Travel', 'Time'], color: 'lilac',
    summary: 'Nam misses one bus, asks for help and finds another way.', summaryVi: 'Nam lỡ chuyến xe buýt, hỏi đường và tìm được một cách khác.', summaryRu: 'Нам опаздывает на автобус, просит помощи и находит другой маршрут.',
    story: [
      { vi: 'Nam đến bến xe lúc tám giờ.', en: 'Nam arrives at the bus station at eight.', ru: 'Нам приезжает на автовокзал в восемь часов.' },
      { vi: 'Xe buýt đã rời bến trước đó năm phút.', en: 'The bus left five minutes earlier.', ru: 'Автобус уехал пять минут назад.' },
      { vi: 'Nam hỏi đường và tìm được một chuyến xe khác.', en: 'Nam asks for directions and finds another bus.', ru: 'Нам спрашивает дорогу и находит другой автобус.' },
    ],
    vocabulary: ['bến xe — bus station', 'rời — to leave', 'chuyến — trip / service'], vocabularyRu: ['автовокзал — bến xe', 'уезжать — rời', 'рейс / поездка — chuyến'],
    question: 'Nam đến bến xe lúc mấy giờ?', questionRu: 'Во сколько Нам приехал на автовокзал?', options: ['Bảy giờ', 'Tám giờ', 'Chín giờ'], optionsRu: ['В семь', 'В восемь', 'В девять'], answer: 1,
  },
  {
    id: 'cho-sang', title: 'A morning at the market', titleVi: 'Buổi sáng ở chợ', titleRu: 'Утро на рынке', level: 'Elementary', length: '9 min', tags: ['Food', 'Conversation'], color: 'butter',
    summary: 'Hương shops for fresh vegetables and shares a small moment with the vendor.', summaryVi: 'Hương mua rau tươi và chia sẻ một khoảnh khắc thân tình với người bán.', summaryRu: 'Хыонг покупает свежие овощи и делится тёплым моментом с продавцом.',
    story: [
      { vi: 'Hương đi chợ sớm để mua rau tươi.', en: 'Hương goes to the market early to buy fresh vegetables.', ru: 'Хыонг рано идёт на рынок за свежими овощами.' },
      { vi: 'Cô hỏi giá, nếm thử một quả xoài rồi chọn thêm ít rau thơm.', en: 'She asks the price, tastes a mango, then picks up some herbs.', ru: 'Она спрашивает цену, пробует манго и выбирает немного зелени.' },
      { vi: 'Người bán tặng cô thêm một quả ớt vì hôm nay cô cười rất tươi.', en: 'The vendor gives her an extra chilli because she has such a bright smile today.', ru: 'Продавец дарит ей ещё один перец чили, потому что сегодня она очень приветлива.' },
    ],
    vocabulary: ['đi chợ — to go to the market', 'rau thơm — herbs', 'tặng — to give as a gift'], vocabularyRu: ['ходить на рынок — đi chợ', 'зелень — rau thơm', 'дарить — tặng'],
    question: 'Người bán tặng Hương thêm gì?', questionRu: 'Что продавец подарил Хыонг?', options: ['Một quả ớt', 'Một quả xoài', 'Một bó hoa'], optionsRu: ['Перец чили', 'Манго', 'Букет цветов'], answer: 0,
  },
  {
    id: 'la-thu-tu-hue', title: 'A letter from Huế', titleVi: 'Bức thư từ Huế', titleRu: 'Письмо из Хюэ', level: 'Intermediate', length: '10 min', tags: ['Culture', 'Reading'], color: 'blue',
    summary: 'Mai reads a letter slowly and imagines the city her friend describes.', summaryVi: 'Mai đọc chậm lá thư và hình dung thành phố mà bạn mình kể.', summaryRu: 'Май медленно читает письмо и представляет город, о котором пишет её друг.',
    story: [
      { vi: 'Mai nhận được một bức thư từ người bạn ở Huế.', en: 'Mai receives a letter from her friend in Huế.', ru: 'Май получает письмо от друга из Хюэ.' },
      { vi: 'Bạn kể về dòng sông, những cơn mưa và món cơm hến.', en: 'Her friend writes about the river, the rain and cơm hến.', ru: 'Друг рассказывает о реке, дождях и блюде ком хэн.' },
      { vi: 'Mai đọc thư hai lần vì muốn cảm nhận từng chi tiết.', en: 'Mai reads the letter twice because she wants to take in every detail.', ru: 'Май читает письмо дважды, потому что хочет прочувствовать каждую деталь.' },
    ],
    vocabulary: ['bức thư — letter', 'dòng sông — river', 'từng — each / every'], vocabularyRu: ['письмо — bức thư', 'река — dòng sông', 'каждый / всякий — từng'],
    question: 'Bức thư được gửi từ đâu?', questionRu: 'Откуда пришло письмо?', options: ['Hà Nội', 'Huế', 'Đà Nẵng'], optionsRu: ['Из Ханоя', 'Из Хюэ', 'Из Дананга'], answer: 1,
  },
  {
    id: 'nguoi-hang-xom', title: 'A new neighbour', titleVi: 'Người hàng xóm mới', titleRu: 'Новая соседка', level: 'Beginner', length: '6 min', tags: ['Introductions', 'People'], color: 'peach',
    summary: 'An meets a neighbour and asks a few gentle first questions.', summaryVi: 'An làm quen với người hàng xóm và hỏi vài câu đầu tiên nhẹ nhàng.', summaryRu: 'Ан знакомится с соседкой и задаёт несколько простых вопросов.',
    story: [
      { vi: 'An gặp một người hàng xóm mới ở cầu thang.', en: 'An meets a new neighbour on the stairs.', ru: 'Ан встречает новую соседку на лестнице.' },
      { vi: 'An chào chị và hỏi: “Chị tên là gì?”', en: 'An says hello and asks, “What is your name?”', ru: 'Ан здоровается и спрашивает: «Как вас зовут?»' },
      { vi: 'Người hàng xóm tên là Hoa. Chị ấy sống ở tầng ba.', en: 'The neighbour’s name is Hoa. She lives on the third floor.', ru: 'Соседку зовут Хоа. Она живёт на третьем этаже.' },
    ],
    vocabulary: ['hàng xóm — neighbour', 'cầu thang — stairs', 'tầng — floor / storey'], vocabularyRu: ['сосед — hàng xóm', 'лестница — cầu thang', 'этаж — tầng'],
    question: 'Người hàng xóm tên là gì?', questionRu: 'Как зовут соседку?', options: ['An', 'Hoa', 'Mai'], optionsRu: ['Ан', 'Хоа', 'Май'], answer: 1,
  },
  {
    id: 'mat-chia-khoa', title: 'The missing key', titleVi: 'Chìa khóa bị mất', titleRu: 'Потерянный ключ', level: 'Elementary', length: '8 min', tags: ['Daily life', 'Questions'], color: 'mint',
    summary: 'Before leaving home, Bình looks for a key in three familiar places.', summaryVi: 'Trước khi ra khỏi nhà, Bình tìm chìa khóa ở ba nơi quen thuộc.', summaryRu: 'Перед выходом Бинь ищет ключ в трёх знакомых местах.',
    story: [
      { vi: 'Bình muốn đi ra ngoài nhưng không thấy chìa khóa.', en: 'Bình wants to go out but cannot see the key.', ru: 'Бинь хочет выйти, но не может найти ключ.' },
      { vi: 'Bình tìm trên bàn, trong túi và cạnh cửa.', en: 'Bình looks on the table, in the bag and beside the door.', ru: 'Бинь ищет его на столе, в сумке и у двери.' },
      { vi: 'Cuối cùng, chìa khóa ở trong túi áo của Bình.', en: 'At last, the key is in Bình’s coat pocket.', ru: 'Наконец ключ находится в кармане куртки Биня.' },
    ],
    vocabulary: ['chìa khóa — key', 'tìm — to look for', 'cuối cùng — finally'], vocabularyRu: ['ключ — chìa khóa', 'искать — tìm', 'наконец — cuối cùng'],
    question: 'Chìa khóa ở đâu?', questionRu: 'Где лежит ключ?', options: ['Trên bàn', 'Trong túi áo', 'Cạnh cửa'], optionsRu: ['На столе', 'В кармане куртки', 'У двери'], answer: 1,
  },
  {
    id: 'bua-com-gia-dinh', title: 'Dinner with family', titleVi: 'Bữa cơm gia đình', titleRu: 'Семейный ужин', level: 'Intermediate', length: '10 min', tags: ['Family', 'Food'], color: 'lilac',
    summary: 'A family waits for everyone before starting dinner together.', summaryVi: 'Cả nhà chờ mọi người về đông đủ rồi mới cùng bắt đầu bữa tối.', summaryRu: 'Семья ждёт, пока все соберутся, чтобы вместе начать ужин.',
    story: [
      { vi: 'Buổi tối, cả nhà cùng chuẩn bị bữa cơm.', en: 'In the evening, the family prepares dinner together.', ru: 'Вечером вся семья вместе готовит ужин.' },
      { vi: 'Mẹ nấu canh, bố rửa rau, còn Linh dọn bàn.', en: 'Mom makes soup, Dad washes vegetables, and Linh sets the table.', ru: 'Мама варит суп, папа моет овощи, а Линь накрывает на стол.' },
      { vi: 'Mọi người chờ bà về rồi mới ăn.', en: 'Everyone waits for Grandma to come home before eating.', ru: 'Все ждут возвращения бабушки и только потом садятся за стол.' },
    ],
    vocabulary: ['cả nhà — the whole family', 'chuẩn bị — to prepare', 'dọn bàn — to set the table'], vocabularyRu: ['вся семья — cả nhà', 'готовить — chuẩn bị', 'накрывать на стол — dọn bàn'],
    question: 'Mọi người chờ ai về rồi mới ăn?', questionRu: 'Кого все ждут перед ужином?', options: ['Bố', 'Bà', 'Linh'], optionsRu: ['Папу', 'Бабушку', 'Линь'], answer: 1,
  },
];

export const articles = [
  {
    slug: 'a-polite-particle', title: 'Ạ: a small particle that says a lot', titleVi: 'Ạ: một từ nhỏ, nhiều sắc thái', titleRu: 'Ạ: маленькая частица с большим смыслом', categoryRu: 'Повседневный вьетнамский', categoryVi: 'Tiếng Việt hằng ngày', category: 'Everyday Vietnamese', read: '4 min read',
    summary: 'See how ạ adds respect and warmth at the end of a sentence—and how children use it when greeting adults.', summaryVi: 'Xem cách từ ạ thể hiện sự kính trọng và thân mật ở cuối câu — và cách trẻ em dùng từ này khi chào người lớn.', summaryRu: 'Как ạ выражает уважение и теплоту в конце фразы — и как дети используют её, приветствуя взрослых.',
    paragraphs: [
      'Ạ is often placed at the end of a sentence to express politeness and respect, especially when speaking to someone older or in a more formal situation. It is small, but it changes the feeling of a sentence.',
      'For example, “Vâng ạ” is a respectful “Yes,” and “Con chào mẹ ạ” is a warm greeting from a child to their mother. The right particle depends on who is speaking, who is listening and the relationship between them.',
      'In some family contexts, ạ can also be used as a verb-like prompt for a child to greet an adult. Notice the social context, not just the dictionary definition.',
    ],
    paragraphsRu: [
      'Частицу ạ часто ставят в конце предложения, чтобы выразить вежливость и уважение, особенно в разговоре со старшим или в более официальной ситуации. Она короткая, но меняет интонацию высказывания.',
      'Например, «Vâng ạ» — уважительное «Да», а «Con chào mẹ ạ» — тёплое приветствие ребёнка маме. Уместность частицы зависит от того, кто говорит, к кому обращается и какие отношения связывают собеседников.',
      'В некоторых семейных ситуациях ạ также используют как подсказку ребёнку поприветствовать взрослого. Обращайте внимание на социальный контекст, а не только на словарное значение.',
    ],
    paragraphsVi: [
      'Từ ạ thường được đặt ở cuối câu để thể hiện sự lịch sự và kính trọng, đặc biệt khi nói với người lớn tuổi hoặc trong tình huống trang trọng hơn. Từ này ngắn nhưng làm thay đổi sắc thái của câu.',
      'Ví dụ, “Vâng ạ” là lời đáp lịch sự, còn “Con chào mẹ ạ” là lời chào ấm áp của trẻ dành cho mẹ. Cách dùng phù hợp phụ thuộc vào người nói, người nghe và mối quan hệ giữa họ.',
      'Trong một số gia đình, ạ cũng có thể được dùng như lời nhắc trẻ chào người lớn. Hãy chú ý đến ngữ cảnh xã hội, không chỉ nghĩa trong từ điển.',
    ],
  },
  {
    slug: 'chung-toi-chung-ta', title: 'Chúng tôi or chúng ta?', titleVi: 'Chúng tôi hay chúng ta?', titleRu: 'Chúng tôi или chúng ta?', categoryRu: 'Грамматика', categoryVi: 'Ngữ pháp', category: 'Grammar', read: '3 min read',
    summary: 'A practical way to hear the difference between “we” that includes the listener and “we” that does not.', summaryVi: 'Một cách thực tế để phân biệt “chúng tôi” không bao gồm người nghe và “chúng ta” có bao gồm người nghe.', summaryRu: 'Практическая подсказка, как различать «мы» с собеседником и «мы» без него.',
    paragraphs: [
      'Vietnamese often makes an important distinction that English “we” leaves open. Chúng ta usually includes the person you are speaking to; chúng tôi usually does not.',
      'If you say “Chúng ta bắt đầu nhé,” you are inviting the listener to begin with you. “Chúng tôi sống ở Hà Nội” describes a group that does not include the listener.',
      'As with other pronouns, relationship and context matter. Listen for who is included in the conversation, not only for a one-word translation.',
    ],
    paragraphsRu: [
      'Во вьетнамском языке часто проводится различие, которое в русском слове «мы» само по себе не выражено. Chúng ta обычно включает собеседника, а chúng tôi — как правило, нет.',
      'Фраза «Chúng ta bắt đầu nhé» приглашает собеседника начать вместе. «Chúng tôi sống ở Hà Nội» описывает группу, в которую слушатель не входит.',
      'Как и в случае с другими местоимениями, многое зависит от отношений и ситуации. Важно понимать, кто включён в «мы» в данном разговоре.',
    ],
    paragraphsVi: [
      'Tiếng Việt thường phân biệt hai cách nói mà từ “we” trong tiếng Anh không thể hiện. Chúng ta thường bao gồm người đang nghe; chúng tôi thường không bao gồm họ.',
      'Câu “Chúng ta bắt đầu nhé” mời người nghe cùng bắt đầu. “Chúng tôi sống ở Hà Nội” nói về một nhóm không bao gồm người nghe.',
      'Cũng như các đại từ khác, mối quan hệ và ngữ cảnh rất quan trọng. Hãy chú ý ai được tính trong từ “chúng ta” của cuộc trò chuyện.',
    ],
  },
  {
    slug: 'six-tones', title: 'Six tones, one listening habit', titleVi: 'Sáu thanh điệu, một thói quen nghe', titleRu: 'Шесть тонов и одна привычка слушать', categoryRu: 'Произношение', categoryVi: 'Phát âm', category: 'Pronunciation', read: '5 min read',
    summary: 'Train your ear with short contrasts before worrying about perfect production.', summaryVi: 'Luyện nghe các đối lập ngắn trước khi lo lắng về việc phát âm hoàn hảo.', summaryRu: 'Тренируйте слух на коротких контрастах, не стремясь сразу к идеальному произношению.',
    paragraphs: [
      'Vietnamese tones change the meaning of a syllable. Start by listening to one vowel with a steady voice, then notice where the pitch rises, falls, dips or stops.',
      'A useful practice is to listen, point to a tone contour, and repeat a short meaningful word. Keep the syllable and vowel as constant as possible while you focus on pitch and voice quality.',
      'Regional accents can sound different. The goal is not to force one perfect contour, but to understand the variety you are learning and to be clearly understood by your conversation partner.',
    ],
    paragraphsRu: [
      'Тоны во вьетнамском меняют значение слога. Начните с одной гласной: сначала произнесите её ровно, а затем замечайте, где голос повышается, понижается, изгибается или резко обрывается.',
      'Полезное упражнение: прослушайте пример, укажите на контур тона и повторите короткое осмысленное слово. Сохраняйте слог и гласную, сосредоточившись на высоте и качестве голоса.',
      'Региональные акценты звучат по-разному. Цель не в том, чтобы воспроизвести один идеальный контур, а в том, чтобы понимать выбранный вариант речи и быть понятным собеседнику.',
    ],
    paragraphsVi: [
      'Thanh điệu tiếng Việt làm thay đổi nghĩa của âm tiết. Hãy bắt đầu bằng cách nghe một nguyên âm ở giọng đều, sau đó chú ý cao độ lên, xuống, uốn hoặc dừng ở đâu.',
      'Một cách luyện hữu ích là nghe, chỉ vào đường nét thanh điệu rồi lặp lại một từ ngắn có nghĩa. Giữ nguyên âm tiết và nguyên âm, tập trung vào cao độ và chất giọng.',
      'Giọng vùng miền có thể khác nhau. Mục tiêu không phải là ép mình theo một đường nét duy nhất, mà là hiểu biến thể bạn đang học và giao tiếp rõ ràng.',
    ],
  },
  {
    slug: 'learn-through-stories', title: 'Why stories help language stick', titleVi: 'Vì sao câu chuyện giúp ghi nhớ?', titleRu: 'Почему истории помогают запоминать язык', categoryRu: 'Методика', categoryVi: 'Phương pháp', category: 'Method', read: '5 min read',
    summary: 'A short introduction to TPR, TPRS and learning through meaning before memorising rules.', summaryVi: 'Giới thiệu ngắn về TPR, TPRS và cách học qua ý nghĩa trước khi ghi nhớ quy tắc.', summaryRu: 'Краткое знакомство с TPR, TPRS и обучением через смысл, а не только через заучивание правил.',
    paragraphs: [
      'Total Physical Response (TPR) links language with a physical action. The learner hears a simple instruction, understands it in context and responds with movement before being asked to produce language.',
      'Teaching Proficiency through Reading and Storytelling (TPRS) extends the idea through short, repeated stories. Familiar words return in a new context, giving the learner several chances to understand and use them.',
      'Stories are not a replacement for focused feedback or grammar. They make useful language memorable and give learners a reason to listen, read and respond.',
    ],
    paragraphsRu: [
      'Метод Total Physical Response (TPR) связывает язык с физическим действием. Ученик слышит простую инструкцию, понимает её в контексте и отвечает движением до того, как его попросят самому произвести фразу.',
      'Teaching Proficiency through Reading and Storytelling (TPRS) развивает эту идею с помощью коротких повторяющихся историй. Знакомые слова возвращаются в новом контексте и помогают ученику несколько раз осмыслить и использовать их.',
      'Истории не заменяют адресную обратную связь или грамматику. Они помогают запоминать полезные выражения и дают повод слушать, читать и отвечать.',
    ],
    paragraphsVi: [
      'Total Physical Response (TPR) kết nối ngôn ngữ với hành động. Người học nghe một chỉ dẫn đơn giản, hiểu trong ngữ cảnh rồi phản hồi bằng cử chỉ trước khi được yêu cầu tự nói.',
      'Teaching Proficiency through Reading and Storytelling (TPRS) phát triển ý tưởng này qua những câu chuyện ngắn có lặp lại. Từ quen thuộc xuất hiện trong ngữ cảnh mới, giúp người học có nhiều cơ hội hiểu và sử dụng.',
      'Câu chuyện không thay thế phản hồi cụ thể hay ngữ pháp. Chúng giúp ngôn ngữ hữu ích dễ nhớ hơn và tạo lý do để nghe, đọc và phản hồi.',
    ],
  },
];
