import React, { useState } from "react";
import axios from "axios";

const GetUserComponent = () => {


    const [users, UpdateUserList] = useState([]);

    const listUser = () => {
        const url = "https://reqres.in/api/unknown";

        axios.get(url)
            .then((response) => {
                const userList = response.data.data;
                UpdateUserList(userList);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="content">
            <button onClick={() => listUser()}>Get User List</button>
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
                    {
                        users.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.year}</td>
                                    <td className="color" style={{ backgroundColor: value.color }}></td>
                                    <td>{value.pantone_value}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default GetUserComponent;