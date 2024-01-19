import { classNames } from 'shared/lib/classNames/classNames';
describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });
    test('with additional class', function () {
        var result = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(result);
    });
    test('with mods', function () {
        var result = 'someClass hovered focus class1 class2';
        expect(classNames('someClass', { hovered: true, focus: true }, [
            'class1',
            'class2'
        ])).toBe(result);
    });
    test('with mods', function () {
        var result = 'someClass hovered class1 class2';
        expect(classNames('someClass', { hovered: true, focus: false }, [
            'class1',
            'class2'
        ])).toBe(result);
    });
    test('with mods', function () {
        var result = 'someClass focus class1 class2';
        expect(classNames('someClass', { hovered: null, focus: true }, [
            'class1',
            'class2'
        ])).toBe(result);
    });
});
//# sourceMappingURL=classNames.test.js.map