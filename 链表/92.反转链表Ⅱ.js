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
    let pre,cur,leftHead
    let  dummy = new ListNode()
    dummy.next = head
    let p = dummy
    for(let i = 0;i<left-1;i++) {
        p = p.next
    }
    //记录反转前一个节点
    leftHead = p
    //记录第一个节点
    let start = p.next
    pre = start
    cur = start.next
    for(let i = left;i<right;i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    leftHead.next = pre
    start.next = cur
    return dummy.next
};

//还是利用三指针的思路