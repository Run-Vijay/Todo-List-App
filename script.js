let input = document.getElementById("inp")
let btn = document.getElementById("btn")
let list = document.getElementById("list")
let clr = document.getElementById("clr")
clr.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})
displayTodos()
function addTodos() {
    inputValue = input.value
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    if (inputValue == "") {
        alert("Enter todo")
    } else {
        todos.push(inputValue)
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    displayTodos()
}

function displayTodos() {
    let todos = JSON.parse(localStorage.getItem("todos"))
    list.innerHTML = ""
    todos.map((item, index) => {


        let li = document.createElement("li")
        li.textContent = item

        let delBtn = document.createElement("button")
        delBtn.className = "delbtn"
        delBtn.textContent = "Delete"
        delBtn.style.marginLeft = "300px"
        delBtn.addEventListener("click", ()=>{
            deleteTodo(index)
        })
        li.appendChild(delBtn)
        list.appendChild(li)
    })
}

function deleteTodo(index){
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.splice(index, 1)  // specified index se 1 element hatao
    localStorage.setItem("todos", JSON.stringify(todos))
    displayTodos()
}
        //list.appendChild(li)