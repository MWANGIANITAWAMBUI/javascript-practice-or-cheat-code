// This file defines a type for payment status and provides a function to return a message based on the payment status.
// The `PaymentStatus` type is a union type that can be one of four string literals: "pending", "paid", "failed", or "cancelled".
// The `statusMessage` function takes a `PaymentStatus` as an argument and returns a corresponding message.
// The function uses a switch statement to handle each possible payment status and returns the appropriate message.
// The `assertNever` function is a utility function that throws an error if it receives a value that is not of type `never`.
// This is used to ensure that all possible cases of the `PaymentStatus` type are handled in the `statusMessage` function.
// The function is called with two valid payment statuses, "paid" and "cancelled", and logs the corresponding messages to the console.
// the example below demonstrates the use of union types in TypeScript to define a type that can only take specific string values.

type PaymentStatus = "pending" | "paid" | "failed"| "cancelled" ;

function assertNever(value: never): never {
  throw new Error(`Unexpected payment status: ${value}`);
}
function statusMessage(status: PaymentStatus): string {
  switch (status) {
    case "pending":
      return "Payment is being processed.";

    case "paid":
      return "Payment successful.";

    case "failed":
      return "Payment failed.";

    case "cancelled":
      return "Payment was cancelled.";
    
  }
  return assertNever(status);
}

console.log(statusMessage("paid"));
console.log(statusMessage("cancelled"));
