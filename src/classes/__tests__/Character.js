import Character from '../Character';
import CharacterTypes from '../../data/CharacterTypes';

test.each([
  ['less than 2', 'i'],
  ['longer than 10', 'abandonment'],
])('Testing Character creation with a name exception where the passed name is %s', (_, name) => {
  expect(() => new Character(name, CharacterTypes.bowman, 50, 50, 50, 50)).toThrow(Error);
});

test('Testing Character creation with type exception', () => {
  expect(() => new Character('character', 'Character', 50, 50, 50, 50)).toThrow(Error);
});

test('Testing the character\'s levelUp function, where we managed to increase the character level', () => {
  const character = new Character('character', CharacterTypes.bowman, 50, 50, 50, 50);
  character.levelUp();

  expect(character).toEqual({
    name: 'character', type: CharacterTypes.bowman, health: 100, level: 51, attack: 60, defence: 60,
  });
});

test('Testing the character\'s levelUp function, where it was not possible to increase the character level', () => {
  const character = new Character('character', CharacterTypes.bowman, 0, 50, 50, 50);

  expect(() => character.levelUp()).toThrow(Error);
});

test.each([
  ['changes', 50, 45],
  ['does not change', -1, -1],
])('Testing the character\'s damage function, where the character\'s life %s', (_, health, expected) => {
  const character = new Character('character', CharacterTypes.bowman, health, 50, 50, 50);
  character.damage(10);

  expect(character.health).toBe(expected);
});
