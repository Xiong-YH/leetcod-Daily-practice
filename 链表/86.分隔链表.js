/*
86. 分隔链表
中等
763
相关企业
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

 

示例 1：


输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
示例 2：

输入：head = [2,1], x = 2
输出：[1,2]
 
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy1 = p1 = new ListNode()
    let dummy2 = p2 = new ListNode()
    let p = head
    while(p) {
        if(p.val>= x) {
            p2.next = p
            p2 = p2.next
        }else {
            p1.next = p
            p1 = p1.next
        }
        let next = p.next
        p.next = null
        p = next
    }
    p1.next = dummy2.next
    return dummy1.next
};