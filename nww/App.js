import React from "react";
import Register from "./Register";
//import UserList from "./UserList";
import Login from "./Login";
import Blog from "./Blog.js";
import Pond from "./Pond.js";
import Fetch from "./Fetch.js";
import First from "./First.js";
import Edit from "./Edit.js";
import DeletePost from "./DeletePost.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessageForm from "./MessageForm.js";
function App() {
    return (
        <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<First/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/signin" element={<Login/>}></Route>
        <Route path="/anand" element={<Login/>}></Route>
        <Route path="/fetch" element={<Fetch/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/edit" element={<Edit/>}></Route>
       </Routes>
       </BrowserRouter>
        </>
    );
};
export default App;