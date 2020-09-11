// function roll() {
//   return Math.ceil(Math.random() * 6);
// }
// function game() {
//   const result = roll();
//   alert(`결과 : ${result}`);

//   if ((result >= 4, result <= 5)) {
//     alert("당신이 이겼습니다!");
//   } else if (result === 6) {
//     alert("당신은 운이 좋군요!");
//   } else {
//     alert("당신이 젔습니다ㅠㅠ");
//   }
// }
// //  if (result === 6) alert("당신은 운이 좋군요");

// game();

// function roll() {
//     return Math.ceil(Math.random() * 6);
//   }

//   function game() {
//     const result = roll();
//     alert(`결과 : ${result}`);
//     if (result >= 5) {
//       alert("you win");
//     } else {
//       alert("you lose");
//     }
//   }

//   game();

// function translateColor(english) {
//   if (english === "red") {
//     return "red";
//   } else if (english === "blue") {
//     return "blue";
//   } else if (english === "violet") {
//     return "violet";
//   } else {
//     return "no";
//   }
// }
// english();

// function translateColor(english) {
//   let result;
//   switch (english) {
//     case "red":
//       result = "red";
//       break;
//     case "blue":
//       result = "blue";
//       break;
//     case "violet":
//       result = "violet";
//       break;
//     default:
//       result = "no";
//   }
//   return result;
// }

function translateColor(english) {
  let result;
  switch (english) {
    case "red":
      result = "빨간색";
      break;
    case "blue":
      result = "파란색";
      break;
    case "purple":
    case "violet":
      result = "보라색";
      break;
    default:
      result = "nonono";
  }
  return result;
}
