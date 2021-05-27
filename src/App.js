import { useSelector } from 'react-redux';
import { Route,BrowserRouter as Router, Redirect, } from 'react-router-dom';
import './App.css';
import Mainbody from './components/Body/Mainbody';
import Movieslist from './components/movies/Movieslist';



function App() {
  const user = useSelector(state=>state.bground)



  return (
    <div className="app">
      <Router>
<Route exact path="/"  component={Mainbody}/>
<Route path="/shows" component={Movieslist} />
<Redirect from="*" to="/" />
   
  
   

   </Router>
  
    </div>
  );
}

export default App;
