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

test(
'applies a 10 percent discount',
() => {
const expected = 180;
const actual =
calculatePrice(
100,
2,
10
);
expect(actual).toBe(expected);
}
);

test(
'accepts minimum quantity 1',
() => {
const actual =
calculatePrice(100, 1);
expect(actual).toBe(100);
}
);

test(
'accepts maximum quantity 10',
() => {
const actual =
calculatePrice(100, 10);
expect(actual).toBe(1000);
}
);

test(
'rejects quantity 0',
() => {
expect(() =>
calculatePrice(100, 0)
).toThrow(
'Quantity must be between 1 and 10'
);
}
);