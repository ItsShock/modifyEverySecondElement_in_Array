const modifyEverySecondElement = require('..');

describe('Funkcja modifyEverySecondElement', () => {
  it('powinna zwrócić tablice', async () => {
    const result = modifyEverySecondElement([1, 1]);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it('powinna zmodyfikować przekazany do niej parametr', async () => {
    const array = [1, 2, 3];
    const arrayCopy = [...array];
    modifyEverySecondElement(array);
  
    expect(array).not.toEqual(arrayCopy);
  });

  it('powinna zwrócić tablicę, która ma co drugi element powiększony o 1', async () => {
    expect(modifyEverySecondElement([1, 2, 3])).toEqual([1, 3, 3]);
    expect(modifyEverySecondElement([10, 10, 10, 10])).toEqual([10, 11, 10, 11]);
    expect(modifyEverySecondElement([0, 1, 0, 1, 0, 1])).toEqual([0, 2, 0, 2, 0, 2]);
  });
});
