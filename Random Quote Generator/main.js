const quotes = [
  "Be yourself; everyone else is already taken. - Oscar Wilde ",
  "The only way to do great work is to love what you do. - Steve Jobs ",
  "The journey of a thousand miles begins with a single step. - Lao Tzu ",
  "Believe you can and you're halfway there. - Theodore Roosevelt ",
  "Spread love everywhere you go. - Mother Teresa ",
  "Life is really simple, but we insist on making it complicated. - Confucius ",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson ",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost ",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi ",
  "A friend is someone who knows all about you and still loves you. - Elbert Hubbard ",
  "Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell. - Joan Crawford ",
  "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. - Helen Keller ",
];
const quote = document.getElementById("quote");

function generateQuote() {
  let randomldx = Math.floor(Math.random() * quotes.length);

  let ourQuote = quotes[randomldx];
  quote.textContent = ourQuote;

  usedQuotes = add(randomldx);
}
