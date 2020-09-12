//const str = "hello";
// str[Symbol.iterator];

// for (let c of "hello") {
//   console.log(c);
// }
// const charaters = [..."hello"];
// const [c1, c2] = "hello";
// Array.from("hello");

// function* gen1() {}
// const gen2 = function* () {};
// const obj = {
//   *gen3() {},
// };

// function* gen1() {}
// const iterable = gen1();
// console.log(iterable[Symbol.iterator]);

// function* numberGen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// for (let n of numberGen()) {
//     console.log(n);
//   }

// function* numberGen2() {
//   yield* numberGen();
//   yield* numberGen();
// }
// for (let n of numberGen2()) {
//   console.log(n);
// }

// function* range(start = 0, end = Infinity, step = 1) {
//   for (let i = start; i < end; i += step) {
//     yield i;
//   }
// }

// function* fibonacci(count = Infinity) {
//   let x = 1;
//   let y = 1;
//   for (let i = 0; i < count; i++) {
//     yield x;
//     [x, y] = [y, x + y];
//   }
// }

// function* repeatMany(array) {
//   while (true) {
//     for (let item of array) {
//       yield item;
//     }
//   }
// }
// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const iter = gen();
// for (let n of iter) {
//   console.log(n);
// }
// function* gen2(){
//     function fakeGen(){yield 1;
//     yield 2;
// yield 3;}
// fakeGen();
// }

// const strIterator = "go"[Symbol.iterator]();
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());

// function* gen() {
//   yield 1;
//   yield 2;
// }
// const genIterator = gen()[Symbol.iterator]();
// console.log(genIterator.next());
// console.log(genIterator.next());
// console.log(genIterator.next());
// console.log(genIterator.next());

// function range(start = 0, end = Infinity, step = 1) {
//   return {
//     currentValue: start,
//     [Symbol.iterator]() {
//       return {
//         next: () => {
//           if (this.currentValue < end) {
//             const value = this.currentValue;
//             this.currentValue += step;
//             return {
//               done: false,
//               value,
//             };
//           } else {
//             return {
//               done: true,
//             };
//           }
//         },
//       };
//     },
//   };
// }

// function* gen() {}
// const genobj = gen();

// console.log(genobj[Symbol.iterator]().next === genobj.next);

// function* gen() {
//   yield 1;
//   return 2;
//   yield 3;
// }
// const iter = gen();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (let v of gen()) {
//   console.log(v);
// }

function* gen() {
  const received = yield 1;
  console.log(received);
}
const iter = gen();
console.log(iter.next());
console.log(iter.next("hello"));
function* map(iterable, mapper) {
  for (let item of iterable) {
    yield mapper(item);
  }
}
function* reduce(iterable, reducer, initial) {
  let acc = initial;
  for (let item of iterable) {
    acc = reduce(acc, item);
    yield acc;
  }
}
function* filter(iterable, predicate) {
  for (let item of iterable) {
    if (predicate(item)) {
      yield item;
    }
  }
}

function* concat(iterables) {
  for (let iterable of iterables) {
    yield iterable;
  }
}

function* take(iterable, count = Infinity){
    const iterator = iterable[Symbol,iterator]();
    for(let i = 0; i < count; i++){
        count {value, done} = iterator.next();
        if (done) break;
        yield value;
    }
}