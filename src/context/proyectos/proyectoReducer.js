import {
    OBTENER_PROYECTOS,
    PROYECTO_ACTUAL,
    MOSTRAR_FORMULARIO
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
        default:
            return state;
    }
}
export default ProyectoReducer;
