import { useEffect, useState } from "react"
import { connect } from 'react-redux';
import activitiesActions from '../redux/actions/activitiesActions';

const Activities = (props) => {

    const [actividades, setActividades] = useState([])

    const fetchActividades = async () => {
        var respuesta = await props.fetchActividades(props.idItinerario)
        setActividades(respuesta)
    }

    useEffect(() => {
        fetchActividades()
    }, [])




    return (
        <>
            {
                actividades.map((actividad) => {
                    return (
                        <div key={actividad._id} className="activity" style={{ backgroundImage: `url(${actividad.imagen})` }}>
                            <p>{actividad.titulo}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

const mapDispatchToProps = {
    fetchActividades: activitiesActions.actividades,
}

export default connect(null, mapDispatchToProps)(Activities)