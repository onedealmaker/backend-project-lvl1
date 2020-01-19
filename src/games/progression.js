import engine from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'What number is missing in the progression?';

const logic = () => {
  const progressionStep = getRandomNumber(11, 21); // logic will add this value every cycle
  const theFirstNum = getRandomNumber(1, 10);
  const numOfRightAnswer = getRandomNumber(1, 10);

  const progressionAsString = (cycle, acc) => {
    if (cycle >= 10) return acc; // amount of values in progression = 10
    if (cycle === numOfRightAnswer - 1) {
      if (cycle === 0) return progressionAsString(cycle + 1, '.. ');
      return progressionAsString(cycle + 1, `${acc}.. `);
    }

    const value = theFirstNum + progressionStep * cycle;
    return progressionAsString(cycle + 1, `${acc}${value} `);
  };
  const rightAnswer = `${theFirstNum + progressionStep * (numOfRightAnswer - 1)}`;
  return cons(progressionAsString(0, ''), rightAnswer);
};

export default () => engine(description, logic);
