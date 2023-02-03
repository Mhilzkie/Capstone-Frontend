import React from "react";
import  { BrowserRouter as Router, Route, NavLink , Routes as Switch, Routes} from "react-router-dom";
import Sidebar from "../Components/Sidebar";
// import Login from "../Pages/Login";

const MainContainer = () =>{
    return(
         
    <div >
        {/* <Login/> */}
    {/* <Route path="/login" element={<Login />} /> */}
    <Sidebar/>
    </div>    
    );
}
export default MainContainer;