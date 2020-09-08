console.log(typeof "hello");

console.log("hello" === "hello");
console.log(`hello world`);

const name1 = "Foo";
const name2 = "Bar";
const sentence = `${name1} meets ${name2}!`;
console.log(sentence);
console.log(name1 + " meets " + name2 + "!");

console.log(`hello
 world
 hello
 javascript`);

console.log("hello\n world\nhello\njavascript");

console.log("lorem 'ipsum'");
console.log("line\nfeed");
console.log("\uD55C\uAE00");
console.log("\u{1F435}");
console.log("hi 'hi");
console.log("\rcarage \rreturn");
console.log("\ttap\ttap");
console.log("$100");
console.log("`back");

console.log("hello" === "hello");
console.log("hello" !== "hello");
console.log("a" < "b");
console.log("a" > "A");
console.log("aaa" < "abc");
console.log("한글" < "한국어");
console.log("2" < "10");
console.log([..."hello"]);
console.log("b".localeCompare("a"));
console.log("b".localeCompare("b"));
console.log("b".localeCompare("z"));
console.log("b".localeCompare("Z"));
console.log("가나다".localeCompare("마바사"));
console.log("helloworld".length);
console.log("hello".concat("fun", "javascript"));
console.log("hi".repeat(3));
console.log("hello javascript".includes("hello"));
console.log("hello javascript".startsWith("he"));
console.log("hello javascript".endsWith("ript"));
console.log("hello javascript".indexOf("java"));
console.log("hello javascript".replace("java", "type"));
console.log("hello".slice(2, 4));
console.log("   hello   ".trim());
console.log("   hello  ".trimLeft());
console.log("   hello   ".trimRight());
console.log("hello".padStart(8));
console.log("hello".padEnd(8));
console.log("hello!fun!javascript".split("!"));
console.log("hello".split(""));
console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());
