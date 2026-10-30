// Utility types in TypeScript allow you to transform existing types into new ones. They are built-in generic types that can be used to create new types based on existing ones. Some of the most commonly used utility types include:

// 1. Partial<T>: Constructs a type with all properties of T set to optional.
// 2. Required<T>: Constructs a type with all properties of T set to required.
// 3. Readonly<T>: Constructs a type with all properties of T set to readonly.
// 4. Record<K, T>: Constructs an object type whose property keys are K and property values are T.
// 5. Pick<T, K>: Constructs a type by picking the set of properties K from T.
// 6. Omit<T, K>: Constructs a type by omitting the set of properties K from T.

// Example usage of utility types:
// 
//when using utility types, you can create new types based on the Payment interface, such as PaymentUpdate, PaymentSummary, and NewPayment. 
// These types allow you to work with different subsets of the Payment properties while maintaining type safety.
/*


interface Payment {
  paymentId: string;
  amount: number;
  successful: boolean;
}

type PaymentUpdate = Partial<Payment>;

type PaymentSummary = Pick<Payment, "paymentId" | "amount">;

type NewPayment = Omit<Payment, "paymentId">;

const u: PaymentUpdate = {};

const s: PaymentSummary = {
  paymentId: "P1"
};

const n: NewPayment = {
  amount: 5,
  successful: true,
  paymentId: "P1"
};


*/

interface Payment {
  paymentId: string;
  amount: number;
  successful: boolean;
  currency: string;
}

type PaymentUpdate = Partial<Payment>;

type PaymentSummary = Pick<Payment, "paymentId" | "amount" | "currency" >;

type NewPayment = Omit<Payment, "paymentId">;

const u: PaymentUpdate = {};

const s: PaymentSummary = {
  paymentId: "P1"
};

const n: NewPayment = {
  amount: 5,
  successful: true,
  paymentId: "P1"
};

export {};