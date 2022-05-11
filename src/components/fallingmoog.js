import { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);



export function FallingMoog() {
  
    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".coding",
              start: "top top",
              end: "+=1500",
            }
        });
        tl.to("#fallingMoog", {
          opacity: 1,
        });
        tl.to("#fallingMoog", {
          duration: 6,
          motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 0.5],
            autoRotate: -90,
            ease: "sine.out"
          }
        });
        tl.to("#bubble1", {
          opacity: 1,
          x: -60,
          duration: 0.5
        });
    
        return () => tl.scrollTrigger.kill()
      }, []);

    return (
        <div>
        <div id="fallingMoog"><img src='/img/moog2.svg' alt="fallingmoog"/>
        <div id="bubble1"><p>Oops, still learning!</p></div></div>
        <svg id="motionPath" viewBox="-20 0 557 190">
           <path id="path" fill="none" d="M280.904,-59.978 C281.642,-41.181 237.154,25.298 272.553,88.765 310.142,156.173 251.99,171.889 256.454,248.409 258.784,288.6 294.737,314.604 293.017,363.608 291.207,414.709 257.288,446.229 257.169,476.465"/>
        </svg>
        </div>
    );
}