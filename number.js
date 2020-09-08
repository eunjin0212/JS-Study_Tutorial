console.log(0x4d === 77);
console.log(0b1001101 === 77);

console.log(Number.isInteger(1));
console.loNumber.isInteger(0.1));

console.log(1 + 2);
console.log(4 - 2);
console.log(5 * 6);
console.log(16 / 2);
console.log(14 % 3);
console.log(2 ** 3);

console.log(1 < 2);
console.log(3 > 4);
console.log(5 <= 5);
console.log(6 >= 5);
console.log(8 === 8);
console.log(8 !== 8);

let a = 1;
a++;
console.log(a);
let b = 1;
b++;
console.log(b);
let c = 1;
--c;
console.log(c);
let d = 1;
d--;
console.log(d);

 let x = 0;
 x += 1;
 console.log(x);

 let x = 0;
 x = x + 1;
 console.log(x);

 let x = 0;
 x -= 1;
 console.log(x);

 let x = 0;
 x *= 2;
 console.log(x);

 let x = 4;
 x /= 2;
 console.log(x);

let x = 8;
x %= 3;
console.log(x);

let x = 2;
x **= 5;
console.log(x);

console.log(0.1 + 0.2);

const thisIsNaN = NaN;
console.log(thisIsNaN === NaN);

const thisIsNaN = NaN;
console.log(Number.isNaN(thisIsNaN));
console.log(Object.is(thisIsNaN, NaN));

console.log(0 === -0);
console.log(1 * -0);
console.log(1 + -0);

console.log(Object.is(0, -0));

console.log(1 / 0);
console.log(1 / -0);
console.log(1 / Infinity);
console.log(1 / -Infinity);

console.log(Number.isFinite(1));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite("1"));
console.log(isFinite("1"));

console.log(parseInt("123"));
console.log(parseInt("110", 2)); //문자열은 2진수로 간주
console.log(parseFloat("12.345"));
console.log(parseInt("hello"));

console.log(1 + null);
console.log(1 * "1");
console.log(1 + "1");
console.log(1 - "1");

// //상수
// Math.E;
// Math.PI;

// //삼각함수,

// Math.sin;
// Math.cos;
// Math.tan;

// Math.log; //밑을 자연상수로 하는 로그함수
// Math.exp; //밑을 자연상수로 하는 지수함수
// Math.sqrt; //제곱근

// Math.abs; //절대값
// Math.ceil; //올림
// Math.floor; //내림
// Math.round; //반올림
// Math.trunc; //소수점 아래 잘라내기

// //최대값, 최소값

// Math.max;
// Math.min;

// //랜덤
// Math.random;

console.log(Math.cos(Math.PI));
console.log(Math.log(Math.E));
console.log(Math.round(0.5));
console.log(Math.random());
console.log(Math.max(1, 2, 3, 4, 5));
console.log((12345).toString());
console.log((12345).toLocaleString());
console.log((1.2345).toFixed(2));
