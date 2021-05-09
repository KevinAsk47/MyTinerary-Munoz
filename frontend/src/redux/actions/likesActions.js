import axios from 'axios'

const articulosActions = {
    likearItinerario: ( id, info ) => {
        return async (dispatch, getState) => {
            var respuesta = await axios.post('http://localhost:4000/api/like/' + id, info ,{
                headers: {
                    'Authorization': 'Bearer '+ info.token
                }
            })
            if (respuesta.data.success) {
                return respuesta.data.respuesta
            } else {
                console.log(respuesta.data.respuesta)
            }
        }
    }
}

export default articulosActions