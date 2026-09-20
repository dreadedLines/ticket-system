export interface ReservationRecord {
id: string;
eventId: string;
quantity: number;
totalPrice: number;
}
const reservations: ReservationRecord[] = [];
export const reservationRepository = {
async create(
reservation: ReservationRecord
): Promise<ReservationRecord> {
reservations.push(reservation);
return reservation;
},
async findAll():
Promise<ReservationRecord[]> {
return reservations;
}
};