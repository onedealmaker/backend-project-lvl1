import engine from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'What is the result of the expression?';

const getOperator = (operatorIndex) => {
  if (operatorIndex === 1) return '-';
  if (operatorIndex === 2) return '+';
  return '*';
};

const calculator = (firstMember, operatorIndex, secondMember) => {
  if (operatorIndex === 1) return firstMember - secondMember;
  if (operatorIndex === 2) return firstMember + secondMember;
  return firstMember * secondMember;
};

const logic = () => {
  const firstMember = getRandomNumber(1, 100);
  const secondMember = getRandomNumber(1, 100);
  const operatorIndex = getRandomNumber(1, 3);
  const eqation = `${firstMember} ${getOperator(operatorIndex)} ${secondMember}`;
  const rightAnswer = `${(calculator(firstMember, operatorIndex, secondMember))}`;
  return cons(eqation, rightAnswer);
};

export default () => engine(description, logic);
