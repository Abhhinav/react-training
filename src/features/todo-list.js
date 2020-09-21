import React from 'react';
import TodoItem from './todo-item';

export default function TodoList({data, onTodoDelete}) {
  return (
    <ul>
      { data.map(todo => {
          return (
            <TodoItem key={todo.id} 
            todo={todo} 
            onTodoDelete = {onTodoDelete}
            />
          )
      })
      }
    </ul>
  )
}