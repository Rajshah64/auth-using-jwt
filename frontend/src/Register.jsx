// import React from 'react'
// import { Form, Button } from "react-bootstrap";
// import { useState } from 'react';
// import axios from "axios";

//  function Register() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [register, setRegister] = useState(false);
//     const handleSubmit = (e) => {
//         // prevent the form from refreshing the whole page
//         e.preventDefault();
//         // make a popup alert showing the "submitted" text
//         // alert("Submited");
//       }
//     return (
//         <>
//              <h2>Register</h2>
//       <Form onSubmit={(e)=>handleSubmit(e)}>
//         {/* email */}
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>SAP ID</Form.Label>
//           <Form.Control
//             type="email"
//             name='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter SAP ID" />
//         </Form.Group>

//         {/* password */}
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//           type="password"
//           name='password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password" />
//         </Form.Group>

//         {/* submit button */}
//         <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
//           Submit
//         </Button>
//       </Form>
//         </>
//     )
// }

// export default Register

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [role, setRole] = useState("student"); // Default role

  const handleSubmit = (e) => {
    const configuration = {
      method: "post",
      url: "http://localhost:5000/register",
      data: {
        email,
        password,
        role,
      },
    };
    e.preventDefault();
    // console.log({ email, password, role });
    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
        console.log(email, password, role);
      })
      .catch((error) => {
        setRegister(false);
        if (error.status === 500) {
          console.log("Email already registered");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        {/* Email */}
        <Form.Group controlId="formBasicEmail2">
          <Form.Label>SAP ID</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter SAP ID"
          />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="formBasicPassword2">
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
        <Form.Group controlId="formRole2">
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

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </Form>
    </>
  );
};

export default RegisterForm;
