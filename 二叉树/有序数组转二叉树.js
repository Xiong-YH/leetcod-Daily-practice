/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {

    if(!nums.length) {
        return null
    }
    const root = buildBST(0, nums.length-1)
    function buildBST(low, high) {
        if(low > high) {
            return null
        }

        const mid = Math.floor(low + (high - low)/2)  
        const cur = new TreeNode(nums[mid]) 
        cur.left = buildBST(low,mid-1)
        cur.right = buildBST(mid+1, high)

        return cur
    }
    return root
};