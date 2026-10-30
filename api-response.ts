
/*
// This code defines a TypeScript interface and type for handling payment responses.
//  It includes a function to display the payment response based on its status.
// the code also demonstrates how to parse a JSON string into a TypeScript type and handle the response accordingly.
//  the code is a simple example of how to work with TypeScript types and interfaces for API responses.
// it effectively illustrates the use of TypeScript's type system to ensure type safety when dealing with API responses.
// when the response is successful, it logs the payment ID and amount to the console.
//  If the response indicates an error, it logs the error message instead.


const raw = '{"status":"ok","payment":{"paymentId":"PAY-101","amount":800,"successful":true}}';

const response: PaymentResponse = JSON.parse(raw);

interface Payment {
    paymentId: string;
    amount: number;
    successful: boolean;
}

type PaymentResponse =
    | { status: "ok"; payment: Payment }
    | { status: "error"; message: string };


   
function showPaymentResponse(response: PaymentResponse) {
    if (response.status === "ok") {
        console.log(
            `Payment successful! Payment ID: ${response.payment.paymentId}, Amount: ${response.payment.amount}`
        );
    } else {
        console.error(`Payment failed: ${response.message}`);
    }
    
}

showPaymentResponse(response);
*/

//The code below is a more robust version of the above code, which includes type checking and validation for the parsed JSON response.
// it ensures that the parsed response conforms to the expected PaymentResponse type before attempting to display it.
//when the response is successful, it logs the payment ID and amount to the console.
//when the response indicates an error, it logs the error message instead.
//when the parsed response does not conform to the expected type, it logs an error message indicating that the data was rejected.
// when the parsed response is not an object or is null, it logs an error message indicating that the data was rejected.
//when the parsed response has an unexpected status, it logs an error message indicating that the data was rejected.
// the code effectively illustrates the use of TypeScript's type system to ensure type safety when dealing with API responses.


const raw = '{"status":"ok","payment":{"paymentId":"PAY-101","amount":800,"successful":true}}';

interface Payment {
  paymentId: string;
  amount: number;
  successful: boolean;
}

type PaymentResponse =
  | { status: "ok"; payment: Payment }
  | { status: "error"; message: string };

function isPaymentResponse(value: unknown): value is PaymentResponse {
  // 1. Check the outer value.
  if (typeof value !== "object" || value === null) {
    return false;
  }

  // 2. Safely inspect the possible response fields.
  const response = value as {
    status?: unknown;
    payment?: unknown;
    message?: unknown;
  };

  // 3. Validate a successful response.
  if (response.status === "ok") {
    const payment = response.payment;

    if (typeof payment !== "object" || payment === null) {
      return false;
    }

    const paymentData = payment as {
      paymentId?: unknown;
      amount?: unknown;
      successful?: unknown;
    };

    return (
      typeof paymentData.paymentId === "string" &&
      typeof paymentData.amount === "number" &&
      typeof paymentData.successful === "boolean"
    );
  }

  // 4. Validate an error response.
  if (response.status === "error") {
    return typeof response.message === "string";
  }

  // 5. Reject any other status.
  return false;
}

function showPaymentResponse(response: PaymentResponse): void {
  if (response.status === "ok") {
    console.log("Payment ID:", response.payment.paymentId);
    console.log("Amount:", response.payment.amount);
    console.log("Successful:", response.payment.successful);
  } else {
    console.log("Payment error:", response.message);
  }
}

// 6. Parse the data as unknown, then validate it.
const response: unknown = JSON.parse(raw);

if (isPaymentResponse(response)) {
  showPaymentResponse(response);
} else {
  console.error("Invalid payment response. Data was rejected.");
}


export {};