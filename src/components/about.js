import React, { useEffect } from "react";
import Aos from 'aos';
import { SpaceMoog } from "./spacemoog";
import 'aos/dist/aos.css';


export function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="panel about" id="about">
                        <div className="logo">
            <img src='/img/logo.svg' alt="logo"/>
            </div>
            <SpaceMoog />
            <div className="bloc">
                <h1 data-aos="fade-up">The sky's the limit!</h1>
                <p data-aos="fade-up">Young Digital-Native passioned with design and code, <br />I am always looking for opportunities to learn and discover while helping people.</p>
                <p data-aos="fade-up">My skillset is always growing, find out more below!</p>
            </div>
        </div>
    );
}

