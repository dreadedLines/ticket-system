export type SeatStatus =
'AVAILABLE' | 'RESERVED';
export interface Seat {
id: string;
status: SeatStatus;
reservedBy?: string;
}
export function calculatePrice(
unitPrice: number,
quantity: number,
discountPercent = 0
): number {
if (
!Number.isFinite(unitPrice) ||
unitPrice < 0
) {
throw new Error(
'Invalid unit price'
);
}
if (
!Number.isInteger(quantity) ||
quantity < 1 ||
quantity > 10
) {
throw new Error(
'Quantity must be between 1 and 10'
);
}
if (
!Number.isFinite(discountPercent) ||
discountPercent < 0 ||
discountPercent > 100
) {
throw new Error(
'Discount must be between 0 and 100'
);
}
const total =
unitPrice *
quantity *
(1 - discountPercent / 100);
return Math.round(total * 100) / 100;
}

function isValidSeatId(
seatId: string
): boolean {
return /^[A-Z][1-9][0-9]?$/.test(
seatId
);
}

export function validateReservation(
seatId: string,
seats: Seat[]
): boolean {
if (!isValidSeatId(seatId)) {
throw new Error(
'Invalid seat ID'
);
}
const seat =
seats.find(
seat => seat.id === seatId
);
if (!seat) {
throw new Error(
'Seat not found'
);
}
if (
seat.status !== 'AVAILABLE'
) {
throw new Error(
'Seat is already reserved'
);
}
return true;
}

export function reserveSeat(
seatId: string,
userId: string,
seats: Seat[]
): Seat[] {
if (!userId.trim()) {
throw new Error(
'Invalid user ID'
);
}
validateReservation(
seatId,
seats
);
return seats.map(seat => {
if (seat.id === seatId) {
return {
...seat,
status: 'RESERVED',
reservedBy: userId
};
}
return seat;
});
}