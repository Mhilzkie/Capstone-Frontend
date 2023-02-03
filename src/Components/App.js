import './App.css';
// import Header from  "./Header";
// import AddContacts from "../Pages/Products";
// import ContactList from "./ContactList";
import Sidebar from '../Components/Sidebar';
// import Login from './Login';
import Dashboard from '../Pages/Dashboard';
import Users from '../Pages/Users';
import Products from '../Pages/Products';
import Header from '../Components/Header';
// import Login from '../Pages/Login';
// import Sidebar from '../Components/Sidebar';

// function App() {
//   return (
//     <div>
//     <div className='row'>
//       <Header/>
//     </div>
//     <div className='row'>
//      <Dashboard/>
//      {/* <Users/> */}
//      {/* <Products/> */}
//     </div>
//     </div>
//   );
// }
import React, {useState} from 'react';
import './App.css';
// import { Login } from"./Login";
import  Register from "../Pages/Register";
import Homepage from '../Pages/Homepage';

function App() {
  
  return (
   
    <div>
    {/* <Header/> */}
    <Sidebar/>
    </div>
   
  );
}

export default App;