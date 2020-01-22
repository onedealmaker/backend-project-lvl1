import engine from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'What is the result of the expression?';
const operators = '-+*';

const calculator = (firstMember, operatorIndex, secondMember) => {
  let rightAnswer = 0;
  switch (operators.charAt(operatorIndex)) {
    case '-': rightAnswer = firstMember - secondMember;
      break;
    case '+': rightAnswer = firstMember + secondMember;
      break;
    default: rightAnswer = firstMember * secondMember;
  }
  return rightAnswer;
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
