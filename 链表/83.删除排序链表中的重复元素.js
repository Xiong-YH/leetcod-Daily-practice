/*
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

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
var deleteDuplicates = function(head) {
    let cur = head
    while(cur !== null && cur.next !== null) {
        if(cur.val === cur.next.val) {
            cur.next = cur.next.next
            
        }else {
            cur = cur.next
        }
        
    }
    return head
};

//cur !== null && cur.next !== null一定要确保这个能成立，否则写不成