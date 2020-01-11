import engine, { getRandomNumber, cons } from '../fasade';

const description = 'Find the greatest common divisor of given numbers.';

const logic = () => {
  const firstMember = getRandomNumber(1, 100);
  const secondMember = getRandomNumber(1, 100);
  const gcd = (a, b) = (b === 0) ? a : gcd(b, a % b);
  const rightAnswer = `${gcd(firstMember, secondMember)}`;
  return cons(`${firstMember} ${secondMember}`, rightAnswer);
};

export default () => engine(description, logic);
