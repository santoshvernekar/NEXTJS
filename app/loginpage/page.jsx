import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='login'>
      <section>
        <form>
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
           <Link href={"/register"}>New User</Link>
           <p>OR</p>
           <button type="submit">Login</button>
        </form>
      </section>
    </div>
  )
}

export default LoginPage