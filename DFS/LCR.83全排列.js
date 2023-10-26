/*
给定一个不含重复数字的整数数组 nums ，返回其 所有可能的全排列 。可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    //记录长度
    const len = nums.length
    //用于记录当前排列的数组
    let cur = []
    //最终全部排列的数组
    let res = []
    //对象式记录当前遍历时已经使用过的坑位
    let visited = {}

    //深度遍历函数
    function def(number) {
        //递归边界，当number === len时，说明已经遍历完数组，可以选择推入当前数组
        if(number === len) {
            res.push(cur.slice())
            return
        }

        //遍历
        for(let i = 0; i<len; i++) {
            //如果该坑位未使用，则记录
            if(!visited[nums[i]]) {
                //记录过
                visited[nums[i]] = 1
                //推入当前坑位的数字
                cur.push(nums[i])
                //遍历下一个
                def(number+1)
                //每当使用过一次，待上一轮递归完成后，每一轮都弹出当前数字
                cur.pop()
                //cur.pop()完成后记得将该坑位改为未使用
                visited[nums[i]] = 0
            }
        }
    }

    //从索引0开始遍历
    def(0)
    return res
};

/*
全排列解题思路
怎么做到[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]每一轮遍历都数组
--可以创建一个记录遍历当前一个路径的数组，也就是cur

二叉树解题思路，这个题目相当于我们是遍历一遍二叉树，但是在每一轮做好相应的处理，然后做好递归边界
*/