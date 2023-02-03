import React, { Component } from "react";
import './Products.css';
import axios from 'axios';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
export default class Products extends Component{

    constructor(props) {
        super(props);
        this.state = {
          products: []
        }
      }
    
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
        return(
        <div className="pad">
            
            <div className="divhyt bg-white row">
                <div className="productheader row bg-white border order:1px solid">
                    <div className="col ms-0">
                        <label className="text-dark protalign"><i className="fa fa-fw fa-dropbox"></i>
                        <span>      </span>Products </label><label className="prosubname">- Management</label>
                    </div>
                    <div className="btnaddproduct col d-grid gap-2 d-md-flex justify-content-md-end">
                        <button  type="button" className="btn btn-success" > + Add New Product</button>
                        {/* <button  type="button" className="btn btn-info"> + Add Stocks</button> */}
                    </div>
                   
                    
                </div>
            </div>
            
        <div className="mainproduct" >
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
                {
                this.state.products.map((product, index) => {
                     return (
                        <tr>
                        <th scope="row">{product.id}</th>
                        <td>{product.product_Name}</td>
                        <td>{product.product_Description}</td>
                        <td>{product.product_Unit}</td>
                        <td>{product.product_Price}</td>
                        <td>{product.product_Quantity}</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                     )
                    })
                }
                </tbody>
            </table>
           </div>
           <div className="row profooter">
                <div>
                    <i className="fa fa-fw fa-map-marker fa-lg"></i><label className='text-white'>Address : Zone 5, San Pablo, Calabanga, Camarines Sur</label>
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
            </div>
        </div>
    </div>
    );
}
}