import React, { Component } from "react";
import { useState } from "react";
import './Products.css';
import axios from 'axios';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Variable } from "eslint-scope";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
export default class Products extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
          products: [],
          
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
    
      addNewProduct = () => {
        //  e.preventDefault();
        // e.preventDefault();
        // const newProduct = document.cookie.split(';')[0].split('=')[1];
        // console.log(Productinfo);
        var productName= document.getElementById('product_Name').value
        // console.log(productName);
        var productBrand=document.getElementById('product_Description').value
        // console.log(productBrand);
        var productUnit=document.getElementById('product_Unit').value
        // console.log(productUnit);
        var productPrice=document.getElementById('product_Price').value
        // console.log(productPrice);
        var productQuatity = document.getElementById('product_Quantity').value
        // console.log(productQuatity);
        
        // const insertProduct = { productName,productBrand,productUnit,productPrice,productQuatity };
        // console.log(insertProduct);
        axios.post(`http://localhost:4000/form-new-product`, {

        product_Name: productName,
        product_Description: productBrand,
        product_Unit: productUnit,
        product_Quantity: productQuatity,
        product_Price: productPrice
      
        }).then((response) => {
          this.setState({
            // products: [...response.results]
          })
          
        });
        // const refresh = () => window.location.reload(true)
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
                        name="product_Name"
                        id="product_Name"
                        placeholder="Enter item name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        name="product_Description"
                        className="form-control"
                        id="product_Description"
                        placeholder="Enter brand name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="unit">Unit</label>
                      <select name="product_Unit" className="form-control" id="product_Unit" 
                        placeholder="Enter Unit">
                        <option value="Bag">Bag</option>
                        <option value="Box">Box</option>
                        <option value="Case">Case</option>
                        <option value="Container">Container</option>
                        <option value="Drum">Drum</option>
                        <option value="Pail">Pail</option>
                        <option value="Sack">Sack</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        name="product_Price"
                        className="form-control"
                        id="product_Price"
                        placeholder="Enter price"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <input
                        type="text"
                        name="product_Quantity"
                        className="form-control"
                        id="product_Quantity"
                        placeholder="Enter quantity"
                      />
                      
                    </div>
                    
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" type="submit" onClick={() => this.addNewProduct()}>
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
          // </div>
        );
}
}


