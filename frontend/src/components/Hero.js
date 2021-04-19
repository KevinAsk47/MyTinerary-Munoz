import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';



const Hero = () => {

    useEffect(() => {
        gsap.from("#text", { duration: 3, x: 300, opacity: 0, scale: 0.5 });
        gsap.from("#frase", { duration: 3, x: 300, opacity: 0, scale: 0.5 });

        gsap.to(".logo", 1, {
            scale: 1,
            y: 20,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            delay: 0,
            stagger: {
                amount: 1,
                grid: "auto",
                from: "center"
            }
        });

        gsap.to("#callToAction", 1, {
            scale: 1,
            x: 10,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            delay: 3,
            stagger: {
                amount: 1,
                grid: "auto",
                from: "center"
            }
        });
    }, [])

    return (
        <header>
            <div className="cajaSuperior">
                <div className="logoyeslogan">
                    <div>
                        <img className="logo" src="./img/logoDos.png" alt="logo" />
                    </div>
                    <div style={{ marginTop: "2em" }}>
                        <h2 id="frase">Find your perfect trip, <br /> designed by insiders who knows and love their cities!</h2>
                        <h4 id="text">Click to start the adventure!</h4>
                    </div>
                </div>
                <NavLink to="/Cities"><button type="button" id="callToAction" className="btn callToAction btn-outline-success" onClick={window.scroll(0, 0)}>Start</button></NavLink>
            </div>
            <div>
                <div className="videoEntrada">
                    <video src="./img/AvionApareciendo.mp4" type="video/mp4" autoPlay muted></video>
                </div>
            </div>
        </header>
    )
}

export default Hero