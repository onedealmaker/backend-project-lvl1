import runEngine from '..';
import { getRandomNumber, cons } from '../utils';

const description = 'What is the result of the expression?';
const operators = '-+*';

const calculator = (a, operator, b) => {
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    default:
      break;
  }
  return a * b;
};

const generateQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operatorIndex = getRandomNumber(0, 2);
  const question = `${a} ${operators.charAt(operatorIndex)} ${b}`;
  const rightAnswer = String(calculator(a, operators.charAt(operatorIndex), b));
  return cons(question, rightAnswer);
};

export default () => runEngine(description, generateQuestionAndAnswer);
