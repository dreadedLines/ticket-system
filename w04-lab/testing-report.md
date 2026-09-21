# Week 4 Testing Report

## 1. Functions Tested

- calculatePrice()
- validateReservation()
- reserveSeat()
- cancelReservation()

## 2. Test Strategy

Tests were derived from the business requirements.
The test suite includes:

- normal cases
- boundary cases
- invalid input cases
- error conditions

## 3. Boundary Tests

For ticket quantity:

- 0 → invalid
- 1 → valid
- 10 → valid
- 11 → invalid

## 4. Reservation Tests

Available seat:
Expected → reservation succeeds
Occupied seat:
Expected → error
Invalid seat ID:
Expected → validation error

## 5. Test Results

Total tests: 18
Passed: 18
Failed: 0

## 6. Regression Testing

All tests were rerun after changes to the
reservation logic to ensure that existing
functionality continued to work correctly.
