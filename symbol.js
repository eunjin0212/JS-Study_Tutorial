const sym = Symbol();
console.log(typeof sym);
console.log(sym);

console.log(Symbol("my symbol"));
console.log(Symbol("my symbol") === Symbol("my symbol"));
console.log(Symbol() === Symbol());

const mySymbol = Symbol("my symbol");
const obj = {
  [mySymbol]: "hello",
};
console.log(obj);
