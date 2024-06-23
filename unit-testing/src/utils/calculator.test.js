import * as calculator from './calculator';

describe('Calculator Sum', () => {
    test('Sum of positive numbers should be positive', () => {
        const first = 1;
        const second = 2;
        const expectedResult = 3;

        const actualResult = calculator.sum(first, second);

        expect(actualResult).toBe(expectedResult);
    });

    test('Use undefined as an argument should return NaN', () => {
        expect(calculator.sum("1", 2)).toBe(3);
    });
});

describe('Calculator devide', () => {
    test('Should throw error when divide by 0', () => {
        expect(() => calculator.devide(2, 0)).toThrow('Can not devide by 0');
    })
});