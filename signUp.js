import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'

export default function Sign() {

  //using useState hook to manage state of data

  const[data , setData] = useState({
    email:"",
    fullname:"",
    password:"",
    highestQualification: "",
    city:"",
    countryCode:"",
    phoneNumber:""

  })

  const handelChange = (e)=>{
    const { name , value} = e.target
    setData({
      ...data , [name]:value
    })
  }

  const register = () =>{
    const {email , fullname, password , phoneNumber} = data
    if(email , fullname , password , phoneNumber){        // if the values are given for specified fields then only the data will be stored
    axios.post("http://localhost:5000/",data) 
    .then((res)=> console.log(res))
    }
    else {
      alert("Invalid Input")
    }
    
  }
return (
  <>
  {console.log(data)}
  <div className="card" style={{marginTop:'30px'}} >
  <div className="card-body" style={{paddingLeft:'50px',paddingRight:'50px'}}>
    <h5 className="card-title">Create An Account</h5>
   
    <Link to="/google" className="link" style={{textDecoration:"none"}}>
    <div className="d-grid gap-2">
  <button className="btn btn-danger" type="button" style={{marginTop:'10px',background:'#c23321'}}>Google</button>
</div>
</Link> 
    
<div className="mb-3">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" style={{marginTop:'10px'}} name="email" value={data.email} onChange={handelChange}/>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Fullname" style={{marginTop:'10px'}} name="fullname" value={data.fullname} onChange={handelChange}/>
  <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" style={{marginTop:'10px'}} name="password" value={data.password} onChange={handelChange}/>
</div>

<select className="form-select" aria-label="Default select example" name="highestQualification" value={data.highestQualification} onChange={handelChange}>
  <option selected>----Highest Education Qualification----</option>
  <option value="1">6th-9th class</option>
  <option value="2">10th class</option>
  <option value="3">11th class</option>
  <option value="4">12th class</option>
  <option value="5">Graduate Degree/Diploma</option>
  <option value="6">Postgraduate Degree</option>
  <option value="7">Working Professional</option>
</select>

<select className="form-select" aria-label="Default select example" style={{marginTop:'10px'}} name="city" value={data.city} onChange={handelChange}>
  <option selected>----Select Your City----</option>
  <option value="1">Delhi</option>
  <option value="2">Noida</option>
  <option value="3">Gurugram</option>
  <option value="4">Ghaziabad</option>
  <option value="5">Meerut</option>
  <option value="6">Mumbai</option>
  <option value="7">Banglore</option>
</select>

<select className="form-select" aria-label="Default select example" style={{marginTop:'10px'}} name="countryCode" value={data.countryCode} onChange={handelChange}>
  <option selected>India (+91)</option>
  <option value="1">Afghanistan (+93)</option>
  <option value="2">Pakistan (+92)</option>
  <option value="3">Australia (+61)</option>
  <option value="4">Denmark (+45)</option>
</select>

<div className="mb-3">
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" style={{marginTop:'10px'}} name="phoneNumber" value={data.phoneNumber} onChange={handelChange}/>
</div>

<div className="d-grid gap-2">
  <button className="btn btn-primary" type="button" style={{marginTop:'10px',background:'#32c5d2'}} onClick={register}>CREATE NEW ACCOUNT</button>
</div>

    <div className="anchor" style={{marginTop:"10px"}}>
    <Link to="/login" className="card-link">Back To Login</Link>
    </div>
  </div>
</div>
</>
)}  