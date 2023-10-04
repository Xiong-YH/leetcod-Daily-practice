//给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
/*
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const cur = new ListNode()
    cur.next = head

    let fast = cur
    let slow = cur
    while(n != 0) {
        fast = fast.next
        n--
    }

    while(fast.next != null) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next

    return cur.next
};

//先用一个快指针走n步，然后快慢指针同时走，当快指针走到最后一个节点时，慢指针正好在倒数n个节点的前一节点
