const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');


//try to load saved todos from local storage if any,
const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];


function saveTodos() {
    //Save current todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodoNode (todo, index) {
  const li = document.createElement('li');

  //check box toggle 
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !!todo.completed;
  checkbox.addEventListener("change", ()=> {
    todo.completed = checkbox.checked;
    textSpan.style.textDecoration = todo.completed ? 'line-through' : 'none';
    saveTodos();
  })

  //text of the todo
  const textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  textSpan.style.margin = '0 8px';
  if(todo.completed) {
    textSpan.style.textDecoration = 'Line-thorugh';
  }

  //Add Double clicl Event to edit the todo
  textSpan.addEventListener("dbclick", () => {
    const newText = prompt("Edit todo", todo.text);
    if( newText !== null){
      todo.text = newText.trim();
      textSpan.textContent = todo.text;
      saveTodos();
    }
  })

  //Delete todo button
  const dltBtn = document.createElement('button');
  dltBtn.textContent = 'Delete';
  dltBtn.addEventListener('click', () => {
    todos.splice(index, 1);
    render();
    saveTodos();
  })

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(dltBtn);

  return li;

}

function render() {
  list.innerHTML = '';

  //Recreate each item
  todos.forEach((todo, index) => {
    const li = createTodoNode(todo, index);
    list.appendChild(li);
  })
}

function addTodo() {
  const text = input.value.trim();

  if(!text){
    return 
  }

  todos.push({text, completed: false});
  input.value = '';
  render();
  saveTodos();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    addTodo();
  }
})
render();


