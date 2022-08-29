// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// 输入：head = [1,3,2]
// 输出：[2,3,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
//unshift版
 var reversePrint = function(head) {
    let arr = [];
    while(head) {
        arr.unshift(head.val);
        head = head.next
    };
    return arr
};


//push版本
var reversePrint = function(head) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next
    };
    return arr.reverse()
};

//递归版本
var reversePrint = function(head) {
    if(!head) return []
    let arr = reversePrint(head.next);//对下一个节点的调用
    arr.push(head.val);
    return arr
};