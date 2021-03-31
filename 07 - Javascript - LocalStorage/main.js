
$('#todoForm').submit(function(event) {
    event.preventDefault();
 
    const { id, todo, state } = this.elements;
    
    if(todo && !id.value) { 
        const todoSaved = save(todo.value);
        render(todoSaved.id, todoSaved.text, todoSaved.state);
    } else {
        update(id.value, todo.value, state.checked);
        loadItems();
    }

    event.target.reset();
})


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
    $('.list-group').append(`
        <li class="list-group-item" data-id="${id}">
            <input type="checkbox" ${state ? 'checked':  ''} />
            ${text}
            <button value="${id}" class="btn btn-sm btn-secondary float-right">🗑</button>
            <button value="${id}" class="btn btn-sm btn-info float-right">✏</button>
        </li>
    `);
}

function loadItems() {
    $('.list-group').empty();

    getAllTodos().forEach((todo) => {
        render(todo.id, todo.text, todo.state);

        $('.btn.btn-secondary').click(btnDeleteAction);
        $('.btn.btn-info').click(btnEditAction);
    });
} 

window.onload = loadItems;