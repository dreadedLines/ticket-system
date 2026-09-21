import {
describe,
test,
expect,
beforeEach
} from 'vitest';
import {
calculatePrice,
validateReservation,
reserveSeat,
cancelReservation,
type Seat
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

test(
'rejects quantity 11',
() => {
expect(() =>
calculatePrice(100, 11)
).toThrow(
'Quantity must be between 1 and 10'
);
}
);

test(
'rejects negative price',
() => {
expect(() =>
calculatePrice(-100, 2)
).toThrow(
'Invalid unit price'
);
}
);

test(
'rejects discount greater than 100',
() => {
expect(() =>
calculatePrice(
100,
2,
101
)
).toThrow(
'Discount must be between 0 and 100'
);
}
);

let seats: Seat[];
beforeEach(() => {
seats = [
{
id: 'A1',
status: 'AVAILABLE'
},
{
id: 'A2',
status: 'AVAILABLE'
},
{
id: 'B1',
status: 'RESERVED',
reservedBy: 'U100'
}
];
});

test(
'available seat passes validation',
() => {
const result =
validateReservation(
'A1',
seats
);
expect(result).toBe(true);
}
);

test(
'occupied seat cannot be reserved',
() => {
expect(() =>
validateReservation(
'B1',
seats
)
).toThrow(
'Seat is already reserved'
);
}
);

test(
'invalid seat ID causes validation error',
() => {
expect(() =>
validateReservation(
'???',
seats
)
).toThrow(
'Invalid seat ID'
);
}
);

test(
'lowercase seat ID is invalid',
() => {
expect(() =>
validateReservation(
'a1',
seats
)
).toThrow(
'Invalid seat ID'
);
}
);