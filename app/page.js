import React from 'react';
import Form from './todosForm';
import { TodoList } from '@/components/serverside';
// import { useState } from 'react';


const page = () => {
  // const [name,setName]=useState("")
 
  return (
    <div className='container'>
      <Form/>
      <section className='todosContainer'>
       <TodoList title={"My work"} description={"work is  worship"} id={1} completed={false}/>
      </section>
    </div>
  )
}

export default page