var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        // Eng chapga bor
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        result.push(current.val); // O'rtani qo'sh
        current = current.right;  // O'ngga o't
    }
    
    return result;
};

const root = [1, null, 2, 3]
console.log(inorderTraversal(root))