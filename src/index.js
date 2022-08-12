module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let bracketsPair = {};

    bracketsConfig.forEach(brackets => {
        bracketsPair[brackets[0]] = brackets[1];
    });

    for (let i = 0; i < str.length; i++) {
        let currentElem = str[i];
        let topElem = stack[stack.length - 1];

        if (currentElem in bracketsPair) {
            if (currentElem === bracketsPair[currentElem] && currentElem === topElem) {
                stack.pop();
            } else {
                stack.push(currentElem);
            }
        } else {
            if (stack.length === 0) {
                return false;
            }
            if (bracketsPair[topElem] === currentElem) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
