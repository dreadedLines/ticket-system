import { describe, test, expect } from 'vitest';
import {
Seat,
reserveSeat,
} from '../src/reservation';
describe('Seat Reservation', () => {
test('an available seat can be reserved', () => {
// Arrange
const seat: Seat = {
id: 'A1',
status: 'AVAILABLE',
};
// Act
reserveSeat(seat, 'U100');
// Assert
expect(seat.status).toBe('RESERVED');
expect(seat.reservedBy).toBe('U100');
});
});