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

function add5(x) {
  const five = 5;
  return add(x);
}
console.log(add5(3));

function add(x) {
  return five + x;
}
