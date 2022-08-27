// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
// 示例
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

//在遍历链表时，将当前节点的next指针改为指向前一个节点。
//由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。
//在更改引用之前，还需要存储后一个节点。最后返回新的头引用。


//递归版本，不是很懂
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
