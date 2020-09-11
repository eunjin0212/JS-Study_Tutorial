// function add(x, y) {
//   return x + y;
// }
// console.log(add.length);
// console.log(add.name);

// function printThis() {
//   console.log(this);
// }
// printThis();

// function Person(name) {
//   this.name = name;
// }
// Person("john");
// console.log(global.name);

// function Person(name) {
//   "use strict";
//   this.name = name;
// }
// Person("john");

// function printGrade(grade) {
//   console.log(`${this.name}님의 점수는 ${grade}점 입니다.`);
// }
// const student = { name: "Mary" };
// const printGradeForMary = printGrade.bind(student);
// console.log(printGradeForMary(100));
// console.log(printGrade.call(student, 100));
// console.log(printGrade.apply(student, [100]));

// function add(x, y) {
//   console.log(arguments[0], arguments[1]);
//   return x + y;
// }
// console.log(add(1, 2));

// function sum() {
//   let result = 0;
//   for (let item of arguments) {
//     result += item;
//   }
//   return result;
// }
// console.log(sum(1, 2, 3, 4));

// function sum(...ns) {
//   let result = 0;
//   for (let item of ns) {
//     result += item;
//   }
//   return result;
// }
// console.log(sum(1, 2, 3, 4));

// function sum(...ns) {
//   return ns.reduce((acc, item) => acc + item, 0);
// }
// console.log(sum(1, 2, 3, 4));

// function printGrades(name, ...grades) {
//   console.log(`${name}의 점수는 ${grades}입니다.`);
// }
// printGrades("Mary", 96, 78, 68);

// const add = (x, y) => {
//   return x + y;
// };
// console negate = (x) => {
//     return !x;
// }

// function Person(name) {
//   this.name = name;
//   this.getName = () => {
//     return this.name;
//   };
// }

// const mary = new Person("mary");
// console.log(mary.getName());

// const Person = (name) => {
//   "use strict";
//   this.name = name;
// };
// Person("mary");
// console.log(global.name);

// function Person(name) {
//   this.name = name;
//   this.getName = () => {
//     return this.name;
//   };
// }
// const mary = new Person("mary");
// console.log(mary.getName.call({ name: "john" }));

// const mary = {
//   name: "mary",
//   getName: () => {
//     return this.name;
//   },
// };
// console.log(mary.getName());

// function Person(name) {
//   this.name = name;
//   this.getName = () => {
//     return this.name;
//   };
// }

// const mary = new Person("mary");

// function printResult(func) {
//   console.log(func());
// }
// console.log(printResult(mary.getName));

// const ident = (x) => x;

// console.log(ident());

// function hello(name) {
//   if (name === undefined) {
//     name = "Mary";
//   }
//   console.log(`hello, ${name}!`);
// }

// console.log(hello("john"));
// console.log(hello());
// console.log(hello(undefined));

// function func2(f) {
//   f();
// }
// function func1() {
//   return function () {};
// }
// function func1(x){
//     return x;
// }
// func1(1);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function func1(x) {
//   return function () {
//     return x;
//   };
// }

// const func2 = func1(1);
// console.log(func2());

// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(function () {
//     return i;
//   });
// }
// console.log(arr[2]());
// console.log(arr[5]());

// const people = [
//   { name: "dd", age: 19 },
//   { name: "ss", age: 20 },
// ];
// function peopleOlderThan(people, threshold) {
//   return people.filter((person) => person.age > threshold);
// }
// console.log(peopleOlderThan(people, 19));

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// console.log([1, 2, 3].map(makeAdder(2)));

// function makeCounter(x = 1) {
//   return function () {
//     return x++;
//   };
// }
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());

// function personFactory(initialAge) {
//   let age = initialAge;
//   return {
//     getOlder() {
//       age++;
//     },
//     getAge() {
//       return age;
//     },
//   };
// }

// const makeAdder = (x) => (y) => x + y;
// const add2 = makeAdder(2);
// console.log(add2(3));

// const makeCounter = (x = 1) => () => x++;
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());

// function func() {
//   func();
// }

function factorialLooop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialLooop(n) {
  return n <= 1 ? 1 : n * factorialLooop(n - 1);
}
function fiboLoop(n) {
  let x = 0;
  let y = 1;
  for (let i = 0; i < n; i++) {
    [x, y] = [y, x + y];
  }
  return x;
}

function fiboRec(n) {
  return n < 1 ? 0 : n === 1 ? 1 : fiboRec(n - 1) + fiboRec(n - 2);
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const slicer = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slicer(0, slicer));
  const arr2 = mergeSort(arr.slicer(slicer));
  const newArr = [];
  for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
    if (arr1[i] == undefined || arr1[i] > arr2[j]) {
      newArr.push(arr2[i]);
      j++;
    } else {
      newArr.push(arr1[i]);
      i++;
    }
  }
  return newArr;
}

const fiboRecMemoized = (() => {
  const memo = new Map();
  const fiboRec = (n) => {
    let result = memo.get(n);
    if (result != undefined) return result;
    result = n < 1 ? 0 : n === 1 ? 1 : fiboRec(n - 1) + fiboRec(n - 2);
    memo.set(n, result);
    return result;
  };
  return fiboRec;
})();
