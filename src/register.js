import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './form.css'
const Register=()=> {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCpassword] = useState("");  
    const submitHandler=(e)=>{
        
        e.preventDefault();
        if(name&&password&&cPassword && username)
        {
            const details={name:name ,username:username,password:password,cPassword:cPassword}
            // console.log(details);
        }
        else alert("Fields Empty");
        setName("");setPassword("");setUsername("");setCpassword("");
        
    }
    
        return (
            <div className='body '>
                <h2 className='header'>Create Account</h2> 
                <form onSubmit={submitHandler} className='login'>
                    
                    <div>
                        
                        <input type='text' placeholder='Name' id="name" value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        </div>
                    <div>
                            <input type='text' placeholder='username' id="username"
                            onChange={(e)=>setUsername(e.target.value)} value={username}
                            />
                    </div>
                    
                    <div>
                            <input type='password' placeholder='password' id="password"
                            onChange={(e)=>setPassword(e.target.value)} value={password}
                            />
                    </div>
                    <div>
                            <input type='password' id="cpassword"
                            value={cPassword} placeholder='confirm password'
                            onChange={(e)=>setCpassword(e.target.value)}
                            />
                    </div>
                    
                    <div><input type='submit'/></div>
                    <p>already have an account? <a href='/'>Sign in</a></p>
                </form>
                <div />
            </div>
        )
    
}

export default Register
