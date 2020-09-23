import React,{useState} from 'react'

export default function TodoFilter({onfilterAll, onfilterBookmarked, onfilterCompleted, onfilterPending}) {
    const [filter, setFilter] = useState("all");
    
    const handleAll = (e) =>{
        setFilter(e.target.name);
        onfilterAll();
    }
    const handleBookmarked = (e) =>{
        setFilter(e.target.name);
        onfilterBookmarked();
    }
    const handleCompleted = (e) =>{
        setFilter(e.target.name);
        onfilterCompleted();
    }
    const handlePending = (e) =>{
        setFilter(e.target.name);
        onfilterPending();
    }
    function activeClass(action) {
        return action == filter ? "bg-success" : "";
      }

  return (
    <div className="mt-4 d-flex">
        <button name="all" 
          className={`m-1 ${activeClass("all")}`} 
          onClick={handleAll}>ALL</button>
        <button name="bookmark" 
          className={`m-1 ${activeClass("bookmark")}`}  
          onClick={handleBookmarked}>BOOKMARKED</button>
        <button name="completed" 
          onClick = {handleCompleted}
          className={`m-1 ${activeClass("completed")}`} >COMPLETED</button>
        <button name="incomplete" 
          onClick={handlePending}
          className={`m-1 ${activeClass("pending")}`} >PENDING</button>
    </div>
  )
}