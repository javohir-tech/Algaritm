function inorderTraversal(root) {
    let result = [];

    function dfs(node) {
        if (!node) return;

        dfs(node.left);   // chap
        result.push(node.val); // root
        dfs(node.right);  // o'ng
    }

    dfs(root);

    return result;
}

const root = [1 , null , 2, 3]
console.log(inorderTraversal(root))