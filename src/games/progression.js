import runEngine from '..';
import { getRandomNumber, cons } from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getMemberValue = (firstMember, step, memberIndex) => firstMember + step * memberIndex;

const getQuestion = (rightAnswerIndex, firstMember, step) => {
  let question = '';
  for (let memberIndex = 0; memberIndex < progressionLength; memberIndex += 1) {
    if (rightAnswerIndex === memberIndex) question = `${question}.. `;
    else question = `${question}${getMemberValue(firstMember, step, memberIndex)} `;
  }
  return question.trim();
};

const generateQuestionAndAnswer = () => {
  const step = getRandomNumber(11, 21);
  const firstMember = getRandomNumber(1, 10);
  const rightAnswerIndex = getRandomNumber(0, progressionLength - 1);
  const rightAnswer = String(getMemberValue(firstMember, step, rightAnswerIndex));
  const question = getQuestion(rightAnswerIndex, firstMember, step);
  return [question, rightAnswer];
};

export default () => runEngine(description, generateQuestionAndAnswer);
