// 'use server';
'use client';

import React from 'react'
import { signIn } from 'next-auth/react';

function CredLogin({
  signup
}: {signup: ({ name, email, password }: {
    name: string;
    email: string;
    password: string;
}) => Promise<void>}) {


  return (
    <div className='flex gap-2 w-[500px] mx-auto items-start sm:flex-row flex-col xs:w-full' >

      {/* Signin form */}
      <form onSubmit={async(e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        await signIn('credentials', {
          email: formdata.get('email') as string,
          password: formdata.get('password') as string,
          redirectTo: '/my-account'
        })
      }} className='flex flex-col flex-1 bg-slate-900 p-2 w-full'>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' id='email' className='w-full text-black' />
        
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' className='w-full text-black' />
        
        <button type='submit' className='bg-blue-700 mt-3'>Login</button>
      </form>
      
      {/* Signup  */}
      <form onSubmit={async(e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget); 
        const name = formdata.get('name') as string;
        const email = formdata.get('email') as string;
        const password = formdata.get('password') as string;

        await signup({ name, email, password })
      }} className='flex flex-col flex-1 bg-slate-900 p-2 w-full'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' className='w-full text-black' />

        <label htmlFor="email">Email</label>
        <input type="text" name='email' id='email' className='w-full text-black' />
        
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' className='w-full text-black' />
        
        <button type='submit' className='bg-blue-700 mt-3'>Register</button>
      </form>
    </div>
  )
}

export default CredLogin