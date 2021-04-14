import {
    OBTENER_PROYECTOS,
    PROYECTO_ACTUAL,
    MOSTRAR_FORMULARIO,
    CREAR_PROYECTO,
    PROYECTO_ERROR,
    VALIDAR_FORMULARIO,
    ELIMINAR_PROYECTO,
    LIMPIAR_PROYECTO
} from "../../types";

const ProyectoReducer = (state, action) => {
    switch (action.type) {
        case OBTENER_PROYECTOS:
            return {
                ...state,
                listaProyectos: action.payload
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.listaProyectos.filter(proyecto => proyecto._id === action.payload)
            }
        case MOSTRAR_FORMULARIO:
            return {
                ...state,
                formulario: true
            }
        case CREAR_PROYECTO:
            return {
                ...state,
                listaProyectos: [...state.listaProyectos, action.payload],
                formulario: false,
                errorformulario: false
            }
        case PROYECTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true
            }
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                listaProyectos: state.listaProyectos.filter(proyecto => proyecto._id !== action.payload),
                proyecto: null
            }
        case LIMPIAR_PROYECTO:
            return {
                ...state,
                listaProyectos: [],
                proyecto: null,
                formulario: false,
                mensaje: null,
                errorformulario: false
            }
        default:
            return state;
    }
}
export default ProyectoReducer;
