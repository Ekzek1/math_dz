import Daemon from '../daemon';
import Magican from '../magican';

test('test function setAttck or class Skill', () => {
  const result = new Magican();
  expect(result.setAttack(2, 100)).toEqual(90);
});

test('test function setAttck or class Skill', () => {
  const result = new Daemon();
  expect(result.setAttack(3, 100)).toEqual(80);
});

test('test function setAttck or class Skill', () => {
  const result = new Daemon('Zombie');
  expect(result.setAttack(2, 100)).toEqual(100);
});

test('test function setStonned or class Skill', () => {
  const result = new Magican();
  expect(result.setStonned(2, 100)).toEqual(85);
});

test('test function setStonned or class Skill', () => {
  const result = new Daemon();
  expect(result.setStonned(4, 100)).toEqual(60);
});

test('test function setStonned or class Skill', () => {
  const result = new Daemon('Zombie');
  expect(result.setStonned(4, 100)).toEqual(100);
});
