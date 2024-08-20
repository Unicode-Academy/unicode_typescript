// let someValue: any = 1;

// let total = (<number>someValue).toFixed(2);

// console.log(total);

function getLength(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length;
  } else {
    return something.toString().length;
  }
}
console.log(getLength(10));
