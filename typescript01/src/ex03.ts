//any

//unknown

//void

//never
let fullname: unknown;
fullname = "Unicode";

let message: string;
if (typeof fullname === "string") {
  message = fullname;
  console.log(message);
}

function logMessage(): void {
  console.log("Hello World");
  return;
}

function handleClick(): never {
  throw new Error("This is an error");
}

handleClick();
