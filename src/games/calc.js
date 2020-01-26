import engine from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'What is the result of the expression?';
const operators = '-+*';

const calculator = (firstMember, operatorIndex, secondMember) => {
  let result = '';
  switch (operators.charAt(operatorIndex)) {
    case '-': result = `${firstMember - secondMember}`;
      break;
    case '+': result = `${firstMember + secondMember}`;
      break;
    default: result = `${firstMember * secondMember}`;
  }
  return result;
};

const generateQuestionAndAnswer = () => {
  const firstMember = getRandomNumber(1, 100);
  const secondMember = getRandomNumber(1, 100);
  const operatorIndex = getRandomNumber(0, 2);
  const eqation = `${firstMember} ${operators.charAt(operatorIndex)} ${secondMember}`;
  const rightAnswer = `${(calculator(firstMember, operatorIndex, secondMember))}`;
  return cons(eqation, rightAnswer);
};

export default () => engine(description, generateQuestionAndAnswer);
