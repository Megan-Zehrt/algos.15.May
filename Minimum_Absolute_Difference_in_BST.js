// 530. Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.





/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prevVal = null;

    function inorderTraversal(node) {
        if (!node) return;
        
        inorderTraversal(node.left);
        
        if (prevVal !== null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - prevVal));
        }
        prevVal = node.val;
        
        inorderTraversal(node.right);
    }

    inorderTraversal(root);
    
    return minDiff;
};