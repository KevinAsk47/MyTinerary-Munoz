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
    }
}

export default articulosActions