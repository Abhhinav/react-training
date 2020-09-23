import React from 'react';
import TodoItem from './todo-item';

export default function TodoList({data, onTodoDelete, onTodoEdit, onTodoToggle, onTodoBookmark}) {
  return (
    <div className="todos container">
        { data.length <= 0 && <h4>No todos! Please create some.</h4>}
      { data.map(todo => {
          return (
            <TodoItem key={todo.id} 
            todo={todo} 
            onTodoDelete = {onTodoDelete}
            onTodoEdit = {onTodoEdit}
            onTodoBookmark = {onTodoBookmark}
            onTodoToggle ={onTodoToggle}
            />
          )
      })
      }
    </div>
  )
}