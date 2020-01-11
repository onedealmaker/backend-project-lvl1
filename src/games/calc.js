import engine, { getRandomNumber, cons } from '../fasade';

const description = 'What is the result of the expression?';
const logic = () => {
    const firstMember = getRandomNumber(1, 100);
    const secondMember = getRandomNumber(1, 100);
    const getOperatorIndex = getRandomNumber(1, 3);
    const operator = (operatorIndex) => {
        if (operatorIndex === 1) return '-';
        else if (operatorIndex === 2) return '+';
        return '*';
    };
    const calculator = (operatorIndex) => {
        if (operatorIndex === 1) return firstMember - secondMember;
        else if (operatorIndex === 2) return firstMember + secondMember;
        return firstMember * secondMember;
    };
    const eqation = `${firstMember} ${operator(getOperatorIndex)} ${secondMember}`;
    const rightAnswer = `${(calculator(getOperatorIndex))}`;
  return cons(eqation, rightAnswer);
};

export default () => engine(description, logic);
