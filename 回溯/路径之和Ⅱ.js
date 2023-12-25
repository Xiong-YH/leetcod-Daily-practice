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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = []    //设立一个数组
    function dfs(node,path,sum) {
        if(!node) {
            return false
        }
        sum += node.val
        //当满足条件时
        if(sum === targetSum && !node.left && !node.right) {
            path.push(node.val)
            res.push([...path])
            path.pop() //排除
            return true
        }
        path.push(node.val)
        dfs(node.left,path,sum)
        dfs(node.right,path,sum)
        sum -= path.pop()   //回溯，从后往前，每一轮循环都要退出
    }

    dfs(root,[],0)
    return res
};