import '../Components/App.css';
import '../Pages/Order.css';

import React, {useState} from 'react';
// import { Login } from"./Login";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

const Order = () => {

  return (
  
    <div className="orderform">
                
                <div className="orderheader bg-white row border order:1px solid">
                    
                        <div className="col">
                            <label className="text-dark ordertalign"><i className="fa fa-fw fa-list-alt"></i>
                            <span>      </span>Order </label><label className="prosubname">- Management</label>
                        </div>
                        <div className="btnaddorder col d-grid gap-2 d-md-flex justify-content-md-end">
                            <button  type="button" className="btn btn-success"> + Create New Order</button>
                            {/* <button  type="button" className="btn btn-info"> + Add Stocks</button> */}
                        </div>  
                </div>
                
                <div className="orderdata" >
                <div className="ordertable">
                <table class="table caption-top">
                    <caption>Order History</caption>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Transcation #</th>
                        <th scope="col">Customer's Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">details</th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>LGDE-0001-121222</td>
                        <td>Lagarde, Merriam</td>
                        <td>Paid / Delivered</td>
                        <td><button  type="button" className="btn btn-info"><i className="fa fa-fw fa-eye"></i></button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>OMPS-0002-121322</td>
                        <td>Samsun Lumpia Wrapper</td>
                        <td>Paid / Delivered</td>
                        <td><button  type="button" className="btn btn-info"><i className="fa fa-fw fa-eye"></i></button></td>   
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>INSYA-0003-121322</td>
                        <td>Insuya Catering</td>
                        <td>Paid / Delivered</td>
                        <td><button  type="button" className="btn btn-info"><i className="fa fa-fw fa-eye"></i></button></td>   
                        </tr>
                        
                        
                    </tbody>
                </table>
                
               </div>
               <div className="row orderfooter">
                <div className='d-flex justify-content-center'>
                    <i className="fa fa-fw fa-map-marker fa-lg "></i><label className='text-white'>Address : Zone 5, San Pablo, Calabanga, Camarines Sur</label>
                </div >
                <div className='d-flex justify-content-center'>
                    <i className="fa fa-fw fa-phone fa-lg"></i><label className='text-white'>Phone : 054-871-6778</label>
                </div>
                <div className='d-flex justify-content-center'>
                    <i className="fa fa-fw fa-facebook-square fa-lg"></i>
                    <i className="fa fa-fw fa-envelope fa-lg"></i>
                    <i className="fa fa-fw fa-linkedin-square fa-lg"></i>
                </div>
                
                <div className='d-flex justify-content-center'>
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

export default Order;