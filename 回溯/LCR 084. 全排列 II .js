/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    //先对元素进行排列，有利于后续的剪枝逻辑
    nums.sort()
    if(nums.length === 0) return []

    let res = []

    let cur = []
    let used = new Array(nums.length).fill(false)
    function backtrack(nums,cur,used) {

        if(cur.length === nums.length) {
            res.push([...cur])

            return
        }

        for(let i = 0; i<nums.length;i++) {
            if(used[i]) {
                continue
            }
            //最重点的剪枝逻辑，i一定要大于0，万一i-1 < 0不符合规律
            //!used[i-1]表示如果前面数打了标记，后面的数也需要推入，例如[1,2,2],如果后面先推入后面的数，则前面的数没有打标记，则可以跳过，因为前面已经有一轮已经有了相同排列
            if(i>0 && nums[i] === nums[i-1] && !used[i-1]) {
                continue
            }
            //执行逻辑之前占坑
            cur.push(nums[i])
            used[i] = true

            backtrack(nums,cur,used)
            //逻辑执行完毕时，跳出坑位
            cur.pop()
            used[i] = false 
        }
    }

    backtrack(nums,cur,used)
    return res
};

//全排列题解，对于重复元素，不重复组合，可以优先对元素进行排列，然后处理剪枝逻辑