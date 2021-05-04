import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselHome from '../components/Carousel'
import Hero from '../components/Hero';
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Home extends React.Component {

    componentDidMount = () => {
        if (this.props.tostada) {
            setTimeout(()=>{
                toast.success("Successful login")
            },1500)
        }  
    }
    componentWillUnmount = () => {
        this.props.desmontarTostada()
    }
    render(){
        return(
            <>
                <Header />
                <Hero />
                <CarouselHome />
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        tostada: state.users.exito
    }
}

const mapDispatchToProps = {
    cargarPaises: usersActions.fetchPaises,
    desmontarTostada: usersActions.desmontarTostada
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)