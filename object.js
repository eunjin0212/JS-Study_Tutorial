// const preson = {
//   name: "jun",
//   age: 27,
//   laguages: ["korea", "english"],
//   "korea age": 28,
// };

// const name = "jun";
// const preson = {
//   name: name,
//   age: 27,
// };

// const name = "jun";
// const person = {
//   name,
//   age: 27,
// };

// const propName = "prop";
// const obj = {
//   [propName]: 1,
// };
// console.log(obj.prop);

// const person = {};

// person.name = "jun";
// person.age = 27;
// person.languages = ["korea", "english"];

// // console.log(person.name, person.age, person.languages);

// person.adress = "서울";
// delete person.adress;
// console.log("name" in person);
// console.log("phoneNumber" in person);

// const person = {
//   greet: function () /*:function 없어도 됨*/ {
//     return "hello";
//   },
// };
// console.log(person.greet());

// const person = {
//   name: "jun",
//   age: 19,
//   introduce() {
//     return `안녕하세요 제 이름은 ${this.name}입니다.`;
//   },
//   getOlder() {
//     this.age++;
//   },
// };
// console.log(person.introduce(), person.getOlder(), person.introduce());

// function introduce() {
//   return `안녕 내 이름은 ${this.name}이야`;
// }

// const person1 = {
//   name: "hihihi",
//   introduce,
// };

// const person2 = {
//   name: "jun",
//   introduce,
// };

// console.log(person1.introduce(), person2.introduce());

// function personFactory(name) {
//   return {
//     name,
//     introduce: function () {
//       return `안녕 내이름은 ${this.name}이야`;
//     },
//   };
// }
// const people = [];

// for (let i = 0; i < 100; i++) {
//   people.push(personFactory("jun"));
// }

// console.log(people[0].introduce === people[1].introduce);

// const personPrototype = {
//   introduce: function () {
//     return `안녕 내 이름 ${this.name}이야`;
//   },
// };
// const person1 = Object.create(personPrototype);
// person1.name = "jun";

// const person2 = Object.create(personPrototype);
// person2.name = "min";

// console.log(person1.introduce(), person2.introduce());
// console.log(person1.introduce === person2.introduce);
// const parent = {
//   familyName: "yun",
// };

// const child = Object.create(parent);

// console.log(Object.getPrototypeOf(child) === parent);

// const newParent = {
//   familyName: "shin",
// };

// console.log(Object.setPrototypeOf(child, newParent));
// console.log(Object.getPrototypeOf(child) === parent);

// const parent = {
//   a: 1,
// };
// const child = {
//   b: 2,
// };
// Object.setPrototypeOf(child, parent);
// console.log(child);
// console.log(child.a);

// const obj1 = {
//   a: 1,
// };
// const obj2 = {
//   b: 2,
// };

// const obj3 = {
//   c: 3,
// };
// Object.setPrototypeOf(obj2, obj1);
// Object.setPrototypeOf(obj3, obj2);

// console.log(obj3.a);
// console.log(obj3.b);
// console.log(obj3.c);

// console.log(obj1.isPrototypeOf(obj3));
// console.log(obj2.isPrototypeOf(obj3));

// Object.create(1);
// console.log(Object.getPrototypeOf(Object.prototype));

// const parent = {
//   prop: 1,
// };
// const child = {
//   prop: 2,
// };
// Object.setPrototypeOf(child, parent);

// console.log(child.prop);

// const parent = {
//   prop: "k",
// };
// const child = Object.create(parent);
// delete child.prop;

// console.log(parent.prop);
// child.prop = "h";
// console.log(child.prop);

// function Person(name) {
//   this.name = name;
// }
// const person1 = new Person("jun");
// console.log(person1 instanceof Person);

// const obj = {};
// console.log(obj instanceof Object);

// console.log(Object.getPrototypeOf(person1) === Person.prototype);

// function Person() {}
// console.log(typeof Person.prototype);

// function Person() {}
// console.log(Person.prototype.constructor === Person);

// function Person() {}
// const person = new Person();
// console.log(person.constructor === Person);

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.introduce = function () {
//   return `안녕 내 이름은 ${this.name}이야`;
// };
// const person = new Person("윤");
// console.log(person.introduce());

Person.compareAge = function (person1, person2) {
  if (person1.age < person2.age) {
    return "첫번째 사람은 나이가 더 많습니다.";
  } else if (person1.age === person2.age) {
    return "둘이 동갑입니다.";
  } else {
    return "두번째 사람이 나이가 더 많습니다.";
  }
};
