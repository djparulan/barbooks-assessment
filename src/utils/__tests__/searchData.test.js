import searchData from '../search';

describe('searchData', () => {
  test('returns an array of items containing the search term', () => {
    const data = [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Orange' },
    ];
    const searchTerm = 'Ap';

    const result = searchData(searchTerm, data);
    expect(result).toEqual([{ title: 'Apple' }]);
  });

  test('returns an empty array when no items contain the search term', () => {
    const data = [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Orange' },
    ];
    const searchTerm = 'Grape';

    const result = searchData(searchTerm, data);
    expect(result).toEqual([]);
  });

  test('ignores case when searching for items', () => {
    const data = [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Orange' },
    ];
    const searchTerm = 'bAN';

    const result = searchData(searchTerm, data);
    expect(result).toEqual([{ title: 'Banana' }]);
  });

  test('returns an empty array when the search term is an empty string', () => {
    const data = [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Orange' },
    ];
    const searchTerm = '';

    const result = searchData(searchTerm, data);
    expect(result).toEqual(data);
  });
});
