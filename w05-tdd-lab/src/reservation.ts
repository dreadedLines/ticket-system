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
seat.status = 'RESERVED';
seat.reservedBy = userId;
}