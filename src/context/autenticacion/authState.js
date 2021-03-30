import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
    LOGIN_USUARIO,
    AUTENTICACION_USUARIO,
    ERROR_LOGIN
} from "../../types";
import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

const AuthState = (props) => {
    const initialState = {
        token: null,
        autenticado: false,
        usuario: null,
        mensaje: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login = async (usuario) => {
        try {
            const response = await clienteAxios.post('/api/auth', usuario);
            dispatch({
                type: LOGIN_USUARIO,
                payload: response.data
            });
            getUsuarioAutenticado(usuario);

        } catch (error) {
            console.log(error);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: ERROR_LOGIN,
                payload: alerta
            });
        }
    }

    const getUsuarioAutenticado = async (usuario) => {
        const token = localStorage.getItem("token");
        if (token) {
            tokenAuth(token);
        }
        try {
            const response = await clienteAxios.get('/api/auth');
            dispatch({
                type: AUTENTICACION_USUARIO,
                payload: response.data.usuario
            });

        } catch (error) {
            console.log(error);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: ERROR_LOGIN,
                payload: alerta
            });
        }


    }

    return (
        <AuthContext.Provider
            value={{
                mensaje: state.mensaje,
                autenticado: state.autenticado,
                login

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;