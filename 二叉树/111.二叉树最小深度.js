/*
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

输入：root = [3,9,20,null,null,15,7]
输出：2
*/

var minDepth = function(root) {
    if(!root) {
        return 0
    }                      
    let queue = []
    let deepth = 1                      
    queue.push(root)

    while(queue.length) {
        for(let i = 0;i<queue.length;i++) {
            const cur =queue.shift()
            if(cur.left == null && cur.right == null) {
                return deepth
            }
            if(cur.left) {
                queue.push(cur.left)
            }
            if(cur.right) {
                queue.push(cur.right)
            }
        }
        
        deepth++
    }

    return deepth
};