import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareasContext from '../../context/tareas/tareaContext';


const Barra = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const proyectoContext = useContext(ProyectoContext);
    const tareasContext = useContext(TareasContext);

    const { usuario, getUsuarioAutenticado, cerrarSesion } = authContext;
    const { limpiarProyecto } = proyectoContext;
    const { limpiarTareas } = tareasContext;

    useEffect(() => {
        getUsuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    const cerrarSesionUsuario =()=>{
        limpiarProyecto();
        limpiarTareas();
        cerrarSesion();
    }

    return (
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre} </span> </p> : null}


            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => cerrarSesionUsuario()}
                >Cerrar Sesión</button>
            </nav>
        </header>
    );
}

export default Barra;