interface Event {
    id: string;
    name: string;
    price: number;
    availableTickets: number;
}
interface Reservation {
    id: string;
    eventId: string;
    quantity: number;
    totalPrice: number;
}
const events: Event[] = [
    {
        id: "E001",
        name: "MIU Music Festival",
        price: 30,
        availableTickets: 100
    },
    {
        id: "E002",
        name: "AI Conference",
        price: 50,
        availableTickets: 50
    }
];
const reservations: Reservation[] = [];
    export default {
    async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (
    request.method === "POST" &&
    url.pathname === "/reservations"
    ) {
    const body =
    await request.json<{
    eventId?: string;
    quantity?: number;
    }>();
    if (!body.eventId) {
    return Response.json(
    { error: "eventId is required" },
    { status: 400 }
    );
    }
    if (
    typeof body.quantity !== "number" ||
    body.quantity < 1
    ) {
    return Response.json(
    { error: "quantity must be at least 1" },
    { status: 400 }
    );
    }
    const event =
    events.find(
    event => event.id === body.eventId
    );
    if (!event) {
    return Response.json(
    { error: "Event not found" },
    { status: 404 }
    );
    }
    if (
    body.quantity >
    event.availableTickets
    ) {
    return Response.json(
    { error: "Not enough tickets" },
    { status: 409 }
    );
    }
    const totalPrice =
    event.price * body.quantity;
    const reservation: Reservation = {
    id: crypto.randomUUID(),
    eventId: event.id,
    quantity: body.quantity,
    totalPrice
    };
    reservations.push(reservation);
    return Response.json(
    reservation,
    { status: 201 }
    );
    }
    return Response.json(
    { error: "Not Found" },
    { status: 404 }
    );
    }
};