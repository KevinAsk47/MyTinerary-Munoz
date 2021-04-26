const articulosActions = {
    fetchCiudades: () => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await fetch("http://localhost:4000/api/ciudades")
                var data = await respuesta.json()
                if (!data.success) {
                    console.log(data.repuesta)
                } else {
                    dispatch({ type: 'CARGAR_CIUDADES', payload: data.respuesta })
                }
            } catch (error) {
                dispatch({ type: 'ERROR', payload: true })
            }
        }
    },

    fetchItinerarios: (id) => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await fetch("http://localhost:4000/api/itinerarios/ciudad/" + id)
                var data = await respuesta.json()
                if (!data.success) {
                    dispatch({ type: 'ERROR', payload: true })
                } else {
                    dispatch({ type: 'CARGAR_ITINERARIOS', payload: data.respuesta })
                }
            } catch (error) {
                dispatch({ type: 'ERROR', payload: true })
            }
        }
    },

    VaciarItinerario: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'VACIAR_ITINERARIOS' })
        }
    },

    search: (value) => {
        return (dispatch, getState) => {
            dispatch({ type: 'FILTRAR_CIUDAD', payload: value })
        }
    }
}

export default articulosActions