const initialState = {
    users: null,
    tostada: null,
    exito: false,
}

const ciudadesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
            break
        case 'CARGAR_USUARIO':
            localStorage.setItem('usuarioLogueado', JSON.stringify({usuario: action.payload.usuario,
            imagen: action.payload.imagen}))
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                users: action.payload
            }
            break
        case 'DESLOGUEAR_USUARIO':
            return {
                ...state,
                users: null
            }
            break
        case 'EXITOSO':
            return {
                exito: action.payload
            }
            break
        default:
            return state
    }
}

export default ciudadesReducer