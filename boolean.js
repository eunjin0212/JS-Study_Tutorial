console.log(1 < 2);
console.log(1 > 2);
console.log(3 === 3);
console.log(3 !== 3);
console.log(Number.isFinite(Infinity));
console.log(Number.isNaN(NaN));
console.log("hello".includes("ll"));

console.log(!true);
console.log(!false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

console.log(true || (true && false));
console.log((true || true) && false);
console.log(true || (false && false));
console.log((true || false) && false);

let a, b, c;
console.log(!!false === false);
console.log(a || b === b || a);
console.log(a && b === b && a);
console.log(a || b || c === a || b || c);
console.log(a || ((b && c) === (a || b) && (a || c)));
console.log((a && (b || c) === (a && b)) || (a && c));
console.log(a && (a || b) === a);
console.log(a || (a && b) === a);
console.log(!(a || b) === !a && b);
console.log(!(a && b) === !a || b);
console.log(a || true === true);
console.log(a || false === false);
console.log(a && true === true);
console.log(a && false === false);
console.log(a || !a === true);
console.log(a && !a === false);
console.log(a || a === a);
console.log(a && a === a);
if (1) {
  console.log("이 코드는 실행됩니다");
}
if (0) {
  console.log("이 코드는 실행되지 않습니다");
}

console.log(!!"hello");
console.log(Boolean("hello"));
