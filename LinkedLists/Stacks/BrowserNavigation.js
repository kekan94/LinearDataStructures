const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "armwrestling.com";
// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage(action) {
  console.log(`\n${action}`);
  console.log(`\nYou are currently visiting ${currentPage}`);
  console.log(`\nIf you go back, you will visit ${backPages.peek()}`);
  console.log(`\nIf you go forward, you will visit ${nextPages.peek()}`);
}

function newPage(page) {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("New: ");
}

function backPage() {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("Back: ");
}

function nextPage() {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("Next: ");
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;
let showBack = false;
let showNext = false;
showCurrentPage('Default: ');

while(finish === false) {
  let instructions = baseInfo;
  if (backPages.peek() !== null) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }
  if (nextPages.peek() !== null) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}.`;
  
  console.log(instructions);
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();

  if (lowerCaseAnswer !== 'n' && lowerCaseAnswer !== 'b' && lowerCaseAnswer !== 'q') {
      newPage(answer);
  } else if (lowerCaseAnswer === 'b' && showBack === true) {
      backPage();
  } else if (lowerCaseAnswer === 'n' && showNext === true) {
      nextPage();
  } else if (lowerCaseAnswer === 'b') {
      console.log('Cannot go back a page. Stack is empty.');
  } else if (lowerCaseAnswer === 'n') {
      console.log('Cannot go to the next page. Stack is empty.');
  } else if (lowerCaseAnswer === 'q') {
      finish = true;
  }
} 