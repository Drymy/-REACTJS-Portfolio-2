import gsap from "gsap/all"
import { useEffect } from "react"
import { FallingMoog } from "./fallingmoog";
import 'aos/dist/aos.css';


export function Coding() {

    useEffect(() => {
        gsap.to("#coding", {
            scrollTrigger: {
                trigger: "#coding",
                start: "top center",
                onEnter: () => gsap.to('.panel', { backgroundColor: '#307b88' }),
                onLeaveBack: () => gsap.to('.panel', { backgroundColor: '#002144' }),
                markers: true,
            }
        }
        )
    })

    return (
        <div className="panel coding" id="coding">
            <div className="bloc">
                <FallingMoog />
                <h1 data-aos="fade-up">Coding for fun</h1>
                <p data-aos="fade-up">This website was made for practice using React and the amazing Greensock toolset.<br />My experience with coding is still fresh but i look forward to learning new things.</p>
                <p data-aos="fade-up">Here are some of the technologies i can use right now :</p>
                <div className="techs">
                    <p data-aos="fade-left"><i className="fab fa-html5"></i><br/>HTML5</p>
                    <p data-aos="fade-left" data-aos-delay="200"><i className="fab fa-css3-alt"></i><br/>CSS3</p>
                    <p data-aos="fade-left" data-aos-delay="400"><i className="fab fa-js-square"></i><br/>Javascript</p>
                    <p data-aos="fade-left" data-aos-delay="600"><i className="fab fa-react"></i><br/>ReactJS</p>
                </div>
                <div className="techs">
                    <p data-aos="fade-left" data-aos-delay="700"><i className="fab fa-github"></i><br/>GitHub</p>
                    <p data-aos="fade-left" data-aos-delay="900"><i className="fab fa-wordpress-simple"></i><br/>Wordpress</p>
                    <p data-aos="fade-left" data-aos-delay="1100"><i className="fab fa-discord"></i><br/>Discord</p>
                </div>
            </div>
        </div>
    )
}