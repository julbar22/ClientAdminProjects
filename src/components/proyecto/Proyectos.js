import React, {useEffect, useContext} from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <h2>Selecciona un proyecto</h2>
            </div>
        </div>
    );
};

export default Proyectos;