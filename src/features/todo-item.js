import React, {useState, useRef, useContext} from 'react'
import ProgressBar from '../components/progress-bar';
import StarRating from '../components/star-rating';
import Context from '../context/todo-context';

export default function TodoItem({todo}) {
    const [edit, toggleEdit] = useState(false);
    const todoProvider = useContext(Context);
    const titleRef = useRef();
    const handleDelete = () => {
        let result = window.confirm("Do you really wish to delete it?");
    
        if(result){
        todoProvider.onTodoDelete(todo);
        }
    }

    const handleEdit = () => {
        //PROMPT EDIT
        // let title = prompt("Enter new Title!", todo.title);
        // if(!title) 
        // return;
        // onTodoEdit(title, todo.id);
        toggleEdit(ps => !ps);
    }

    const handleToggle = () => {
        todoProvider.onTodoToggle(todo);
    }

    const handleKeyUp = (e) => {
        //Enter = 13
        //Esc = 27

        if(e.keyCode === 13){
            todoProvider.onTodoEdit(titleRef.current.value, todo.id);
            toggleEdit(ps => !ps);
        } else if(e.keyCode === 27) {
            // toggleEdit(!edit)
            // toggleEdit(p => {return !p});
            toggleEdit(ps => !ps);
          }
    }

    const handleBookmark = () => {
        todoProvider.onTodoBookmark(todo);
    }

    const handleRatingChanged = (rating) => {
        todoProvider.onRatingChanged(todo.id, rating);
    }

    let bookmarkClass = todo.bookmarked ? "fas fa-bookmark" : "far fa-bookmark";

  return (
    <div key={todo.id} className="card todo-item">
        { 
            !edit &&
            <div>
                <span onDoubleClick={handleToggle} className="todo-title">{todo.title}</span>
                <i onClick={handleBookmark} className={`p-4 ${bookmarkClass}`}></i>
                <StarRating 
                count={5} 
                value={todo.rating}
                onChange={handleRatingChanged} />
            </div>
        }
        { 
            edit &&
            <input onKeyUp={handleKeyUp} ref={titleRef} type="text" defaultValue={todo.title} />
        }
        <div className="d-flex justify-content-between">
            <div>
            { todo.completed 
                ? <span className="badge badge-success">Completed</span> 
                : <span className="badge badge-dark">Pending</span>}
            </div>
            <div className="d-flex justify-content-between">
            <i onClick={handleDelete} className="p-4 fas fa-trash"></i>
            <i onClick={() => handleEdit(todo)} className="fas fa-edit p-4"></i>
            </div>
        </div>
        <ProgressBar
            percent={todo.percentage_completed} 
            width={400}
            height={20}
        />
    </div>
  )
}