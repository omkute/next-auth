"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { set } from 'mongoose';
import toast from 'react-hot-toast';


function page() {
  const router = useRouter();
  
  const [user, setUser]= React.useState({
    username:"",
    email:"",
    password:"",
  })
  const [buttonDisable, setButtonDisable] = React.useState(false);
  const [loading,setLoading]= React.useState(false);

  useEffect(()=>{
    if(user.email.length>0 
      && user.password.length>0
      && user.username.length>0)
      {
        setButtonDisable(false)
      }else{
        setButtonDisable(true)
      }
  })
  const onSignup = async ()=>{
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
      

      
    } catch (error:any) {
      console.log("Signup failed", error.message);
      toast.error(error.message)

    }finally{
      setLoading(false);
    }
  }
  return (
    <div className=' flex flex-col items-center min-h-screen justify-center'>
      <h1>{ loading ? "Processing": "Signup" }</h1>
      <hr className=' text-white' />
      {/* username */}
      <label htmlFor="username">username</label>
      <input
      id='username'
      type='text'
      value={user.username}
      onChange={(e)=>setUser({...user, username: e.target.value})}
      placeholder='username'
      className='text-black'
      />
      {/* email */}
      <label htmlFor="email">email</label>
      <input
      id='email'
      type='text'
      value={user.email}
      onChange={(e)=>setUser({...user, email: e.target.value})}
      placeholder='email'
      className='text-black'
      />
      {/* password */}
      <label htmlFor="password">password</label>
      <input
      id='password'
      type='password'
      value={user.password}
      onChange={(e)=>setUser({...user, password: e.target.value})}
      placeholder='password'
      className='text-black'
      />
      {/* button */}
      <button
       className=' px-5 py-1 my-4 bg-white text-black'
        onClick={onSignup}
         >{buttonDisable ? "No signup" : "Signup"}</button>
         <Link href="/login" >Already registered ?</Link>
    </div>
  )
}

export default page