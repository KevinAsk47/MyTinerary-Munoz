import axios from 'axios'

const articulosActions = {
    fetchComentarios: (info,id) => {
        return async (dispatch, getState) => {
            try {
                var respuesta = await axios.post('http://localhost:4000/api/comentario/'+id , info, {
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
            var respuesta = await axios.delete('http://localhost:4000/api/comentario/' + idItinerario, {
                data: { idComentario: id } 
            })
            if (respuesta.data.success) {
                console.log(respuesta.data)
               /*  return respuesta.data.respuesta.comentarios */
            }
        }
    }
}

export default articulosActions