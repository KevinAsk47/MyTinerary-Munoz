const initialState = {
    paises: [],
    users: null
}

const ciudadesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CARGAR_PAISES':
            return {
                ...state,
                paises: action.payload,
            }
            break
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
            break
        case 'CARGAR_USUARIO':
            localStorage.setItem('usuarioLogueado', JSON.stringify({nombre: action.payload.nombre,
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
        default:
            return state
    }
}

export default ciudadesReducer