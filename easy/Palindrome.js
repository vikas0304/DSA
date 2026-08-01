/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let y = parseInt(String(x).split("").reverse().join(""));
//     return x === y
// };


var isPalindrome = function(x) {
  x = String(x);
  for (let i = 0; i <= x.length / 2; i++) {
    if (x.length == 0 || x.length == 1) {
      return true;
    }
    let left = x.charAt(i);
    let right = x.charAt(x.length - 1 - i);

    if (left !== right) {
      return false;
    }
  }
    return true;
}

console.log(isPalindrome(-121));