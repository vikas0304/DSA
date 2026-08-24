const findCharCount = (s) => {
    let charCount = new Map();
    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(charCount.has(char)){
            charCount.set(char, charCount.get(char) + 1);
        }else{
            charCount.set(char, 1)
        }
    }

    return charCount;
}

const str = "vikaspal"
console.log(findCharCount(str))