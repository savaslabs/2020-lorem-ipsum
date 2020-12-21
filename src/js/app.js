import wordList from './wordList';
import Rellax from 'rellax';

const rellax = new Rellax('.rellax', {
  speed: 1.5,
});

document.addEventListener('scroll', rellax.refresh());

// Return random integer between a max and min value.
const random = (max, min) => Math.floor(Math.random() * (max - min) + min);

// Pull a word at random from the word list.
const getRandomWord = () => wordList[random(wordList.length, 0)];

// Generate words, sentences, and paragraphs.
const generate = (type, num) => {
  // Array to return.
  let arr = [];
  let i = 0;

  while (i < num) {
    switch (type) {
      case 'words':
        while (i < num) {
          const randomWord = getRandomWord();

          // Don't generate same word twice in one batch.
          if (!arr.includes(randomWord)) {
            arr.push(randomWord);
            i++;
          } else {
            // Set i to itself to repeat and find a new word.
            i = i;
          }
        }
        // Join all words adding to arr into string.
        return arr.join(' ');

      case 'sentences':
        while (i < num) {
          // Generate a sentence between 3 and 9 words.
          let sentence = generate('words', random(9, 3));

          if (i > 0) {
            // Capitalize first letter in sentence.
            sentence = `${sentence[0].charAt(0).toUpperCase()}${sentence.slice(
              1
            )}`;
          }
          arr.push(sentence);
          i++;
        }

        // Join all sentences, with periods at end of each setence.
        return arr.join('. ');

      case 'paragraphs':
        while (i < num) {
          // Each paragraph wrapped in <p>.
          const el = document.createElement('p');
          // Generate paragraphs between 5-8 sentences.
          el.innerText = generate('sentences', random(8, 5));
          arr.push(el);
          i++;
        }

        // Returning arr vs string here to append each <p> element.
        return arr;
    }
  }
};

const appendOutput = (output) => {
  const outputContainer = document.querySelector('div#output');

  // Output is an array in case of paragraphs.
  if (Array.isArray(output)) {
    output.forEach((el, index) => {
      // Add Lorem ipsum to start of output.
      if (index === 0) {
        el.innerText = `Lorem ipsum ${el.innerText}.`;
      } else {
        // Capitalize first letter of each paragraph.
        el.innerText = `${el.innerText
          .charAt(0)
          .toUpperCase()}${el.innerText.slice(1)}.`;
      }
      outputContainer.append(el);
    });
  } else {
    const el = document.createElement('p');
    el.innerText = `Lorem ipsum ${output}.`;
    outputContainer.append(el);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Reset output container to be empty.
  document.querySelector('div#output').innerHTML = '';

  // Pull values from form.
  const { type, number } = e.target.elements;

  const output = generate(type.value, number.value);
  appendOutput(output);
};

// Copy text in div#output.
const copyText = () => {
  const output = document.querySelector('div#output');
  const range = document.createRange();
  range.selectNode(output);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert('data copied');
};

// Event Handlers.
const form = document.querySelector('form#generateForm');
form.addEventListener('submit', handleSubmit);

const copyButton = document.querySelector('button#copy-button');
copyButton.addEventListener('click', copyText);

document.addEventListener('DOMContentLoaded', () => {
  const startingOutput = generate('paragraphs', 2);
  appendOutput(startingOutput);
});
