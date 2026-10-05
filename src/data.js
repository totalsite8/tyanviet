export const tones = [
  { name: 'Ngang', english: 'level', mark: 'ma', description: 'A steady, level tone.' },
  { name: 'Sắc', english: 'rising', mark: 'má', description: 'A high rising tone.' },
  { name: 'Huyền', english: 'falling', mark: 'mà', description: 'A low falling tone.' },
  { name: 'Hỏi', english: 'dipping', mark: 'mả', description: 'A dipping tone, often with a gentle rise.' },
  { name: 'Ngã', english: 'broken rising', mark: 'mã', description: 'A rising tone with a glottal break in many northern accents.' },
  { name: 'Nặng', english: 'low checked', mark: 'mạ', description: 'A short, low, firmly checked tone.' },
];

export const soundPairs = ['ua / uơ', 'ai / ay', 'ao / au', 'ưa / ươ', 'ua / uô', 'c / k / q', 'd / r / gi', 's / x', 'ch / tr', 'ng / ngh', 'ia / iê / yê', 'nh', 'kh', 'ph', 'th'];
export const vowelSounds = ['a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y'];
export const consonantSounds = ['b', 'đ', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 't', 'v', 'nh', 'kh', 'ph', 'th'];

export const stories = [
  {
    id: 'ca-phe-da', title: 'An iced coffee, please', titleVi: 'Cho tôi một cốc cà phê đá', level: 'Beginner', length: '5 min', tags: ['Food', 'Ordering'], color: 'peach',
    summary: 'Minh orders a familiar drink and decides whether to stay or go.',
    story: [
      { vi: 'Minh muốn uống cà phê.', en: 'Minh wants to drink coffee.' },
      { vi: 'Minh gọi một cốc cà phê đá.', en: 'Minh orders a glass of iced coffee.' },
      { vi: 'Cà phê đá rất ngon, nhưng hơi đắng.', en: 'The iced coffee is delicious, but a little bitter.' },
      { vi: 'Minh ngồi ở quán và đọc sách.', en: 'Minh sits in the café and reads a book.' },
    ],
    vocabulary: ['muốn — to want', 'gọi — to order / call', 'hơi — a little', 'đắng — bitter'],
    question: 'Minh gọi đồ uống gì?', options: ['Một cốc trà', 'Một cốc cà phê đá', 'Một cốc nước cam'], answer: 1,
  },
  {
    id: 'chiec-o-vang', title: 'The yellow umbrella', titleVi: 'Chiếc ô màu vàng', level: 'Beginner', length: '6 min', tags: ['Daily life', 'Weather'], color: 'mint',
    summary: 'Lan shares her umbrella with a friend on a rainy walk home.',
    story: [
      { vi: 'Hôm nay trời mưa.', en: 'It is raining today.' },
      { vi: 'Lan có một chiếc ô màu vàng.', en: 'Lan has a yellow umbrella.' },
      { vi: 'Lan đi bộ về nhà và chia sẻ chiếc ô với bạn.', en: 'Lan walks home and shares the umbrella with a friend.' },
    ],
    vocabulary: ['trời — weather / sky', 'chiếc ô — umbrella', 'chia sẻ — to share'],
    question: 'Chiếc ô của Lan màu gì?', options: ['Màu đỏ', 'Màu xanh', 'Màu vàng'], answer: 2,
  },
  {
    id: 'lo-chuyen-xe', title: 'The bus that left early', titleVi: 'Lỡ chuyến xe', level: 'Elementary', length: '8 min', tags: ['Travel', 'Time'], color: 'lilac',
    summary: 'Nam misses one bus, asks for help and finds another way.',
    story: [
      { vi: 'Nam đến bến xe lúc tám giờ.', en: 'Nam arrives at the bus station at eight.' },
      { vi: 'Xe buýt đã rời bến trước đó năm phút.', en: 'The bus left five minutes earlier.' },
      { vi: 'Nam hỏi đường và tìm được một chuyến xe khác.', en: 'Nam asks for directions and finds another bus.' },
    ],
    vocabulary: ['bến xe — bus station', 'rời — to leave', 'chuyến — trip / service'],
    question: 'Nam đến bến xe lúc mấy giờ?', options: ['Bảy giờ', 'Tám giờ', 'Chín giờ'], answer: 1,
  },
  {
    id: 'cho-sang', title: 'A morning at the market', titleVi: 'Buổi sáng ở chợ', level: 'Elementary', length: '9 min', tags: ['Food', 'Conversation'], color: 'butter',
    summary: 'Hương shops for fresh vegetables and shares a small moment with the vendor.',
    story: [
      { vi: 'Hương đi chợ sớm để mua rau tươi.', en: 'Hương goes to the market early to buy fresh vegetables.' },
      { vi: 'Cô hỏi giá, nếm thử một quả xoài rồi chọn thêm ít rau thơm.', en: 'She asks the price, tastes a mango, then picks up some herbs.' },
      { vi: 'Người bán tặng cô thêm một quả ớt vì hôm nay cô cười rất tươi.', en: 'The vendor gives her an extra chilli because she has such a bright smile today.' },
    ],
    vocabulary: ['đi chợ — to go to the market', 'rau thơm — herbs', 'tặng — to give as a gift'],
    question: 'Người bán tặng Hương thêm gì?', options: ['Một quả ớt', 'Một quả xoài', 'Một bó hoa'], answer: 0,
  },
  {
    id: 'la-thu-tu-hue', title: 'A letter from Huế', titleVi: 'Bức thư từ Huế', level: 'Intermediate', length: '10 min', tags: ['Culture', 'Reading'], color: 'blue',
    summary: 'Mai reads a letter slowly and imagines the city her friend describes.',
    story: [
      { vi: 'Mai nhận được một bức thư từ người bạn ở Huế.', en: 'Mai receives a letter from her friend in Huế.' },
      { vi: 'Bạn kể về dòng sông, những cơn mưa và món cơm hến.', en: 'Her friend writes about the river, the rain and cơm hến.' },
      { vi: 'Mai đọc thư hai lần vì muốn cảm nhận từng chi tiết.', en: 'Mai reads the letter twice because she wants to take in every detail.' },
    ],
    vocabulary: ['bức thư — letter', 'dòng sông — river', 'từng — each / every'],
    question: 'Bức thư được gửi từ đâu?', options: ['Hà Nội', 'Huế', 'Đà Nẵng'], answer: 1,
  },
  {
    id: 'nguoi-hang-xom', title: 'A new neighbour', titleVi: 'Người hàng xóm mới', level: 'Beginner', length: '6 min', tags: ['Introductions', 'People'], color: 'peach',
    summary: 'An meets a neighbour and asks a few gentle first questions.',
    story: [
      { vi: 'An gặp một người hàng xóm mới ở cầu thang.', en: 'An meets a new neighbour on the stairs.' },
      { vi: 'An chào chị và hỏi: “Chị tên là gì?”', en: 'An says hello and asks, “What is your name?”' },
      { vi: 'Người hàng xóm tên là Hoa. Chị ấy sống ở tầng ba.', en: 'The neighbour’s name is Hoa. She lives on the third floor.' },
    ],
    vocabulary: ['hàng xóm — neighbour', 'cầu thang — stairs', 'tầng — floor / storey'],
    question: 'Người hàng xóm tên là gì?', options: ['An', 'Hoa', 'Mai'], answer: 1,
  },
  {
    id: 'mat-chia-khoa', title: 'The missing key', titleVi: 'Chìa khóa bị mất', level: 'Elementary', length: '8 min', tags: ['Daily life', 'Questions'], color: 'mint',
    summary: 'Before leaving home, Bình looks for a key in three familiar places.',
    story: [
      { vi: 'Bình muốn đi ra ngoài nhưng không thấy chìa khóa.', en: 'Bình wants to go out but cannot see the key.' },
      { vi: 'Bình tìm trên bàn, trong túi và cạnh cửa.', en: 'Bình looks on the table, in the bag and beside the door.' },
      { vi: 'Cuối cùng, chìa khóa ở trong túi áo của Bình.', en: 'At last, the key is in Bình’s coat pocket.' },
    ],
    vocabulary: ['chìa khóa — key', 'tìm — to look for', 'cuối cùng — finally'],
    question: 'Chìa khóa ở đâu?', options: ['Trên bàn', 'Trong túi áo', 'Cạnh cửa'], answer: 1,
  },
  {
    id: 'bua-com-gia-dinh', title: 'Dinner with family', titleVi: 'Bữa cơm gia đình', level: 'Intermediate', length: '10 min', tags: ['Family', 'Food'], color: 'lilac',
    summary: 'A family waits for everyone before starting dinner together.',
    story: [
      { vi: 'Buổi tối, cả nhà cùng chuẩn bị bữa cơm.', en: 'In the evening, the family prepares dinner together.' },
      { vi: 'Mẹ nấu canh, bố rửa rau, còn Linh dọn bàn.', en: 'Mom makes soup, Dad washes vegetables, and Linh sets the table.' },
      { vi: 'Mọi người chờ bà về rồi mới ăn.', en: 'Everyone waits for Grandma to come home before eating.' },
    ],
    vocabulary: ['cả nhà — the whole family', 'chuẩn bị — to prepare', 'dọn bàn — to set the table'],
    question: 'Mọi người chờ ai về rồi mới ăn?', options: ['Bố', 'Bà', 'Linh'], answer: 1,
  },
];

