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
//递归版
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

//非递归版，类似于二叉树层序遍历

var checkSymmetricTree = function(root) {
    if(!root) return true
    let queue = [root.left,root.right]
    
    let node1,node2
    while(queue.length) {
        node1 = queue.shift()
        node2 = queue.shift()
        if(!node1 && !node2)continue
        if(!node1 || !node2 || node1.val !== node2.val) return false
        
        queue.push(node1.left)
        queue.push(node2.right)
        queue.push(node1.right)
        queue.push(node2.left)
        
    }
    return true
};