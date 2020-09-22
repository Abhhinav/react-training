import React from 'react'

export default function TodoItem({todo, onTodoDelete, onTodoEdit, onTodoToggle}) {
    const handleDelete = () => {
        let result = window.confirm("Do you really wish to delete it?");
    
        if(result){
        onTodoDelete(todo);
        }
    }

    const handleEdit = (todo) => {
        let title = prompt("Enter new Title!", todo.title);
        if(!title) 
        return;
        onTodoEdit(title, todo.id);
    }

    const handleToggle = () => {
        onTodoToggle(todo);
    }

  return (
    <div key={todo.id} className="card todo-item">
    <span onDoubleClick={handleToggle} className = "todo-title">{todo.title}</span>
    <div class="d-flex justify-content-between">
        <div>
          { todo.completed 
              ? <span className="badge badge-success">Completed</span> 
              : <span className="badge badge-warning">Pending</span>}
        </div>
        <div className="d-flex justify-content-between">
          <i onClick={handleDelete} className="p-4 fas fa-trash"></i>
          <i onClick={() => handleEdit(todo)} className="fas fa-edit p-4"></i>
        </div>
      </div>
    </div>
  )
}