import { useState } from "react";
import axios from 'axios';

export default function Login() {

  const[data , setData] = useState({
    email:"",
    password:""

  })

  const handelChange = (e)=>{
    const { name , value} = e.target
    setData({
      ...data , [name]:value
    })
  }

  const login = () =>{
    const {email , password } = data
    axios.post("http://localhost:5000/login",data) 
    .then((res)=> console.log(res))
  }
    
    return (
      <>
      <div className="card" style={{marginTop:'30px'}} >
      <div className="card-body" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <h5 className="card-title">Sign In!</h5>
       
        <div className="d-grid gap-2">
      <button className="btn btn-danger" type="button" style={{marginTop:'10px',background:'#c23321'}}>Google</button>
    </div>
        
    <div className="mb-3">
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" style={{marginTop:'10px'}} name="email" value={data.email} onChange={handelChange}/>
      <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" style={{marginTop:'10px'}} name="password" value={data.password} onChange={handelChange}/>
    </div>

    <div className="d-grid gap-2">
      <button className="btn btn-primary" type="button" style={{marginTop:'10px',background:'#32c5d2'}} onClick={login}>LOG In</button>
    </div>
    
        <div className="anchor" style={{marginTop:"10px"}}>
        <a href="#" className="card-link">Forgot Your Password?</a>
        </div>

        <div className="button" style={{marginTop:"10px"}}>
        <button type="button" className="btn btn-outline-secondary">SIGN UP</button>
        </div>
      </div>
    </div>
    </>
    )}  