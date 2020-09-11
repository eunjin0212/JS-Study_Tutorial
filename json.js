// {
//     "key":"value",
//     "arr":[1,2,3],
//     "nullProp": null
// }

// JSON.stringify({
//     key: 'value',
//     arr: [1,2,3],
//     nullProp: null,
//     undefinedProp: undefined
// });
// JSON.parse('{'key':'value',"arr":[1,2,3],"nullProp":null}')

// const now = new Data();
// console.log(now.toString());
// console.log(now.toLocaleString());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toISOString());
// console.log(now.toUTCString());

const moment = require("moment");
moment.locale("ko");
const now = moment();
console.log(now.format("dddD, MMMM, Do YYYY, h:mm:ss a"));
console.log(now.subtract(7, "days").calendar());
console.log(moment("20200101", "YYYYMMDD").format());
