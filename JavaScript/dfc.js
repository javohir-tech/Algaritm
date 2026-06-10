function TreeNode(val, left, rigth) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? 0 : left
    this.rigth = rigth === undefined ? 0 : rigth
    return [this.val, this.left, this.rigth]
}

function inorderTraversal(root) {
    for (let i = 0; i < root.length; i++) {
        res = TreeNode(root[i], root[i * 2 + 1], root[i * 2 + 2])
        console.log(res)
    }
}


root = [1, null, 2, 3]
inorderTraversal(root)