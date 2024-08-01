"use client"
import Link from "next/link";
import { useState, createContext, useContext } from "react";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
};

export const LoginBtn=()=>{
    const {user}=useContext(Context)
       const handleclick=()=>{
        alert("hi")
       }
    return user.id ? <Link href={"/logout"}>Logout</Link>:
        <button onClick={handleclick} className="btn">Login</button>
    
}

export const  TodoButton=({id,completed})=>{

    const handleDelete=(id)=>{
        alert(`id is ${id}`)
    }
  return(
    <>
    <input type="checkbox" name="" id="" checked={completed} />
    <button className="btn" onClick={()=>handleDelete(id)} >Delete</button>
    </>
  )
}



