import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedResult = 'someClass class1 class2';

        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedResult);
    });

    test('with mods', () => {
        const expectedResult = 'someClass class1 class2 hover scrollable';

        expect(classNames(
            'someClass',
            { hover: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expectedResult);
    });

    test('with mods false', () => {
        const expectedResult = 'someClass class1 class2 hover';

        expect(classNames(
            'someClass',
            { hover: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expectedResult);
    });

    test('with mods undefined', () => {
        const expectedResult = 'someClass class1 class2 hover';

        expect(classNames(
            'someClass',
            { hover: true, scrollable: undefined },
            ['class1', 'class2'],
        ))
            .toBe(expectedResult);
    });
});
