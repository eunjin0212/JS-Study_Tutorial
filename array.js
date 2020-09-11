// console.log(typeof []);
// const empty = [];
// const number = [1, 2, 3];
// const strings = ["one", "two", "three"];
// const objects = [{ prop: 1 }, { prop: 2 }, { prop: 3 }];
// const mixed = [1, "one", { prop: 1 }, null];

// Array.of(1, 2, 3);
// Array.of(1);
// new Array(1000);
// console.log(Array.from("hello"));

// const arr = ["one", "two", "three"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// const arr = [false, false, false];
// arr[1] = true;
// console.log(arr);

// arr.fill(0);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6];
// arr.fill(1, 2, 5);
// console.log(arr);

// new Array(1000);
// new Array(1000).fill(5);

// const arr = [];
// arr.push("one");
// arr.push("two");
// console.log(arr);

// arr.pop();
// console.log(arr);

// const arr = [];
// arr.unshift(1);
// arr.unshift(2, 3);
// console.log(arr);
// arr.shift();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 3, "two", "three", "four");
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 3, "three");
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// const arr = [1, 5];
// arr.splice(1, 0, 2, 3, 4);
// console.log(arr);

// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// const arr = [3, 1, 2, 5, 4];
// arr.sort((x, y) => x - y);
// console.log(arr);

// const name = ["Denton", "Kathleen", "Ebba", "Bruce"];
// name.sort((x, y) => x.length - y.length);
// console.log(name);

// console.log([20, 3, 100].sort());
// console.log(["abc", "DEF", "aBC"].sort());
// console.log([20, 3, 100].sort((x, y) => x - y));

// const arr = [];
// console.log(arr.length);

// arr.push(1, 2, 3);
// console.log(arr.length);

// const arr = [];
// arr.length = 10;
// console.log(arr);

// arr.fill(1);
// arr.length = 2;
// console.log(arr);

// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const arr = [1, 2, 3];
// arr.forEach((item) => {
//   console.log(`현재 요소${item}에 대해 함수가 실행되고 있습니다.`);
// });

// const arr = [1, 2, 3];
// arr.forEach((item, index, array) => {
//   console.log(`현재 ${index + 1}번째 요소에 대해 함수가 실행되고 있습니다.`);
// });

// const arr = [1, 2, 3, 4, 5];
// for (let item of arr) {
//   console.log(item);
// }

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(2, 4);
// newArr[0] = 5;
// console.log(newArr);
// console.log(arr);

// const arr2 = arr.slice();
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((item) => item ** 2);
// console.log(newArr);

// console.log(
//   arr.map((item, index, array) => {
//     return item * index;
//   })
// );

// const arr = [1, 2];
// console.log(arr.concat([3, 4], [5, 6], [7, 8]));

// const arr = [1, 2, 3];
// console.log(arr.reduce((acc, item) => acc + item, 0));

// const arr = ["one", "two", "three"];
// console.log(

//   arr.reduce((acc, item, index, array) => {
//     return acc + `(${index}: ${item})`;
//   }, "")
// );

// const arr = ["one"];
// arr.reduce((acc, item) => {
//   return acc + item.length;
// });
// arr.reduce((acc, item) => {
//   return acc + item.length;
// }, 0);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.filter((item) => item % 2 === 0));

// const arr = [1, 2, 3];
// console.log(arr.join("&"));
// console.log(arr.join());

// const arr = ["a", "b", "c", "b", "a"];
// console.log(arr.indexOf("b"));
// console.log(arr.lastIndexOf("b"));
// console.log(arr.indexOf("z"));
// console.log(arr.lastIndexOf("b", 2));

// const names = ["Denton", "Kathleen", "Ebba", "Bruce"];
// console.log(names.find((item) => item.length < 6));
// console.log(names.findIndex((item) => item.length < 6));
// console.log(names.find((item) => item.length > 8));
// console.log(names.findIndex((item) => item.length > 8));

// const arr = ["one", "two", "three"];
// console.log(arr.includes("one"));
// console.log(arr.includes("one", 1));
// console.log(arr.every((item) => item.length > 2));
// console.log(arr.every((item) => item.length > 3));
// console.log(arr.some((item) => item.length > 3));
// console.log(arr.some((item) => item.length > 4));

// console.log(Array.isArray([]));
// console.log(Array.isArray({}));
// console.log(Array.isArray("hello"));

// console.log("hello"[0]);
// console.log("hello".slice(2, 4));
// for (let c of "hello") {
//   console.log(c);
// }

const table = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(table[0][1]);
console.log(table[2][0]);
