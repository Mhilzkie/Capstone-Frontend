import '../Components/App.css';
// import Header from  "./Header";
// import AddContacts from "./Products";
// import ContactList from "./ContactList";
import Sidebar from '../Components/Sidebar';
// import Login from './Login';
import Users from './Users';
import Products from './Products';
import Header from '../Components/Header';
// import Login from './Login';
import '../Pages/Dashboard.css';
import {Component} from 'react';
import React, {useState} from 'react';
import Footer from '../Components/Footer';
// import dailyStockOutChart from '../Components/dailyStockOutChart';


const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

// const url = "http://localhost:4000/dashboard";
export default class Dashboard extends Component{
  constructor(props) {
      super(props);
      this.state = {
        products: [],
        users:[],
        customers:[],
        productcriticals:[],
      }
    }
    

  componentDidMount = (e) => {
        fetch(`http://localhost:4000/dashboard`)
        .then(res =>res.json())
        .then(response => {
            console.log(response);
            this.setState({
              
              products: [response.results.products.length],
              users: [response.results.users.length],
              customers: [response.results.customers.length],
              productcriticals:[response.results.productcriticals.length],
   
            })
            // console.log();
          }
        )
    }
    // console.log(productCount); 

    criticalStocks = (count)  => {}

    render() {
      let productCount = 0;
      let userCount = '';
      let customerCount= '';
      return (
        
          <div>
            
            <div className='dashboard_form'>
            <div className="dasheader bg-white border order:1px solid">   
              <label className="text-dark talign"><i className="fa fa-fw fa-th"></i>
                <span>      </span>Dashboard</label><label className="prosubname">-  Management</label>
                </div>
                <div className='box'>
                {/* CreateCard(); */}
                  <div className='row cardcontainer'>
                  {
                    this.state.productcriticals.map((productcritical, index) => {
                    if (productcritical==0)  {
                      return (
                        <div className='col menucard'>
                          <div className='row rowhyt'>
                            <div className='col ccontainer'>
                              <img className='img-resized' src={require('../Images/critical.png')} />
                            </div>
                          <div className='col'>
                          <p className='qty'>{this.state.productcriticals}</p>
                        </div>
                      </div>
                      <div>
                        <p className='producttotal'>Total Critical Stocks</p>
                      </div>
                    </div>
                      )
                    }else{
                      return (
                        <div className='col menucard blink-bg'>
                         <div className='row rowhyt'>
                            <div className='col ccontainer'>
                              <img className='img-resized' src={require('../Images/critical.png')} />
                            </div>
                          <div className='col'>
                          <p className='qty'>{this.state.productcriticals}</p>
                        </div>
                      </div>
                      <div>
                        <p className='producttotal'>Total Critical Stocks</p>
                      </div>
                    </div>
                      )
                    }
                  })
                  }                  
                  
                  

                    <div className='col menucard'>
                      <div className='row rowhyt'>
                        <div className='col ccontainer'>
                          <img className='img-resized' src={require('../Images/product.png')} />
                        </div>
                        <div className='col'>   
                       
                            <p className='qty'>{this.state.products}</p>                           
                        </div>
                      </div>
                      <div>
                        <p className='producttotal'>Total Products</p>
                      </div>
                    </div>
                    <div className='col menucard'>
                      <div className='row rowhyt'>
                        <div className='col ccontainer'>
                          <img className='img-resized' src={require('../Images/ordermed.png')} />
                        </div>
                        <div className='col'>
                          <p className='qty'>0</p>
                        </div>
                      </div>
                      <div>
                        <p className='producttotal'>Total Orders</p>
                      </div>
                    </div>
                    <div className='col menucard'>
                      <div className='row rowhyt'>
                        <div className='col ccontainer'>
                          <img className='img-resized' src={require('../Images/customers.png')} />
                        </div>
                        <div className='col'>
                          <p className='qty'>{this.state.customers}</p>
                        </div>
                      </div>
                      <div>
                        <p className='producttotal'>Total Customers</p>
                      </div>
                    </div>
                    <div className='col menucard'>
                      <div className='row rowhyt'>
                        <div className='col ccontainer'>
                          <img className='img-resized' src={require('../Images/User.png')} />
                        </div>
                        <div className='col'>
                          <p className='qty'>{this.state.users}</p>
                        </div>
                      </div>
                      <div>
                        <p className='producttotal'>Total Users</p>
                      </div>
                    </div>
                    <div className='col menucard'>
                      <div className='row rowhyt'>
                        <div className='col ccontainer'>
                          <img className='img-resized' src={require('../Images/customers.png')} />
                        </div>
                        <div className='col'>
                          <p className='qty'>{this.state.users}</p>
                        </div>
                      </div>
                      <div>
                        <p className='producttotal'>Total Suppliers</p>
                      </div>
                    </div>
                    <div className='col menucard'>
                      <div className='row rowhyt'>
                        <div className='col ccontainer'>
                          <img className='img-resized' src={require('../Images/report.png')} />
                        </div>
                        <div className='col'>
                          <p className='qty'>5</p>
                        </div>
                      </div>
                      <div>
                        <p className='producttotal'>Total Reports</p>
                      </div>
                    </div>
                  </div>
                {/* Create Tables */}
                <div className='row'>
                  
                <div className='col mt-5 tabledesign'>
                <dailyStockOutChar/>
                </div>
                <div className='col mt-5 tabledesign'>
                  <div className='col'>
                  <h3>Product Inventory</h3>
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
                    </tbody>
                </table>
                  
                  </div>
          


                </div>
                </div>
                               
              </div>
              {/* <Footer/> */}
              <div className="row dashboardfooter">"
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
