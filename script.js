const words = [
  {
    word: 'だいがく',
    pronunciation: 'daigaku',
    meaning: 'university',
    sentence: 'わたしはだいがくに入学します。',
    sentence_pronunciation: 'Watashi wa daigaku ni nyuugaku shimasu.',
    sentence_meaning: 'I will enter university.'
  },
  {
    word: 'こうこう',
    pronunciation: 'koukou',
    meaning: 'high school',
    sentence: 'わたしの妹はもうこうこう生です。',
    sentence_pronunciation: 'Watashi no imouto wa mou koukou sei desu.',
    sentence_meaning: 'My younger sister is already a high school student.'
  },
  {
    word: 'がくせい',
    pronunciation: 'gakusei',
    meaning: 'student',
    sentence: 'あの人は有名ながくせいです。',
    sentence_pronunciation: 'Ano hito wa yuumei na gakusei desu.',
    sentence_meaning: 'That person is a famous student.'
  },
  {
    word: 'だいがくせい',
    pronunciation: 'daigakusei',
    meaning: 'university student',
    sentence: 'わたしはだいがくせいで、英語を勉強しています。',
    sentence_pronunciation: 'Watashi wa daigakusei de, eigo o benkyou shiteimasu.',
    sentence_meaning: 'I am a university student and studying English.'
  },
  {
    word: 'りゅうがくせい',
    pronunciation: 'ryuugakusei',
    meaning: 'international student',
    sentence: 'この学校にはたくさんのりゅうがくせいがいます。',
    sentence_pronunciation: 'Kono gakkou ni wa takusan no ryuugakusei ga imasu.',
    sentence_meaning: 'There are many international students at this school.'
  },
  {
    word: 'せんせい',
    pronunciation: 'sensei',
    meaning: 'teacher',
    sentence: 'せんせい、質問があります。',
    sentence_pronunciation: 'Sensei, shitsumon ga arimasu.',
    sentence_meaning: 'Teacher, I have a question.'
  },
  {
    word: '~ねんせい',
    pronunciation: '~nensei',
    meaning: '~th year student (used for grade levels)',
    sentence: 'わたしは四ねんせいです。',
    sentence_pronunciation: 'Watashi wa yon-nensei desu.',
    sentence_meaning: 'I am a fourth-year student.'
  },
  {
    word: 'いちねんせい',
    pronunciation: 'ichinensei',
    meaning: 'first-year student',
    sentence: 'あの女の子は一ねんせいです。',
    sentence_pronunciation: 'Ano onnanoko wa ichinen-sei desu.',
    sentence_meaning: 'That girl is a first-year student.'
  },
  {
    word: 'せんこう',
    pronunciation: 'senkou',
    meaning: 'major (in the context of academic subjects)',
    sentence: 'わたしのせんこうは心理学です。',
    sentence_pronunciation: 'Watashi no senkou wa shinrigaku desu.',
    sentence_meaning: 'My major is psychology.'
  },
  {
    word: 'わたし',
    pronunciation: 'watashi',
    meaning: 'I, me',
    sentence: 'わたしは日本から来ました。',
    sentence_pronunciation: 'Watashi wa Nihon kara kimashita.',
    sentence_meaning: 'I came from Japan.'
  },
  {
    word: 'ともだち',
    pronunciation: 'tomodachi', 
    meaning: 'friend',
    sentence: 'あなたはわたしの一番のともだちです。',
    sentence_pronunciation: 'Anata wa watashi no ichiban no tomodachi desu.',
    sentence_meaning: 'You are my best friend.'
  },
  {
    word: '~さん',
    pronunciation: '~san',
    meaning: 'Mr./Ms. (a title of respect)',
    sentence: 'やまださんは先生です。',
    sentence_pronunciation: 'Yamada- san wa sensei desu.',
    sentence_meaning: 'Mr./Ms. Yamada is a teacher.'
  },
  {
    word: '~じん',
    pronunciation: '~jin',
    meaning: 'person from ~ (used for nationalities)',
    sentence: 'にほんじんの友達がいます。',
    sentence_pronunciation: 'Nihon- jin no tomodachi ga imasu.',
    sentence_meaning: 'I have a friend who is a Japanese person.'
  },
  {
    word: 'にほんじん',
    pronunciation: 'Nihonjin',
    meaning: 'Japanese person',
    sentence: 'わたしはにほんじんです。',
    sentence_pronunciation: 'Watashi wa Nihonjin desu.',
    sentence_meaning: 'I am a Japanese person.'
  },
  {
    word: 'いま',
    pronunciation: 'ima',
    meaning: 'now',
    sentence: 'いま、何をしていますか?',
    sentence_pronunciation: 'Ima, nani o shiteimasu ka?',
    sentence_meaning: 'What are you doing now?'
  },
  {
    word: 'ごぜん',
    pronunciation: 'gozen',
    meaning: 'a.m. (ante meridiem)',
    sentence: 'アポイントメントはごぜん10時です。',
    sentence_pronunciation: 'Apoointomento wa gozen juu-ji desu.',
    sentence_meaning: 'The appointment is at 10 a.m..'
  },
  {  
    word: 'ごご',
    pronunciation: 'gogo',
    meaning: 'p.m. (post meridiem)',
    sentence: '会議はごご2時からです。',
    sentence_pronunciation: 'Kaigi wa gogo ni-ji kara desu.',
    sentence_meaning: 'The meeting is from 2 p.m..'
  },
  {
    word: '~じ',
    pronunciation: '~ji',
    meaning: 'o\'clock (used with hours)',
    sentence: 'パーティーは何じに始まりますか?',
    sentence_pronunciation: 'Paatii wa nani- ji ni hajimarimasu ka?',
    sentence_meaning: 'What time does the party start?'
  },
  {
    word: 'いちじ',
    pronunciation: 'ichiji', 
    meaning: '1 o\'clock',
    sentence: '明日の会議は一じ半からです。',
    sentence_pronunciation: 'Kaigi wa ichi-ji han kara desu.',
    sentence_meaning: 'The meeting starts at 1:30.'
  },
  {
    word: 'はん',
    pronunciation: 'han',
    meaning: 'half (used with hours)',
    sentence: '昼食は十二じはんに食べます。',
    sentence_pronunciation: 'Chuushoku wa juu-ni- ji-han ni tabemasu.',
    sentence_meaning: 'I have lunch at half-past twelve.'
  },
  {
    word: 'にじはん',
    pronunciation: 'nijihan',
    meaning: '2:30',
    sentence: 'バスはにじはんに来ます。',
    sentence_pronunciation: 'Basu wa ni-ji-han ni kimasu.',
    sentence_meaning: 'The bus comes at 2:30.'
  },
  {
    word: 'にほん',
    pronunciation: 'nihon',
    meaning: 'Japan',
    sentence: 'わたしはにほんに行ったことがあります。',
    sentence_pronunciation: 'Watashi wa Nihon ni itta koto ga arimasu.',
    sentence_meaning: 'I have been to Japan.'
  },
  {
    word: 'アメリカ',
    pronunciation: 'amerika',
    meaning: 'America',
    sentence: 'アメリカの首都はワシントンD.C.です。',
    sentence_pronunciation: 'Amerika no shuto wa U~ashington D.C. desu.',
    sentence_meaning: 'The capital of America is Washington D.C.'
  },
  {
    word: 'にほんご',
    pronunciation: 'nihongo',
    meaning: 'Japanese language',
    sentence: 'にほんごを勉強しています。',
    sentence_pronunciation: 'Nihongo o benkyou shiteimasu.',
    sentence_meaning: 'I am studying Japanese language.'
  },
  {  
    word: '〜さい',
    pronunciation: '~sai',
    meaning: 'years old (used after age)',
    sentence: 'わたしは二十さいです。',
    sentence_pronunciation: 'Watashi wa ni-juu- sai desu.',
    sentence_meaning: 'I am twenty years old.'
  },
  {
    word: 'でんわ',
    pronunciation: 'denwa',
    meaning: 'telephone',
    sentence: '友達にでんわをかけました。',
    sentence_pronunciation: 'Tomodachi ni denwa o kakemashita.',
    sentence_meaning: 'I called my friend on the phone.'
  },
  {
    word: '~ばん',
    pronunciation: '~ban',
    meaning: 'number (used for phone numbers)',
    sentence: 'わたしの電話ばんは080-1234-5678です。',
    sentence_pronunciation: 'Watashi no denwa- ban wa zero-hachi-zero, ichi-ni-san-yon-go-nana-hachi-desu.',
    sentence_meaning: 'My phone number is 080-1234-5678.'
  },
  {
    word: 'ばんごう',
    pronunciation: 'bangou',
    meaning: 'number',
    sentence: '電話番号を教えてください。',
    sentence_pronunciation: 'Denwa bangou o oshiete kudasai.',
    sentence_meaning: 'Please tell me your phone number.'
  },
  {
    word: 'なまえ',
    pronunciation: 'namae',
    meaning: 'name',
    sentence: 'はじめまして、私の名前は田中です。',
    sentence_pronunciation: 'Hajimemashite, watashi no namae wa Tanaka desu.',
    sentence_meaning: 'Nice to meet you, my name is Tanaka.'
  },
  {
    word: 'なん/なに', 
    pronunciation: 'nan/nani',
    meaning: 'what',
    sentence: '何を食べたいですか?',
    sentence_pronunciation: 'Nani o tabetai desu ka?',
    sentence_meaning: 'What do you want to eat?'
  },
  {
    word: 'あのう',
    pronunciation: 'anou',
    meaning: 'well, um',
    sentence: 'あのう、ちょっと質問があります。',
    sentence_pronunciation: 'Anou, chotto shitsumon ga arimasu.',
    sentence_meaning: 'Um, I have a question.'
  },
  {
    word: 'はい',
    pronunciation: 'hai',
    meaning: 'yes',
    sentence: 'はい、分かりました。',
    sentence_pronunciation: 'Hai, wakarimashita.',
    sentence_meaning: 'Yes, I understand.'
  },
  {
    word: 'そうです',
    pronunciation: 'sou desu',
    meaning: 'that\'s correct, yes',
    sentence: 'そうです、それが正解です。',
    sentence_pronunciation: 'Sou desu, sore ga seikai desu.',
    sentence_meaning: 'That\'s correct, that\'s the right answer.'
  },
  {
    word: 'そうですか',
    pronunciation: 'sou desu ka',
    meaning: 'is that so? really?',
    sentence: 'そうですか、それは興味深いですね。',
    sentence_pronunciation: 'Sou desu ka, sore wa kyoumi fukai desu ne.',
    sentence_meaning: 'Is that so? That\'s interesting.'
  }
];

let currentIndex = 0;

displayWord();

function displayWord() {
  const word = words[currentIndex];

  document.querySelector('.word').textContent = word.word;
  document.querySelector('.pronunciation').textContent = word.pronunciation;
  document.querySelector('.meaning').textContent = word.meaning;

  document.querySelector('.sentence').textContent = word.sentence; 
  document.querySelector('.sentence-pronunciation').textContent = word.sentence_pronunciation;
  document.querySelector('.sentence-meaning').textContent = word.sentence_meaning;

  handleButtons();
}

function nextWord() {
  currentIndex++;
  if(currentIndex >= words.length) {
    currentIndex = 0; 
  }
  displayWord();
}

function prevWord() {
  currentIndex--;
  if(currentIndex < 0) {
    currentIndex = words.length - 1;
  }
  displayWord();
}

document.getElementById('next').addEventListener('click', nextWord);
document.getElementById('prev').addEventListener('click', prevWord);

function handleButtons() {
  document.getElementById('next').disabled = currentIndex === words.length - 1;
  document.getElementById('prev').disabled = currentIndex === 0;
}
