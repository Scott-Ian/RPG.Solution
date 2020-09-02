// import { plantCreator } from '../src/RPG.js';
import * as RPG from '../src/RPG.js';

describe('RPG', () => {
  const initialStats = { hunger: 10, sun: 10, health: 10, defense: 5, leafCount: 1 }

  test('should create a new plant character', () => {
    const myPlant = RPG.plantCreator(initialStats);
    expect(myPlant()).toMatchObject({ hunger: 10, sun: 10, health: 10, defense: 5, leafCount: 1 });
  });

  test('should change plant health', () => {
    const myPlant = RPG.plantCreator(initialStats);
    expect(myPlant(RPG.decrementHealth)).toMatchObject({ hunger: 10, sun: 10, health: 9, defense: 5, leafCount: 1 });
  });

  test('should change plant health', () => {
    const myPlant = RPG.plantCreator(initialStats);
    expect(myPlant(RPG.incrementHealth)).toMatchObject({ hunger: 10, sun: 10, health: 11, defense: 5, leafCount: 1 });
  });


});