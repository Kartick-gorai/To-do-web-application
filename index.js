let todos = [
  {
    id: Date.now(),
    text: "Go to gym",
    isCompleted: false,
  },
  {
    id: Date.now(),
    text: "Take class",
    isCompleted: false,
  },
  {
    id: Date.now(),
    text: "Revision Web dev",
    isCompleted: false,
  },
];

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  todos.push(todoValue);
//   addTodo(todoValue);

  let newTodo = {
    id: Date.now(),
    text: todoValue,
    isCompleted: false,
  };

  addTodo(newTodo);
});

function addTodo(todo) {
  const li = document.createElement("li");
//   li.textContent = todo.text;
  li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
  li.innerHTML=`<input data-id=${todo.id} type="checkbox" name="" id="" />
            <p class="flex-1">${todo.text}</p>
            <div class="flex gap-2">
              <button data-action="edit" data-id=${todo.id}>Edit</button>
              <button data-action="delete" data-id=${todo.id}>Delete</button>
            </div>
          </li>`
  todoList.append(li);
}

//event delegation

todoList.addEventListener('click',(e)=>{
    let btn = e.target.closest('button')
    let action = btn?.dataset.action;
    let id = btn?.dataset?.id

    if(action === "edit"){
        console.log("editing....");
    }

    if(action === "delete"){
        console.log("deleting....");
    }
})