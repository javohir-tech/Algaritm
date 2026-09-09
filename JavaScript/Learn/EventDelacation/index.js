const delete_btns = document.querySelectorAll(".delete_btn")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("todoList")

todoList.addEventListener("click" , (event)=>{
    if(event.target.tagName === "BUTTON" && event.target.classList.contains("delete_btn")){
        event.target.parentElement.remove()
    }
})


addBtn.addEventListener("click", () => {
    const text = document.getElementById("inputItem");

    if (!text.value) return

    const li = document.createElement("li")
    li.innerHTML = `<p>${text.value}</p><button class="delete_btn">O'chirish</button>`
    todoList.appendChild(li)
    text.value = ""
})