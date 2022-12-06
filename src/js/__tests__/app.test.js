import ErrorRepository from '../app';

test('Известная ошибка', () => {
  const err = new ErrorRepository();
  expect(err.translate(1)).toBe('error 1');
});

test('Неизвестная ошибка', () => {
  const err = new ErrorRepository();
  expect(() => err.translate(2)).toThrow('Unknown error')
});
