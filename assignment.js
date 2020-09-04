// alert("자바스크립트!");
// alert(+true);

// alert(true + false);
// alert(4 + 5 + "px");
// alert("$" + 4 + 5);
// alert("4px" - 2);

// let value = prompt("자바 스크립트의 공식 이름은 무엇일까요?");
// if (value == "ECMAScript") {
//   alert("정답입니다~");
// } else {
//   alert("모르시나요? 정답은 ECMAScript 입니다.");
// }

let user = {
  name: "John",
  age: 30,
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
  clone[key] = user[key];
}

// 이제 clone은 완전히 독립적인 복제본이 되었습니다.
clone.name = "Pete"; // clone의 데이터를 변경합니다.

alert(user.name); // 기존 객체에는 여전히 John이 있습니다.
alert(clone.name);
