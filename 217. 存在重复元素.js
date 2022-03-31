// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0;i < nums.length;i++) {
        for (let j = i+1;j < nums.length;j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};
