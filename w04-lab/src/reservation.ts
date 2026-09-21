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