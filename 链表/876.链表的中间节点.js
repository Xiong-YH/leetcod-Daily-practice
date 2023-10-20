/*
输入：head = [1,2,3,4,5]
输出：[3,4,5]
解释：链表只有一个中间结点，值为 3 。
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
var middleNode = function(head) {
    let dummy = fast = slow = new ListNode()

    dummy.next = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    if(!fast) {
        return slow
    }else {
        return slow.next
    }
    
};

/*
思路可以参照回文链表
1.设置一个快指针一个慢指针
2.快指针走两步，慢指针走一步
3.当链表节点数为奇数和偶数时，需要分情况讨论 --->奇数时，快指针已经走出链表，故判断条件为！fast。偶数时，快指针在最后一个节点，判断条件为！fast.next
*/

