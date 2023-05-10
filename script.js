const starters = [
    "Believe you can and you're halfway there.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only way to do great work is to love what you do.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "If you want to lift yourself up, lift up someone else."
  ];
  
  const middles = [
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You don't have to be great to start, but you have to start to be great.",
    "The best way to predict the future is to create it."
  ];
  
  const endings = [
    "-Theodore Roosevelt",
    "-C.S. Lewis",
    "-Steve Jobs",
    "-Christian D. Larson",
    "-Booker T. Washington"
  ];
  
  function generateRandomQuote() {
    const starterIndex = Math.floor(Math.random() * starters.length);
    const middleIndex = Math.floor(Math.random() * middles.length);
    const endingIndex = Math.floor(Math.random() * endings.length);
  
    const quote = `${starters[starterIndex]} ${middles[middleIndex]} ${endings[endingIndex]}`;
    return quote;
  }
  
  console.log(generateRandomQuote());