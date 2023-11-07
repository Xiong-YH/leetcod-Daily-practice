/*
701. 二叉搜索树中的插入操作
输入：root = [4,2,7,1,3], val = 5
输出：[4,2,7,1,3,5]
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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) {
        root = new TreeNode(val)
        return  root
    }
    if(root.val < val) {
        root.right = insertIntoBST(root.right,val)
    } else {
        root.left = insertIntoBST(root.left,val)
    }

    return root
};