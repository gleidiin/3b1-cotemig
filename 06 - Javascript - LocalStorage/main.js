const form = document.getElementById('todoForm');
// CRUD = CREATE, READ, UPDATE, DELETE

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const { target } = event;

    const elements = target.getElementsByTagName('input');

    const idInput = elements.id;
    const todoInput = elements.todo;
    const todoState = elements.state;
    
    if(todoInput && !idInput.value) { 
        const todo = save(todoInput.value);
        render(todo.id, todo.text, todo.state);
    } else {
        update(idInput.value, todoInput.value, todoState.checked);
        loadItems();
    }
    target.reset();
});

function getAllTodos() {
    let todos = [];
    const todosStr = localStorage.getItem('todo-list');
    if(todosStr) todos = JSON.parse(todosStr);
    return todos;
}

function getById(id) {
    const list = getAllTodos();
    const todo = list.find((item) => item.id == id);
    if(todo) return todo;
}

function save(text, state = false) {
    const todo = {
        id: 1,
        text, state
    };

    const list = getAllTodos();
    if(list.length) todo.id = list[list.length - 1].id + 1;

    list.push(todo);
    localStorage.setItem('todo-list', JSON.stringify(list));
    return todo;
}

/* DELETE FUNCTIONS */
function deleteItem(id) {
    let list = getAllTodos();
    list = list.filter(todo => todo.id != id);
    localStorage.setItem('todo-list', JSON.stringify(list));
}

function update(id, text, state) {
    const list = getAllTodos();
    const index = list.findIndex((todo) => todo.id == id);

    if(index != -1) {
        list[index] = {id, text, state};
    }

    localStorage.setItem('todo-list', JSON.stringify(list));
} 

function btnDeleteAction(event) {
    deleteItem(event.target.value);
    loadItems();
}

function btnEditAction(event) {
    const todo = getById(event.target.value);

    const formTodo = document.getElementById('todoForm');
    const elements = formTodo.getElementsByTagName('input');

    elements.id.value = todo.id;
    elements.todo.value = todo.text;
}

function todoChecked(event) {
    event.target.checked;
}

// RENDER FUNCTIONS

function render(id, text, state = false) {
    const list = document.getElementsByClassName('list-group').item(0);

    if(list) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.dataset.id = id;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = state;
        input.addEventListener('click', todoChecked)

        const buttonDel = document.createElement('button');
        buttonDel.name = 'id';
        buttonDel.innerText = "🗑";
        buttonDel.classList.add(...['btn', 'btn-sm', 'btn-secondary', 'float-right']);
        buttonDel.value = id;
        buttonDel.addEventListener('click', btnDeleteAction);

        const buttonEdit = document.createElement('button');
        buttonEdit.name = 'id';
        buttonEdit.innerText = "✏";
        buttonEdit.classList.add(...['btn', 'btn-sm', 'btn-info', 'float-right']);
        buttonEdit.value = id;
        buttonEdit.addEventListener('click', btnEditAction);

        li.appendChild(input);
        li.append(text); 
        li.appendChild(buttonDel);
        li.appendChild(buttonEdit);

        list.appendChild(li);
    }
}

function loadItems() {
    const list = document.getElementsByClassName('list-group').item(0);
    list.innerHTML = '';
    getAllTodos().forEach((todo) => {
        render(todo.id, todo.text, todo.state);
    });
} 

window.onload = loadItems;