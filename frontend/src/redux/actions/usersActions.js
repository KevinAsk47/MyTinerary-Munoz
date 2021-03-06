import axios from 'axios'

const articulosActions = {
    nuevoUsuario: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await axios.post('https://mytinerary-m.herokuapp.com/api/userSignUp', nuevoUsuario)
                if (!respuesta.data.success) {
                    return respuesta.data.errores || respuesta.data.error
                }
                dispatch({
                    type: 'CARGAR_USUARIO',
                    payload: respuesta.data.success ? respuesta.data.respuesta : null})
            } catch (error) {
                dispatch({ type: 'ERROR', payload: true })
            }
        }
    },
    loguearUsuario: (usuarioLogueado) => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await axios.post('https://mytinerary-m.herokuapp.com/api/userLogIn', usuarioLogueado)
                if (!respuesta.data.success) {
                    return respuesta.data.error
                }
                dispatch({
                    type: 'CARGAR_USUARIO', 
                    payload: respuesta.data.success ? respuesta.data.respuesta : null})
            } catch (error) {
                dispatch({ type: 'ERROR', payload: true })
            }
        }
    },
    desloguear: () => {
        localStorage.clear()
        return async (dispatch, getState) => {
            dispatch({type: 'DESLOGUEAR_USUARIO'})
        }
    },
    loginForzadoPorLS: (usuarioLS) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get('https://mytinerary-m.herokuapp.com/api/user/loginLS', {
                headers: {
                    'Authorization': 'Bearer '+usuarioLS.token
                }
            })
                dispatch({type: 'CARGAR_USUARIO', payload: {
                    ...respuesta.data.respuesta,
                    token: usuarioLS.token
                }})
            } catch(err) {
                if (err.response.status === 401) {
                    alert("Con que me intentas hackear perra")
                }
            } 
        }
    },
    exitoso: () => {
        return (dispatch, getState) => {
            dispatch({type: 'EXITOSO', payload: true})
        }
    },
    desmontarTostada: () => {
        return (dispatch, getState) => {
            dispatch({type: 'EXITOSO', payload: false})
        }
    }
}

export default articulosActions