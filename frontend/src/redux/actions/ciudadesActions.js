const articulosActions = {
    fetchCiudades: () => {
        return async (dispatch, getState) => {
            try {
                let respuesta = await fetch("http://localhost:4000/api/ciudades")
                let data = await respuesta.json()
                if (!data.success) {
                    console.log(data.repuesta)               
                } else{
                    dispatch({type: 'CARGAR_CIUDADES', payload: data.respuesta})
                }
            } catch (error) {
                dispatch({type: 'ERROR', payload: true})
            }
        }
    },

    search: (id) => {
        console.log(id)
        return (dispatch, getState) => {
            dispatch({type: 'FILTRAR_CIUDAD', payload: id})
        }
    },

    ciudadIndividual: (id) => {
        return (dispatch, getState) => {
            dispatch({type: 'BUSCAR_CIUDAD', payload: id})
        }
    }
}

export default articulosActions