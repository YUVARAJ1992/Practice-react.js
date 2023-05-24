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

    const clickEnterKey = (event) =>{
        console.log(event)
        if(event.key === "Enter"){
            clickToAdd();
        }
    }

    const ClicktoDelete = (number) =>{
        let copy = [...todoList];
        copy = copy.filter(
            (item, index) => number != index
        )
        updateTodoList(copy)
    }

    return(
        <div>
            <h1>TodoList Page</h1>
            <div>
            <div className="header">
                <h2 className="todoheader">My todolist</h2>
                <input type="text" onChange={handleTodoList} onKeyDown={clickEnterKey} className="input" placeholder="Title...." name="todolist" value={statevariable.todolist}/>
                <span type="submit" onClick={()=> clickToAdd()} className="addBtn">Add</span>
                </div>
                <div>
                {

                        todoList.map((value, index) => {
                            console.log(value)
                            return (
                                
                                 <div className={value.isStriked ? "strikeout box" : "nostrike box"} key={index}>
                                    {value.isStriked && <img src={require("../images/tick.png")} />}
                                    <div className={value.isStriked ? "strikeout squarebox1" : "nostrike squarebox1"} onClick={() => AddStrike(index)}><p>{value.todolist}</p></div>
                                    <div className="squarebox2 " onClick={() => ClicktoDelete(index)}>X</div>
                                   </div>
                            )
                        })   
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoPage;