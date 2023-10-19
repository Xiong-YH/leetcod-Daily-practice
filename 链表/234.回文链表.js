/*
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

 

示例 1：


输入：head = [1,2,2,1]
输出：true
示例 2：


输入：head = [1,2]
输出：false
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //先写一个递归反转函数
    const reverse = (pre,cur)=>{
        if(!cur) return pre
        const next = cur.next
        cur.next = pre
        return reverse(cur,next)
    }
    //设立哨兵节点
    const dummey = fast = slow = new ListNode()
    //先链接头节点
    dummey.next = head
    //在这里快指针走两步，慢指针走一步，当快指针走完时，慢指针正好走一半
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    //这里需要断开slow中间节点，相当于构成一个新链表，我们后续的思路是将这个链表断开，和断开的前一半比对数值
    const next = slow.next
    slow.next = null
    let pre = null,cur = next
    //这里使用反转递归函数
    const newNode = reverse(pre,cur)
    //两条链表进行比对，这里是一个链表比对的公式，可以记一下
    for(let p = head,newP = newNode;newP != null;p = p.next,newP = newP.next) {
        if(p.val != newP.val) return false
    }
    return true
};

//这里我们可以思考一个问题，什么时候可以使用递归反转函数，什么时候不使用，递归反转函数的使用边界

//看见这个题目时，我想法是分成两段，取得中间节点，然后分成两个链表进行比对，具体实现步骤
/*
1.找出这个链表的中间节点 --->利用快慢指针，快指针两步，慢指针一步，其中可以思考奇数链表和偶数链表两种情况
2.将后一半链表进行反转（中间记得打断与前一部分链表的联系） --->利用递归反转函数
3.将得到的链表进行遍历比对 --->for循环的书写条件
*/