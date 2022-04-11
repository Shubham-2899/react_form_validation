import React, { useState } from 'react'
import './App.css';

function RegistrationForm() {

  const initialData={ username:"", email:"", password:"", };
  const [userData,setUserData]=useState(initialData);

   const [success,setSuccess]=useState(false);
  const [formErrors,setFormErrors]=useState({});


  const submitHandle=(e)=>{
    e.preventDefault();
   setFormErrors(validate(userData));
   setSuccess(true);
  }

   const validate=(values)=>{
      const errors={}
      const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!values.username){
        errors.username="Username is required !";
      }
      if(!values.email){
        errors.email="Email is required !";
      }else if(!regex.test(values.email)){
        errors.email="This is not a valid email format!"
      }
      if(!values.password){
        errors.password="Password is required !";
      }else if(values.password.length<4){
        errors.password="Password length must be greater than 4"
      }else if(values.password.length>10){
        errors.password="Password length can not be greater than 10"
      }
      return errors;
   }

  const dataHandler=(event)=>{
    const {name,value}=event.target;
    // console.log(name+" "+value);
    setUserData({ ...userData, [name]: value});
  }

  return (
    <div className='form-container'>
      {success && Object.keys(formErrors).length===0 ? (<div className='success-message'>Success ! Thank you for Registration </div>): null}
      <form className='register-form' onSubmit={submitHandle}>
        <h2>Login Form</h2> <hr />
        <label>UserName</label>
        <input
         value={userData.username}
         type='text' 
         name='username' 
         placeholder='Username' 
         className='form-field'
         onChange={dataHandler}
         />
         <span> { formErrors.username} </span> 
        <label>Email</label>
        <input
          value={userData.email}
          type='email'
          name='email'
          placeholder='Email'
          className='form-field'
          onChange={dataHandler}
         />
        <span> {formErrors.email} </span> 
        <label>Password</label>
        <input 
         value={userData.password}
         type='password'
         name='password' 
         placeholder='Password'   
         className='form-field'
         onChange={dataHandler}
        />
        <span> {formErrors.password} </span> 
        <button className='form-field' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm;