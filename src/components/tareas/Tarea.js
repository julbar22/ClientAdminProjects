import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({ tarea }) => {

    // obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { actualizarTarea, guardarTareaActual, eliminarTarea } = tareasContext;

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const [proyectoActual] = proyecto;

    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true
        }
        actualizarTarea(tarea);
    }

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    const tareaEliminar = tarea => {
        console.log(tarea);
        eliminarTarea(tarea._id, proyectoActual._id);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre} </p>

            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;