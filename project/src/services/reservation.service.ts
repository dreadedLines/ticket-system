import {
eventRepository
} from "../repositories/event.repository";
import {
reservationRepository
} from "../repositories/reservation.repository";
export interface CreateReservationCommand {
eventId: string;
quantity: number;
}
export const reservationService = {
async createReservation(
command: CreateReservationCommand
) {
// Step 1: Find event
const event =
await eventRepository.findById(
command.eventId
);
if (!event) {
throw new Error(
"EVENT_NOT_FOUND"
);
}
// Step 2: Check availability
if (
command.quantity >
event.availableTickets
) {
throw new Error(
"NOT_ENOUGH_TICKETS"
);
}
// Step 3: Calculate price
const totalPrice =
event.price *
command.quantity;
// Step 4: Create reservation
const reservation = {
id: crypto.randomUUID(),
eventId: event.id,
quantity: command.quantity,
totalPrice
};
// Step 5: Store reservation
return reservationRepository.create(
reservation
);
}
};