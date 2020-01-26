import engine from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkIsNumPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRightAnswer = (num) => {
  if (checkIsNumPrime(num) === false) return 'no';
  return 'yes';
};

const generateQuestionAndAnswer = () => {
  const randomNum = getRandomNumber(1, 3000);
  const rightAnswer = getRightAnswer(randomNum);
  return cons(`${randomNum}`, rightAnswer);
};

export default () => engine(description, generateQuestionAndAnswer);
