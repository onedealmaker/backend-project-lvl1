import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

const rightAnwersNeed = 3;
const description = 'Answer "yes" if number even otherwise answer "no".';
const isNumberEven = num => num % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const logic = () => {
    const randomNumber = getRandomNumber(1, 100);
    const rightAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
    return cons(randomNumber, rightAnswer);
  };

const engine = (description, logic) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const check = (lap) => {
    if (lap === rightAnwersNeed) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }

    const trueAnswer = logic();
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

export default () => engine(description, logic);
