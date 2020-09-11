// const obj = Object.create({ inheritedProp: "inheritedProp" });
// obj.ownProp = "ownProp";
// console.log(obj.inheritedProp);
// console.log(obj.ownProp);
// console.log(obj.constructor);
// console.log("inheritedProp" in obj);
// console.log("ownProp" in obj);
// console.log("constructor" in obj);

// console.log(obj.hasOwnProperty("inheritedProp"));
// console.log(obj.hasOwnProperty("ownProp"));
// console.log(obj.hasOwnProperty("constructor"));

// const obj = { prop: 1 };
// console.log(delete obj.prop);
// console.log(obj.prop);
// console.log(delete Math.PI);
// console.log(Math.PI);

// const obj = { prop: 1 };
// console.log(Object.getOwnPropertyDescriptor(obj, "prop"));
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// function func1() {
//   delete Math.PI;
// }
// function func2() {
//   "use strict";
//   delete Math.PI;
// }
// console.log(func1());
// console.log(func2());

// const obj = Object.create(Object.prototype, {
//   prop: {
//     value: 1,
//     writable: false,
//     enumerable: true,
//     configurable: false,
//   },
//   another: {
//     value: 2,
//   },
// });

// console.log(obj);

// obj.prop = 2;
// console.log(obj.prop);

// delete obj.prop;
// console.log(obj.prop);

// const obj = {};
// Object.defineProperty(obj, "prop", {
//   value: 1,
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// const money = {
//   won: 1086,
//   dollar: 1,
// };
// money.won += 1086;
// console.log(money.dollar);

// function Money(won = 1) {
//   Object.defineProperty(this, "_won", {
//     value: won,
//     writable: true,
//   });
// }
// Money.prototype.getWon = function () {
//   return this._won;
// };
// Money.prototype.setWon = function () {
//   this._won;
// };
// Money.prototype.getDollar = function () {
//   return this._won / 1086;
// };
// Money.prototype.setDollar = function (amount) {
//   this._won = amount * 1086;
// };
// const m = new Money();

// m.setWon(1086);
// console.log(m.getDollar());

// m.setDollar(2);
// console.log(m.getWon());

// const obj = {
//   get prop() {
//     console.log("getter");
//     return this._hidden;
//   },
//   set prop(arg) {
//     console.log("setter");
//     this._hidden = arg;
//   },
// };
// obj.prop = 1;
// console.log(obj.prop);
// console.log(Object.getOwnPropertyDescriptors(obj));

// function Money(won) {
//   this._won = won;
// }
// Object.defineProperties(Money.prototype, {
//   won: {
//     get: function () {
//       return this._won;
//     },
//     set: function (arg) {
//       this._won = arg;
//     },
//   },
//   dollar: {
//     get: function () {
//       return this._won / 1086;
//     },
//     set: function (arg) {
//       this._won = arg * 1086;
//     },
//   },
// });

// const w = new Money(1086);

// w.won += 1086;
// console.log(w.dollar);
// w.dollar += 1;
// console.log(w.won);

// const obj = {
//   a: 1,
//   b: 2,
// };
// console.log(Object.keys(obj));

// const obj = {};
// Object.assign(obj, { a: 1 }, { b: 2 });
// console.log(obj);

// const obj = {
//   innerObj: {
//     a: 1,
//     b: 2,
//   },
// };

// const obj2 = Object.assign({}, obj);
// console.log(obj2);

// obj.innerObj === obj2.innerObj;
// obj.innerObj.a = 3;
// console.log(obj2.innerObj.a);

// const obj = {};
// Object.preventExtensions(obj);

// function func() {
//   "use strict";
//   obj.a = 1;
// }

// console.log(func());

const obj = {};
console.log(Object.isExtensible(obj));
// Object.preventExtensions(obj);
console.log(Object.isSealed(obj));
console.log(Object.isFrozen(obj));
