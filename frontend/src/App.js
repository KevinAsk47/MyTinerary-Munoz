import Home from './pages/Home';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Cities from './pages/Cities';
import Itinerarys from './pages/Itinerarys';


function App() {
  return ( 

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cities" component={Cities} /> 
        <Route path="/Itinerarys/:id" component={Itinerarys} />
        <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter >

  );
}

export default App;
