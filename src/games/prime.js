import runEngine from '..';
import { getRandomNumber } from '../utils';

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

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 3000);
  const rightAnswer = checkIsNumPrime(question) ? 'yes' : 'no';
  return [String(question), rightAnswer];
};

export default () => runEngine(description, generateQuestionAndAnswer);
