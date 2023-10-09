/*
定义：
二叉树是n个节点的有限集合
1.可以没有根节点，作为一个空树存在，即n = 0
2.有根节点就必须由根节点、左子树和右子树组成，且左子树和右子树都是二叉树

*/


const root = {
    val:'A',
    left:{
        val:'B',
        left:{
            val:'D'
        },
        right:{
            val:'E'
        }
    },
    right:{
        val:'c',
        right:{
            val:'F'
        }
    }
}


//递归式
//递归边界


//先序遍历
//根节点-->左子树-->右子树
function preorder(root) {
    if(!root) return

    console.log('当前遍历的节点值',root.val)

    preorder(root.left)
    preorder(root.right)

}


//中序遍历
//左子树-->根节点-->右子树
function inorder(root) {
    if(!root) return

    inorder(root.left)
    console.log('当前遍历的节点值',root.val)
    inorder(root.right)
}


//后序遍历
//左子树-->右子树-->根节点
function postorder(root) {
    if(!root) return

    postorder(root.left)
    postorder(root.right)
    console.log('当前遍历的节点值',root.val)
}