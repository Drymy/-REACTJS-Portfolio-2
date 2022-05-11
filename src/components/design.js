import gsap from "gsap/all"
import { useEffect } from "react";
import 'aos/dist/aos.css';


export function Design() {
    
    useEffect(() => {
        gsap.to("#design", {
            scrollTrigger: {
                trigger: "#design",
                start: "top center",
                onEnter: () => gsap.to('.panel', { backgroundColor: '#7acf7a' }),
                onLeave: () => gsap.to('.panel', { backgroundColor: '#307b88' }),
                onLeaveBack: () => gsap.to('.panel', { backgroundColor: '#307b88' }),
                onEnterBack: () => gsap.to('.panel', { backgroundColor: '#7acf7a' }),
                markers: true,
            }
        }
        )
    })

    return (
        <div className="panel design" id="design">
            <div className="bloc">
                <h1 data-aos="fade-up">A good eye for Design</h1>
                <p data-aos="fade-up">This section is incomplete <br />Please bear with me as i continue to improve and learn for this portfolio!.</p>
                <p data-aos="fade-up">(For the record though, i use most Adobe Softwares a lot!)</p>
            </div>
        </div>
    );
}

