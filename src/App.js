import {Route, Link} from 'react-router-dom'
import Home from './Home';
import Builds from './Builds';
import Community from './Community';


function App() {
  return (
    <div>
     

     <Route exact path='/' component={Home}/>
     <Route exact path='/Builds' component={Builds}/>
     <Route exact path='/Community' component={Community}/>
    </div>
  );
}

export default App;
