import ErrorRepository from '../errorRepository';

test('Team add()', () => {
  const errorsList = new ErrorRepository();
  errorsList.add(1, 'Ошибка 1');
  errorsList.add(2, 'Ошибка 2');
  expect(errorsList.translate(1)).toBe('Ошибка 1');
});
