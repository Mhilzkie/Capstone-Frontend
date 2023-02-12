import '../Components/App.css';
import '../Pages/Customers.css';
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

export default class Customers extends Component{
    constructor(props) {
        super(props);
        this.state = {
          customers: []
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
        fetch(`http://localhost:4000/customers`)
          .then(res =>res.json())
          .then(response => {
              console.log(response);
              this.setState({
                customers: [...response.results]
              })
            }
          )
          
      }
      addNewCustomer = () => {
        //  e.preventDefault();
        // e.preventDefault();
        // const newProduct = document.cookie.split(';')[0].split('=')[1];
        // console.log(Productinfo);
        var customerName = document.getElementById('customer_Name').value
        // console.log(productName);
        var customerNo =document.getElementById('customer_No').value
        // console.log(productBrand);
        var customerAddress =document.getElementById('customer_Address').value
        // console.log(productUnit);
        var customerStatus=document.getElementById('customer_Status').value
        axios.post(`http://localhost:4000/form-new-customer`, {

        customer_Name: customerName,
        customer_ContactNo: customerNo,
        customer_Address: customerAddress,
        customer_Status: customerStatus
        
      
        }).then((response) => {
          this.setState({
            customers: [
              ...this.state.customers,
              {customer_Name: customerName,
                customer_ContactNo: customerNo,
                customer_Address: customerAddress,
                customer_Status: customerStatus}
              ]
          })
          
        });
        // const refresh = () => window.location.reload(true)
        this.toggle();
      }

      customerDelete(id){
        // const confirmDelete = window.confirm(`Are you sure you want to Delete the Customer Entry with id ${id}?`);
      //  if (confirmDelete){
         console.log(id)
         axios.delete(`http://localhost:4000/customerdelete/${id}`)
         .then((response) => {
           const updatedCustomer = this.state.customers.filter(customers => customers.id !== id);
           // get index of updated entry on array
           // this.state.users[updatedIndex].deletedAt = new Date().toISOString();
           this.setState({
            customers: [
               ...updatedCustomer
             ]
           })
         });
      //  }
         // this.toggle();
       }

      render() {
        return (
          <div className="customerform">
            <div className="customerheader bg-white row border order:1px solid">
              <div className="col">
                <label className="text-dark custalign">
                  <i className="fa fa-fw fa-building"></i>
                  <span> </span>Customers{" "}
                </label>
                <label className="prosubname">- Management</label>
              </div>
              <div className="btnaddcustomer col d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-success" onClick={this.toggle}>
                  {" "}
                  + Add New Customers
                </button>
                {/* <button  type="button" className="btn btn-info"> + Add Stocks</button> */}
              </div>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Add New Customer</ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="item">Customer's Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name='customer_Name'
                      id='customer_Name'
                      placeholder="Enter Customer's Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="brand">Contact No.</label>
                    <input
                      type="text"
                      className="form-control"
                      name='customer_No'
                      id='customer_No'
                      placeholder="Enter Contact No."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name='customer_Address'
                      id='customer_Address'
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      name='customer_Status'
                      id='customer_Status'
                      placeholder="Enter Status"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Control</label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      placeholder="Enter Control"
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={() => this.addNewCustomer()}>
                    Save
                  </Button>{" "}
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>

            <div className="customerdata">
              <div className="customertable">
                <table class="table tablecustomer caption-top">
                  <caption>List of Customers</caption>
                  <thead>
                    <tr>
                      {/* <th scope="col">#</th> */}
                      <th scope="col">Customer's Name</th>
                      <th scope="col">Contact No.</th>
                      <th scope="col">Address</th>
                      <th scope="col">Status</th>
                      <th scope="col">Control</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.customers.map((customer, index) => {
                  if(!customer.deletedAt){
                    return(
                        <tr>
                          {/* <th scope="row">{index}</th> */}
                          <td>{customer.customer_Name}</td>
                          <td>{customer.customer_ContactNo}</td>
                          <td>{customer.customer_Address}</td>
                          <td>{customer.customer_Status}</td>
                          <td>
                            <button type="button" className="btn btn-success">
                              Edit
                            </button>
                            <button type="button" className="btn btn-danger" onClick={this.customerDelete(customer.id)}>
                              Del
                            </button>
                          </td>
                        </tr>
                        )
                      }else{
                      return (
                        <tr>
                          {/* <th scope="row">{index}</th> */}
                          <td>{customer.customer_Name}</td>
                          <td>{customer.customer_ContactNo}</td>
                          <td>{customer.customer_Address}</td>
                          <td>{customer.customer_Status}</td>
                          <td>
                            <button type="button" className="btn btn-success">
                              Edit
                            </button>
                            <button type="button" className="btn btn-danger" onClick={this.customerDelete(customer.id)}>
                              Del
                            </button>
                          </td>
                        </tr>
                              
                        );
                      }
                      })
                      }
                  </tbody>
                </table>
              </div>
              <div className="row customerfooter">
                <div className="d-flex justify-content-center">
                  <i className="fa fa-fw fa-map-marker fa-lg "></i>
                  <label className="text-white">
                    Address : Zone 5, San Pablo, Calabanga, Camarines Sur
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <i className="fa fa-fw fa-phone fa-lg"></i>
                  <label className="text-white">Phone : 054-871-6778</label>
                </div>
                <div className="d-flex justify-content-center">
                  <i className="fa fa-fw fa-facebook-square fa-lg"></i>
                  <i className="fa fa-fw fa-envelope fa-lg"></i>
                  <i className="fa fa-fw fa-linkedin-square fa-lg"></i>
                </div>

                <div className="d-flex justify-content-center">
                  Copyright © {yearTxt} All rights reserved - LEC
                </div>
              </div>
            </div>
          </div>
        );
    }
}