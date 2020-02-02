import runEngine from '..';
import { getRandomNumber, cons } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = (a, b) => (b === 0 ? a : findGcd(b, a % b));

const generateQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const question = `${a} ${b}`;
  const rightAnswer = String(findGcd(a, b));
  return cons(question, rightAnswer);
};

export default () => runEngine(description, generateQuestionAndAnswer);
