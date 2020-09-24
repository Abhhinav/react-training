import React, {useState, useEffect} from 'react'
import TodoApp from '../features/todo-app';
import TodoFilter from '../features/todo-filter';
import TodoForm from '../features/todo-form';
import TodoList from '../features/todo-list';
import Context from '../context/todo-context';
import { useDocumentTitle } from '../hooks/use-document-title';
//import {useFetch} from '../hooks/use-fetch';

const API_TODOS = "https://jsonplaceholder.typicode.com/todos/";
//const {isLoading, response, error, doFetch} = useFetch(API_TODOS);

const DATA = {
  theme: "Dark",
  language: "English"
};

export default function Todo() {
  useDocumentTitle("ToDo")
//   const [todos, setTodos] = useState(
//     [
//         {id: 1, title: "Learn Elm", completed: true, percentage_completed: 100},
//         {id: 2, title: "Learn GoLang",completed: false, percentage_completed:25},
//         {id: 3, title: "Learn Rust", completed: false, percentage_completed: 75},
//         {id: 4, title: "Learn to build a compiler",completed: false, percentage_completed: 20}
//     ]
//   )

const [todos, setTodos] = useState([]);
const [filteredTodos, setFilteredTodos] = useState([]);
const [filter, setFilter] = useState("all");
const [isLoaded, setIsLoaded] = useState(false);

//CUSTOM USE-FETCH
// useEffect(() => {
//   doFetch({
//     method: "get"
//   });
// }, []);

// useEffect(() => {
//   if (!response) return;
//   let transformedData = response.map(d => {
//     d.percentage_completed = randomFromRange(25, 100);
//     d.bookmarked = false;
//     return d;
//   });
//   setTodos([...transformedData]);
// }, [response])


useEffect(()=> {
    // let resultPromise = fetch(API_TODOS);
    // let response = resultPromise.then(response => {
    //   return response.json();  // This is also a promise
    // })
    // let data = response.then(data => {
    //   console.log("data: ", data);
    // })

    //ASYNC
    const fetchData = async() => {
      const response = await fetch(API_TODOS);
      const data = await response.json();    

      let transformedData = data.map(d => {
        d.percentage_completed = Math.floor(Math.random() * 100)+1
        d.bookmarked = false;
        return d;
      })
      setTodos([...transformedData]);
      setIsLoaded(true);
    }

    fetchData();
    //FETCH-PROMISE
    // fetch(API_TODOS)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     let transformedData = data.map(d => {
    //       d.percentage_completed = Math.floor(Math.random() * 100)+1
    //       d.bookmarked = false
    //       return d;
    //     })
    //     setTodos([...transformedData]);
    //     setIsLoaded(true);
    //   });

  },[])

  const onTodoAdded = (todoTitle) => {
    let newTodo = {
      title: todoTitle,
      completed: false,
      id: +new Date()
    }

    setTodos([newTodo, ...todos]);
  }

  const onTodoDelete = (todo) => {
    
        let remainingTodos = todos.filter(t => {
        return t.id !== todo.id
        });

        setTodos([...remainingTodos]);
  }

    const onTodoEdit = (title, id) => {
        let updatedtodos = todos.map(todo => {
            if (todo.id === id)
            todo.title = title;
            return todo;
        });

        setTodos([...updatedtodos])
    }

    const onTodoToggle = (todo) => {
        let updatedtodos = todos.map(t => {
            if (todo.id === t.id)
            todo.completed = !todo.completed;
            return t;
        });

        setTodos([...updatedtodos])
    }

    const onTodoBookmark = (todo) => {
        let updatedtodos = todos.map(t => {
            if (todo.id === t.id)
            todo.bookmarked = !todo.bookmarked;
            return t;
        });

        setTodos([...updatedtodos])
    }

    const onfilterAll=() => {
      setFilteredTodos([]);
      setFilter("all");
    }
    const onfilterBookmarked=() => {
        let Bookmarked = todos.filter(todo =>todo.bookmarked);
        setFilteredTodos([...Bookmarked]);
        setFilter("bookmarked");
    }
    const onfilterCompleted=() => {
        let Completed = todos.filter(todo =>todo.completed);
        setFilteredTodos([...Completed]);
        setFilter("completed");
    }
    const onfilterPending=() => {
        let Pending = todos.filter(todo =>!todo.completed);
        setFilteredTodos([...Pending]);
        setFilter("pending");
    }

    let todoData = filter === "all" ? todos : filteredTodos;

    useEffect(() => {
      if (filter === "bookmarked") {
        onfilterBookmarked();
      } else if (filter === "completed") {
        onfilterCompleted();
      } else if (filter === "pending") {
        onfilterPending();
      }
    }, [todos])

    const toggleTheme = () => {
      //This should update the theme in context
      setGlobalData({
        ...global_data,
      theme: global_data.theme === "Dark" ? "Light" : "Dark"
    });
    };

    const [global_data, setGlobalData] = useState(DATA);

    const todoProvider = {
      onTodoEdit,
      onTodoToggle,
      onTodoBookmark,
      onTodoDelete
    }
    return (
  <Context.Provider value={{global_data, setGlobalData}}>
    <TodoApp>
      {global_data.language} - {global_data.theme}
      <div className="container mt-5 vh-100">
      <div>
          <input
            type="button"
            value={`Toggle Theme - ${global_data.theme}`}
            onClick={toggleTheme}
          />
        </div>
        <h2><i className="fas fa-shopping-basket">BUCKET LIST</i></h2>
        <TodoForm onTodoAdded={onTodoAdded} />
        <TodoFilter  onfilterAll={onfilterAll}
        onfilterBookmarked={onfilterBookmarked}
        onfilterCompleted={onfilterCompleted}
        onfilterPending={onfilterPending} />
          <Context.Provider value = {todoProvider}>
          { !isLoaded && <h4>Loading...</h4>}
          { isLoaded &&
              <TodoList data={todoData} />
          }
          </Context.Provider>
      </div>
    </TodoApp>
    </Context.Provider>
    )
}