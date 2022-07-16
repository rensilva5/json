// Practice
const yes = true;
const data = require("./data.json")
const {tas, teachers} = data
console.log("The Tas are:")

// for (let i = 0; i < Array.length; i++) {
for (let i = 0; i < tas.length; i++) {
  let ta = tas[i];
  console.log(ta.name);
}

console.log("The teachers are:")
for (let i = 0; i < teachers.length; i++) {
    console.log(teachers[i].name)

}