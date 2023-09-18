/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

示例 2：

输入：nums = []
输出：[]

示例 3：

输入：nums = [0]
输出：[]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let a = []
    
    nums = nums.sort((a,b)=>a-b)
    for(let i = 0;i<nums.length-2;i++) {
        let j = i+1;
        let k = nums.length-1
        if(i>0 && nums[i] === nums[i-1]) {
            continue
        }
        while(j<k) {
            if( nums[i] + nums[j] + nums[k] < 0) {
                j++
                while(j<k && nums[j] === nums[j-1]) {
                j++
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--
                while(j<k && nums[k] === nums[k+1]) {
                    k--
                }
            } else {
                a.push([nums[i] , nums[j], nums[k]])
                j++
                k--
                while(j<k && nums[j] === nums[j-1]) {
                    j++
                }
                while(j<k && nums[k] === nums[k+1]) {
                    k--
                }
            }
        }

    }

    return a
};

//利用差值＋对撞指针的思想

//有序 + 数组