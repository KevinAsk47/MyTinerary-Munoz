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
                var data = await respuesta.json()
                    dispatch({ type: 'CARGAR_USUARIO', payload: data })
            } catch (error) {
                dispatch({ type: 'ERROR', payload: true })
            }
        }
    },
    loguearUsuario: (usuarioLogueado) => {
        return async (dispatch, getState) => {
            var respuesta = await axios.post('http://localhost:4000/api/userLogIn', usuarioLogueado)
            dispatch({
                type: 'CARGAR_USUARIO', 
                payload: respuesta.data.success ? respuesta.data.respuesta : null})
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
            dispatch({type: 'CARGAR_USUARIO', payload: usuarioLS})
        }
    }
}

export default articulosActions