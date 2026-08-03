var isValid = function(s) {
    let openBrackets = ['(', '{', '['];
    let closeBrackets = [')', '}', ']'];
    let stack = [];

    for (let char of s) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } 
        else if (closeBrackets.includes(char)) {
            let lastOpen = stack.pop();
        
            if (openBrackets.indexOf(lastOpen) !== closeBrackets.indexOf(char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("([)]"));

/*
Example 1:
Input: s = "()"
Output: true


Example 5:
Input: s = "([)]"
Output: false
*/