export const articles = [
  {
    slug: 'a-polite-particle', title: 'Ạ: a small particle that says a lot', titleVi: 'Ạ: một từ nhỏ, nhiều sắc thái', category: 'Everyday Vietnamese', read: '4 min read',
    summary: 'See how ạ adds respect and warmth at the end of a sentence—and how children use it when greeting adults.',
    paragraphs: [
      'Ạ is often placed at the end of a sentence to express politeness and respect, especially when speaking to someone older or in a more formal situation. It is small, but it changes the feeling of a sentence.',
      'For example, “Vâng ạ” is a respectful “Yes,” and “Con chào mẹ ạ” is a warm greeting from a child to their mother. The right particle depends on who is speaking, who is listening and the relationship between them.',
      'In some family contexts, ạ can also be used as a verb-like prompt for a child to greet an adult. Notice the social context, not just the dictionary definition.',
    ],
  },
  {
    slug: 'chung-toi-chung-ta', title: 'Chúng tôi or chúng ta?', titleVi: 'Chúng tôi hay chúng ta?', category: 'Grammar', read: '3 min read',
    summary: 'A practical way to hear the difference between “we” that includes the listener and “we” that does not.',
    paragraphs: [
      'Vietnamese often makes an important distinction that English “we” leaves open. Chúng ta usually includes the person you are speaking to; chúng tôi usually does not.',
      'If you say “Chúng ta bắt đầu nhé,” you are inviting the listener to begin with you. “Chúng tôi sống ở Hà Nội” describes a group that does not include the listener.',
      'As with other pronouns, relationship and context matter. Listen for who is included in the conversation, not only for a one-word translation.',
    ],
  },
  {
    slug: 'six-tones', title: 'Six tones, one listening habit', titleVi: 'Sáu thanh điệu, một thói quen nghe', category: 'Pronunciation', read: '5 min read',
    summary: 'Train your ear with short contrasts before worrying about perfect production.',
    paragraphs: [
      'Vietnamese tones change the meaning of a syllable. Start by listening to one vowel with a steady voice, then notice where the pitch rises, falls, dips or stops.',
      'A useful practice is to listen, point to a tone contour, and repeat a short meaningful word. Keep the syllable and vowel as constant as possible while you focus on pitch and voice quality.',
      'Regional accents can sound different. The goal is not to force one perfect contour, but to understand the variety you are learning and to be clearly understood by your conversation partner.',
    ],
  },
  {
    slug: 'learn-through-stories', title: 'Why stories help language stick', titleVi: 'Vì sao câu chuyện giúp ghi nhớ?', category: 'Method', read: '5 min read',
    summary: 'A short introduction to TPR, TPRS and learning through meaning before memorising rules.',
    paragraphs: [
      'Total Physical Response (TPR) links language with a physical action. The learner hears a simple instruction, understands it in context and responds with movement before being asked to produce language.',
      'Teaching Proficiency through Reading and Storytelling (TPRS) extends the idea through short, repeated stories. Familiar words return in a new context, giving the learner several chances to understand and use them.',
      'Stories are not a replacement for focused feedback or grammar. They make useful language memorable and give learners a reason to listen, read and respond.',
    ],
  },
];
