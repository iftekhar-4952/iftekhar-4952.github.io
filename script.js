const words = [
  {
    word: 'だいがく',
    pronunciation: 'daigaku',
    meaning: 'university',
    sentence: 'わたしはだいがくに入学します。',
    sentence_pronunciation: 'Watashi wa daigaku ni nyuugaku shimasu.',
    sentence_meaning: 'I will enter university.'
  },
  // rest of words array
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
