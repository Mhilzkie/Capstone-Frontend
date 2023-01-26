import '../Components/App.css';
// import Header from  "./Header";

import '../Pages/Company.css';

import React, {useState} from 'react';
import imgban from "../Images/banner.svg";

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

const Company = () => {

  return (
  
    <div className='comborder'>
       
        <div className="row mt-0 pt-0 border order:1px solid">
            <div className='col text-dark  bannerlocation'>
            <img className='sidebanner'
            src={require('../Images/company.png')}/>

            </div>
            <div className="col comcolstyle">
            <h2 class="mb-4">Welcome to L.E.C Company</h2>
                <p>The Company established on year 1984 by the owner Mr. & Mrs. Marciano R. Cuarto, the Company offer Wholesale market.</p>
                <p>below the are the other services offered</p>
                <div className='row cardcontainer pb-3'>
                    <div className='col commenucard'>
                        <div className='row'>
                        <div className='comimgcontainer'>
                            <img className='comimg-resized'
                            src={require('../Images/grinding.png')} />
                            <p className='commenudescription'>Rice Grinding</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row cardcontainer pb-3'>
                    <div className='col commenucard'>
                        <div className='row'>
                        <div className='comimgcontainer'>
                            <img className='comimg-resized'
                            src={require('../Images/cacao.png')} />
                            <p className='commenudescription'>Cacao Chocolate</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row cardcontainer pb-3'>
                    <div className='col commenucard'>
                        <div className='row'>
                        <div className='comimgcontainer'>
                            <img className='comimg-resized'
                            src={require('../Images/coco.png')} />
                            <p className='commenudescription'>Coconut Grater</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row cardcontainer pb-3'>
                    <div className='col commenucard'>
                        <div className='row'>
                        <div className='comimgcontainer'>
                            <img className='comimg-resized'
                            src={require('../Images/grocer.png')} />
                            <p className='commenudescription'>Grocery Store</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row cardcontainer pb-3'>
                    <div className='col commenucard'>
                        <div className='row'>
                        <div className='comimgcontainer'>
                            <img className='comimg-resized'
                            src={require('../Images/food.png')} />
                            <p className='commenudescription'>Food Processing</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row comfooter">
                <div>
                    <i className="fa fa-fw fa-map-marker fa-lg">
                        </i><label className='text-white'>
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
            </div>
        </div>
        
    </div>

   
  );
}

export default Company;