import  { BrowserRouter as Router, Route, NavLink , Routes as Switch, Routes} from "react-router-dom";
import React from "react";
import '../Components/Header.css';
import mylogo from  '../Images/lelogo.png';
import Dashboard from "../Pages/Dashboard";
import Homepage from "../Pages/Homepage";
import Products from "../Pages/Products";
import Users from "../Pages/Users";
import Customers from "../Pages/Customers";
import Company from "../Pages/Company";


const Header = () => {
    return(
            
<div className="header">
    <Router>
    <div className="topnav" id="myTopnav">
        
            <h4><a className="bgcolor mt-2"><img className="" src={mylogo} alt="LE Logo" height={"20"} width={"20"}/>
            <span>    </span> <span className="text-warning">LEC</span><span className="text-info ">WISys</span></a></h4>
            
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
            <NavLink 
              exact activeClassName=" mt-0 " 
              to="/login" >
                <i className="fa fa-fw fa-sign-in ">
                  </i><span>      
                    </span>Login</NavLink>
            
    <a href="javascript:void(0);" className="icon" onClick={myFunction}><i className="fa fa-fw fa-bars"></i></a>
    
    </div>
    
    <div>
      <Routes>
        <Route exact path="/" element = {<Homepage />}></Route>
        <Route  path="/dashboard" element={<Dashboard />}></Route>
        <Route  path="/products" element={<Products />}></Route>
        <Route  path="/customers" element={<Customers />}></Route>
        <Route  path="/users" element={<Users />}></Route>
        <Route  path="/company" element={<Company />}></Route>
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
  
export default Header;