const initialState = {
    paises: []
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
        default:
            return state
    }
}

export default ciudadesReducer