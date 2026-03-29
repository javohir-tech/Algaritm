"use strict";
////////////////////////////// NEVER /////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(err) {
    throw new Error(err);
}
const useFetch = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/user");
        // console.log(response)
        if (response.status !== 200) {
            throwError("fetch error");
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        throwError("fetch error");
    }
};
useFetch();
//# sourceMappingURL=index.js.map