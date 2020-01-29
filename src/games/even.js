import runEngine from '..';
import { getRandomNumber, cons } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isNumberEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isNumberEven(question) ? 'yes' : 'no';
  return cons(String(question), rightAnswer);
};

export default () => runEngine(description, generateQuestionAndAnswer);
