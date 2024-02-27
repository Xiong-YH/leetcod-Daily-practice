/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length-1
    const res = []
    while(left <= right) {
        if(nums[left]*nums[left] < nums[right]*nums[right]) {
            res.unshift(nums[right]*nums[right])
            right--
        }else {
            res.unshift(nums[left]*nums[left])
            left++
        }
    }

    return res
};

//空间换时间，创造一个新的数组空间，双指针进行对比推入新数组中