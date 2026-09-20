import {
handleReservationRoute
} from "./routes/reservations";
export default {
async fetch(
request: Request
): Promise<Response> {
const url =
new URL(request.url);
try {
const response =
await handleReservationRoute(
request,
url
);
if (response) {
return response;
}
return Response.json(
{
error: "Not Found"
},
{
status: 404
}
);
} catch (error) {
console.error(error);
return Response.json(
{
error:
"Internal Server Error"
},
{
status: 500
}
);
}
}
};