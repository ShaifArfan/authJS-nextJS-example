import React from 'react'

function CredLogin() {
  return (
    <div className='flex gap-2 w-[500px] mx-auto items-start sm:flex-row flex-col xs:w-full' >

      {/* Signin form */}
      <form className='flex flex-col flex-1 bg-slate-900 p-2 w-full'>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' id='email' className='w-full' />
        
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' className='w-full' />
        
        <button type='submit' className='bg-blue-700 mt-3'>Login</button>
      </form>
      
      {/* Signup  */}
      <form className='flex flex-col flex-1 bg-slate-900 p-2 w-full'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' className='w-full' />

        <label htmlFor="email">Email</label>
        <input type="text" name='email' id='email' className='w-full' />
        
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' className='w-full' />
        
        <button type='submit' className='bg-blue-700 mt-3'>Register</button>
      </form>
    </div>
  )
}

export default CredLogin