import {
describe,
test,
expect,
beforeEach,
} from 'vitest';
import {
Seat,
reserveSeat,
cancelReservation,
} from '../src/reservation';
describe('Seat Reservation', () => {
let seat: Seat;
beforeEach(() => {
seat = {
id: 'A1',
status: 'AVAILABLE',
};
});
test(
'an available seat can be reserved',
() => {
// Act
reserveSeat(seat, 'U100');
// Assert
expect(seat.status)
.toBe('RESERVED');
expect(seat.reservedBy)
.toBe('U100');
}
);
test(
'a reserved seat cannot be reserved twice',
() => {
// Arrange
reserveSeat(seat, 'U100');
// Act + Assert
expect(() => {
reserveSeat(seat, 'U200');
}).toThrow(
'Seat is already reserved'
);
}
);
test(
'a cancelled seat can be reserved again',
() => {
// Arrange
reserveSeat(seat, 'U100');
// Act
cancelReservation(seat);
// Assert
expect(seat.status)
.toBe('AVAILABLE');
expect(seat.reservedBy)
.toBeUndefined();
// Act again
reserveSeat(seat, 'U200');
// Assert again
expect(seat.status)
.toBe('RESERVED');
expect(seat.reservedBy)
.toBe('U200');
}
);
});