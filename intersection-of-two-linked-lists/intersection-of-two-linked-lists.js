/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// //HashSet
// //Time: O(N+M) | Space: O(M)
// var getIntersectionNode = function(headA, headB) {
//     let visited = new Set();
    
//     while (headB !== null) {
//         visited.add(headB);
//         headB = headB.next;
//     }
    
//     while (headA !== null) {
//         if (visited.has(headA)) {
//             return headA;
//         }
//         headA = headA.next;
//     }
//     return null;
// };
//Two pointers
//Time: O(N+M) | Space: O(1)
var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    
    while (p1 !== p2) {
        p1 = p1 === null ? headB : p1.next;
        p2 = p2 === null ? headA : p2.next;
    }
    return p1;
}