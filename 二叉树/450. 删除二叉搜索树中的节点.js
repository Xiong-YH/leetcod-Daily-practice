/*
给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点；
如果找到了，删除它。

输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) {
        return root
    }
    if(root.val == key) {
        if(!root.left && !root.right) {
            root = null
        }else if(root.left) {
            const maxroot = maxNode(root.left)
            root.val = maxroot.val
            root.left = deleteNode(root.left,maxroot.val)
        }else {
            const minroot = minNode(root.right)
            root.val = minroot.val
            root.right = deleteNode(root.right,minroot.val)
        }
    }else if(root.val<key) {
        root.right = deleteNode(root.right,key)
    }else {
        root.left = deleteNode(root.left,key)
    }

    return root
};

function maxNode(root) {
    while(root.right) {
        root = root.right
    }
    return root
}

function minNode(root) {
    while(root.left) {
        root = root.left
    }
    return root
}


