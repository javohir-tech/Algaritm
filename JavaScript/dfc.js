function inorderTraversal(root) {
    let result = [];

    function dfs(node) {
        if (!node) return;

        dfs(node.left);   
        result.push(node.val);
        dfs(node.right);
    }

    dfs(root);



    







    

    return result;
    
}

const root = [1 , null , 2, 3 , 4]
console.log(inorderTraversal(root))