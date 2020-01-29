import { readlineSync, car, cdr } from './utils';

const rightAnwersNeed = 3;

export default (task, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const check = (lap) => {
    if (lap === rightAnwersNeed) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }

    const questionAndAnswer = getQuestionAndAnswer();
    const question = car(questionAndAnswer);
    const trueAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. Let's try again, ${playerName}!`);
      return;
    }

    check(lap + 1);
  };

  check(0);
};
