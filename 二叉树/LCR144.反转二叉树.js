/*
输入：root = [5,7,9,8,3,2,4]
输出：[5,9,7,4,2,3,8]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root) return root
    let right = mirrorTree(root.right)
    let left = mirrorTree(root.left)

    root.left = right
    root.right = left
    return root
};