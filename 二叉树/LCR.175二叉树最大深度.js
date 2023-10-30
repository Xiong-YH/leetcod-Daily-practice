/*
输入：root = [1, 2, 2, 3, null, null, 5, 4, null, null, 4]
输出: 4
解释: 上面示例中的二叉树的最大深度是 4，沿着路径 1 -> 2 -> 3 -> 4 或 1 -> 2 -> 5 -> 4 到达叶节点的最长路径上有 4 个节点。
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的分解算法
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth = function(root) {

    if(!root) return 0

    let left = calculateDepth(root.left)
    let right = calculateDepth(root.right)

    let res = Math.max(left,right)+1
    return res
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树遍历算法
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth = function(root) {
    let res = 0
    let DepValue = 0
    function Dep(root) {
        if(root == null) {
            res  = Math.max(DepValue,res)
            return 
        }
        DepValue++
        Dep(root.left)
        Dep(root.right)
        DepValue--
    }

    Dep(root)
    return res
};