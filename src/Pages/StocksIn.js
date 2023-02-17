import React, { Component } from "react";
import { useState } from "react";
// import './Products.css';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../Pages/Stockin.css';
import { FormControl } from "react-bootstrap";
import Suppliers from "./Suppliers";


const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
const container = document.getElementById('div-cont');
// const selectedproduct = document.getElementById('product_Unit').value;
// {product,description,unit,Updatedprice,updatedQuantity}
var productId = '';

export default class Stockin extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
          productsNameList: [],
          productselected:[],
          suppliers:[]
          
        }
      }
      state = {
        modal: false
      };
      
      componentDidMount = () => {
        fetch(`http://localhost:4000/stockIn`)
          // .then(res =>res.json())
          .then(response => {
              console.log(response);
              this.setState({
                suppliers: [...response.results]
              })
            }
          )
      }


      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      };
        deleteRow = (r) =>{
          console.log("DELETE");
        var i=r.parentNode.parentNode.rowIndex;
        document.getElementById('myDeliveryList').deleteRow(i);
        }
      
      addProductEntry= () =>{

        // function addRow() {
          // Get the table element in which you want to add row
          let table = document.getElementById("myDeliveryList1");
       
          // Create a row using the inserRow() method and
          // specify the index where you want to add the row
          let row = table.insertRow(-1); // We are adding at the end
       
          // Create table cells
          let c1 = row.insertCell(0);
          let c2 = row.insertCell(1);
          let c3 = row.insertCell(2);
          let c4 = row.insertCell(3);
          let c5 = row.insertCell(4);
          let c6 = row.insertCell(5);
          // Add data to c1 and c2
          c1.innerText = document.getElementById("product_Name").value;
          c2.innerText = document.getElementById("product_Description").value;
          c3.innerText =document.getElementById("product_Unit").value;
          c4.innerText =document.getElementById("product_Price").value;
          c5.innerText =document.getElementById("product_Quantity").value;
          c6.innerHTML ='<input id=\"Button\" this.deleteRow(this) type=\"button\" value=\"Delete\" />';
          
         

       }
       getProductSelected=()=>{
       
        
        var id = document.getElementById('product_Name').value;  
        productId = id
        console.log(productId);
        axios.get(`http://localhost:4000/productNamelist/${id}`)
        
        .then((response) => {
          console.log(response);
            this.setState({
              products: 
              { ...this.state.products}
               
            })
          }
        )
        
      }
       loadProductList = ()=>{
        fetch(`http://localhost:4000/productNamelist`)
          .then(res =>res.json())
          .then(response => {
              console.log(response);
              this.setState({
                
                productsNameList: [...response.results]
                
              })
            }
          )
       }
        
      Convert=()=> {
        const productName = document.getElementById("product_Name").value;
        const productBrand=  document.getElementById("product_Description").value;
        const productUnit = document.getElementById("product_Unit").value;
        const productPrice = document.getElementById("product_Price").value;
        const productQuantity = document.getElementById("product_Quantity").value;

          this.setState({
            products: [
                ...this.state.products,
                {product_Name: productName,
                  product_Description: productBrand,
                  product_Unit: productUnit,
                  product_Quantity: productQuantity,
                  product_Price: productPrice}
                ]
            })

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
                  <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>
                    Stock In
                  </ModalHeader>
                  <ModalBody>
                    
                    <div className="form-group">
                   
                      <label htmlFor="item">Product ID</label>
                      
                      <select name="Item" className="form-control" id="product_Name" 
                        placeholder="Select item Name"
                        onChange={this.getProductSelected}
                        >
                        {this.state.productsNameList.map((product, index) => {
                          
                          if(!product.deletedAt){
                            
                            return(
                              <option value={product.id}>{product.product_Name}</option>
                              
                              
                            );
                            }else{
                              return(
                                <option value={product.id}>{product.product_Name}</option>
                              );
                            }
                            
                          })
                        }
                      </select>
                    </div>

                            
                    <div className="form-group">

                    
                            
                            {this.state.productsNameList.map((product, index) => {
                          console.log(productId);
                          console.log(product.Id);
                          if(parseInt(productId) === product.id){
                          return(
                            <div>
                            <label htmlFor="brand">Product / Brand</label>
                            <input
                              type="text"
                              name="product_Description"
                              className="form-control"
                              id="product_Description"
                              placeholder="Enter Description"
                              value={product.product_Name}/>
                              </div>
                            );
                          }
                        })
                      }
                    </div>


                    <div className="form-group">

                      {this.state.productsNameList.map((product, index) => {
                        
                          if(parseInt(productId) === product.id){
                            return(
                              <div>
                              <label htmlFor="unit">Unit</label>
                                <input
                                        type="text"
                                        name="product_Unit"
                                        className="form-control"
                                        id="product_Unit"
                                        placeholder="Enter Product Unir"
                                        value={product.product_Unit}/>
                                </div>
                            );
                          }
                        })
                      }   
                     
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
                    <Button color="primary" type="submit" onClick={() => this.addProductEntry()}>
                      Add To List
                    </Button>{" "}
                    <Button color="secondary" onClick={this.toggle}>
                      
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
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
                            <div className="col"><input className="fontwidth form-control pl-5" type="date" id="calendar" placeholder="DD/MM/YYYY" name="ed"/></div>                        </div>
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
                          <div className="col">
                            {/* <select name="Item" className="form-control" id="product_Name" 
                              placeholder="Select item Name"
                              > */}
                              {/* {this.state.suppliers.map((supplier, index) => {
                                return(
                                  <option value={supplier.supplierName}>{supplier.supplierName}</option>
                                  );
                                  }
                                )   
                              }
                              
                              </select> */}
                            </div>
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
              </div>
              <div className="col tablecontainer">
              <table class="table caption-top myDeliveryList">
              <thead>
                    <tr>
                      {/* <th scope="col">#</th> */}
                      <th scope="col">Product ID</th>
                      <th scope="col">Prodct / Brand</th>
                      <th scope="col">Unit</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody id="myDeliveryList1" className="container">
                 
                  </tbody>
              </table>
              </div>
                  <div className="row">
                    <div className="col addProductlist btn-text-left"align="left">
                        <button
                        type="button"
                        className="btn btn-success btn-text-left ms-5 mb-3"
                        onClick={() =>{
                          this.toggle();
                          this.loadProductList()
                        }
                      }
                        // onClick={this.toggle}
                      ><i className="fa fa-fw fa-dropbox "></i>
                        {" "}
                        Add Product Delivery
                      </button>
                    </div>
                    <div className="col addProductlist btn-text-left"align="left">
                        <button
                        type="button"
                        className="btn btn-danger btn-text-left ms-5 mb-3"
                        onClick={this.toggle}
                        // onClick={this.toggle}
                      ><i className="fa fa-fw fa-save "></i>
                        {" "}
                        Save Product Delivery
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-text-left ms-1 mb-3"
                        onClick={this.Convert}
                        // onClick={this.toggle}
                      ><i className="fa fa-fw fa-ban "></i>
                        {" "}
                        Cancel Transaction
                      </button>
                    </div>
                      
                  </div>
            
        </div>
       );
          
}
}