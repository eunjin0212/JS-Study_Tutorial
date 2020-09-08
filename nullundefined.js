// let foo;
// console.log(foo);

const obj = {};
console.log(obj.prop);

console.log(typeof null);
console.log(typeof undefined);

let foo;
let bar = undefined;
console.log(foo);
console.log(bar);

let obj1 = {};
let obj2 = { prop: undefined };
console.log(obj1.prop);
console.log(obj2.prop);

function printIfNotNull(input) {
  if (input !== null && input !== undefined) {
    console.log(input);
  }
}

// input !== null && input !== undefined;
// input != null;
// input != undefined;

// input === null || input === undefined;
// input == null;
// input == undefined;

console.log(null === undefined);
console.log(null == undefined);
console.log(null == 1);
console.log(null == "hello");
console.log(null == false);
console.log(undefined == 1);
console.log(undefined == "hello");
console.log(undefined == false);
