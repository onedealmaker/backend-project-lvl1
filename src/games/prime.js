import { engine } from '..';
import { getRandomNumber, cons } from '../fasade';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const logic = () => {
  const num = getRandomNumber(1, 3571);
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
  
    let i = 2;
  
    while (i <= num / 2) {
      if (num % i === 0) {
        return 'no';
      }
      i += 1;
    }
  
    return 'yes';
  };
  const rightAnswer = `${isPrime(num)}`;
  return cons(`${num}`, rightAnswer);
};

export default () => engine(description, logic);
