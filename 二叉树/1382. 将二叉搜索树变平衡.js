/**
 * 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。如果有多种构造方法，请你返回任意一种。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。


输入: root = [2,1,3]
输出: [2,1,3]
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const num = []
    function dfs(root) {
        if(!root) {
            return 
        }

        dfs(root.left)
        num.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    let len = num.length
    function BuiltBST(low,high) {
        if(low > high) {
            return null
        }

        const mid = Math.floor(low+(high-low)/2)

        const cur = new TreeNode(num[mid])

        cur.left = BuiltBST(low,mid-1)
        cur.right = BuiltBST(mid+1,high)

        return cur
    }

    return BuiltBST(0,len-1)
};

/**
 * 二叉搜索树的中序遍历是有序的
 * 所以说这个题目的解题思路相当于给一个数组进行中序遍历打造有序数组，然后再用之前的进行转化为平衡二叉树
 */