import runEngine from '..';
import { getRandomNumber } from '../utils';

const description = 'What is the result of the expression?';
const operators = '-+*';

const calculate = (a, operator, b) => {
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const generateQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators.charAt(operatorIndex);
  const question = `${a} ${operator} ${b}`;
  const rightAnswer = String(calculate(a, operator, b));
  return [question, rightAnswer];
};

export default () => runEngine(description, generateQuestionAndAnswer);
