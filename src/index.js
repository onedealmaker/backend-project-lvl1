import { readlineSync, car, cdr } from './fasade';

export default () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

const rightAnwersNeed = 3;

export const engine = (task, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const check = (lap) => {
    if (lap === rightAnwersNeed) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }

    const trueAnswer = game();
    console.log(`Question: ${car(trueAnswer)}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === cdr(trueAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${cdr(trueAnswer)}'. Let's try again, ${playerName}!`);
      return;
    }

    check(lap + 1);
  };

  check(0);
};
