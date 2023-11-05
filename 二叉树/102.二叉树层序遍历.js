/*
给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
示例 2：

输入：root = [1]
输出：[[1]]
示例 3：

输入：root = []
输出：[]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [] 
    let queue = []
    let cur = []
    let res = []
    queue.push(root) 
    while(queue.length) {
        let len = queue.length
    
        for(let i = 0;i<len; i++) {
            cur.push(queue[i].val)
        }
        res.push(cur)
        cur = []
        for(let j = 0;j<len; j++) {
            const top = queue.shift()
            if(top.left) {
                queue.push(top.left)
            }
            if(top.right) {
                queue.push(top.right)
            }
        }
    }
    return res
};