export type SeatStatus =
| 'AVAILABLE'
| 'RESERVED';
export interface Seat {
id: string;
status: SeatStatus;
reservedBy?: string;
}
export function reserveSeat(
seat: Seat,
userId: string
): void {
if (seat.status === 'RESERVED') {
throw new Error(
'Seat is already reserved'
);
}

seat.status = 'RESERVED';
seat.reservedBy = userId;
}