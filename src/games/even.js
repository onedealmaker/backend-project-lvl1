import engine from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isNumberEven = (num) => num % 2 === 0;

const logic = () => {
  const randomNumber = getRandomNumber(1, 100);
  const rightAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, rightAnswer);
};

export default () => engine(description, logic);
