/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

    示例 1：

    输入：n = 3
    输出：["((()))","(()())","(())()","()(())","()()()"]
    示例 2：

    输入：n = 1
    输出：["()"]
 * 
 * 
 * 
 */

    /**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 0) return []
    //先创立一个数组
    let res = []

    let track = ''

    function backtrack(left,right,track,res) {
        //当right小于left时，一般不合法，因为一般都是从0到i，左边括号多
        if(right < left) return 
        //当左括号或者右括号小于0，都不合法
        if(left < 0 || right <0) return
        //只有两个都为0才符合条件
        if(left ===  0 && right === 0) {
            res.push(track)

            return
        }

        //回溯框架，先填一个坑
        track = track+'('
        backtrack(left-1,right,track,res)
        track = track.slice(0,-1)   //执行完毕后将这个坑退出

        //对于右边括号也是这样
        track = track+')'
        backtrack(left,right-1,track,res)//加上右括号就right-1
        track = track.slice(0,-1)
    }

    backtrack(n,n,track,res)
    return res
};

//题目意思是，n对括号随机排列，相当于有2n个坑位，那么相当于在2n个坑位中随机排列，那么可以设左括号的个数为n，右括号个数为n
