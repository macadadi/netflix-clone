import { useSelector } from 'react-redux';
import { Route,BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Mainbody from './components/Body/Mainbody';
import Movieslist from './components/movies/Movieslist';



function App() {
  const user = useSelector(state=>state.bground)



  return (
    <div className="app">
      <Router>
 {user.user ? (<Route exact path="/"  component={Mainbody}/>) :(<Route path="/" component={Movieslist} />)}
   
  
   

   </Router>
  
    </div>
  );
}

export default App;
