/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

*/

/**
 * @param {string} s
 * @return {boolean}
 */

const leftToRight = {
    "(":")",
    "[" :"]",
    "{":"}"
}
var isValid = function(s) {
    //如果字符串为空，则返回true
    if(!s) {
        return true
    }
    //设置一个栈
    const a = []
    //存储长度
    const n = s.length
    //遍历
    for(let i = 0; i<n; i++) {
        //缓存单个括号
        let ch = s[i]
        //若符合左括号条件
        if(ch == "(" || ch == "[" ||ch == "{" ) {
            //将左括号对应的右括号推入数组
            a.push(leftToRight[ch])
        } else {
            //当遍历到右括号时
            //如果数组长度为0，或者弹出的最后一位不是对应的右括号则返回false
            if(a.length === 0 || a.pop() !== ch) {
                return false
            }
            
        }
    }
    //最终栈的长度为0
    return !a.length
};