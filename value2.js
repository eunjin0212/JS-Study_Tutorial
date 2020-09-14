// let = foo;

// if (true) {
//   let i = 0;
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function func(){
//     var foo - 1;
// }
// func();
// console.log(foo)

// function func() {
//   for (var i = 0; i < 10; i++) {}
//   console.log(i);
// }
// func();

// for (var i = 0; i < 3; i++) {
//   console.log("outer");
//   for (var i = 0; i < 3; i++) {
//     console.log("inner");
//   }
// }

// let foo;
// if (true) {
//   let bar;
// }

// function func() {
//   variable = 1;
// }
// func();
// console.log(variable);

// let foo = 1;

// const obj = { prop: 1 };
// console.log(obj.prop);

// const obj = {};
// function addProp(o) {
//   o.prop = 1;
// }
// addProp(obj);
// console.log(obj.prop);

// console.log({ prop: 1 } === { prop: 1 });
// const obj1 = {};
// const obj2 = obj1;
// console.log(obj1 === obj2);

// function User(id) {
//   this.id = id;
// }
// User.prototype.isEqual = function (other) {
//   return this.id === other.id;
// };

// const john1 = new User("john");
// const john2 = new User("john");
// console.log(john1 === john2);
// console.log(john1.isEqual(john2));
// const str = "JavaScript string is immutable!";
// console.log(str.replace("!", "?"));

// console.log(str.slice(0, 10));
// console.log(str.toUpperCase());
// console.log(str);

// const obj = { prop: 1 };
// Object.freeze(obj);
// console.log((obj.prop = 2));
// console.log((newProp = 3));
// console.log(delete obj.prop);
// console.log(obj);

// import { list } from "immutable";
// const list = List.of(1, 2, 3);
// const newList = list.push(4);
// console.log(list === newList);

// const obj = {};
// console.log((obj.a = 1));
// console.log((obj = 1));

// const s = "hello";
// console.log(s.toUpperCase());
// console.log(s.length);

// const n = 1.2345;
// console.log(n.toFixed(2));

// const b = true;
// console.log(b.toString());

// const stringObj = new String("hello");
// console.log(stringObj.toUpperCase());
// console.log(stringObj.length);
// const string = stringObj.valueOf();

if (true) {
  let i = 0;
  console.log(i);
}
