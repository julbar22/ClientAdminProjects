import React, { useContext, Fragment } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import Tarea from './Tarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    if (!proyecto) return <h2>Selecciona un proyecto</h2>;
    const [proyectoActual] = proyecto;

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition
                                key={tarea._id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea
                                    tarea={tarea}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
        </Fragment>

    );
}

export default ListadoTareas;