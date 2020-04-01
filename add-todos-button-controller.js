document.querySelector('.add-todo').addEventListener('click', function(){
    const text = document.querySelector('.todo-input').value
    const priority = document.querySelector('.priority').value
    const complete = false
    const id = todos.length


    const newObj = {
text,
priority,
complete,
id,

}
addTodo(newObj)
printTodo(newObj)

})