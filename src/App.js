import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginComponent from "./components/login";
import UserListComponent from "./components/UserList";
import GetUserComponent from "./components/getuser";

import './App.css'
import TodoListComponent from "./components/todoList";
import UpdateProfileComponent from "./components/updateProfile";
import LightComponent from "./components/lightonoff";
import VideoPage from "./Pages/Video";
import TodoPage from "./Pages/TodoPage";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="" element={<LoginComponent></LoginComponent>} ></Route>
      <Route path="userlist" element={<UserListComponent></UserListComponent>}></Route>
      <Route path="getuser"  element={<GetUserComponent></GetUserComponent>}></Route>
      <Route path="todo" element={<TodoListComponent></TodoListComponent>}></Route>
      <Route path="updateprofile" element={<UpdateProfileComponent></UpdateProfileComponent>}></Route>
      <Route path="light" element={<LightComponent></LightComponent>}></Route>
      <Route path="videos" element={<VideoPage></VideoPage>}></Route>
      <Route path="todolist" element={<TodoPage></TodoPage>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;