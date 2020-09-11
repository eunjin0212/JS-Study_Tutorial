// let i = 0;
// while (i < 5) {
//   console.log(`현재의 값 : ${i}`);
//   i++;
// }
// console.log("루프가 종료 되었습니다.");

// do {
//   console.log("do...while");
// } while (false);

// for (let i = 0; i < 3; i++) {
//   console.log(`현재의 값 : ${i}`);
// }
// console.log("루프가 종료됨");

// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`배열의 ${i + 1}번째 요소는 ${arr[i]}입니다.`);
// }

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index) => {
//   console.log(`배열의 ${index + 1}번째 요소는 ${item}입니다.`);
// });

// const arr = [1, 2, 3, 4, 5];
// for (let item of arr) {
//   console.log(`현재 요소는 ${item}입니다.`);
// }

// alert("퀴즈를 시작합니다.");
// while (true) {
//   const answer = prompt("빨강의 보색은 무엇일까요?");
//   if (answer === "초록") {
//     alert("정답입니다!");
//     break;
//   } else {
//     alert("틀렸습니다!");
//   }
// }

// alert("퀴즈 끝!");

for (let i = 1; i < 100; i++) {
  console.log(`현재 숫자는 ${i}입니다.`);
  if (i % 7 !== 0) {
    continue;
  }
  console.log(`${i}의 배수는 7의 배수 입니다.`);
}

function translateColor(english) {
  switch (english) {
    case "red":
      return "빨간색";
    case "blue":
      return "파란색";
    case "black":
      return "검정색";
    default:
      throw new Error("일치하는 색이 없습니다.");
  }
}
