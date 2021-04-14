import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyecto/Proyectos';
import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alerta/alertaState';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada';

const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}
function App() {
  return (
    <TareaState>
      <ProyectoState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </ProyectoState>
    </TareaState>
  );
}

export default App;
