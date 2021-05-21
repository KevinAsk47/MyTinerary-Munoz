import axios from 'axios'

const articulosActions = {
    actividades: (id) => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await axios.get('https://mytinerary-m.herokuapp.com/api/actividades/itinerario/'+id)
                if (respuesta.data.success) {
                    return respuesta.data.respuesta
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
}

export default articulosActions