import { engine } from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'What number is missing in the progression?';
const logic = () => {
  const progressionStep = getRandomNumber(11, 21);
  const theFirstNum = getRandomNumber(1, 10);
  const numOfRightAnswer = getRandomNumber(1, 10);
  let progressionStr = theFirstNum;
  const progressionAsString = (cycle, str) => {
    if (cycle + 2 > 10) return str;
    progressionStr += progressionStep;
    if (cycle + 2 === numOfRightAnswer) {
      return progressionAsString(cycle + 1, `${str} ..`);
    }

    return progressionAsString(cycle + 1, `${str} ${progressionStr}`);
  };
  const rightAnswer = (cycle, b) => {
    if (cycle === 1) return b;
    return rightAnswer(cycle - 1, b + progressionStep);
  };
  return cons(progressionAsString(0, `${theFirstNum}`), `${rightAnswer(numOfRightAnswer, theFirstNum)}`);
};

export default () => engine(description, logic);
