import React, {useState} from "react";
import {Jumbotron} from 'react-bootstrap';
import { Login } from "../../components/login/login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import './Entry.style.css'

export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [frmLoad, setfrmLoad] = useState('login');

  const handleOnChange = e =>{
    const {name, value} =e.target;
    switch(name){
      case 'email':
        setEmail(value)
        break
    
      case 'password':
        setPassword(value)
        break
      
      default:
        break
    }
    // console.log(name,value)
  }

  const handleOnSubmit = e =>{
    e.preventDefault();

    if(!email || !password){
      return alert("Email and Password is required")
    } else{
      console.log('submitted')
    }
  }

  const handleOnResetSubmit = e =>{
    e.preventDefault();

    if(!email){
      return alert("Email  is required")
    } else{
      console.log('Reset Email')
    }
  }

  const formSwitcher = (frmType) =>{
    setfrmLoad(frmType);
  }

  return <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === 'login' && <Login 
        handleOnChange ={handleOnChange}
        handleOnSubmit ={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
        />}
        {frmLoad === 'reset' && <ResetPassword 
          handleOnChange ={handleOnChange}
          handleOnResetSubmit ={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          email={email}
        />}
      </Jumbotron>
      </div>;
};
