import axios from 'axios'

const articulosActions = {
    fetchPaises: () => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await fetch("https://restcountries.eu/rest/v2/all")
                var data = await respuesta.json()
                    dispatch({ type: 'CARGAR_PAISES', payload: data })
            } catch (error) {
                dispatch({ type: 'ERROR', payload: true })
            }
        }
    },
    nuevoUsuario: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await axios.post('http://localhost:4000/api/userSignUp', nuevoUsuario)
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
                var respuesta = await axios.post('http://localhost:4000/api/userLogIn', usuarioLogueado)
                if (!respuesta.data.success) {
                    return respuesta.data.errores.details
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
                const respuesta = await axios.get('http://localhost:4000/api/user/loginLS', {
                headers: {
                    'Authorization': 'Bearer '+usuarioLS.token
                }
            })
            console.log(respuesta)
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
    }
}

export default articulosActions