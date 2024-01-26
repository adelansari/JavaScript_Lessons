/* 
Create a Magic 8-Ball program that emulates the classic fortune-telling toy. 
The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. 
Implement the program using conditional statements to select and display one of several predefined responses.
*/

const questionInput = document.getElementById('question-id');
// const questionSubmit = document.getElementById('question-submit');

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

const validateQuestion = () => {
  if (!questionInput) {
    document.getElementById('ball-answer').innerHTML = magicAnswer();
    document.getElementById('ball-answer').style.color = 'white';
  } else {
    document.getElementById('ball-answer').innerHTML =
      'Write your question first Haiya';
    document.getElementById('ball-answer').style.color = 'orange';
  }
};
