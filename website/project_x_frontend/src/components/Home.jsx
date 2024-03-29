import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Add your authentication logic here
    console.log(`Login clicked with email: ${email} and password: ${password}`);
    // For a real-world application, you would send a request to your server for authentication.
  };

  const handleSignup = () => {
    // Use navigate to go to the signup page
    navigate('/signup');
  };

  return (
    <>
    
    <div class="max-w-md relative flex flex-col px-6 py-6 my-16  lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm rounded-xl text-black bg-white" >
    <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span class="text-[#7747ff]">App</span></div>
    <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
    <form class="flex flex-col gap-3">
        <div class="block relative"> 
        <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
        <input type="text" id="email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
        
        </div>
        <div class="block relative"> 
        <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
        <input type="text" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
        
        </div>
        <div>
        <a class="text-sm text-[#7747ff]" href="#">Forgot your password?
        </a></div>
        <button type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

    </form>
    <div class="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a class="text-sm text-[#7747ff]" href="#">Sign up for free!</a></div>
    </div>
  
    </>
    
  )
}

export default LoginForm

