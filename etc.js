/*class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());

class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());

class Node {
  constructor(content, children = []) {
    this.content = content;
    this.children = children;
  }
}

const tree = new Node("hello", [
  new Node("world"),
  new Node("and"),
  new Node("fun", [new Node("javascript!")]),
]);

function traverse(node) {
  console.log(node.content);
  for (let child of node.children) {
    traverse(child);
  }
}

console.log(traverse(tree));

const timeoutId = setTimeout(() => {
  console.log("setTimeout이 실행된 지 2초가 지났습니다.");
}, 2000);

const intervalId = setInterval(() => {
  console.log("3초마다 출력됩니다.");
}, 3000);

clearTimeout(timeoutId);
clearInterval(intervalId);

const start = new Date();
setTimeout(() => {
  console.log(new Date() - start);
}, 100);

setTimeout(() => {
  console.log("hello");
}, 0);
console.log("world");*/

// function add(x, y) {
//   return x + y;
// }

// function add2(x) {
//   return add(x, 2);
// }
// function add2AndPrint(x) {
//   const result = add2(x);
//   console.log(result);
// }
// console.log(add2AndPrint(3));

// function sleep(milliseconds) {
//   const start = Date.now();
//   while (Date.now() - start < milliseconds);
// }
// console.log(sleep(5000));
// setTimeout(() => {
//   console.log("hello");
// }, 0);
// console.log("world");

// const $ = require("jquery");
// const API_URL =
//   "https://api.github.com/repos/facebookincubator/create-react-app/issues?per_page=10";
// $.ajaxSetup({
//   dataType: "json",
// });
// $.get(API_URL, (issues) => {
//   console.log("최근 10개의 이슈:");
//   issues.map((issue) => issue.title).forEach((title) => console.log(title));
//   console.log("출력이 끝났습니다.");
// });

// console.log("받아오는중");

// const $ = require("jquery");
// const API_URL = "https://api.github.com";
// const starCount = {};

// $.ajaxSetup({
//   dataType: "json",
// });

// $.get(
//   `${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`,
//   (result) => {
//     $.get(
//       `${API_URL}/repos/${result.items[0].full_name}/contributors?per_page=5`,
//       (users) => {
//         let repoArrs = [];
//         for (let user of users) {
//           $.get(
//             `${API_URL}/users/${user.login}/starred?per_page=10`,
//             (repos) => {
//               repoArrs.push(repos);

//               if (repoArrs.length === 5) {
//                 for (let repoArr of repoArrs) {
//                   for (let repo of repoArr) {
//                     if (repo.full_name in starCount) {
//                       starCount[repo.full_name]++;
//                     } else {
//                       starCount[repo.full_name] = 1;
//                     }
//                   }
//                 }
//                 console.log(starCount);
//               }
//             }
//           );
//         }
//       }
//     );
//   }
// );

// console.log("fetching...");

// const p = Promise.resolve(1);
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("2초가 지났습니다.");
//   }, 2000);
// });
// p.then((msg) => {
//   console.log("hello");
// });
// const p2 = p.then((msg) => {
//   return msg + "world";
// });

// p2.then((msg) => {
//   console.log(msg);
// });

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${ms}밀리초가 지났습니다.`);
//       resolve();
//     }, ms);
//   });
// }
// delay(1000)
//   .then(() => delay(2000))
//   .then(() => Promise.resolve("끝"))
//   .then(console.log);
// console.log("시작");

// const axios = require("axios");
// const API_URL = "https://api.github.com";

// axios
//   .get(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`)
//   .then((res) => {
//     console.log("최근 10개의 이슈");
//     res.data.map((issue) => issue.title).forEach((title) => console.log(title));
//     console.log("출력이 끝났습니다.");
//   });

// const API_URL = "https://api.github.com";
// const starCount = {};
// const axios = require("axios");

// axios
//   .get(
//     `${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`
//   )
//   .then((res) =>
//     axios.get(
//       `${API_URL}/repos/${res.data.items[0].full_name}/contributors?per_page=5`
//     )
//   )
//   .then((res) => {
//     const ps = rs.data.map((user) =>
//       axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`)
//     );
//     return Promise.all(ps);
//   })
//   .then((ress) => Promise.all(ress.map((r) => r.data)))
//   .then((repoArr) => {
//     for (let repo of repoArr) {
//       for (let repo of repoArr) {
//         if (repo.full_name in starCount) {
//           starCount[repo.full_name]++;
//         } else {
//           starCount[repo.full_name] = 1;
//         }
//       }
//     }
//     console.log(starCount);
//   });
// console.log("fetching...");

// async function func1() {}
// const func2 = async () => {};
// class MyClass {
//   async myMethod() {}
// }
// async function func1() {
//   return 1;
// }

// async function func2() {
//   return Promise.resolve(2);
// }
// func1().then(console.log);
// func2().then(console.log);

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${ms}지남`);
      resolve();
    }, ms);
  });
}

async function main() {
  await delay(1000);
  await delay(2000);
  const result = await Promise.resolve("end");
  console.log(result);
}
main();

const axios = require("axios");
const API_URL = "https://api.github.com";

async function fetchStarCount() {
  const starCount = {};

  const topRepoRes = await axios.get(
    `${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`
  );

  const topMemberRes = await axios.get(
    `${API_URL}/repos/${topRepoRes.data.items[0].full_name}/contributors?per_page=5`
  );

  const ps = topMemberRes.data.map((user) =>
    axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`)
  );
  const starredReposRess = await Promise.all(ps);
  const starredReposData = starredReposRess.map((r) => r.data);

  for (let repoArr of starredReposData) {
    for (let repo of repoArr) {
      if (repo.full_name in starCount) {
        starCount[repo.full_name]++;
      } else {
        starCount[repo.full_name] = 1;
      }
    }
  }
  return starCount;
}

fetchStarCount().then(console.log);

const co = require("co");
const axios = require("axios");
const API_URL = "https://api.github.com";

function* fetchStarCount() {
  const starCount = {};

  const topRepoRes = yield axios.get(
    `${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`
  );

  const topMemberRes = yield axios.get(
    `${API_URL}/repos/${topRepoRes.data.items[0].full_name}/contributors?per_page=5`
  );

  const ps = topMemberRes.data.map((user) =>
    axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`)
  );
  const starredReposRess = yield Promise.all(ps);
  const starredReposData = starredReposRess.map((r) => r.data);

  for (let repoArr of starredReposData) {
    for (let repo of repoArr) {
      if (repo.full_name in starCount) {
        starCount[repo.full_name]++;
      } else {
        starCount[repo.full_name] = 1;
      }
    }
  }
  return starCount;
}

co(fetchStarCount).then(console.log);
