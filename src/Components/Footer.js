import './App.css';
// import Header from  "./Header";
import AddContacts from "./Products";
// import ContactList from "./ContactList";
import Sidebar from './Sidebar';
// import Login from './Login';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import Header from './Header';
import Login from './Login';
import './Footer.css';

import React, {useState} from 'react';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

const Footer = () => {

  return (
  
    <div>
       

            <div className="row footer">"
                <div>
                    <i className="fa fa-fw fa-map-marker fa-lg"></i><label className='text-dark'>Address : Zone 5, San Pablo, Calabanga, Camarines Sur</label>
                </div>
                <div>
                <i className="fa fa-fw fa-phone fa-lg"></i><label className='text-dark'>Phone : 054-871-6778</label>
                </div>
                <div>
                <i className="fa fa-fw fa-facebook-square fa-lg"></i>
                <i className="fa fa-fw fa-envelope fa-lg"></i>
                <i className="fa fa-fw fa-linkedin-square fa-lg"></i>
                </div>
                
                    <div>
                    Copyright © { yearTxt } All rights reserved - LEC
                    </div>
          
        </div>
        
    </div>

    // <div className="App">
    // {
    //   <Header/>
    // //   currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    // }
    // </div>
  );
}

export default Footer;