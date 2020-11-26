test('1+2 === 3', () => {
  expect(1 + 2).toMatchFile();
})

test('a+b === ab', () => {
  expect('a' + 'b').toMatchFile();
})

test('array', () => {
  const array1 = [1, 2];
  const array2 = [3, 4];
  expect([...array1, ...array2]).toMatchFile();
})

test('object', () => {
  const state = {
    aaa: 111,
    bbb: 222,
    ccc: 333
  }
  expect(JSON.stringify(state, null, 4)).toMatchFile('custom-snapshot-name')
})
