import './App.css';
import { useState } from 'react';
// import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Login from './Login'
import Register from './register'
import Profile from './Profile'
function App() {
  const [state, setstate] = useState({uname:"",pass:""})
  const login =(details)=>{
    console.log(details);
    if(details.username !="" && details.password !=""){
      console.log("Logged In");
      setstate({uname:details.username, pass: details.password})
    }
  }
  const logout =(x)=>{
    if(x==true){
      console.log("Logout");
      setstate({uname:"",pass:""})
    }
  }
  return(
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path='/' exact component={Login}/>
    //       <Route path='/profile'  component={Profile}/>
    //     </Switch>
    //   </div>
    // </Router>
    <div>
      {(state.pass!="" && state.uname!="")?
        <Profile logout={logout}/>
        :<Login login={login}/>
      }
      
    </div>
   );
}


export default App;
