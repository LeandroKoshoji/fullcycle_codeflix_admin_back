import { ValueObject } from "../value-objects";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}

class ComplexValueObject extends ValueObject {
    constructor(readonly value1: string, readonly value2: number) {
        super();
    }
}

describe('ValueObject Unit Tests', () => {
    it('shoud be equals', () => {
        const value1 = new StringValueObject('value');
        const value2 = new StringValueObject('value');

        expect(value1.equals(value2)).toBeTruthy();

        const complexValue1 = new ComplexValueObject('value', 1);
        const complexValue2 = new ComplexValueObject('value', 1);

        expect(complexValue1.equals(complexValue2)).toBeTruthy();
    })

    it('shoud not be equals', () => {
        const value1 = new StringValueObject('value');
        const value2 = new StringValueObject('value2');

        expect(value1.equals(value2)).toBeFalsy();

        const complexValue1 = new ComplexValueObject('value', 1);
        const complexValue2 = new ComplexValueObject('value', 2);

        expect(complexValue1.equals(complexValue2)).toBeFalsy();
    })

})