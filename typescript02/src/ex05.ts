export namespace Ex05 {
  export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  export const getMessage = (): void => {
    console.log("Hello World");
  };
  export namespace UserNamespace {
    export interface User {
      id: number;
      name: string;
      email: string;
    }
  }
}

export namespace Ex05 {
  export type Person = {
    id: number;
    name: string;
    email: string;
  };
}

// Ex05.getMessage();
// const user: Ex05.User = {
//   id: 1,
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   password: "123456",
// };
