import axios from "axios";
import { useState } from "react";

function Register(){
    
  const[data,setData] = useState({
    username:"",
    email:"",
    psw:""
  });

  const changeName = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const submit = async () =>{
    try{
      const res = await axios.post("http://localhost:8080/reg",data);
      alert(res.data);
    }
    catch(err){
      alert(err.response.data);
    }
  }

  return(
    <div>
      <h1>Welcome to Register Page</h1>
      <input type="text" name="username" onChange={changeName} placeholder="username"/><br/>
      <input type="text" name="email" onChange={changeName} placeholder="email"/><br/>
      <input type="password" name="psw" onChange={changeName} placeholder="psw"/><br/>
      <button onClick={submit}>Register</button>    
    </div>
  );
}
export default Register;