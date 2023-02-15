import React, { Component } from "react";
import { useState } from "react";
// import './Products.css';
import axios from 'axios';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Variable } from "eslint-scope";
import '../Pages/Stockin.css';

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
const container = document.getElementById('div-cont');
// {product,description,unit,Updatedprice,updatedQuantity}
export default class Stockin extends Component{
    

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
      addProductEntry(){
        
      }
      


    render() {
       return (
      <div className="Stocklayoutpage">
              <div className="stockinheader col ms-0 pb-2 border border:1px solid">
                  <label className="text-dark stockinalign">
                    <i className="fa fa-fw fa-sign-in "></i>
                    <span> </span>Stock In{"    "}
                  </label>
                  <label className="stockinsubname">-  Management</label>
              </div>
                           
              <div className="row borderpt-2 pb-2 ps-2 threecol">
                
                <div className="col border">
                  <div className="row border">
                    <div className="titlewidth">
                      <label className=" fontwidth pt-0" for="email">DELIVERY DETAILS</label></div>
                  </div>
                      <form class="form-inline pt-0">
                          <div className="row">
                            <div className="labelwithd"><label className="fontwidth pt-0" for="email">Delivery Reciept :</label></div>
                            <div className="col"><input className="fontwidth form-control pl-5" type="text" id="dr" placeholder="Enter Deliver Reciept" name="dr"/></div>
                          </div>
                        </form>
                        <form class="form-inline pt-0">
                          <div className="row">
                            <div className="labelwithd"><label className="fontwidth pt-0" for="email">Checked By :</label></div>
                            <div className="col"><input className="fontwidth form-control pl-5" type="text" id="cb" placeholder="Enter Who Checked the Delivery" name="cb"/></div>
                          </div>
                        </form>
                        <form class="form-inline pt-0">
                          <div className="row">
                            <div className="labelwithd"><label className="fontwidth pt-0" for="email">Entry Date :</label></div>
                            <div className="col"><input className="fontwidth form-control pl-5" type="text" id="ed" placeholder="DD/MM/YYYY" name="ed"/></div>                        </div>
                        </form>  
                      </div>
                <div className="col border">
                  <div className="row border">
                    <div className="titlewidth">
                      <label className=" fontwidth pt-0" for="email">SUPPLIER DETAILS</label></div>
                   </div>  
                      <form class="form-inline pt-0">
                        <div className="row">
                          <div className="labelwithd"><label className="fontwidth pt-0" for="email">Name :</label></div>
                          <div className="col"><input className="fontwidth form-control pl-5" type="name" id="name" placeholder="" name="name"/></div>
                        </div>
                      </form>
                      <form class="form-inline pt-0">
                        <div className="row">
                          <div className="labelwithd"><label className="fontwidth pt-0" for="email">Contact Person :</label></div>
                          <div className="labelwithd "><label className="fontalign pt-0" for="email">Juan Dela Cruz</label></div>
                        </div>
                      </form>
                      <form class="form-inline pt-0">
                        <div className="row">
                          <div className="labelwithd"><label className="fontwidth pt-0" for="email">Address :</label></div>
                          <div className="labelwithd "><label className="fontalign pt-0" for="email">Garza Zone 5, San Isidro, Calabanga, Cam. Sur </label></div>
                        </div>
                      </form>    
                </div>
                
            </div>
            <div className="col addProductlist border">
              <div className="titlewidth">
                        <label className=" fontwidth pt-0" for="email">PRODUCTS DELIVERY DETAILS</label></div>
                  <div className="row">
                    <div className="col producttitlewidth">
                            <label className=" fontwidth pt-0" for="email">Product Name</label>
                      </div>
                      <div className="col producttitlewidth">
                            <label className=" fontwidth pt-0" for="email">Description</label>
                      </div>
                      <div className="col producttitlewidth">
                            <label className=" fontwidth pt-0" for="email">Unit</label>
                      </div>
                      <div className="col producttitlewidth">
                            <label className=" fontwidth pt-0" for="email">Price</label>
                      </div>
                      <div className="col producttitlewidth">
                            <label className=" fontwidth pt-0" for="email">Quantity</label>
                      </div>
                  </div>
              </div>
              
                  <div className="row">
                    <div className="col producttitlewidth" id="div-con">
                    {/* <select name="product" className="form-control ms-2" id="product" placeholder=""> */}
                        {/* <option value="Sagay Brown Sugar 50kg">Sagay Brown Sugar 50kg</option>
                        <option value="Lopez Brown Sugar 50kg">Lopez Brown Sugar 50kg</option> */}
                      {/* </select> */}
                    </div>
                    <div className="col producttitlewidth">
                      {/* <label className=" setfontstyle pt-0" for="description" id="description">Product Description Appear here</label> */}
                    </div>
                    <div className="col producttitlewidth">
                            {/* <label className=" setfontstyle pt-0" for="unit" id="unit">Unit</label> */}
                    </div>
                    <div className="col producttitlewidth">
                      {/* <div className="col"><input className="form-control pl-5" type="text" id="Updatedprice" placeholder="Input Updated price" name="ed"/></div> */}
                    </div>
                    <div className="col producttitlewidth">
                      {/* <div className="col"><input className="form-control pl-5 pe-4" type="text" id="updatedQuantity" placeholder="Enter Quantity" name="ed"/></div> */}
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col addProductlist btn-text-left"align="left">
                    <button
                    type="button"
                    className="btn btn-success btn-text-left ms-2 mb-3"
                    onClick={this.toggle}
                    // onClick={this.toggle}
                  ><i className="fa fa-fw fa-dropbox "></i>
                    {" "}
                    Add Product Delivery
                  </button>
                    
                        
                    </div>
                      
                  </div>
            
        </div>
       );
          
}
}