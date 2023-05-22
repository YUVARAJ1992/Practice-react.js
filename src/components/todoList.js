import React, {useState} from "react";

const TodoComponent = () => {

    const [statevariable, updateStatefunction] = useState({username:"", description:""})
    const [userList, updateUserList] = useState([]);

    const getName = (event) =>{
        console.log(event.target.value);
        updateStatefunction({...statevariable, [event.target.name] : event.target.value})
    }

    
    const clickButton = () => {
        // console.log(statevariable)
        
        updateUserList([...userList, statevariable ])
        console.log(userList)
    }

    const ClicktoDelete = (number) =>{
        let copy = [...userList];
        copy = copy.filter(
            (item, index) => number != index
        )
        updateUserList(copy)
    }

    return(
        <div>
            <h1>Todo Component</h1>
            <div>
                <label>Enter the Name: </label>
                <input type="text" placeholder="Enter the name here" onChange={getName} name="username" />
                <br></br>
                <label>Enter the Description: </label>
                <input type="text" placeholder="Enter the Description here" onChange={getName} name="description"/>
                <br></br>
                <button onClick={() => clickButton()}>Submit</button>
                <div>
                <table className="table">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Description</th>
                        <th>Delete Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.username}</td>
                                    <td>{value.description}</td>
                                    <td>
                                    <button onClick={() => ClicktoDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default TodoComponent;