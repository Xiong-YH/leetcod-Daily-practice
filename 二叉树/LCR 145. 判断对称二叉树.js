/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 *   1
   / \
  2   2
 / \ / \
3  4 4  3
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
 * @return {boolean}
 */
var checkSymmetricTree = function(root) {
    function help(node1,node2) {
        if(!node1 && !node2) return true

        if(!node1 || !node2 || node1.val != node2.val) return false

        return help(node1.left,node2.right) && help(node1.right,node2.left)
    }

    if(!root) return true

    return help(root.left,root.right)
};