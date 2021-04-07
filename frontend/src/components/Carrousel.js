import React from 'react';
import Slide from '../components/Slide'

const Carrousel = () => {

    var ciudades = [
        {id: 1, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjA3ivzz6OyLBH1xlwm99ntFkq7N__fAcL4w&usqp=CAU"},
        {id: 2, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRce40i8eGDuqqwpB1uQ4NFmMgWjMc19_f-Ew&usqp=CAU"},
        {id: 3, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpZ7yd-sVBJFYduLrvkljJJ3UWvlgMwFC9w&usqp=CAU"},
        {id: 4, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyit0BMCW3WbbDYwfrgR8DlYmBYO-kvukZA&usqp=CAU"},
        {id: 5, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbneTtp3yJiV702KawNAiZcxU4O9wybaCiCQ&usqp=CAU"},
        {id: 6, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToayUbCPx_LVzBAlHf5ezAuQ4ghtLilwOHUQ&usqp=CAU"},
        {id: 7, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsuyWVDVbZC0nQkIcNmA_ZTK5XmkJLOyGNA&usqp=CAU"},
        {id: 8, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhDoVsoGFbVs3t1ZjPHKcBq3bj8Z1WpDQxg&usqp=CAU"},
        {id: 9, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvS6t2Hh23ZPrZskuVrIJIrzJ9v_oqjqeetg&usqp=CAU"},
        {id: 10, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTp89oHljQEsuvuFkoL8ck0eqi851jY42CKA&usqp=CAU"},
        {id: 11, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6uQy-DXc1LohB4JjnvjQ_vqvu5eMSi-O8g&usqp=CAU"},
        {id: 12, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ocretd8EDyVmwQ5gBLYYOpZ5VLaOBdz2cw&usqp=CAU"},

    ]

    return(
        <div className="Carrousel">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">

                <div className="contenedorDeFoto">

                    {
                        ciudades.map((ciudad)=>{
                            return <Slide ciudad={ciudad} />
                        })
                    }  

                </div>        

                </div>
                <div className="carousel-item">

{/*                 <div className="contenedorDeFoto">

                    {
                        ciudades.map((ciudad)=>{
                            return <Slide ciudad={ciudad} />
                        })
                    }  

                </div>     */}
                
                </div>
                <div className="carousel-item">
{/* 
                <div className="contenedorDeFoto">

                    {
                        ciudades.map((ciudad)=>{
                            return <Slide ciudad={ciudad} />
                        })
                    }  

                </div>    */}
                
                </div>
            </div>

    
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> 
        </div>
        </div>

    )
}

export default Carrousel