// jshint esversion:6
module.exports = function reverse (n) {
  let arr = String(n).split("");
  return parseInt(arr.reverse().join(""));
}
