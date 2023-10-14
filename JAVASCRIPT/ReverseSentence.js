const prompt=require("prompt-sync")({sigint:true}); 

function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Reverse each word and store them in an array
    const reversedWords = words.map(word => {
      // Reverse the characters in each word
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Accept input from the user
  const inputSentence = prompt("Enter a sentence:");
  const reversedSentence = reverseWords(inputSentence);
  
  console.log(reversedSentence);
  