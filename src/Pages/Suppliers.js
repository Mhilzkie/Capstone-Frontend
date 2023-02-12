import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Components/App.css';
// import Header from  "./Header";
// import AddContacts from "./Products";
// import ContactList from "./ContactList";
import Sidebar from '../Components/Sidebar';
// import Login from './Login';
import Dashboard from './Dashboard';
import Products from './Products';
import Header from '../Components/Header';
// import Login from './Login';
import './Users.css';
import { Component } from "react";
import React, {useState} from 'react';
import axios from 'axios';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";

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

      render() {

  return (
    <div className="userform">
      <div className="userheader bg-white row border order:1px solid">
        <div className="col">
          <label className="text-dark usertalign">
            <i className="fa fa-fw fa-user-circle-o"></i>
            <span> </span>Suppliers{" "}
          </label>
          <label className="usersubname">- Management</label>
        </div>
        <div className="btnadduser col d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" className="btn btn-success" onClick={this.toggle}>
            {" "}
            + Add New Suppliers
          </button>
          {/* <button  type="button" className="btn btn-info"> + Add Stocks</button> */}
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>
                    Add New Product
                  </ModalHeader>
                  <ModalBody>
                    <div className="form-group">
                      <label htmlFor="item">Complete Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="item"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="brand">Account Type</label>
                      <input
                        type="text"
                        className="form-control"
                        id="brand"
                        placeholder="Enter Account Type"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="price">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        placeholder="Enter Username"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="quantity">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="quantity">Control</label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        placeholder="Enter Control"
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>
                      Save
                    </Button>{" "}
                    <Button color="secondary" onClick={this.toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
        </div>
      </div>

      <div className="row userdata">
        <table class="table caption-top">
          <caption>List of Users</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Complete Name</th>
              <th scope="col">Account Type</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Control</th>
            </tr>
          </thead>
          <tbody>
            {this.state.suppliers.map((suppplier, index) => {
              return (
                <tr>
                  <th scope="row">{suppplier.id}</th>
                  <td>{suppplier.user_CompleteName}</td>
                  <td>{suppplier.user_AccountType}</td>
                  <td>{suppplier.user_Username}</td>
                  <td>{suppplier.user_Password}</td>
                  <td>
                    <button type="button" className="btn btn-success">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row userfooter">
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
      {/* </div> */}
    </div>
  );
}
}