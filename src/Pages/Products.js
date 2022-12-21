import React from "react";
import './Products.css';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear


const Products = () =>  {
    
        return(
            <div className="pad">
                
                <div className="divhyt bg-white row">
                    <div className="productheader row bg-white border order:1px solid">
                        <div className="col ms-0">
                            <label className="text-dark protalign"><i className="fa fa-fw fa-dropbox"></i>
                            <span>      </span>Products </label><label className="prosubname">- Management</label>
                        </div>
                        <div className="btnaddproduct col d-grid gap-2 d-md-flex justify-content-md-center">
                            <button  type="button" className="btn btn-success"> + Add New Product</button>
                            <button  type="button" className="btn btn-info"> + Add Stocks</button>
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
                        <th scope="col">Quantity</th>
                        <th scope="col">Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>White Sugar</td>
                        <td>Lopez</td>
                        <td>Sack</td>
                        <td>100</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Wash Sugar</td>
                        <td>Sagay</td>
                        <td>Sack</td>
                        <td>100</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Brown Sugar</td>
                        <td>Sagay</td>
                        <td>Sack</td>
                        <td>150</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>Margarine</td>
                        <td>Preto</td>
                        <td>Pail 40kilos</td>
                        <td>10</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>Banahaw Flour</td>
                        <td>Banahaw</td>
                        <td>Sack</td>
                        <td>150</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">6</th>
                        <td>Supreme Flour</td>
                        <td>Supreme</td>
                        <td>Sack</td>
                        <td>50</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">7</th>
                        <td>Washington Flour</td>
                        <td>Washington</td>
                        <td>Sack</td>
                        <td>50</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">8</th>
                        <td>Cake Flour</td>
                        <td>Snowwhite</td>
                        <td>Sack</td>
                        <td>50</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">9</th>
                        <td>Yeast</td>
                        <td>Angel</td>
                        <td>Box</td>
                        <td>10</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
                        <tr>
                        <th scope="row">10</th>
                        <td>Greataste Coffee 25g</td>
                        <td>Greatest</td>
                        <td>Box</td>
                        <td>15</td>
                        <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
                        </tr>
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


export default Products;