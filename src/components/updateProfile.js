import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const UpdateProfileComponent = () =>{

    const [statevariable, updateStatefunction] = useState({id:"", firstname:"", lastname:"", emailid:"", password:""});
    const [userList, updateUserList] = useState([]);
    const [visibilty, controlVisiblity] = useState(true);
    
    //const userList = [];
    
    const getData = (event) =>{
        console.log(event.target.value)
        updateStatefunction({...statevariable, [event.target.name] : event.target.value})
    }

    const clickButton = () => {
        // console.log(statevariable)
        //userList.push(statevariable);
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

    const ClicktoEdit = (number) =>{
        let copy = [...userList];
        copy = copy.filter(
            (item, index) => number != index
        )
        updateUserList(copy)
        //const updatedItemsArr = [...this.state.targetItems, {[fieldType]: value}];
    }

    const viewPasssword = () => {
        controlVisiblity(false);
      }
    
      const hidePassword = () => {
        controlVisiblity(true);
      }

    return(
        <div>
        <h1>Update Profile</h1>
        <div>
            <label>Enter the ID</label>
            <input type="number" placeholder="Enter the ID number here" onChange={getData} name="id" />
            <br></br>
            <label>Enter the First Name</label>
            <input type="text" placeholder="Enter the first name here" onChange={getData} name="firstname" />
            <br></br>
            <label>Enter the Last Name</label>
            <input type="text" placeholder="Enter the last name here" onChange={getData} name="lastname" />
            <br></br>
            <label>Enter the email ID</label>
            <input type="text" placeholder="Enter the email ID here" onChange={getData} name="emailid" />
            <br></br>
            <label>Enter the Password</label>
            <input type={visibilty ? "password" : "text"} placeholder="Password"  onChange={getData} name="password" />
            { visibilty ? <FaEyeSlash size={"30px"} className="eyeicon" onClick={() => viewPasssword()} /> : <FaEye size={"30px"} className="eyeicon" onClick={() => hidePassword()} /> }
            <br></br>
            <button onClick={() => clickButton()}>Submit</button>
        </div>
        <div>
            <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>Password</th>
                            <th>Delete/Update Option</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        userList.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.firstname}</td>
                                    <td>{value.lastname}</td>
                                    <td>{value.emailid}</td>
                                    <td>{value.password}</td>
                                    <td>
                                    <button onClick={() => ClicktoDelete(index)}>Delete</button>/<button onClick={() => ClicktoEdit(index)}>Update</button>
                                    </td>
                                </tr>
                            )
                        })   
                    }
                    {
              userList.length === 0 && 
              <tr>
                <td colSpan={6}>No Records Found</td>
              </tr>
            }
                    </tbody>
            </table>
        </div>
        </div>
    )
}

export default UpdateProfileComponent;