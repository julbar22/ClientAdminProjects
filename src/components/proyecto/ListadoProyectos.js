import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alerta/alertaContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoProyectos = () => {

    // Extrar proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, listaProyectos, getProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        // si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

       getProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si proyectos tiene contenido
    if(listaProyectos.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;

    return ( 

        <ul className="listado-proyectos">
            
        
            { alerta   ? ( <div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>  ) : null  }


            <TransitionGroup>
                {listaProyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;