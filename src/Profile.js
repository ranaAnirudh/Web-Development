import React ,{useState}from 'react'
import './profile.css'
// import { Link } from 'react-router-dom'


const initialState={
    name:"",
    dob:"",
    religion:"",
    height:"" ,  
}
function Profile({logout}) {
    const [state, setstate] = useState(initialState);
    const [entry, setentry] = useState([]);
    const [profile, setprofile] = useState(null)
    const onProfilechange = e =>{
        e.preventDefault()
        console.log(e.target.files[0])
        setprofile(URL.createObjectURL(e.target.files[0]))
    }
    const onchangeHandler = e =>{
        setstate({...state,[e.target.name]:e.target.value});
        // console.log(state);
    }
    const submitHandler= e=>{
        e.preventDefault()
        setentry([...entry,{state}])
        console.log(entry,{state});
    }
    const logoutHandler=(e)=>{
        logout(true);
    }
    return (
        <div className="profile">
            
            <div className="profile-pic">
                <img src={profile} 
                    className="image"
                />
                <div>
                    <label > Upload Profile pic </label>
                    <input 
                        type="file" id="profile"
                        name="profile"onChange={onProfilechange} 
                    />
                </div>
            </div>
            
            <form onSubmit={submitHandler} className="detail-form">
               
                <div className="form">
                    <input 
                        type="text" autoComplete="off" placeholder="Name" 
                        className="form__input" id="name" 
                        value={state.name} name="name"
                        onChange={onchangeHandler} required
                    />
                </div>
                <div className="form">
                    <input 
                        type="date" autoComplete="off" placeholder="Date-of-Birth" 
                        className="form__input" 
                        value={state.dob} name="dob"
                        onChange={onchangeHandler} 
                    />
                </div>
            <div className="form">
                <input 
                    type="text" autoComplete="off" placeholder="Religion" 
                    className="form__input" id="religion" 
                    value={state.religion} name="religion"
                    onChange={onchangeHandler} required
                />
                
            </div>
            <div className="form">
                <input 
                    type="text" autoComplete="off" placeholder="Height" 
                    className="form__input" id="height" 
                    value={state.height} name="height"
                    onChange={onchangeHandler} required
                />
            </div>
            <div className="form">
                <input 
                    type="submit" autoComplete="off" value="Submit"
                    className="form__input" 
                    
                />
            </div>
            
            {/* <Link to="/"><button>Logout</button></Link> */}
            </form>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Profile
