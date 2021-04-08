import React from 'react';
import NuevoProyecto from '../proyecto/NuevoProyecto';
import ListaProyectos from "../proyecto/ListadoProyectos";

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>                
                <ListaProyectos/>
            </div>
        </aside>
    );
}

export default Sidebar;