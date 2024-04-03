import { getQueryParams } from '../addQuertParams/addQueryParams';

describe('addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'test'
    });

    expect(params).toBe('?test=test');
  });

  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'test',
      second: 'second'
    });

    expect(params).toBe('?test=test&second=second');
  });

  test('test with undefined', () => {
    const params = getQueryParams({
      test: 'test',
      second: undefined
    });

    expect(params).toBe('?test=test');
  });
});
