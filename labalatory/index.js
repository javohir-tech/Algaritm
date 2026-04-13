const ul = document.querySelector("ul")

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("Clicekd :" , event.target.textContent )
    }
});

// var a = "i am in global"
// console.log(window.a)

// let b = "i am not in global"
// console.log(window.b)