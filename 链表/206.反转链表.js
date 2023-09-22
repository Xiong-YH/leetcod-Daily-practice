/*
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：
输入：head = [1,2]
输出：[2,1]

示例 3：

输入：head = []
输出：[]
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    //设定头指针
    let pre = null
    //中指针
    let cur = head
    while(cur != null) {
        //尾指针存储池下一个节点的地址
        let next = cur.next
        //当前指针改变next方向
        cur.next = pre
        //头指针进一位
        pre = cur
        //当前指针指向下一位
        cur = next
    }
    return pre
};

//使用三个指针思想