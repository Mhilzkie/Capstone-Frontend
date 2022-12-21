import React, { useState } from "react";
import mylogo from  '../Images/lelogo.png';
// import Route from 'react-router-dom';
import Header from "../Components/Header";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
// import createBrowserHistory from 'createBrowserHistory';
import history from '../Components/Header.js';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";


const baseURL = "https://jsonplaceholder.typicode.com/users/1";

const Logingin = (props) =>{
    const [email, setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [user, setUser] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setUser(response.data);
          console.log(response.data)
        });
      }, []);
    
      if (!user) return null;
    
    
    // const [error,setError] =  useState("Invalid Email or Password!");



    const handleSubmit = (e) =>{
        e.onSubmit(Homepage);
        
    }
    const presslogin = ()=> {
        if (email === user.email && pass === user.username) {
            console.log(email);
            console.log(user.email);
            console.log(pass);
            console.log(user.username);
            console.log("Welcome : " + user.username);
            <div> 
                <Router>
                    <Router>
                        <div>
                            <NavLink exact activeClassName="active" to="/">Home </NavLink>
                        </div>
                        <div>
                            <Route exact path="/" component = {Homepage}/>
                        </div>  
                    </Router>  
                </Router>
            </div>
            
        }else{
            console.log("Wrong Username and Password");
        }
    }
    
    return(
        
        

        <div className="auth-form-container">
            <div>
                <h1>{user.email}</h1>
                <p>{user.username}</p>
                <h1 id="loguser"></h1>
            </div>
            <div>
            <h4><a className="bgcolor mt-2"><img className="" src={mylogo} alt="LE Logo" height={"80"} width={"80"}/>
            <span>    </span> <span className="text-warning lec">LEC</span><span className="text-info wisys">WISys</span></a></h4>   
            </div>
            <h2>Welcome</h2>
            <h5>Log in to continue</h5>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email"> Email</label>
                
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type={"email"} 
                    placeholder = {"youremail@gmail.com"} 
                    id="email" 
                    name="email"/>

                <label htmlfor="password"> Password</label>
                
                <input 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type={"password"} 
                    placeholder = {"*******"} 
                    id="password" 
                    name="password"/>
                {/* <div>
                    {error && <p className="error">{error}</p>}
                </div> */}
                <button onClick={presslogin} type="submit">Login</button>
            </form>
                <button className="link-btn" 
                    onClick={()=> props.onFormSwitch('register')}> 
                    Don't have an Account? Register here.
                    </button>
        </div>

    );
}
export default Logingin;