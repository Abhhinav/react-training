import React, {useState, useRef} from 'react'

export default function TodoItem({todo, onTodoDelete, onTodoEdit, onTodoToggle}) {
    const [edit, toggleEdit] = useState(false);
    const titleRef = useRef();
    const handleDelete = () => {
        let result = window.confirm("Do you really wish to delete it?");
    
        if(result){
        onTodoDelete(todo);
        }
    }

    const handleEdit = (todo) => {
        // let title = prompt("Enter new Title!", todo.title);
        // if(!title) 
        // return;
        // onTodoEdit(title, todo.id);
        toggleEdit(ps => !ps);
    }

    const handleToggle = () => {
        onTodoToggle(todo);
    }

    const handleKeyUp = (e) => {
        //Enter = 13
        //Esc = 27
        if(e.keyCode === 13){
            onTodoEdit(titleRef.current.value, todo.id);
            toggleEdit(ps => !ps);
        } else if(e.keyCode == 27) {
            // toggleEdit(!edit)
            // toggleEdit(p => {return !p});
            toggleEdit(ps => !ps);
          }
    }

  return (
    <div key={todo.id} className="card todo-item">
     { 
        !edit &&
        <span onDoubleClick={handleToggle} className = "todo-title">{todo.title}</span>
     }
     { 
        edit &&
        <input onKeyUp={handleKeyUp} ref={titleRef} type="text" defaultValue={todo.title} />
     }
    <div className="d-flex justify-content-between">
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