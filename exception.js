// new Array(-1);
// console.log(foo);
// fetch("https://nonexistent-domain.nowhere");

// try {
//   console.log("에러 나기 직전까지 잘 실행 됨");
//   new Array(-1);
//   console.log("에러나면 실행 안 됨");
// } catch (e) {
//   console.log("코드의 실행 흐름이 캐치로 감");
//   alert(`다음과 같은 에러가 발생함 : ${e.name}:${e.message}`);
// }

// for (let i of [1, 2, 3]) {
//   try {
//     if (i === 3) {
//       break;
//     }
//   } finally {
//     console.log(`현재 i의 값 : ${i}`);
//   }
// }

// try {
//   console.log("try");
//   new Array(-1);
// } catch (e) {
//   console.log("catch");
// } finally {
//   console.log("finally");
// }

// const even = parseInt(prompt("짝수를 입력하세요"));
// if (even % 2 !== 0) {
//   throw new Error("짝수가 아닙니다.");
// }
// class MyError extends Error {
//   constructor(value, ...params) {
//     super(...params);
//     this.value = value;
//     this.name = "MyError";
//   }
// }
// try {
//   const even = parseInt(prompt("짝수를 입력하세요"));
//   if (even % 2 !== 0) {
//     throw new MyError(even, "짝수가 아닙니다");
//   }
// } catch (e) {
//   if (e instanceof MyError) {
//     console.log(e.value);
//   }
// }
// try {
//   setTimeout(() => {
//     throw new Error("에러");
//   });
// } catch (e) {
//   console.log(e);
// }

//  setTimeout (()=> try {
//      throw new Error('에러!');
//  } catch (e){
//      console.log(e);
//  }
//  );

// const p = new Promise((resolve) => {
//   const even = paeseInt(prompt("짝수를 입력하세요"));
//   if (even % 2 !== 0) {
//     throw new Error("짝수가 아닙니다");
//   } else {
//     resolve(even);
//   }
// });
// p.then(
//   (even) => {
//     return "짝수 입니다";
//   },
//   (e) => {
//     return e.message;
//   }
// ).then(alert);

// p.then((even) => {
//   return "짝수입니다";
// })
//   .catch((e) => {
//     return e.message;
//   })
//   .then(alert);

// Promise.resolve()
//   .then(() => {
//     throw new Error("catch 매소드를 통해 예외 처리를 할 수 있습니다.");
//   })
//   .then(() => {
//     console.log("이코드는 실행되지 않습니다.");
//   })
//   .catch((e) => {
//     return e.message;
//   })
//   .then(console.log);

// async function func() {
//   try {
//     const res = await fetch("https://nonexistent-domain.nowhere");
//   } catch (e) {
//     console.log(e.message);
//   }
// }
// func();

async function func() {
  try {
    fetch("https://nonexistent-domain.nowhere");
  } catch (e) {
    console.log(e.message);
  }
}
func();
