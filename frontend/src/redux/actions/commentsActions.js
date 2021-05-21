import axios from 'axios'

const articulosActions = {
    fetchComentarios: (info,id) => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await axios.post('https://mytinerary-m.herokuapp.com/api/comentario/'+id , info, {
                    headers: {
                        'Authorization': 'Bearer '+ info.token
                    }
                })
                if (respuesta.data.success) {
                    return respuesta.data.respuesta.comentarios
                }
            } catch (error) {
                console.log(error)
            }
        }
    },

    borrarComentario: (id , idItinerario) => {
        return async (dispatch, getState) => {
            var respuesta = await axios.delete('https://mytinerary-m.herokuapp.com/api/comentario/' + idItinerario, {
                data: { idComentario: id } 
            })
            if (respuesta.data.success) {
                return respuesta.data.respuesta.comentarios
            }
        }
    },

    actualizarComentario: (info , idItinerario , id) => {
        return async (dispatch, getState) => {
            var respuesta = await axios.put('https://mytinerary-m.herokuapp.com/api/comentario/' + idItinerario,{info: info, idComentario: id})
            if (respuesta.data.success) {
                return respuesta.data.respuesta.comentarios
            }
        }
    }
}

export default articulosActions