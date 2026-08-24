var lengthOfLongestSubstring = function(s) {
    let charCount = new Map();
    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(charCount.has(char)){
            charCount.set(char, charCount.get(char) + 1);
        }else if(charCount.has(charCount.get(char))){

        }else{
            charCount.set(char, 1)
        }
    }

    return charCount;
};

const str = "abcabcbb";
console.log(lengthOfLongestSubstring(str)); // Output: 3. Explanation: The answer is "abc", with the length of 3.
























/*

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/