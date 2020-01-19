import engine from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'What is the result of the expression?';
const operators = '-+*';

const calculator = (firstMember, operatorIndex, secondMember) => {
  if (operatorIndex === 0) return firstMember - secondMember;
  if (operatorIndex === 1) return firstMember + secondMember;
  return firstMember * secondMember;
};

const logic = () => {
  const firstMember = getRandomNumber(1, 100);
  const secondMember = getRandomNumber(1, 100);
  const operatorIndex = getRandomNumber(0, 2);
  const eqation = `${firstMember} ${operators.charAt(operatorIndex)} ${secondMember}`;
  const rightAnswer = `${(calculator(firstMember, operatorIndex, secondMember))}`;
  return cons(eqation, rightAnswer);
};

export default () => engine(description, logic);
