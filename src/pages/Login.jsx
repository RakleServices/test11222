// import { useState } from 'react';
// import { useRef } from 'react';
// import {LoginUser} from '../api'

// const Login = () => {
//     const userIdRef = useRef(null);
//     const pwdRef = useRef(null);
//     const [userId,setuserId]=useState();
//     const [pwd,setpwd]=useState();

//     const login = () => {
//         LoginUser(userIdRef.current.value, pwdRef.current.value)
//             .then(res =>{
//                 if (res && res.token) {
//                     console.log("Logging In");
//                     sessionStorage.setItem("loggedIn", true);
//                     sessionStorage.setItem("token", res.token);
//                     window.location.reload(false);
//                 }
//             })

//     }
//     return <div className="position-relative">
//         <div className="login-container">
//             <div className="title"> Login</div>
//             <input ref={userIdRef} type="text" placeholder="username"></input>
//             <input ref={pwdRef} type="password" placeholder="password"></input>
//             <button type="button" onClick={login}>Login</button>
//         </div>
//     </div>;
// };

// export default Login;


import React from 'react'
import { useRef } from 'react';
// import Footer from './footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  LoginUser } from '../api';
const Login = () => {
    const initialValues = {email:"", password:""};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErros] = useState({});
    const [fsubmit, fissubmit] = useState(false);
    const formRef = useRef();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setformValues({...formValues, [name]:value});
        // console.log(formValues);
    }

    const validate = (value) => {
        const error ={};
        if(!value.email){
            error.email = "email is required";
        }
        if(!value.password){
            error.password = "Password is required";
        }
        return error;
    }
    const LoginFunc = (e) =>{
        e.preventDefault();
        setformErros(validate(formValues));
        fissubmit(true);
        
    }
    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && fsubmit){
            console.log(formValues);
            login(formValues.email, formValues.password);
        }
    }, [formErrors])
    const userIdRef = useRef(null);
    const pwdRef = useRef(null);

    const login = (email, password) => {
        console.log(email, password);
        LoginUser(email, password)
            .then(res => {
                if (res) {
                    console.log(res);
                    debugger;
                    if (res.msg === "valid") {
                        console.log(res.result);
                        sessionStorage.setItem("loggedIn", true);
                        console.log(res.token)
                        window.location.reload(false);
                    }
                    else {
                        alert("Invalid Credentials");
                    }
                }
            })
        }


    return (
        <div className="vh-100  ">
            <div className="authincation h-100">
                <div className="container h-100">
                    <div className="row justify-content-center mt-100px h-100 align-items-center">
                        <div className="col-md-6">
                            <div className="authincation-content">
                                <div className="row no-gutters">
                                    <div className="col-xl-12">
                                        <div className="auth-form">
                                            <div className="text-center mb-3">
                                                <a href="index.html"><img src="nkasa.png" alt="" /></a>
                                            </div>
                                            <h4 className="text-center mb-4">Sign in your account</h4>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>email</strong></label>
                                                <input type="text" name='email' value={formValues.email} onChange={handleChange} className="form-control" placeholder='Enter email Number' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.email}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Password</strong></label>
                                                <input type="password"  name='password' value={formValues.password} onChange={handleChange} className="form-control" placeholder='Enter password ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.password}</p>
                                            <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                                {/* <div className="form-group">
                                                    <div className="form-check custom-checkbox ms-1">
                                                        <input type="checkbox" className="form-check-input"
                                                            id="basic_checkbox_1" />
                                                        <label className="form-check-label" for="basic_checkbox_1">Remember my
                                                            preference</label>
                                                    </div>
                                                </div> */}
                                                <div className="form-group">
                                                    <a href="page-forgot-password.html">Forgot Password?</a>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" onClick={LoginFunc} className="btn btn-primary btn-block">Sign Me In</button>
                                            </div>
                                            <Link to='/register'>Don't Have account, Register here</Link>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;





// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Login.css';

// async function loginUser(credentials) {
//  return fetch('http://localhost:3000/api/adminuser/auth', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

// export default function Login({ setToken }) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }

//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserName(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)} />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };