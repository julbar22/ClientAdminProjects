import ProyectoContext from "./proyectoContext";
import ProyectoReducer from "./proyectoReducer";
import {
    CREAR_PROYECTO,
    MOSTRAR_FORMULARIO,
    OBTENER_PROYECTOS,
    PROYECTO_ACTUAL,
    PROYECTO_ERROR,
    VALIDAR_FORMULARIO,
    ELIMINAR_PROYECTO,
    LIMPIAR_PROYECTO
} from "../../types";
import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

const ProyectoState = (props) => {
    const initialState = {
        listaProyectos: [],
        proyecto: null,
        formulario: false,
        mensaje: null,
        errorformulario: false

    };

    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    const getProyectos = async () => {
        try {
            const response = await clienteAxios.get('/api/proyectos');
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }

    }

    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    const mostrarFormulario = () => {
        dispatch({
            type: MOSTRAR_FORMULARIO
        })
    }

    const agregarProyecto = async proyecto => {

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            dispatch({
                type: CREAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    const limpiarProyecto = () => {
        dispatch({
            type: LIMPIAR_PROYECTO
        })
    }


    return (
        <ProyectoContext.Provider
            value={{
                listaProyectos: state.listaProyectos,
                proyecto: state.proyecto,
                formulario: state.formulario,
                mensaje: state.mensaje,
                errorformulario: state.errorformulario,
                getProyectos,
                proyectoActual,
                mostrarFormulario,
                agregarProyecto,
                mostrarError,
                eliminarProyecto,
                limpiarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )

}

export default ProyectoState;