'use strict'

export { };

const str = "abc";
const str1 = new String("abc");

console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));

console.log(str == str1);
console.log(str.length);

const myStr = "ščťžý";
const flag = "🏳";

console.log(flag.charCodeAt(0));
console.log(flag.charCodeAt(1));
console.log(flag.length);

console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());

console.log(str.indexOf("bc"));
console.log(str.indexOf("efg"));

console.log("'bc' starts at: ", "abcabcabc" .indexOf("bc", 4));

console.log(str.charAt(2));

for (let i = 0; i < str.length; i++) {
    console.log(flag.charAt(i));
}

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
