// function add(x, y) {
//   const result = x + y;
//   return result;
// }

// function add(x, y) {
//   return x + y;
// }
// const result = add(2, 3);
// console.log(result);

// function add(a, b) {
//   return a * b;
// }
// const result1 = add(2, 2);
// console.log(result1);

// function ressign(x) {
//   x = 2;
//   return x;
// }
// const y = 1;
// const result2 = ressign(y);

// console.log(y);
// console.log(result2);

// function add(c, d) {
//   return c + d;
//   console.log("이 부분은 실행되지 않습니다");
// }
// add(1, 2);

// function returnUndefined() {
//   return;
// }
// function noReturn() {}
// returnUndefined();
// noReturn();

// function add(x, y) {
//   return x + y;
// }

// add(2, 3);
// console.log(x);

// const five = 5;
// function add(x) {
//   return x + five;
// }
// console.log(add(3));

// const five = 5;
// function add5(x) {
//   function add(y) {
//     return x + y;
//   }
//   return add(five);
// }
// console.log(add5(3));

// const x = 3;
// function add5(x) {
//   function add(x, y) {
//     return x + y;
//   }
//   return add(x, 5);
// }
// console.log(add5(x));

// function add5(x) {
//   const five = 5;
//   function add(x) {
//     return five + x;
//   }
//   return add(x);
// }
// console.log(add5(3));

// function add(x, y) {
//   return x + y;
// }
// const plus = add;
// console.log(plus(1, 2));

// function add(x, y) {
//   return x + y;
// }
// [add];
// {
//   addFunc: add;
// }

// function isEven(X) {
//   return x % 2 === 0;
// }
// [1, 2, 3, 4, 5].filter(isEven);

// function createEmptyFunc() {
//   function func() {}
//   return func;
// }
// function (x, y){
//     return x + y;
// }

// const add = function (x, y) {
//   return x + y;
// };
// console.log(add(1, 2));

// const arr = [1, 2, 3, 4, 5].filter(function (x) {
//   return x % 2 === 0;
// });

// console.log(arr);

// const add = (x, y) => x + y;

// const add = (x, y) => {
//   const result = x + y;
//   return result;
// }

// const negate = (x) => !x;

function add(x, y) {
  return x + y;
}
class Person {}
export { add, Person };
