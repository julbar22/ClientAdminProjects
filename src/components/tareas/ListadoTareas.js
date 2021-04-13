import React, { useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    if(!proyecto) return <h2>Selecciona un proyecto</h2>;
    const [proyectoActual] =  proyecto;

    return (
        <h2>Proyecto: {proyectoActual.nombre} </h2>

    )
}

export default ListadoTareas;