//Khai báo interface
// interface User {
//   name: string;
//   age: number;
//   email?: string;
// }
// const user1: User = {
//   name: "Hoàng An",
//   age: 20,
// };

//Kế thừa interface
// interface Person {
//   name: string;
//   email: string;
// }
// interface User extends Person {
//   age: number;
// }

// const user1: User = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
// };

//Kết hợp interface
// interface User {
//   name: string;
//   age: number;
//   email?: string;
// }
// interface Person {
//   address: string;
// }
// type UserInfo = User & Person;
// const userInfo: UserInfo = {
//   name: "Hoàng An",
//   age: 20,
//   address: "HCM",
// };

//Tương thích với kiểu dữu liệu
// interface Point {
//   x: number;
//   y: number;
// }
// function logPoint(point: Point) {
//   console.log(`x: ${point.x}, y: ${point.y}`);
// }
// const point1 = { x: 0, y: 0 };
// logPoint(point1);

// const point2 = { x: 10, y: 10, z: 5 };
// logPoint(point2);

// const point = { x: 0, y: 0, z: 10 };

//interface với phương thức
// interface Calc {
//   add(a: number, b: number): number;
//   //   sub(a: number, b: number): number;
//   sub: (a: number, b: number) => number;
// }
// const calc: Calc = {
//   add: (a, b) => {
//     return a + b;
//   },
//   sub: (a, b) => {
//     return a - b;
//   },
// };

//interface với class
// interface UserInterface {
//   name: string;
//   email: string;
//   getName(): string;
//   getEmail(): string;
//   setValue(value: string): void;
// }
// class User implements UserInterface {
//   name: string;
//   email: string;
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
//   getName(): string {
//     return this.name;
//   }
//   getEmail(): string {
//     return this.email;
//   }
//   setValue(value: string): void {
//     this.name = value;
//   }
// }
// const user = new User("Hoàng An", "hoangan.web@gmail.com");

// interface StringArray {
//   list: {
//     [index: number]: string;
//   };
// }
// const myArray: StringArray = {
//   list: ["a", "b", "c"],
// };
