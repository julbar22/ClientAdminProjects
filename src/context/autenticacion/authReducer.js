import {
    LOGIN_USUARIO,
    AUTENTICACION_USUARIO,
    ERROR_LOGIN,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    CERRAR_SESION
} from "../../types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_USUARIO:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                token: action.payload.token
            }
        case AUTENTICACION_USUARIO:
            return {
                ...state,
                usuario: action.payload,
                autenticado: true,
                mensaje: null
            }
        case CERRAR_SESION:
        case REGISTRO_ERROR:
        case ERROR_LOGIN:
            localStorage.removeItem('token');
            return {
                ...state,
                mensaje: action.payload,
                token: null,
                autenticado: null,
                usuario: null
            }
        default:
            return state;
    }
}
export default AuthReducer;
