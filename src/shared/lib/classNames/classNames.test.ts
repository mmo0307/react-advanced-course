import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass', {}, [])).toBe('someClass');
  });

  test('with additional class', () => {
    const result = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(result);
  });

  test('with mods', () => {
    const result = 'someClass class1 class2 hovered focus';
    expect(
      classNames('someClass', { hovered: true, focus: true }, [
        'class1',
        'class2'
      ])
    ).toBe(result);
  });

  test('with mods', () => {
    const result = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, focus: false }, [
        'class1',
        'class2'
      ])
    ).toBe(result);
  });

  test('with mods', () => {
    const result = 'someClass class1 class2 focus';
    expect(
      classNames('someClass', { hovered: null, focus: true }, [
        'class1',
        'class2'
      ])
    ).toBe(result);
  });
});
