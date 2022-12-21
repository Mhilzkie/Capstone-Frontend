import React, { useState } from "react";
import mylogo from  '../Images/lelogo.png';

export const Register =(props) =>{
    const [email, setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <div>
            <h4><a className="bgcolor mt-2"><img className="" src={mylogo} alt="LE Logo" height={"80"} width={"80"}/>
            <span>    </span> <span className="text-warning lec">LEC</span><span className="text-info wisys">WISys</span></a></h4>   
            </div>
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlfor="name"> Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type={"name"} placeholder = {"yourename"} id="name" name="name"/>
            <label htmlfor="email"> Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder = {"youremail@gmail.com"} id="email" name="email"/>
            <label htmlfor="password"> Password</label>
            <input value={pass}  onChange={(e) => setPass(e.target.value)} type={"password"} placeholder = {"*******"} id="password" name="password"/>
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
export default Register;