"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getFetch(endpoint) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
        if (!response.ok) {
            throw new Error("Failed fetch error");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        const result = error;
        throw new Error(result.message);
    }
}
async function getUsers() {
    getFetch("users").then((res) => res.forEach((u) => console.log(u.name)));
}
async function getPosts() {
    const posts = await getFetch("posts");
    posts.forEach((p) => console.log(p.title));
}
// getPosts()
getUsers();
//# sourceMappingURL=promise.js.map