import add from '../__mocks__/add';
import removeItem from '../__mocks__/removeitem';

jest.mock('../functions');
jest.mock('../storage');
jest.mock('../addremove');
jest.mock('../index');

describe('Add function', () => {
  test('Add one new item to the list', () => {
    expect(add().length).toBe(2);
  });

  test('Remove one new item from the list', () => {
    expect(removeItem().length).toBe(0);
  });
});
