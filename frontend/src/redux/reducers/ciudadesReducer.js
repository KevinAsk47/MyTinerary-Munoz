const initialState = {
    ciudades: [],
    ciudadesCopia: [],
    loading: true,
    error: false,
}

const ciudadesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CARGAR_CIUDADES':
            return {
                ciudades: action.payload,
                ciudadesCopia: action.payload,
                loading: false
            }
            break
        case 'ERROR':
            return {
                error: action.payload
            }
            break
        case 'FILTRAR_CIUDAD':
            return {
                ...state,
                ciudades: state.ciudadesCopia.filter(ciudad => ciudad.titulo.toLocaleLowerCase().trim().indexOf(action.payload.toLocaleLowerCase().trim()) === 0)
            }
            break
        case 'BUSCAR_CIUDAD':
            return {
                ...state,
                ciudades: state.ciudades.find(ciudad => ciudad._id === action.payload)
            }
            break
        default:
            return state
    }
}

export default ciudadesReducer