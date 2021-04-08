import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {
    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;


    // Función para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); 
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => seleccionarProyecto(proyecto._id) }
            >{proyecto.nombre} </button>
        </li>
     );
}
 
export default Proyecto;