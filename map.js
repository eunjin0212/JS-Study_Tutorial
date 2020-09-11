const m = new Map();
m.set("hello", "world");
console.log(m.get("hello"));
console.log(m.has("hello"));

m.delete("hello");
console.log(m.get("hello"));
console.log(m.has("hello"));

const s = new Set();
s.add(1);
s.add(1);
s.add(2);
console.log(s);
