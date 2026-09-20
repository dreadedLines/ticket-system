import {
reservationService
} from "../services/reservation.service";
import {
validateReservationInput
} from "../validation/reservation.validation";
export async function handleReservationRoute(
request: Request,
url: URL
): Promise<Response | null> {
if (
request.method !== "POST" ||
url.pathname !== "/reservations"
) {
return null;
}
let body: unknown;
try {
body = await request.json();
} catch {
return Response.json(
{
error: "Invalid JSON"
},
{
status: 400
}
);
}
const validation =
validateReservationInput(body);
if (!validation.valid) {
return Response.json(
{
error: validation.error
},
{
status: 400
}
);
}
try {
const reservation =
await reservationService
.createReservation(
validation.value
);
return Response.json(
reservation,
{
status: 201
}
);
} catch (error) {
if (
error instanceof Error &&
error.message === "EVENT_NOT_FOUND"
) {
return Response.json(
{
error: "Event not found"
},
{
status: 404
}
);
}
if (
error instanceof Error &&
error.message ===
"NOT_ENOUGH_TICKETS"
) {
return Response.json(
{
error: "Not enough tickets"
},
{
status: 409
}
);
}
throw error;
}
}