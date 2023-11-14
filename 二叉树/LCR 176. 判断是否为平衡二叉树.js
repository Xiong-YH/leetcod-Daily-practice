/*
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

 

示例 1:

输入：root = [3,9,20,null,null,15,7]
输出：true 

示例 2:

输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
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
var isBalanced = function(root) {
    
    let flag = true

  function dfs(root) {

      if(!root || !flag) {
          return 0 
      }

      const left = dfs(root.left)  

      const right = dfs(root.right)  

      if(Math.abs(left-right) > 1) {
          flag = false

          return 0
      }

      return Math.max(left, right) + 1
  }
  

  dfs(root) 

  return flag
};