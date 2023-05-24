import React, {useState} from "react";
import "../css/todopage.css"

const TodoPage = () => {

    const [statevariable, updateStatefunction] = useState({todolist:"", isStriked : false});
    const [todoList, updateTodoList] = useState([]);

    const handleTodoList = (event) =>{
        //console.log(event.target.value)
        updateStatefunction({...statevariable, [event.target.name] : event.target.value})
    }

    const clickToAdd = () =>{
        //console.log(todoList)
        updateTodoList([...todoList, statevariable ])
        console.log(todoList);

        updateStatefunction({...statevariable, todolist: "" });
    }

    const AddStrike = (index) => {
        console.log(todoList[index]);

        todoList[index].isStriked = ! todoList[index].isStriked;

        updateTodoList([...todoList]);

    }


    const enterKeyPress = (event) => {
      if(event.key === "Enter"){
        clickToAdd();
      }
    }

    return(
        <div>
            <h1>TodoList Page</h1>
            <div>
            <div className="header">

                <h2 className="todoheader">My todolist</h2>
                <input type="text" onChange={handleTodoList} onKeyDown={enterKeyPress} className="input" placeholder="Title...." name="todolist" value={statevariable.todolist}/>
                <span onClick={()=> clickToAdd()} className="addBtn">Add</span>
                </div>
                <div>
                {
                        todoList.map((value, index) => {
                            return (
                                <ul className="ul" key={index}>
                                    { value.isStriked  && <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" width="50" /> }
                                    <li className={value.isStriked ? "stikeout" : "noStrike"} onClick={() => AddStrike(index)}>{value.todolist}</li>
                                    <button>X</button>
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