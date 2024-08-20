//union
// let email: string | number | object = "hoangan.web@gmail.com";
// email = 1;
// console.log(email.toUpperCase());

//intersection
interface A {
  a: string;
}
interface B {
  b: number;
}

interface C {
  c: boolean;
}

let ab: A & B & C = { a: "a", b: 1, c: false };
