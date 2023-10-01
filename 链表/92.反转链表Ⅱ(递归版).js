/*
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

局部反转

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummey = new ListNode ()
    dummey.next = head
    let p = dummey
    //递归反转函数
    let reverse = (pre,cur) =>{
        if(!cur) return pre
        let next = cur.next
        cur.next = pre
        return reverse(cur, next)
    }
    //获取区间头节点和尾节点
    let start,end
    //前节点和后节点
    let front,tail
    for(let i = 0;i<left-1;i++) {
        p = p.next
    }
    //保存前节点
    front = p
    start = p.next
    for(let i = left-1;i<right;i++) {
        p = p.next
    }
    
    end = p
    //保存后节点
    tail = p.next
    end.next = null
    front.next = reverse(null,start)
    start.next = tail
    return dummey.next
};

//这方法，简直牛逼，爱了爱了