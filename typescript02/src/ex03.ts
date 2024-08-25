// function getValue<T1, T2>(value1: T1, value2: T2): void {
//   console.log(value1, value2);
// }

// const getValue = <T1, T2>(value1: T1, value2: T2) => {
//   console.log(value1, value2);
// };

// getValue<string, number>("Hoàng An", 20);

// class Box<T> {
//   content: T;
//   constructor(content: T) {
//     this.content = content;
//   }
//   getContent(): T {
//     return this.content;
//   }
// }
// const box = new Box<string>("Hoàng An");

// interface User<T1, T2> {
//   name: T1;
//   age: T2;
// }
// const user: User<string, string> = {
//   name: "Hoàng An",
//   age: '20',
// };

// const getValue = <T extends string | number>(value: T): void => {
//   console.log(value);
// };
// getValue("Hoàng An");
// getValue([1, 2, 3]);
// getValue(1);
// getValue(true);

// const person = {
//   name: "Hoàng An",
//   age: 20,
// };
// type PersonKey = typeof person;
// const getProperty = <K extends keyof PersonKey>(key: K) => {
//   return person[key];
// };
// getProperty("name");
// getProperty(person, "email");

// interface Person {
//   name: string;
//   email: string;
// }
// interface User {
//   name: string;
//   age: number;
// }
// type ReadOnly<T> = {
//   //readonly key: value
//   readonly [K in keyof T]: T[K];
// };
// const person: ReadOnly<Person> = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// // person.name = '1';
// const user: ReadOnly<User> = {
//   name: "Hoàng An",
//   age: 20,
// };

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
// }

// function createUserWithoutPassword<T extends Omit<User, "password">>(
//   user: T
// ): T {
//   return user;
// }

// createUserWithoutPassword({
//   id: 1,
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   // password: "123456",
// });
