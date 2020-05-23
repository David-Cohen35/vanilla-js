const addTodos = document.querySelector('.add-todo-form');
const todoList = document.querySelector('.todos');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

const addTodo = (e) => {
  e.preventDefault();
  const text = document.querySelector('[name=add-todo]').value;
  const todo = {
    text,
    done: false
  };

  todos.push(todo);
  populateList(todos, todoList);


  localStorage.setItem('todos', JSON.stringify(todos));

 
  e.currentTarget.reset();
};


const populateList = (todos = [], todoList) => {

  todoList.innerHTML = todos.map((todo, i) => {
    return `
        <li>
          <input type="checkbox" data-index=${i} ${todo.done ? 'checked' : ''} />
          <label for="item${i}">${todo.text}</label>
        </li>
      `;
  }).join('');
};

function toggleDone(e) {
  if (!e.target.matches('input')) return; 
  const el = e.target;
  const index = el.dataset.index;
  todos[index].done = !todos[index].done;
  localStorage.setItem('todos', JSON.stringify(todos));
  populateList(todos, todoList);
}

addTodos.addEventListener('submit', addTodo);


todoList.addEventListener('click', toggleDone);

populateList(todos, todoList);
