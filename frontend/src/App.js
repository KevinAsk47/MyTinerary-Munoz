import Home from './pages/Home';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Cities from './pages/Cities';
import Itineraries from './pages/Itineraries';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { connect } from 'react-redux'
import userActions from './redux/actions/usersActions'

function App(props) {
  if (!props.usuario && localStorage.getItem('token')) {
    const datosUsuario = JSON.parse(localStorage.getItem('usuarioLogueado'))
    const usuarioLS = {
      token: localStorage.getItem('token'),
      ...datosUsuario
    }
    props.loginForzadoPorLS(usuarioLS)
    return null
  }
 
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cities" component={Cities} /> 
        <Route path="/itineraries/:id" component={Itineraries} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter >
  );
}

const mapStateToProps = state => {
  return {
    usuario: state.users.users
  }
}

const mapDispatchToProps = {
  loginForzadoPorLS: userActions.loginForzadoPorLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
