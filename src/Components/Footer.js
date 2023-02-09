import './Footer.css';
import React, {useState} from 'react';

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

const Footer = () => {

  return (
  
    <div>
        <div className="row footer">
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
  
  
  );
}

export default Footer;