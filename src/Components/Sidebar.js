import React, { useState } from "react";
import  { BrowserRouter as Router, Route, NavLink , Routes as Switch, Routes} from "react-router-dom";
import './SideBar.css';
import mylogo from  '../Images/lelogo.png';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Dashboard from "../Pages/Dashboard";
import Homepage from "../Pages/Homepage";
import Products from "../Pages/Products";
import Users from "../Pages/Users";
import Customers from "../Pages/Customers";
import Company from "../Pages/Company";
import Order from "../Pages/Order";
import Login from '../Pages/Login';

const Sidebar = () =>{

    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    return(
         
    <div >
      <Router>
        <div className="sidebar col">
       
            <h4><a href="index.html" 
            className="bg-dark ps-1 divstyle">
              <span>    </span> 
              <span className="mystyle text-warning bg-dark ps-0 pt-1">
                LEC</span>
                <span className=" mystyle text-info bg-dark ps-1 pt-1">
                  WISys</span></a></h4>
            <NavLink 
              exact activeClassName="active mt-0" to="/"><i className="fa fa-fw fa-home "></i><span>  </span>Home</NavLink>
            <NavLink 
              exact activeClassName=" mt-0 toryt" 
              to="/dashboard">
                <i className="fa fa-fw fa-th mr-5 ">
                </i><span>      
                  </span>Dashboard</NavLink>
            <NavLink 
              exact activeClassName=" mt-0 " 
              to="/products">
                <i className="fa fa-fw fa-dropbox ">
                  </i><span>      
                    </span>Products</NavLink>
            <NavLink  
              exact activeClassName=" mt-0 " 
              to="/orders"><i className="fa fa-fw fa-list-alt ">
                </i><span>      
                  </span>Order</NavLink>
            <NavLink 
              exact activeClassName=" mt-0 " 
              to="/customers">
                <i className="fa fa-fw fa-building ">
                  </i><span>      
                    </span>Customers</NavLink>
            <NavLink 
              exact activeClassName=" mt-0 " 
              to="/users"><i className="fa fa-fw fa-user-circle-o ">
                </i><span>      
                  </span>Users</NavLink>
            <NavLink 
              exact activeClassName=" mt-0 " to="/reports">
                <i className="fa fa-fw fa-file-text ">
                  </i><span>      
                    </span>Reports</NavLink>
            <NavLink 
              exact activeClassName=" mt-0 " 
              to="/company">
                <i className="fa fa-fw fa-group ">
                  </i><span>      
                    </span>Company</NavLink>
          
            <div className="accountlog">
            <div>
              <button type="button" className="btnlogin btn btn-success" onClick={toggle}>Login</button>
              <Login modal={modal} toggle={toggle} />
            </div>
            </div>
            
            </div>
        <div className="col">
        <Routes>
          <Route exact path="/" element = {<Homepage />}></Route>
          <Route  path="/dashboard" element={<Dashboard />}></Route>
          <Route  path="/products" element={<Products />}></Route>
          <Route  path="/customers" element={<Customers />}></Route>
          <Route  path="/users" element={<Users />}></Route>
          <Route  path="/company" element={<Company />}></Route>
          <Route  path="/orders" element={<Order />}></Route>
        </Routes>
        </div>
      </Router>
    </div>    
    );
}
const myFunction = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      console.log(x.className)
    x.className += " responsive";
    
  }
  else {
    x.className = "topnav";
  }

}


export default Sidebar;