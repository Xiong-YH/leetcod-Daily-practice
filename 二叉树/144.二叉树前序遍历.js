/*
给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 

示例 1：


输入：root = [1,null,2,3]
输出：[1,2,3]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：


输入：root = [1,2]
输出：[1,2]
示例 5：


输入：root = [1,null,2]
输出：[1,2]
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
 * @return {number[]}
 * 
 * 前序遍历迭代算法
 * 通过while函数遍历，构造一个栈结构，栈先存入一个节点，确保栈内有值，将栈中元素弹出，结果数组中存入弹出值，然后递归左子树和又子树存入栈中
 */


var preorderTraversal = function(root) {
    const res = []
    if(!root) {
        return res
    }
    const stack = []
    stack.push(root)
    while(stack.length) {
        const cur = stack.pop()
        res.push(cur.val)
        
        if(cur.right) {
            stack.push(cur.right)
        }
        if(cur.left) {
            stack.push(cur.left)
        }
        
    }
    return res
};


/*
递归版算法
写一个递归函数，前序遍历递归模板
*/

var preorderTraversal = function(root) {
    let res = []
    function traverse(root) {
    if(root == null) {
        return
    }
    res.push(root.val)
    traverse(root.left)
    traverse(root.right)
    }

    traverse(root)
    return res

};