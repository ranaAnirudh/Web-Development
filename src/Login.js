import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './form.css'
    const Login =({login}) => {
        const [uname, setName] = useState("");
        const [pass, setPass] = useState("");
        const [allEntry, setEntry] = useState([])
        
        const submitHandler=(e)=>{
            // to prevent refresh;
            e.preventDefault();
            const newEntry = {uname:uname,pass:pass};
            setEntry([...allEntry,newEntry]);
            console.log(allEntry); 
            login({newEntry})  ;
        }
        return (
            <div className='body '>
               <h2 className='header'>Login</h2>
                <form action="" onSubmit={submitHandler}className='login'>
                    <div>
                   
                    <input type='text' placeholder='Username' id="name" name="uname" value={uname}
                        onChange={(e)=> setName(e.target.value)} required
                    />
                    </div>
                    <div>
                        <input type='password' placeholder='Password' id="pass" name="pass" value={pass}
                            onChange={(e)=> setPass(e.target.value)} required
                        />
                    </div>
                    <input type="submit" value="Login" className="submit-btn"/>
				{/* <Link to="/Profile"><input type="submit" value="Login"/></Link> */}
                    {/* <p>
                        If not registered  <Link to="/register" >Register here</Link>
                    </p> */}
                </form>
            </div>
        )
    }

export default Login
