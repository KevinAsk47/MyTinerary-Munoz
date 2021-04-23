const initialState = {
    ciudades: [],
    ciudadesCopia: [],
    loading: true,
    error: false,
    itinerarios: []
}

const ciudadesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CARGAR_CIUDADES':
            return {
                ...state,
                ciudades: action.payload,
                ciudadesCopia: action.payload,
                loading: false,
            }
            break
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
            break
        case 'FILTRAR_CIUDAD':
            return {
                ...state,
                ciudades: state.ciudadesCopia.filter(ciudad => ciudad.titulo.toLocaleLowerCase().trim().indexOf(action.payload.toLocaleLowerCase().trim()) === 0)
            }
            break
        case 'CARGAR_ITINERARIOS':
            return {
                ...state,
                itinerarios: action.payload
            }
            break
        default:
            return state
    }
}

export default ciudadesReducer