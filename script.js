let input1 = document.getElementById('input1')
let Todo = document.getElementById('Todo')
let Todolist = []

function addTodo() {
    Todolist.unshift(input1.value)
    console.log(Todolist);

    Todo.innerHTML = ''

    for (let block = 0; block < Todolist.length; block++) {
        Todo.innerHTML += `<P id="boot">${Todolist[block]} <button id="blur" onclick="clearTodo(${block})">delete</button> </P>`

    }
}
function clearTodo(block) {
    Todolist.splice(block, 1)
    console.log(Todolist);
    Todo.innerHTML = ''

    for (let block = 0; block < Todolist.length; block++) {
        Todo.innerHTML += `<P id="boot">${Todolist[block]} <button id="blur()" onclick="clearTodo(${block})">delete</button> </P>`
    }
}
