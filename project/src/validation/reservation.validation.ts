export interface ReservationInput {
eventId: string;
quantity: number;
}
export function validateReservationInput(
data: unknown
):
| {
valid: true;
value: ReservationInput;
}
| {
valid: false;
error: string;
} {
if (
typeof data !== "object" ||
data === null
) {
return {
valid: false,
error: "Request body must be an object"
};
}
const body =
data as Record<string, unknown>;
if (
typeof body.eventId !== "string" ||
body.eventId.length === 0
) {
return {
valid: false,
error: "eventId is required"
};
}
if (
typeof body.quantity !== "number" ||
!Number.isInteger(body.quantity)
) {
return {
valid: false,
error: "quantity must be an integer"
};
}
if (body.quantity < 1) {
return {
valid: false,
error: "quantity must be at least 1"
};
}
return {
valid: true,
value: {
eventId: body.eventId,
quantity: body.quantity
}
};
}