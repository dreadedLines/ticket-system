export interface EventRecord {
id: string;
name: string;
price: number;
availableTickets: number;
}
const events: EventRecord[] = [
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
export const eventRepository = {
async findById(
id: string
): Promise<EventRecord | undefined> {
return events.find(
event => event.id === id
);
}
};