import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);


export function SpaceMoog() {

    const rocketMoog = useRef(null);
    const dummySpaceBloc = useRef(null);

    useEffect(() => {
        let p = MotionPathPlugin.convertCoordinates(dummySpaceBloc.current, rocketMoog.current, {x:0, y:0});
        gsap.to("#spaceMoog", {
            x: p.x,
            y: p.y,
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
                end: "+=800",
                scrub: true,
              }
        });
    }, []);
    
    return (
        <div>
        <div ref={dummySpaceBloc} className="dummySpaceBloc" id="dummySpaceBloc"></div>
        <div ref={rocketMoog} id="spaceMoog"><img src='/img/moog1.svg' alt="spacemoog"/></div>
        </div>
    );
}