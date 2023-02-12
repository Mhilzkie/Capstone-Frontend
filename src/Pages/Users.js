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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { render } from '@testing-library/react';

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

export default class Users extends Component{
    constructor(props) {
        super(props);
        this.state = {
          users: []
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
        fetch(`http://localhost:4000/users`)
          .then(res =>res.json())
          .then(response => {
              console.log(response);
              this.setState({
                users: [...response.results]
              })
            }
          )
          
      }

      addNewUser = () => {
        var userName= document.getElementById('UserName').value
        var password=document.getElementById('Password').value
        var accountName=document.getElementById('AccountName').value
        var accountType=document.getElementById('AccountType').value
                
        axios.post(`http://localhost:4000/form-new-user`, {

        user_Username: userName,
        user_Password: password,
        user_CompleteName: accountName,
        user_AccountType: accountType
      
        }).then((response) => {
          this.setState({
            users: [
              ...this.state.users,
              {user_Username: userName,
                user_Password: password,
                user_CompleteName: accountName,
                user_AccountType: accountType}
              ]
          })
        });
        this.toggle();
      }

      userDelete(id){
       // const confirmDelete = window.confirm(`Delete the entry with id ${id}?`);
      // if (confirmDelete){
        
        axios.delete(`http://localhost:4001/userdelete/${id}`)
        .then(() => {
          // const updatedIndex = this.state.tasks.findIndex(task => task.id === id);
          // get index of updated entry on array
          // this.state.tasks[updatedIndex].deletedAt = new Date().toISOString();
          this.setState({
            tasks: [
              ...this.state.tasks
            ]
          })
        });
        this.toggle();
      }
      // }
      
      
render() {
  return (
    <div className="userform">
      <div className="userheader bg-white row border order:1px solid">
        <div className="col">
          <label className="text-dark usertalign">
            <i className="fa fa-fw fa-user-circle-o"></i>
            <span> </span>Users{" "}
          </label>
          <label className="usersubname">- Management</label>
        </div>
        <div className="btnadduser col d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.toggle}
          >
            {" "}
            + Add New User
          </button>
          
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add New User</ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="item">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="UserName"
                  id="UserName"
                  placeholder="Enter Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="brand">Password</label>
                <input
                  type="Password"
                  className="form-control"
                  name="Password"
                  id="Password"
                  placeholder="Enter Password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="AccountName"
                  id="AccountName"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="unit">Account Access</label>
                <select className="form-control" id="AccountType">
                  <option value="">Select Account Access</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.addNewUser()}>
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
              {/* <th scope="col">#</th> */}
              <th scope="col">Complete Name</th>
              <th scope="col">Account Type</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Control</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => {
              return (
                <tr>
                  {/* <th scope="row">{user.id}</th> */}
                  <td>{user.user_CompleteName}</td>
                  <td>{user.user_AccountType}</td>
                  <td>{user.user_Username}</td>
                  <td>{user.user_Password}</td>
                  <td>
                    <button type="button" className="btn btn-success">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={(e) => this.userDelete(user.id,e)}>
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
    </div>
    );
  }
}