import runEngine from '..';
import { getRandomNumber, cons } from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const currentMember = (firstMember, step, cycle) => firstMember + step * cycle;

const getQuestion = (rightAnswerIndex, firstMember, step) => {
  let question = '';
  for (let cycle = 0; cycle < progressionLength; cycle += 1) {
    if (rightAnswerIndex === cycle) question += '.. ';
    else question += `${currentMember(firstMember, step, cycle)} `;
  }
  return question.trim();
};

const generateQuestionAndAnswer = () => {
  const step = getRandomNumber(11, 21);
  const firstMember = getRandomNumber(1, 10);
  const rightAnswerIndex = getRandomNumber(0, progressionLength - 1);
  const rightAnswer = `${firstMember + step * (rightAnswerIndex)}`;
  const question = getQuestion(rightAnswerIndex, firstMember, step);
  return cons(question, rightAnswer);
};

export default () => runEngine(description, generateQuestionAndAnswer);
