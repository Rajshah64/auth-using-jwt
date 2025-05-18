import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();





 function Login() {
    const [email, setEmail]=useState("");
    const[password, setPassword]= useState("");
    const [login,setLogin]=useState(false);
    const [role, setRole] = useState("student"); 


    const handleSubmit=(e)=>{
      const configuration = {
        method: "post",
        url: "http://localhost:5000/login",
        data: {
          email,
          password,
          role
        },
      };
      e.preventDefault();
      axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",// "path :"/" means that cookie will be available to all routes."
        });
        window.location.href = `/${role}-dashboard`; // this takes us to the href after successful login
        setLogin(true);
        console.log(result);
      })
      .catch((error) => {setLogin(false);console.log(error);})

    }

    return (
        <>
             <h2>Login</h2>
      <Form onSubmit={(e)=>{handleSubmit(e)}}> 
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>SAP ID</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter SAP ID"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* Role Selection */}
        <Form.Group controlId="formRole">
          <Form.Label>Select Role</Form.Label>
          <Form.Control
            as="select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </Form.Control>
        </Form.Group>


        {/* submit button */}
        <Button variant="primary" type="submit" onClick={(e)=>{handleSubmit(e)}}>
          Submit
        </Button>
        {
          login ?
          <p className='text-success'>You have logged in succesfully</p>:
          <p className='text-danger'>PLease login!!</p>
        }
      </Form>
        </>
    )
}


export default Login