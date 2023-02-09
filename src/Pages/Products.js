import React, { Component } from "react";
import { useState } from "react";
import './Products.css';
import axios from 'axios';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear



export default class Products extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
          products: []
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
        fetch(`http://localhost:4000/products`)
          .then(res =>res.json())
          .then(response => {
              console.log(response);
              this.setState({
                products: [...response.results]
              })
            }
          )
      }
    
      

    render() {
       
        return (
          <div className="pad">
            <div className="divhyt bg-white row">
              <div className="productheader row bg-white border order:1px solid">
                <div className="col ms-0">
                  <label className="text-dark protalign">
                    <i className="fa fa-fw fa-dropbox"></i>
                    <span> </span>Products{" "}
                  </label>
                  <label className="prosubname">- Management</label>
                </div>
                <div className="btnaddproduct col d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.toggle}
                  >
                    {" "}
                    + Add New Product
                  </button>

                  {/* <button  type="button" className="btn btn-info"> + Add Stocks</button> */}
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>
                    Add New Product
                  </ModalHeader>
                  <ModalBody>
                    <div className="form-group">
                      <label htmlFor="item">Item</label>
                      <input
                        type="text"
                        className="form-control"
                        id="item"
                        placeholder="Enter item name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        className="form-control"
                        id="brand"
                        placeholder="Enter brand name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="unit">Unit</label>
                      <select className="form-control" id="unit">
                        <option value="">Select Unit</option>
                        <option value="select1">Bag</option>
                        <option value="select2">Box</option>
                        <option value="select3">Case</option>
                        <option value="select3">Container</option>
                        <option value="select3">Drum</option>
                        <option value="select3">Pail</option>
                        <option value="select3">Sack</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        placeholder="Enter price"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        placeholder="Enter quantity"
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

            <div className="mainproduct">
              <div className="producttable">
                <table class="table caption-top">
                  <caption>List of Products</caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item</th>
                      <th scope="col">Brand</th>
                      <th scope="col">Unit</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Control</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products.map((product, index) => {
                      return (
                        <tr>
                          <th scope="row">{product.id}</th>
                          <td>{product.product_Name}</td>
                          <td>{product.product_Description}</td>
                          <td>{product.product_Unit}</td>
                          <td>{product.product_Price}</td>
                          <td>{product.product_Quantity}</td>
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
              <div className="row profooter">
                <div>
                  <i className="fa fa-fw fa-map-marker fa-lg"></i>
                  <label className="text-white">
                    Address : Zone 5, San Pablo, Calabanga, Camarines Sur
                  </label>
                </div>
                <div>
                  <i className="fa fa-fw fa-phone fa-lg"></i>
                  <label className="text-white">Phone : 054-871-6778</label>
                </div>
                <div>
                  <i className="fa fa-fw fa-facebook-square fa-lg"></i>
                  <i className="fa fa-fw fa-envelope fa-lg"></i>
                  <i className="fa fa-fw fa-linkedin-square fa-lg"></i>
                </div>

                <div>Copyright © {yearTxt} All rights reserved - LEC</div>
              </div>
            </div>
          </div>
        );
}
}


