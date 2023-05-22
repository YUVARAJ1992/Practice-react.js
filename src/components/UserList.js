import React, { Component } from 'react';
import axios from 'axios';


class UserListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }


    listUser() {
        const url = "https://reqres.in/api/unknown";

        axios.get(url)
            .then((response) => {
                console.log(response.data.data)
                this.setState({
                    userList : response.data.data
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    render() {
        const users = this.state.userList.map((value, index)=>{
            return(
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.year}</td>
                    <td className="color" style={{backgroundColor: value.color}}></td>
                    <td>{value.pantone_value}</td>
                </tr>
            )
        });


        return (
            <div className="content">     
                <button onClick={() => this.listUser()}>Get User List</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Pantone Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
                <div>
                
                </div>
                <div className="img">vdhvfjhj</div>
            </div>
        );
    }
}

export default UserListComponent;