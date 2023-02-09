import React, { Component } from "react";
// import './Products.css';
import axios from 'axios';
// import { Login } from"./Login";
import  Register from "./Register";
import imgban from "../Images/banner.svg";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
export default class Productss extends Component{

    constructor(props) {
        super(props);
        this.state = {
          products: [],
          postsPerPage: 10,
          currentPage: 1
        }
      }
    
    componentDidMount = () => {
        this.getPosts()
      }
      getPosts = async () => {
        const url = (`http://localhost:4000/products`);
        const obj = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
   
        await fetch(`${url}`, obj)
        .then((response) => response.json())
        .then((responseJson) => {
          console.warn(responseJson);
          this.setState({ products: responseJson })
        })
        .catch((error) => {
          console.warn(error);
        })
      }


      showData = () => {

        const { postsPerPage, currentPage, data } = this.state;
        const indexOfLastPage = currentPage * postsPerPage;
        const indexOfFirstPage = indexOfLastPage - postsPerPage;
        const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage)
  
       try{
       return currentPosts.map((product, index) => {
         return(
           <tbody>
           <tr>
           <td>{postsPerPage * (currentPage-1)+index+1}</td>
           <td>{product.product_Name}</td>
            <td>{product.product_Description}</td>
            <td>{product.product_Unit}</td>
            <td>{product.product_Price}</td>
            <td>{product.product_Quantity}</td>
            <td><button  type="button" className="btn btn-success">Edit</button><button  type="button" className="btn btn-danger">Del</button></td>
           </tr>
           </tbody>
         )
       })
     }catch(e){
       alert(e.message)
     }
     }


     showPagination = () => {
        const { postsPerPage, data } = this.state;
        const pageNumbers = [];
        const totalPosts = data.length;
   
        for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
          pageNumbers.push(i)
        }
   
        const pagination = (pageNumbers) => {
          this.setState({currentPage: pageNumbers})
        }
   
        return(
            <nav>
            <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className={this.state.currentPage === number ? 'page-item active' : 'page-item' }>
              <button onClick={()=> pagination(number)} className="page-link"> {number} </button>
              </li>
            ))}
            </ul>
            </nav>
          )
     
     
        }
    render() {
        return (
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
       );
    }}