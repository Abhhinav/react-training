import React, {useState} from 'react'

export default function TodoForm(prop) {
  const [todoTitle, setTodoTitle] =  useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
        setTodoTitle(e.target.value)
    }

    const validate = () => {
        if(todoTitle.trim() !== ""){
            setError("");
            return true;
        }
        else{
            setError("Title can't be empty!");
            return false;
        }
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = validate();
    if(isValid){
    prop.onTodoAdded(todoTitle);
    }
    setTodoTitle("");
  }

  return (
    <div>
    {error}
        <form onSubmit={handleSubmit} >
            <input type="text"
            className="w-75" 
            onChange={handleChange}
            value={todoTitle}
            placeholder="What do you want to do today?"/>
            <button type="submit">Submit</button>
        </form>
    </div>

  )
}