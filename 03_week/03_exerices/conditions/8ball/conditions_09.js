/* 
Create a Magic 8-Ball program that emulates the classic fortune-telling toy. 
The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. 
Implement the program using conditional statements to select and display one of several predefined responses.
*/

const questionInput = document.getElementById('question-input');
const ballAnswer = document.getElementById('ball-answer');
const questionSubmit = document.getElementById('question-submit');
const loaderSpinner = document.getElementById('loader');

const shakeAnimation = (question) => {
  ballAnswer.textContent = '';
  loaderSpinner.hidden = false;
  questionSubmit.classList.add('shake');
  setTimeout(() => {
    questionSubmit.classList.remove('shake');
    loaderSpinner.hidden = true;
    switch (question) {
      case 'noQuestion':
        ballAnswer.textContent = 'That is not a question haiyaaaaa. Where is "?"';
        break;
      case 'empty':
        ballAnswer.textContent = 'The question field is empty haiyaa';
        break;
    }
    ballAnswer.style.color = 'rgb(255 118 108)';
    questionInput.style.borderColor = 'rgb(255 118 108)';
    questionInput.style.borderWidth = '3px';
  }, 500);
};

const performAnimation = () => {
  ballAnswer.textContent = '';
  loaderSpinner.hidden = false;
  questionSubmit.classList.add('animate');
  setTimeout(() => {
    questionSubmit.classList.remove('animate');
    loaderSpinner.hidden = true;
    ballAnswer.classList.remove();
    ballAnswer.textContent = magicAnswer();
    questionInput.value = '';
    ballAnswer.style.color = 'rgb(187, 223, 96)';
  }, 2000);
};

const magicAnswer = () => {
  const magicAnswers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];

  return magicAnswers[Math.round(Math.random() * (magicAnswers.length - 1))];
};

const validateQuestion = (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (question === '') {
    shakeAnimation('empty');
  } else if (!question.includes('?')) {
    shakeAnimation('noQuestion');
  } else {
    questionInput.removeAttribute('style');
    performAnimation();
  }
};
questionSubmit.addEventListener('click', validateQuestion);
