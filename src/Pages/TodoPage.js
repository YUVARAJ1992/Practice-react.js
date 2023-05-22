import React, {useState} from "react";
import "../css/todopage.css"

const TodoPage = () => {

    const [statevariable, updateStatefunction] = useState({todolist:""});
    const [todoList, updateTodoList] = useState([]);

    const handleTodoList = (event) =>{
        //console.log(event.target.value)
        updateStatefunction({...statevariable, [event.target.name] : event.target.value})
    }

    const clickToAdd = () =>{
        //console.log(todoList)
        updateTodoList([...todoList, statevariable ])
        console.log(todoList)
    }


    return(
        <div>
            <h1>TodoList Page</h1>
            <div>
            <div className="header">

                <h2 className="todoheader">My todolist</h2>
                <input type="text" onChange={handleTodoList} className="input" placeholder="Title...." name="todolist"/>
                <span onClick={()=> clickToAdd()} className="addBtn">Add</span>
                </div>
                <div>
                {
                        todoList.map((value, index) => {
                            return (
                                <ul className="ul" key={index}>
                                    <li>{value.todolist}</li>
                                </ul>
                            )
                        })   
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoPage;