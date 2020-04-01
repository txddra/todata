document.querySelector(".add-todo").addEventListener("click", function() {
	let textInput = document.querySelector(".todo-input");
	let priority = document.querySelector(".priority");
const newEntry = {
		text: textInput.value,
		id: todos.length,
		complete: false,
		priority: Number(priority.value)
	};

	addTodo(newEntry);
	textInput.value = "";
	priority.value = 1;

	refreshTodos();
});