//Partial
// interface User {
//   name: string;
//   email: string;
//   age: number;
// }
// type PartialUser = Partial<User>;
// const user: Partial<User> = {
//   name: "Hoàng An",
//   //   email: "hoangan.web@gmail.com",
//   //   age: 32,
// };

//Required
// interface User {
//   name?: string;
//   email?: string;
//   age?: number;
// }
// type RequiredUser = Required<User>;
// const user: RequiredUser = {
//   name: "Hoàng An",
// };

//Readonly
// interface User {
//   name: string;
//   email: string;
//   age: number;
// }
// type ReadonlyUser = Readonly<User>;
// const user: ReadonlyUser = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     age: 32,
// }
// user.name = 'a'

//Record
// type Role = "admin" | "user" | "guest";
// type Permission = Record<Role, string[]>;
// const permissions: Permission = {
//   admin: ["create", "read", "update", "delete"],
//   user: ["read"],
//   guest: ["read"],
// };

//Pick
// interface User {
//   name: string;
//   email: string;
//   age: number;
// }
// type PickUser = Pick<User, "name" | "email">;
// const user: PickUser = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

//Omit
// interface User {
//   name: string;
//   email: string;
//   age: number;
// }
// type OmitUser = Omit<User, "name" | "email">;
// const user: OmitUser = {
//   age: 32,
// };

//Extract
// type AllRoles = "admin" | "user" | "guest" | "superadmin";
// type AdminRoles = Extract<AllRoles, "admin" | "superadmin">;
// const role: AdminRoles = "superadmin";

//NonNullable
// type Name = string | null | undefined;
// type NonNullableName = NonNullable<Name>;
// const fullname: NonNullableName = null;

//ReturnType
// function getUser() {
//   return { name: "Alice", age: 30 };
// }
// type User = ReturnType<typeof getUser>;
// const user: User = { name: "Alice", age1: 30 };

//InstanceType
// class User {
//   name = "Hoàng An";
//   email = "hoangan.web@gmail.com";
// }

// type UserInstance = InstanceType<typeof User>;
// const user: UserInstance = new User();
