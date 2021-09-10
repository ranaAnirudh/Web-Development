import './App.css';
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Login from './Login'
import Register from './register'
function App() {
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/register'  component={Register}/>
        </Switch>
      </div>
    </Router>
   );
}


export default App;
