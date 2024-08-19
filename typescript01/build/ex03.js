"use strict";
//any
//unknown
//void
//never
let fullname;
fullname = "Unicode";
let message;
if (typeof fullname === "string") {
    message = fullname;
    console.log(message);
}
function logMessage() {
    console.log("Hello World");
    return;
}
function handleClick() {
    throw new Error("This is an error");
}
handleClick();
