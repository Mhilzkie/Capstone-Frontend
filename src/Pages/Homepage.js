import '../Components/App.css';
// import Header from  "./Header";
import AddContacts from "./Products";
// import ContactList from "./ContactList";
import Sidebar from '../Components/Sidebar';
// import Login from './Login';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import Header from '../Components/Header';
import Login from './Login';
import './Homepage.css';

import React, {useState} from 'react';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

const Homepage = () => {

  return (
  
    <div className='homeborder'>
        
        <div className="row mt-0 pt-0">
            <div className="col colstyle">
                <h1 className="text-warning textstyle">L.E.C.</h1>
                <h4 
                className='lecwisys'>
                    Warehouse Inventory System
                    </h4>
                <p>This is an Online Warehouse Inventory Management System that can manage all Inventory Process, manage product entry , manage users account also manage simple Order list entry.</p>
            </div>
            <div 
            className="col colstyle">
                <img src={imgban} 
                alt="" 
                className='invctrl-banner'/>
            </div>
            <div className="row">
            <img className='homebannedsize' src={require('../Images/home.png')} />
            </div>
            <div className="row footer">
                <div>
                    <i className="fa fa-fw fa-map-marker fa-lg">
                        </i><label className='text-white'>
                            Address : Zone 5, San Pablo, Calabanga, Camarines Sur
                            </label>
                </div>
                <div>
                <i className="fa fa-fw fa-phone fa-lg"></i><label className='text-white'>Phone : 054-871-6778</label>
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
        
    </div>

    // <div className="App">
    // {
    //   <Header/>
    // //   currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    // }
    // </div>
  );
}

export default Homepage;