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
        ballAnswer.textContent = 'That is not a question haiyaaaaa';
        break;
      case 'empty':
        ballAnswer.textContent = 'Write your question first haiyaa';
        break;
    }
    ballAnswer.style.color = '#ff1100';
    questionInput.style.borderColor = 'red';
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
  }, 2500);
};

const magicAnswer = (question) => {
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
  if (question == '') {
    shakeAnimation('empty');
  } else if (!question.includes('?')) {
    shakeAnimation('noQuestion');
  } else {
    questionInput.removeAttribute('style');
    performAnimation();
  }
};
