// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

//  

// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum = 0;
    let max = nums[0];
    for(let i = 0;i<nums.length;i++){
        sum > 0 ? sum+=nums[i] : sum = nums[i]
        max = Math.max(sum,max)
    }return max
};