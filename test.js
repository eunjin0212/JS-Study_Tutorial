// const a = 1;
// const b = 2;
// console.log(a + b);

// console.log(typeof 1);
// console.log(typeof 2.5);
// console.log(typeof "hello world");
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);

// console.log(1 + 3);
// console.log(2 - 4);
// console.log(3 * 5);
// console.log(6 / 2);
// console.log(1 + 2 * 3);
// console.log((1 + 2) * 3);

// console.log(true || false);
// console.log(true && false);
// console.log(1 || 0);
// console.log(1 && 0);

// let v;
// v = 1;
// console.log(v);

// let x = 1;
// console.log(x);

// let y = 2,
//   z = x + y;
// console.log(y);

// const c = 1;
// c = 2;
// console.log(c);

// if (2 > 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//  let i = 0;
//  while (i < 5) {
//    console.log("이 코드는 ${i + 1}번째 실행되고 있습니다.");
//    i++;
//  }

// for (let i = 0; i < 5; i++) {
//   console.log("이 코드는 ${i + n}번째 실행되고 있습니다.");
// }

// function add(x, y) {
//   return x + y;
// }
// add(1, 2);

// const multiply = (x, y) => x * y;

// multiply(3, 4);

// const answer = prompt("이름이 무엇인가요?");
// console.log(answer);
// alert(answer);

// const obj = {
//   x: 0,
//   y: 1,
// };
// console.log(obj);

// obj.x;
// obj["y"];
// obj.x += 1;
// obj["y"] -= 1;
// delete obj.x;

// const obj = {
//   x: 0,
//   increaseX: function () {
//     this.x = this.x + 1;
//   },
// };
// obj.increaseX();
// console.log(obj);

// const arr = ["one", "two", "three"];
// console.log(arr[0]);
// console.log(arr[1]);

const arr = [1, 2, 3, "a", "b", { x: 0, y: 0, name: "원점" }];
arr.push("four");
arr.splice(1, 2);

console.log(arr);
