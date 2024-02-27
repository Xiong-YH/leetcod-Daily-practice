/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0
    for(let i = 0;i<nums.length;i++) {
        if(nums[i] !== val) {
            nums[slow++] = nums[i]
            
        }
        
    }

    return slow
};
//空间换时间，利用双指针，一个指向元素，一个指向索引