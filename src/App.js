import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyecto/Proyectos';
import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alerta/alertaState';
import ProyectoState from './context/proyectos/proyectoState'
import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}
function App() {
  return (
    <ProyectoState>
      <AlertaState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </AuthState>
      </AlertaState>
    </ProyectoState>
  );
}

export default App;
