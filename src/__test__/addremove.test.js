import add from '../__mocks__/add';
import removeItem from '../__mocks__/removeitem';
import editItem from '../__mocks__/editItem';
import indexUpdate from '../__mocks__/indexUpdate';
import clearAll from '../__mocks__/clearAll';
import status from '../__mocks__/status';


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

  test('Remove all completed items from list', () => {
    expect(clearAll().length).toBe(1);
  });

  test('Edit a list item', () => {
    expect(editItem()).toBe('some state...');
  });

  test('Update the index of list when one item is deleted', () => {
    expect(indexUpdate()).toEqual([1, 2]);
  });

  test('Check list item when status changes', () => {
    expect(status()).toBe(true);
  });
});
