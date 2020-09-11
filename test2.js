// function func1(cond) {
//   if (cond) {
//     console.log("조건을 만족합니다.");
//   }
// }
// function func2(cond) {
//   cond && console.log("조건을 만족합니다.");
// }

// function func1(arg) {
//   if (!arg) {
//     arg = "hello";
//   }
//   console.log(arg);
// }
// function func2(arg) {
//   arg = arg || "hello";
//   console.log(arg);
// }

// console.log(true ? 1 : 2);
// console.log(false ? 1 : 2);

// true ? console.log("left") : console.log("right");
// false ? console.log("left") : console.log("right");

// function func1(cond) {
//   if (cond) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function func2(cond) {
//   return cond ? true : false;
// }

// let num = 10;

// num++;
// console.log(num);
// num--;

// console.log(num);

// console.log(num++);
// console.log(num);
// console.log(++num);

// let i = 3;
// while (i--) {
//   console.log("감소 연산자를 뒤에 쓰면 어떻게 될까요?");
// }
// let j = 3;
// while (--j) {
//   console.log("감소연산자를 앞에 쓰면 어떻게 될까요?");
// }
// function Counter(initial = 0) {
//   this._count = initial;
// }
// Counter.prototype.longInc = function () {
//   const result = this._count;
//   this._count += 1;
//   return result;
// };

// Counter.prototype.inc = function () {
//   return this._count++;
// };

// let x;
// console.log((x = 5));

// let x = 5;
// console.log((x += 5));

// let y = 6;
// console.log((y -= 3));

// console.log(2 + 3 * 4);

// console.log(typeof "helloworld" === "hello" + "world");

// 3 > 2 > 1;
// 3 > 2 > 1;
// console.log(true > 1);

// console.log(3 > 2 && 2 > 1);

// console.log("1" == 1);
// console.log(true == 1);
// console.log(false == 0);
// console.log("" == false);
// console.log("   \n\t    " == 0);
// console.log(null == undefined);
// console.log(null == 0);
// console.log(null == "");
// console.log(undefined == false);
// console.log(undefined == NaN);
// console.log("1" === 1);
// console.log(true === 1);
// console.log(false === 0);
// console.log(NaN === NaN);
// console.log(0 === -0);
// console.log(Object.is(NaN, NaN));
// console.log(Object.is(0, -0));

// const arr1 = [3, 4];
// const arr2 = [1, 2, ...arr1, 5];
// console.log(arr2);
// console.log([1, 2].concat(arr1).concat([5]));

// const arr3 = [1, 2, 3];
// const arr4 = [...arr1];
// console.log(arr3.slice());
// console.log(arr4);

// const arr6 = [1, 2, 3, 4, 5];
// console.log(Math.max(...arr6));
// console.log(Math.max.apply(null, arr6));

// const obj1 = { prop: 1 };
// const obj2 = { ...obj1 };
// console.log(Object.assign({}, obj1));

// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);
// const [a, , c] = [1, 2, 3, 4];
// console.log(a, c);

// let a, b;
// [a, b] = [1, 2];
// console.log(a, b);

// const [a, b, [c, d]] = [1, 2, [3, 4]];
// console.log(a, b, c, d);

// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(c);

// const { a: prop1, b: prop2 } = { a: 1, b: 2 };
// console.log(prop1, prop2);

// const { a, b } = { a: 1, b: 2 };
// console.log(a, b);

// const { a } = { a: 1, b: 2 };
// console.log(a);

// let a, b;
// ({ a, b } = { a: 1, b: 2 });
// console.log(a, b);

// const {
//   a,
//   b: { c },
// } = { a: 1, b: { c: 2 } };
// console.log(a, c);

// const {
//   arr: [a, b, { c }],
// } = {
//   arr: [1, 2, { c: 3 }],
// };
// console.log(a, b, c);

// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(rest);

// let a, b, c;
// [a, b, c] = [1, 2];
// console.log(c);

// let [a, b, c = 3] = [1, 2];
// console.log(c);

// let { a, b, c = 3 } = { a: 1, b: 2 };
// console.log(c);

function func({ prop, array: [item1, item2, item3 = 4] }) {
  console.log(prop);
  console.log(item1);
  console.log(item2);
  console.log(item3);
}

func({ prop: 1, array: [2, 3] });
