import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='login'>
      <section>
        <form>
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <button type="submit" href={"/register"}>Sign Up</button>
         
           <p>OR</p>
           <Link href={""}> Login</Link>
        </form>
      </section>
    </div>
  )
}

export default RegisterPage