import runEngine from '..';
import { getRandomNumber, cons } from '../utils';

const description = 'What number is missing in the progression?';
const progressionMembersAmount = 10;
const getProgressionAsString = (rightAnswerIndex, theFirstNum, progressionStep, cycle, acc) => {
  if (cycle >= progressionMembersAmount) return acc;
  if (cycle === rightAnswerIndex - 1) {
    if (cycle === 0) return getProgressionAsString(rightAnswerIndex, theFirstNum, progressionStep, cycle + 1, '.. ');
    return getProgressionAsString(rightAnswerIndex, theFirstNum, progressionStep, cycle + 1, `${acc}.. `);
  }

  const currentValue = theFirstNum + progressionStep * cycle;
  return getProgressionAsString(rightAnswerIndex, theFirstNum, progressionStep, cycle + 1, `${acc}${currentValue} `);
};

const generateQuestionAndAnswer = () => {
  const progressionStep = getRandomNumber(11, 21);
  const theFirstNum = getRandomNumber(1, 10);
  const rightAnswerIndex = getRandomNumber(1, progressionMembersAmount);
  const rightAnswer = `${theFirstNum + progressionStep * (rightAnswerIndex - 1)}`;
  const question = getProgressionAsString(rightAnswerIndex, theFirstNum, progressionStep, 0, '');
  return cons(question, rightAnswer);
};

export default () => runEngine(description, generateQuestionAndAnswer);
