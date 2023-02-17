import '../Components/App.css';
import Sidebar from '../Components/Sidebar';
import Dashboard from './Dashboard';
import Products from './Products';
import Header from '../Components/Header';
import './Suppliers.css';
import { Component } from "react";
import React, {useState} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Variable } from "eslint-scope";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

export default class Suppliers extends Component{
    constructor(props) {
        super(props);
        this.state = {
          suppliers: []
        }
      }
    
      state = {
        modal: false
      };
      
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      };
    
    componentDidMount = () => {
        fetch(`http://localhost:4000/suppliers`)
          .then(res =>res.json())
          .then(response => {
              console.log(response);
              this.setState({
                suppliers: [...response.results]
              })
            }
          )
      }

      addNewSupplier= () =>{
        
        var supplierName= document.getElementById('companyName').value
        var supplierContactPerson=document.getElementById('contactPerson').value
        var supplierEmail=document.getElementById('email').value
        var suppliercontactNumber= document.getElementById('contactNo').value
        var supplierStreetAdd=document.getElementById('streetaddress').value
        var supplierCityMunicipality=document.getElementById('cityMunicipality').value
        var supplierStateProvince=document.getElementById('stateProvince').value
        var supplierPostalZipcode= document.getElementById('postalZipCode').value

        
        axios.post(`http://localhost:4000/form-new-supplier`, {

        supplierName: supplierName,
        supplierContactPerson: supplierContactPerson,
        supplierEmail: supplierEmail,
        suppliercontactNumber: suppliercontactNumber,
        supplierStreetAdd: supplierStreetAdd,
        supplierCityMunicipality:supplierCityMunicipality,
        supplierStateProvince:supplierStateProvince,
        supplierPostalZipcode:supplierPostalZipcode
              
        }).then((response) => {
          this.setState({
            suppliers: [
                ...this.state.suppliers,
                {supplierName: supplierName,
                supplierContactPerson: supplierContactPerson,
                supplierEmail: supplierEmail,
                suppliercontactNumber: suppliercontactNumber,
                supplierStreetAdd: supplierStreetAdd,
                supplierCityMunicipality:supplierCityMunicipality,
                supplierStateProvince:supplierStateProvince,
                supplierPostalZipcode:supplierPostalZipcode}
                ]
          })
          
        });
        this.toggle();
      }

    render() {
        return (
  
    <div className="userform">
                
                <div className="userheader bg-white row border order:1px solid">
                    <div className="col">
                       <label className="text-dark usertalign"><i className="fa fa-fw fa-user-circle-o"></i>
                        <span>      </span>Suppliers </label><label className="usersubname">- Management</label>
                        </div>
                          <div className="btnadduser col d-grid gap-2 d-md-flex justify-content-md-end">
                            <button  
                            type="button" 
                            className="btn btn-success"
                            onClick={this.toggle}>
                              {" "}
                              + Add New Suppliers</button>
                          </div>  
                        </div>
                  <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                      Add New Product
                    </ModalHeader>
                  <ModalBody>
                <div className='row rowwidth'>
                <div className='col' >
                  <div className="form-group">
                   <label htmlFor="item">Company Name</label>
                   <input
                     type="text"
                     className="form-control"
                     name="companyName"
                     id="companyName"
                     placeholder="Enter Company Name"
                   />
                 </div>
                 
                 <div className="form-group">
                   <label htmlFor="brand">Contact Person</label>
                   <input
                     type="text"
                     name="contactPerson"
                     className="form-control"
                     id="contactPerson"
                     placeholder="Enter Contact Name"                   />
                 </div>
                
                 <div className="form-group">
                   <label htmlFor="price">Contact No</label>
                   <input
                     type="text"
                     name="contactNo"
                     className="form-control"
                     id="contactNo"
                     placeholder="Enter Contact Number"
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="email">Email</label>
                   <input
                     type="email"
                     name="email"
                     className="form-control"
                     id="email"
                     placeholder="Enter Email Address"
                   />
                 </div>
                 </div>
                 <div className='col' >
                 <div className="form-group">
                   <label htmlFor="email">Bldg. No./Street</label>
                   <input
                     type="text"
                     name="streetaddress"
                     className="form-control"
                     id="streetaddress"
                     placeholder="Enter Bldg. No./Street"
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="city/municipality">City/Municipality</label>
                   <input
                     type="text"
                     name="cityMunicipality"
                     className="form-control"
                     id="cityMunicipality"
                     placeholder="Enter City/Municipality" />
                 </div>
                 <div className="form-group">
                 <label htmlFor="stateProvince">State/Province</label>
                   <input
                     type="text"
                     name="stateProvince"
                     className="form-control"
                     id="stateProvince"
                     placeholder="Enter State/Province" />
                 </div>
                 <div className="form-group">
                 <label htmlFor="stateProvince">Postal/Zip Code</label>
                   <input
                     type="text"
                     name="postalZipCode"
                     className="form-control"
                     id="postalZipCode"
                     placeholder="Enter Postal/Zip Code" />
                 </div>
                 </div>
        </div>
               </ModalBody>
               <ModalFooter>
                 <Button color="primary" type="submit" onClick={() => this.addNewSupplier()}>
                   Save
                 </Button>{" "}
                 <Button color="secondary" onClick={this.toggle}>
                   
                   Cancel
                 </Button>
               </ModalFooter>
             </Modal>
         
                    <div className="row userdata">
                        <table class="table caption-top">
                            <caption>List of Suppliers</caption>
                            <thead>
                                <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">Company Name</th>
                                <th scope="col">Contact Person</th>
                                <th scope="col">Contact No.</th>
                                <th scope="col">Email</th>
                                <th scope="col">Supplier Address</th>
                                <th scope="col">Control</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                          this.state.suppliers.map((suppplier, index) => {
                          return (
                        <tr>
                        {/* <th scope="row">{suppplier.id}</th> */}
                        <td>{suppplier.supplierName}</td>
                        <td>{suppplier.supplierContactPerson}</td>
                        <td>{suppplier.suppliercontactNumber}</td>
                        <td>{suppplier.supplierEmail}</td>
                        <td>{suppplier.supplierStreetAdd + ", "}  {suppplier.supplierCityMunicipality + ", "} {suppplier.supplierStateProvince}</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                     )
                    })
                }
                            </tbody>
                        </table>
                        
                    </div>
                    <div className="row userfooter">
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
                {/* </div> */}
           
        </div>
   
  );
}
}