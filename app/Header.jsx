import Link from 'next/link'
import React from 'react';
import { LoginBtn } from '@/components/clientside';

const Header = () => {
  return (
    <div className='header'>
        <div>
            <h2>My App</h2>
        </div>
        <article>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
           <LoginBtn/>
        </article>
    </div>
  )
}

export default Header