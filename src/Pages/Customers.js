import '../Components/App.css';
import '../Pages/Customers.css';

import React, {useState} from 'react';

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

const Customers = () => {

  return (
  
    <div className="customerform">
                
                <div className="customerheader bg-white row border order:1px solid">
                    
                        <div className="col">
                            <label className="text-dark custalign"><i className="fa fa-fw fa-building"></i>
                            <span>      </span>Customers </label><label className="prosubname">- Management</label>
                        </div>
                        <div className="btnaddcustomer col d-grid gap-2 d-md-flex justify-content-md-end">
                            <button  type="button" className="btn btn-success"> + Add New Customers</button>
                            {/* <button  type="button" className="btn btn-info"> + Add Stocks</button> */}
                        </div>  
                </div>
                
                <div className="customerdata" >
                <div className="customertable">
                <table class="table tablecustomer caption-top">
                    <caption>List of Customers</caption>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer's Name</th>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Lagarde, Merriam</td>
                        <td>09178384738</td>
                        <td>Sta Cruz Ratay Cam. Sur</td>
                        <td>Regular</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Samsun Lumpia Wrapper</td>
                        <td>094586453829</td>
                        <td>San Miguel, Calabanga, Camarines Sur</td>
                        <td>Regular</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Insuya Catering</td>
                        <td>092587073546</td>
                        <td>Sack</td>
                        <td>Regular</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>Medroville Farm</td>
                        <td>091863749382</td>
                        <td>Talacup, Manguiring, Calabanga Camarines Sur</td>
                        <td>Regular</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>Marpus Bakery</td>
                        <td>092163792749</td>
                        <td>Zone 2 Sana Isidro, Calabanga Camarines Sur</td>
                        <td>New</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        
                    </tbody>
                </table>
                
               </div>
               <div className="row customerfooter">
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
  );
}

export default Customers;