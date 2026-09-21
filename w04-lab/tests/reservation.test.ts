import {
describe,
test,
expect
} from 'vitest';
import {
calculatePrice
} from '../src/reservation';

describe('calculatePrice()', () => {
test(
'calculates normal ticket price',
() => {
// Arrange
const unitPrice = 100;
const quantity = 2;
const expected = 200;
// Action
const actual =
calculatePrice(
unitPrice,
quantity
);
// Assert
expect(actual).toBe(expected);
}
);
});