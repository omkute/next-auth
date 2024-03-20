"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';


function Page() {
  const router = useRouter();
  const [user, setUser]= React.useState({
    email:"",
    password:"",
  })

  const [disableButton, setDisableButton]= React.useState(false);
  const [loading, setLoading] = React.useState(false);
  async function onLogin() {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/profile");


    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0){
      setDisableButton(false);
    }else{
      setDisableButton(true);
    }
  },[user.email.length, user.password.length])
  return (
    <div className=' flex flex-col items-center min-h-screen justify-center'>
      <h1>Login</h1>
      <hr className=' text-white' />
      {/* email */}
      <label htmlFor="email">email</label>
      <input
      id='email'
      type='text'
      value={user.email}
      onChange={(e)=>setUser({...user, email: e.target.value})}
      placeholder='email'
      />
      {/* password */}
      <label htmlFor="password">password</label>
      <input
      id='password'
      type='password'
      value={user.password}
      onChange={(e)=>setUser({...user, password: e.target.value})}
      placeholder='password'
      />
      {/* button */}
      <button
       className=' px-5 py-1 my-4 bg-grey-300 text-white'
        onClick={onLogin}
         >Login Here</button>
         <Link href="/signup" >Not registered ? Signup-here</Link>
    </div>
  )
}

export default Page