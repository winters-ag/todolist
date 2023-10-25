function Todo ({todo,index,remove,complete}) {
  function handle() {
    remove(index);
  }
  function completeTodo() {
    complete(index);
    console.log(todo);
  }
  let item ='';
  if(todo.isCompleted) {
    item = <div className="todo-complete" onClick={completeTodo}>{todo.text} <img src="./img/checkmark.png" className="remove-todo"/></div>;
  } else {
    item = <div className="todo" onClick={completeTodo}>{todo.text} <img src="./img/circle.png" className="remove-todo"/></div>;
  }
  return item;
}