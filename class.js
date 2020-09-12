// function Person({ name, age }) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.introduce = function () {
//   return `안녕하세요, 제 이름은 ${this.name}입니다`;
// };
// const person = new Person({ name: "윤아준", age: 19 });
// console.log(person.introduce());
// console.log(typeof Person);
// console.log(typeof Person.prototype.constructor);
// console.log(typeof Person.prototype.introduce);
// console.log(person instanceof Person);

// class Person {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     return `안녕하세요, 제 이름은 ${this.name}입니다.`;
//   }
// }
// const person = new Person({ name: "윤아준", age: 19 });
// console.log(person.introduce());
// console.log(typeof Person);
// console.log(typeof Person.prototype.constructor);
// console.log(typeof Person.prototype.introduce);
// console.log(person instanceof Person);

// class Calculator {
//   add(x, y) {
//     return x + y;
//   }
// }

// const methodName = "introduce";
// class Person {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }
//   [methodName]() {
//     return `안녕하세요 제이름은 ${this.name}입니다.`;
//   }
// }
// console.log(new Person({ name: "jun", age: 19 }).introduce());

// class Account {
//   constructor() {
//     this._balance = 0;
//   }
//   get balance() {
//     return this._balance;
//   }
//   set balance(newBalance) {
//     this._balance = newBalance;
//   }
// }
// const account = new Account();
// account.balance = 10000;
// console.log(account.balance);

// class Person {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }
//   static sumAge(...people) {
//     return people.reduce((acc, person) => acc + person.age, 0);
//   }
// }
// const person1 = new Person({
//   name: "jun",
//   age: 19,
// });
// const person2 = new Person({ name: "ha", age: 20 });
// console.log(Person.sumAge(person1, person2));

// class Gen {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }
// for (let n of new Gen()) {
//   console.log(n);
// }

// class Counter {
//   static initial = 0;
//   count = Counter.initial;
//   inc() {
//     return this.count++;
//   }
// }
// const counter = new Counter();
// console.log(counter.inc());
// console.log(counter.inc());

// Counter.initial = 10;
// console.log(new Counter().count);

// class MyClass {
//   a = 1;
//   b = this.a;
// }
// console.log(new MyClass().b);

// class Parent {}
// class Child extends Parent {}
// class Parent {
//   static staticProp = "staticProp";
//   static staticMethod() {
//     return "I'm a static method";
//   }
//   instanceProp = "instanceProp";
//   instanceMethod() {
//     return "I'm a instance method.";
//   }
// }
// class Child extends Parent {}

// console.log(Child.staticProp);
// console.log(Child.staticMethod());

// const c = new Child();
// console.log(c.instanceProp);
// console.log(c.instanceMethod());

// class Melon {
//   getColor() {
//     return "색깔 초록색";
//   }
// }
// class WaterMelon extends Melon {
//   getColor() {
//     return super.getColor() + " 하지만 속은 빨강";
//   }
// }
// const waterMelon = new WaterMelon();
// console.log(waterMelon.getColor());

class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `제 이름은 ${this.name}입니다.`;
  }
}

class Student extends Person {
  constructor({ grade, ...rest }) {
    super(rest);
    this.grade = grade;
  }
  introduce() {
    return super.introduce() + ` 저는 ${this.grade}학년 입니다.`;
  }
}
const s = new Student({ grade: 3, name: "jun", age: 19 });
console.log(s.introduce());
