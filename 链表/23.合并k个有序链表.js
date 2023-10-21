/*
示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const mergeTwo = (list1,list2)=>{
        const cur = dummy = new ListNode()
        
        while(list1 && list2) {
            if(list1.val<list2.val) {
                dummy.next = list1
                list1 = list1.next
            } else {
                dummy.next = list2
                list2 = list2.next
            }
            dummy = dummy.next
        }

        dummy.next = list1? list1 : list2

        return cur.next
    }

    const _mergeList = (list,start,end)=> {
        if(end < start) return null
        if(end - start == 0) return list[end]
        if(end - start > 0) {
            const mid = Math.floor(start + (end-start)/2)
            return mergeTwo(_mergeList(lists,start,mid),_mergeList(lists,mid+1,end))
        }
        
    }
    return _mergeList(lists,0,lists.length-1)
};