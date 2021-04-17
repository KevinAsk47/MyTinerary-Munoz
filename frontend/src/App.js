import Home from './pages/Home';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Cities from './pages/Cities';
import Itineraries from './pages/Itineraries';


function App() {
  return ( 

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cities" component={Cities} /> 
        <Route path="/itineraries/:id" component={Itineraries} />
        <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter >

  );
}

export default App;
