// Time Complexity O(n)

//PseudoCode
// postOrder (node)
    // if node == null then return null
    // postOrder(node.left)
    // postOrder(node.right)

const preOrderTraversal = function (root) {
    if (!root) return [];
    const stack = [root];
    const result = [];

    while (stack.length) {
        let node = stack.pop();

        result.push(node.val); 
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }

    return result;
}

//Recursive Function

const preOrderTraversal_2 = function (root) {
    if (!root) return [];
    const stack = [root];
    const result = [];

    const preOrder = (node) => {
        if (!root) return null;

        result.push(node.val);
        if(node.left) preOrder(node.left);
        if(node.right) preOrder(node.right);
    }
}